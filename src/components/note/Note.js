import React from "react";
import "./Note.css";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ title, content }) {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <DeleteIcon fontSize="large" />
    </div>
  );
}

export default Note;
