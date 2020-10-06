import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Note from "./Note";
import "./NoteList.css";
import { selectAllNotes, fetchNotes } from "./notesSlice";

function NoteList() {
  const notes = useSelector(selectAllNotes);
  const status = useSelector((state) => state.notes.status);
  const error = useSelector((state) => state.notes.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNotes());
    }
  }, [status, dispatch]);

  return (
    <div className="noteList">
      {status === "loading" && <div className="loader">Loading...</div>}
      {status === "failed" && <div>{error}</div>}
      {notes?.length > 0 &&
        notes.map((note, index) => (
          <Note
            key={index}
            id={note._id}
            title={note.title}
            content={note.content}
          />
        ))}
    </div>
  );
}

export default NoteList;
