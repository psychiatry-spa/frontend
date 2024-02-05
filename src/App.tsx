import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/posts" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
