import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ManagerPage from "./pages/admin/ManagerPage";
import CalendarPage from "./pages/admin/CalendarPage";
import SignOutPage from "./pages/SignOutPage";
import AboutPage from "./pages/AboutPage";
import SessionPage from "./pages/client/SessionPage";
import SettingsPage from "./pages/admin/SettingsPage";
import BookingPage from "./pages/client/BookingPage";
import PostPage from "./pages/admin/PostPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Everyone */}
        <Route path="" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/logout" element={<SignOutPage />} />
        {/* User */}
        <Route path="/sessions" element={<SessionPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Admin */}
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/calendar" element={<CalendarPage />} />
        <Route path="/admin/manager" element={<ManagerPage />} />
        <Route path="/admin/posts/" element={<PostPage />} />
        <Route path="/admin/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
