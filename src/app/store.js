import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import notesReducer from "../components/note/notesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
  },
});
