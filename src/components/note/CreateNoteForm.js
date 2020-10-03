import React, { useState } from "react";
import "./CreateNoteForm.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useDispatch } from "react-redux";
import { addNewNote } from "./notesSlice";

function CreateNoteForm() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleClick = () => {
    if (note.title && note.content) {
      dispatch(
        addNewNote({
          title: note.title,
          content: note.content,
        })
      );

      setNote({
        title: "",
        content: "",
      });
    }
  };

  return (
    <form className="createNoteForm">
      <input
        onChange={handleChange}
        placeholder="Enter a title"
        type="text"
        name="title"
        value={note.title}
      />
      <textarea
        onChange={handleChange}
        rows={3}
        placeholder="Write a note"
        name="content"
        value={note.content}
      ></textarea>
      <AddCircleOutlineIcon fontSize="large" onClick={handleClick} />
    </form>
  );
}

export default CreateNoteForm;