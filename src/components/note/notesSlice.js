import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  notes: [],
  status: "idle",
  error: null,
};

export const fetchNotes = createAsyncThunk("/notes/fetchNotes", async () => {
  const response = await axios.get("/notes");
  return response.data;
});

export const addNote = createAsyncThunk("notes/addNote", async (note) => {
  const response = await axios.post("/notes", note);
  return response.data;
});

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (noteId) => {
    const response = await axios.delete(`/notes/${noteId}`);
    return response.data;
  }
);

export const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNewNote(state, action) {
      state.notes.push(action.payload);
    },
    removeNote(state, action) {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchNotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchNotes.fulfilled]: (state, action) => {
      state.status = "succeeded";

      state.notes = state.notes.concat(action.payload);
    },
    [fetchNotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [addNote.fulfilled]: (state, action) => {
      state.notes.push(action.payload);
    },

    [deleteNote.fulfilled]: (state, action) => {
      // return state.notes.filter((note) => note._id !== action.payload._id);
    },
  },
});

export const { addNewNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;

export const selectAllNotes = (state) => state.notes.notes;
