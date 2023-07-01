import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FormData, AuthResponse } from "../../types/auth";
import $api from "../../api/interceptor";
const url = process.env.REACT_APP_DB_URL;

const register = createAsyncThunk(
   "auth/signup",
   async (credentials: FormData, { rejectWithValue }) => {
      try {
         const { data } = await $api.post<AuthResponse>(
            "user/signup",
            credentials
         );

         return data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
const logIn = createAsyncThunk(
   "auth/login",
   async (
      credentials: { email: string; password: string },
      { rejectWithValue }
   ) => {
      try {
         const { data } = await $api.post<AuthResponse>(
            "/user/login",
            credentials
         );

         return data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

const logout = createAsyncThunk(
   "auth/logout",
   async (credentials: { id: string }, { rejectWithValue }) => {
      try {
         const { data } = await $api.post("/user/logout", credentials);

         return data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

const checkAuth = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
   try {
      const { data } = await axios.get<AuthResponse>(`${url}user/refresh`, {
         withCredentials: true,
      });

      return data;
   } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
   }
});

const authOperations = {
   register,
   logIn,
   logout,

   checkAuth,
};
export default authOperations;
// const getCurrentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
// const state = thunkAPI.getState() as UserState;

// const persistedToken = state.auth.token;
// if (!persistedToken) {
//    return thunkAPI.rejectWithValue({ message: "Please authorize" });
// } else {
//       try {
//          // token.set(persistedToken);
//          console.log("persistedToken", persistedToken);

//          token.set(persistedToken);
//          const data = await axios.get(`${url}user/current`);
//          console.log("data", data);

//          return data;
//       } catch (error) {
//          return thunkAPI.rejectWithValue(error);
//       }
//    }
// });
