import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./auth/authSlice";

export const store = configureStore({
   reducer: {
      auth: authReducer,
      //    notes: notesReducer,
      //    userBooks:userBooksReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
