import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { UserState } from "../../types/auth";
import { NoteProps } from "../../types/note";

// axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.baseURL = process.env.REACT_APP_DB_URL;

const createNote = createAsyncThunk(
   "notes/create",
   async (credentials: NoteProps, thunkAPI) => {
      const state = thunkAPI.getState() as UserState;

      const persistedToken = state.auth.token;
      if (!persistedToken) {
         return thunkAPI.rejectWithValue({ message: "Please authorize" });
      }
      const { chapter, text, id } = credentials;
      try {
         const { data } = await axios.post(`/notes/${id}`, { chapter, text });

         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const getNotes = createAsyncThunk("notes/get", async (id: string, thunkAPI) => {
   const state = thunkAPI.getState() as UserState;

   const persistedToken = state.auth.token;
   if (!persistedToken) {
      return thunkAPI.rejectWithValue({ message: "Please authorize" });
   }

   try {
      const { data } = await axios.get(`/notes/${id}`);

      return data;
   } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
   }
});

const getNotesByBookId = createAsyncThunk(
   "notes/getByBookId",
   async (bookId: number, thunkAPI) => {
      const state = thunkAPI.getState() as UserState;

      const persistedToken = state.auth.token;
      if (!persistedToken) {
         return thunkAPI.rejectWithValue({ message: "Please authorize" });
      }

      try {
         const { data } = await axios.get(`/notes/book-notes/${bookId}`);

         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const updateNoteById = createAsyncThunk(
   "notes/update",
   async (credentials: NoteProps, thunkAPI) => {
      const state = thunkAPI.getState() as UserState;

      const persistedToken = state.auth.token;
      if (!persistedToken) {
         return thunkAPI.rejectWithValue({ message: "Please authorize" });
      }
      try {
         const { id, text, chapter } = credentials;
         const { data } = await axios.patch(`/notes/${id}`, {
            text,
            chapter,
         });

         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);
const deleteNoteById = createAsyncThunk(
   "notes/delete",
   async (noteId: number | null, thunkAPI) => {
      const state = thunkAPI.getState() as UserState;

      const persistedToken = state.auth.token;
      if (!persistedToken) {
         return thunkAPI.rejectWithValue({ message: "Please authorize" });
      }
      try {
         const { data } = await axios.delete(`/notes/${noteId}`);

         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const notesOperations = {
   createNote,
   getNotes,
   getNotesByBookId,
   deleteNoteById,
   updateNoteById,
};
export default notesOperations;
