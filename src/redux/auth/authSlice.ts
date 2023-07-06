import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../types/auth";
import authOperations from "./authOperations";

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(authOperations.register.fulfilled, (state, { payload }) => {
            state.user = {
               email: payload.user.email,
               name: payload.user.name,
               id: payload.user.id,
            };
            state.token = payload.accessToken;
            state.isLoggedIn = true;
         })
         .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
            state.user = {
               email: payload.user.email,
               name: payload.user.name,
               id: payload.user.id,
            };
            state.isLoggedIn = true;
            state.token = payload.accessToken;
         })
         .addCase(authOperations.logout.fulfilled, (state, { payload }) => {
            state.user = {
               email: "",
               name: "",
               id: "",
            };
            state.isLoggedIn = false;
            state.token = "";
         })
         .addCase(authOperations.checkAuth.fulfilled, (state, { payload }) => {
            state.user = {
               email: payload.user.email,
               name: payload.user.name,
               id: payload.user.id,
            };
            state.isLoggedIn = true;
            state.token = payload.accessToken;
         });
   },
});

export default authSlice.reducer;
