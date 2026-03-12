import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const useNotes = () => {
  const [notes, setNotes] = useState(() => {
    const saveNotes = localStorage.getItem("notes");
    return saveNotes ? JSON.parse(saveNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, color) => {
    if (!text.trim()) return;
    if (notes.length >= 10) return;

    const newNote = {
      id: uuidv4(),
      text,
      color,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const deleteNotes = (id) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  return {
    notes,
    addNote,
    deleteNotes,
  };
};

export default useNotes;
