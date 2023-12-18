import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div id="root">
    <h1>Adopt Me!</h1>
    <Pet name="luna" animal="Dog" breed="Havenese" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
