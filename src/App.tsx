import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/client/MainPage";
import SignInPage from "./pages/client/SingInPage";
import SignUpPage from "./pages/client/SignUpPage";
import HomePage from "./pages/admin/HomePage";
import CrudPage from "./pages/admin/CrudPage";
import CalendarPage from "./pages/admin/CalendarPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/client/signin" element={<SignInPage />} />
        <Route path="/client/signup" element={<SignUpPage />} />
        <Route path="/client/info" />
        <Route path="/client/consultations" />
        <Route path="/client/posts" />
        <Route path="/client/support" />
        <Route path="/admin/home" element={<HomePage />} />
        <Route path="/admin/calendar" element={<CalendarPage />} />
        <Route path="/admin/crud" element={<CrudPage />} />
      </Routes>
    </Router>
  );
}

export default App;
