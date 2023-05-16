import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { FormData } from "../../types/auth";

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
         toast.error("Something went wrong");
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
         toast.error("Incorrect data, please try again");

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
         toast.error("Something went wrong");
         return rejectWithValue(error);
      }
   }
);

// const fetchCurrentUser = createAsyncThunk(
//    "auth/refresh",
//    async (_, thunkAPI) => {
//       const state = thunkAPI.getState();

//       const persistedToken = state.auth.token; //localStorage
//       if (persistedToken === null) {
//          return thunkAPI.rejectWithValue();
//       } else {
//          //  token.set(persistedToken);
//          try {
//             const { data } = await axios.get("/users/current");
//             return data;
//          } catch (error) {}
//       }
//    }
// );

const authOperations = {
   register,
   logIn,
   logout,
};
export default authOperations;
