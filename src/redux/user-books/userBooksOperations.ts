import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddBookProps, PossibleStatus } from "../../types/book";
import { UserState } from "../../types/auth";
import $api from "../../api/interceptor";

const addBook = createAsyncThunk(
   "books/add",
   async (credentials: AddBookProps, thunkAPI) => {
      const state = thunkAPI.getState() as UserState;
      const { book, bookId } = credentials;

      const persistedToken = state.auth.token;

      if (!persistedToken) {
         return thunkAPI.rejectWithValue({ message: "Please authorize" });
      }
      try {
         const { data } = await $api.post(`/books/${bookId}`, { book });
         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error.response.data.message);
      }
   }
);

const getBooks = createAsyncThunk("books/get", async (_, thunkAPI) => {
   const state = thunkAPI.getState() as UserState;

   const persistedToken = state.auth.token;

   if (!persistedToken) {
      return thunkAPI.rejectWithValue({ message: "Please authorize" });
   }
   try {
      const { data } = await $api.get("/books");
      return data;
   } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
   }
});

const deleteBook = createAsyncThunk(
   "books/delete",
   async (id: number, thunkAPI) => {
      const state = thunkAPI.getState() as UserState;
      const persistedToken = state.auth.token;
      if (!persistedToken) {
         return thunkAPI.rejectWithValue({ message: "Please authorize" });
      }
      try {
         const { data } = await $api.delete(`/books/${id}`);

         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error.response.data.message);
      }
   }
);

type ChangeStatusProp = { credentials: PossibleStatus; bookId: number };

export const changeBookStatus = createAsyncThunk(
   "books/change-status",
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
         const { data } = await $api.patch(
            `/books/${bookId}/status`,
            credentials
         );

         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error.response.data.message);
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
