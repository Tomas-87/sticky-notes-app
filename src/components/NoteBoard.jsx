import useNotes from "../hooks/useNotes.js";
import { useColor } from "../context/ColorContext";
import { useState } from "react";
import Note from "./Note";

const NoteBoard = () => {
  const [text, setText] = useState("");
  const { color } = useColor();
  const { notes, addNote, deleteNotes } = useNotes();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(text, color);
    setText("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Crear nota</button>
        </form>
      </div>

      <div className="note-board">
        {notes.length === 0 ? (
          <p>Aún no hay notas.</p>
        ) : (
          notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              text={note.text}
              color={note.color}
              deleteNotes={deleteNotes}
            />
          ))
        )}
      </div>
    </>
  );
};

export default NoteBoard;
