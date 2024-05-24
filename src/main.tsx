import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from 'react-query';
import App from "./App.tsx";
import "./index.css";
import { DarkModeProvider } from "./context/DarkModeContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <DarkModeProvider>              
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </DarkModeProvider>
    </React.StrictMode>
);
