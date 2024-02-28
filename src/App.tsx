import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/client/MainPage";
import SignInPage from "./pages/client/SingInPage";
import SignUpPage from "./pages/client/SignUpPage";
import AdminHome from "./pages/admin/AdminHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/info" />
        <Route path="/consultations" />
        <Route path="/posts" />
        <Route path="/support" />
        <Route path="/adminhome" element={<AdminHome />} />
      </Routes>
    </Router>
  );
}

export default App;
