import { createSlice } from "@reduxjs/toolkit";
import booksOperations from "./userBooksOperations";
import { booksInitState } from "../../types/book";

export const userBooksSlice = createSlice({
   name: "books",
   initialState: booksInitState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(booksOperations.addBook.fulfilled, (state, { payload }) => {
            state.push(payload);
         })
         .addCase(
            booksOperations.getBooks.fulfilled,
            (_, { payload }) => payload
         )
         .addCase(booksOperations.deleteBook.fulfilled, (state, { payload }) =>
            state.filter((book) => book.id !== payload)
         )
         .addCase(
            booksOperations.changeBookStatus.fulfilled,
            (state, { payload }) => {
               return state.map((book) =>
                  book.id === payload.id ? payload : book
               );
            }
         );
   },
});

export default userBooksSlice.reducer;
