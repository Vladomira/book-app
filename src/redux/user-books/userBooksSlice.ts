import { createSlice } from "@reduxjs/toolkit";
import booksOperations from "./userBooksOperations";
import { booksInitState } from "../../types/books-operations";

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
         );
   },
});

export default userBooksSlice.reducer;
