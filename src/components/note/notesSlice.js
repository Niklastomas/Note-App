import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: [{ title: "Title", content: "content" }],
  reducers: {
    addNewNote(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addNewNote } = notesSlice.actions;

export default notesSlice.reducer;
