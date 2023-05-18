import { configureStore } from "@reduxjs/toolkit";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Persistor } from "redux-persist";
import authReducer from "./auth/authSlice";
import userBooksReducer from "./user-books/userBooksSlice";

const authPersistConfig = {
   key: "auth",
   storage,
   whitelist: ["token"],
};
const rootReducer = {
   auth: persistReducer(authPersistConfig, authReducer),
   books: userBooksReducer,
};
const store = configureStore({
   reducer: rootReducer,

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
   devTools: process.env.NODE_ENV === "development",
});

const persistor: Persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
