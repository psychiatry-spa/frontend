import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import AnonymousRoute from "./routes/AnonymusRoute";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>

      {/* Temp */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      <Route element={<PrivateRoute />}>
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Route>

      {/* TODO: */}
      <Route element={<AnonymousRoute />}>
        <Route path="/" element={/*<HomePage />*/ <></>} />
        <Route path="/blog" element={/*<BlogsPage />*/ <></>} />
        <Route path="/calendar" element={/*<CalendarPage />*/ <></>} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
