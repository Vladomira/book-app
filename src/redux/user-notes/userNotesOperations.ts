import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { UserState } from "../../types/auth";
import { NoteProps } from "../../types/note";

axios.defaults.baseURL = "http://localhost:8080/api";

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
      console.log("data", data);

      return data;
   } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
   }
});

const notesOperations = { createNote, getNotes };
export default notesOperations;
