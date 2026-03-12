const Note = ({ id, text, color, deleteNotes }) => {
  return (
    <div className="note" style={{ background: color }}>
      <p>{text}</p>
      <button onClick={() => deleteNotes(id)}>Eliminar</button>
    </div>
  );
};

export default Note;
