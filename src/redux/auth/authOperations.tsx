import { createAsyncThunk } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

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
   async (credentials, rejectWithValue) => {
      try {
         const { data } = await axios.post("/users/signup", credentials);
         token.set(data.token);
         console.log("token", token);

         return data;
      } catch (error) {
         //   toast.error("Something went wrong");
         console.log("error", error);

         //  return rejectWithValue(error.response.data);
      }
   }
);

// const logIn = createAsyncThunk(
//    "auth/login",
//    async (credentials, rejectWithValue) => {
//       try {
//          const { data } = await axios.post("/users/login", credentials);
//          //  token.set(data.token);

//          return data;
//       } catch (error) {
//          //   toast.error("Incorrect data, please try again");

//          return rejectWithValue(error.response.data);
//       }
//    }
// );

// const logOut = createAsyncThunk("auth/logout", async (rejectWithValue) => {
//    try {
//       await axios.post("/users/logout");
//       //   token.unset();
//    } catch (error) {
//       // toast.error("Something went wrong");
//       return rejectWithValue(error.response.data);
//    }
// });

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
   //    logOut,
   //    logIn,
   //    fetchCurrentUser,
};
export default authOperations;
