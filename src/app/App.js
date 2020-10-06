import React from "react";
import Header from "../components/header/Header";
import "./App.css";
import CreateNoteForm from "../components/note/CreateNoteForm";
import NoteList from "../components/note/NoteList";

function App() {
  return (
    <div className="app">
      <Header />
      <CreateNoteForm />
      <NoteList />
    </div>
  );
}

export default App;
