import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";
import LoadingLayout from "./layouts/LoadingLayout";
function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingLayout/>}>
        <Routes>
          {routes.map((route,index) =>
            <Route
              key={index}
              path={route.path}
              element={<route.element/>}
            />
          )}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;