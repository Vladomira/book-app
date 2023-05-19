import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AddBookProps, PossibleStatus } from "../../types/book";
import { UserState } from "../../types/auth";

axios.defaults.baseURL = "http://localhost:8080/api/";

const addBook = createAsyncThunk(
   "book/add",
   async (credentials: AddBookProps, thunkAPI) => {
      const state = thunkAPI.getState() as UserState;
      const { book, bookId } = credentials;

      const persistedToken = state.auth.token;
      if (!persistedToken) {
         return thunkAPI.rejectWithValue({ message: "Please authorize" });
      }
      try {
         const { data } = await axios.post(`user-book/${bookId}`, { book });
         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const getBooks = createAsyncThunk("book/get", async (_, thunkAPI) => {
   const state = thunkAPI.getState() as UserState;

   const persistedToken = state.auth.token;
   if (!persistedToken) {
      return thunkAPI.rejectWithValue({ message: "Please authorize" });
   }
   try {
      const { data } = await axios.get("user-book");
      return data;
   } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
   }
});

const deleteBook = createAsyncThunk(
   "book/delete",
   async (id: number, thunkAPI) => {
      const state = thunkAPI.getState() as UserState;
      const persistedToken = state.auth.token;
      if (!persistedToken) {
         return thunkAPI.rejectWithValue({ message: "Please authorize" });
      }
      try {
         const { data } = await axios.delete(`user-book/${id}`);

         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

type ChangeStatusProp = { credentials: PossibleStatus; bookId: number };

export const changeBookStatus = createAsyncThunk(
   "book/change-status",
   async (
      { credentials, bookId }: ChangeStatusProp,

      thunkAPI
   ) => {
      const state = thunkAPI.getState() as UserState;
      const persistedToken = state.auth.token;
      if (!persistedToken) {
         return thunkAPI.rejectWithValue({ message: "Please authorize" });
      }
      try {
         const { data } = await axios.patch(
            `user-book/${bookId}/status`,
            credentials
         );

         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const booksOperations = {
   addBook,
   getBooks,
   deleteBook,
   changeBookStatus,
};
export default booksOperations;
