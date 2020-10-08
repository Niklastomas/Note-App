import React from "react";
import "./Note.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { removeNote, deleteNote } from "./notesSlice";

function Note({ title, content, id }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    // dispatch(
    //   removeNote({
    //     id: id,
    //   })
    // );
    dispatch(deleteNote(id));
  };
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <DeleteIcon onClick={handleClick} fontSize="large" />
    </div>
  );
}

export default Note;
