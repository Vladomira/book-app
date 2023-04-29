import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { initialState } from "../../types/auth";
// import authOperations from "./authOperations";

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      // [authOperations.register.fulfilled](state, action) {
      //    state.user = {
      //       email: action.payload.user.email,
      //       name: action.payload.user.name,
      //    };
      //    state.token = { ...action.payload };
      //    state.isLoggedIn = true;
      // },
      logIn: (state) => state,
      logOut: () => initialState,
   },
});

// export const { signIn, logIn, logOut } = authSlice.actions;

export const selectAuth = (state: RootState) => state;

export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import authOperations from "./auth-operations";

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [authOperations.register.fulfilled](state, action) {
//       state.user = {
//         email: action.payload.user.email,
//         name: action.payload.user.name,
//       };
//       state.token = { ...action.payload };
//       state.isLoggedIn = true;
//     },
//     [authOperations.logIn.fulfilled](state, action) {
//       state.user = action.payload.user; //immer
//       // state.user = { ...action.payload };
//       state.token = action.payload.token;
//       // state.token = { ...action.payload };

//       state.isLoggedIn = true;
//     },
//     [authOperations.logOut.fulfilled](state, action) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [authOperations.logOut.rejected](state, action) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [authOperations.fetchCurrentUser.pending](state) {
//       state.isFetchingCurrentUser = true;
//     },
//     [authOperations.fetchCurrentUser.fulfilled](state, action) {
//       state.user = { ...action.payload };
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = false;
//     },
//     [authOperations.fetchCurrentUser.rejected](state) {
//       state.user = { name: null, email: null };

//       state.isFetchingCurrentUser = false;
//       state.isLoggedIn = false;
//     },
//   },
// });
// export default authSlice.reducer;
