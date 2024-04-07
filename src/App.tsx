import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AboutPage,
  BookingPage,
  CalendarPage,
  DashboardPage,
  MainPage,
  ManagerPage,
  PostPage,
  SessionPage,
  SettingsPage,
  SignInPage,
  SignOutPage,
  SignUpPage,
} from "./pages";
import Page404 from "./pages/Page404";

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
        {/* <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} /> */}
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

        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
