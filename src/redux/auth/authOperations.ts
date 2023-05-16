import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserState, FormData } from "../../types/auth";

axios.defaults.baseURL = "http://localhost:8080/api/";

const token = {
   set(token: string) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   },
   unset() {
      axios.defaults.headers.common.Authorization = "";
   },
};

const register = createAsyncThunk(
   "auth/register",
   async (credentials: FormData, { rejectWithValue }) => {
      try {
         const { data } = await axios.post("user/signup", credentials);
         token.set(data.user.token);
         return data;
      } catch (error: any) {
         return rejectWithValue(error);
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
         const { data } = await axios.post("/user/login", credentials);
         token.set(data.user.token);

         return data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

const logout = createAsyncThunk(
   "auth/logout",
   async (credentials: { id: string }, { rejectWithValue }) => {
      try {
         const { data } = await axios.post("/user/logout", credentials);
         token.unset();
         return data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

const getCurrentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
   const state = thunkAPI.getState() as UserState;

   const persistedToken = state.auth.token;
   if (!persistedToken) {
      return thunkAPI.rejectWithValue({ message: "Please authorize" });
   } else {
      try {
         token.set(persistedToken);
         const { data } = await axios.get("/user/current");

         return data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
});

const authOperations = {
   register,
   logIn,
   logout,
   getCurrentUser,
};
export default authOperations;
