import React, { useState } from "react";
import "./CreateNoteForm.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addNote } from "./notesSlice";

function CreateNoteForm() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [expand, setExpand] = useState(false);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const canSave =
    [note.title, note.content].every(Boolean) && addRequestStatus === "idle";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const handleClick = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        const resultAction = await dispatch(addNote(note));
        unwrapResult(resultAction);
        setNote({
          title: "",
          content: "",
        });
      } catch (error) {
        console.error("Failed to save the note: ", error);
      } finally {
        setAddRequestStatus("idle");
        setExpand(false);
      }
    }
  };

  return (
    <form className="createNoteForm">
      {expand && (
        <input
          onChange={handleChange}
          placeholder="Enter a title"
          type="text"
          name="title"
          value={note.title}
        />
      )}

      <textarea
        onChange={handleChange}
        onClick={() => setExpand(true)}
        rows={expand ? 3 : 1}
        placeholder="Write a note"
        name="content"
        value={note.content}
      ></textarea>
      {expand && (
        <AddCircleOutlineIcon
          className={canSave ? "icon-active" : "icon-disabled"}
          // style={{ color: "#056674" }}
          fontSize="large"
          onClick={handleClick}
        />
      )}
    </form>
  );
}

export default CreateNoteForm;
