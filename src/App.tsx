import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/info" />
        <Route path="/consultations" />
        <Route path="/posts" />
        <Route path="/support" />
      </Routes>
    </Router>
  );
}

export default App;
