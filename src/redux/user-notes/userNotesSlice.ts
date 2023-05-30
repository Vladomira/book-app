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
         )
         .addCase(
            notesOperations.getNotesByBookId.fulfilled,
            (_, { payload }) => payload
         )
         .addCase(
            notesOperations.updateNoteById.fulfilled,
            (state, { payload }) =>
               state.map((note) => (note.id === payload.id ? payload : note))
         )
         .addCase(
            notesOperations.deleteNoteById.fulfilled,
            (state, { payload }) => state.filter((el) => el.id !== payload)
         );
   },
});

export default userNotesSlice.reducer;
