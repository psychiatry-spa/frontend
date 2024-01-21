import TextEditor from "./components/Editor";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/editor" element={<TextEditor />} />
    </Routes>
  );
}

export default App;
