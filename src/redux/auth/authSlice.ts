import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
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
            state.token = payload.user.token;
            state.isLoggedIn = true;
         })
         .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
            state.isLoggedIn = true;

            state.user = {
               email: payload.user.email,
               name: payload.user.name,
               id: payload.user.id,
            };
            state.token = payload.user.token;
         })
         .addCase(authOperations.logout.fulfilled, (state, { payload }) => {
            state.user = {
               email: "",
               name: "",
               id: "",
            };
            state.token = "";
            state.isLoggedIn = false;
         })
         .addCase(
            authOperations.getCurrentUser.fulfilled,
            (state, { payload }) => {
               state.user = {
                  email: payload.user.email,
                  name: payload.user.name,
                  id: payload.user.id,
               };
               state.isLoggedIn = true;
            }
         );
   },
});

export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
