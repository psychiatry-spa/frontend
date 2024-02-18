import { Navbar } from "./components/nav/navbar";
import { Sidebar } from "./components/sidebar/sidebar";

function App() {
  return (
    <>
      <div className="bg-gray-50">
        <Navbar />
        <Sidebar />
      </div>
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
