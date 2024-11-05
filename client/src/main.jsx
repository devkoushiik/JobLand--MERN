import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/index.css";
import App from './App.jsx'
import customFetch from "./utils/customFetch.js";

customFetch("/test").then(({ data }) => console.log(data));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
