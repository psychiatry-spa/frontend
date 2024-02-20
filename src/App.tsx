import { Navbar } from "./components/nav/navbar";
import { Sidebar } from "./components/sidebar/sidebar";
import { Content } from "./components/main/content";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Content />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<LoginForm />} />
    //     <Route path="/register" element={<RegisterForm />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
