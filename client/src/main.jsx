import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";

// Setup Axios
const baseURL = import.meta.env.VITE_API_BASE_URL;

axios.defaults.baseURL = 
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000/api/v1'
    : baseURL;
    
axios.defaults.withCredentials = true;


// Main Application Render
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure <div id='root'></div> exists in index.html.");
}

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <ChatProvider>
        {/* Main Container */}
        <div className="h-screen w-full dark:bg-zinc-900 bg-white relative flex items-center justify-center z-0">
          {/* Background Grid Effect */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="h-full w-full bg-gradient-to-br from-gray-200 via-white to-gray-200 dark:from-gray-900 dark:via-black dark:to-gray-900 opacity-40"></div>
          </div>
          {/* Toast notifications */}
          <Toaster position="top-right" />
          {/* Main App */}
          <App />
        </div>
      </ChatProvider>
    </AuthProvider>
  </StrictMode>,
  rootElement
);
