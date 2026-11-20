import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
// shortcut: createRoot replaces the prerendered markup instead of hydrating it, so a
// language/year mismatch can never throw; switch to hydrateRoot if first-load JS cost matters.
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
