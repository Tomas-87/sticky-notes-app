import ColorSelector from "./components/ColorSelector";
import { ColorProvider } from "./context/ColorContext";
import Note from "./components/Note";
import NoteBoard from "./components/NoteBoard";
// import NoteBoard from "./components/NoteBoard";

function App() {
  return (
    <ColorProvider>
      <div className="app-container">
        <h1>🗒️ Sticky Notes</h1>
      </div>
      <ColorSelector />
      <NoteBoard />
    </ColorProvider>
  );
}

export default App;
