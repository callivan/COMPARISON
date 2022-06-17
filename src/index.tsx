import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";

window.addEventListener("load", () => {
  const wrapper = document.querySelector("#react-root");

  if (!wrapper) return null;

  const root = ReactDOM.createRoot(wrapper);
  root.render(<App />);
});
