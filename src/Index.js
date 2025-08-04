import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // jika kamu pakai Tailwind atau custom style

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
