import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import "./NoteList.css";

function NoteList() {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="noteList">
      {notes?.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default NoteList;
