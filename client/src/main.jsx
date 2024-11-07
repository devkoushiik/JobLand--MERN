import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/index.css";
import App from './App.jsx'
import customFetch from "./utils/customFetch.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer position="top-center" autoClose={1000} />
  </>
);
