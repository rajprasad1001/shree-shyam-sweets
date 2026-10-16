
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MenuPage from "./MenuPage.jsx";
import "./index.css";

const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {currentPath === "/menu" ? <MenuPage /> : <App />}
  </React.StrictMode>
);
