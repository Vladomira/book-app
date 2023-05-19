import { createSlice } from "@reduxjs/toolkit";
import { NoteReducerState } from "../../types/note";
import notesOperations from "./userNotesOperations";

export const userNotesSlice = createSlice({
   name: "notes",
   initialState: NoteReducerState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            notesOperations.createNote.fulfilled,
            (state, { payload }) => {
               state.push(payload);
            }
         )
         .addCase(
            notesOperations.getNotes.fulfilled,
            (_, { payload }) => payload
         );
   },
});

export default userNotesSlice.reducer;
