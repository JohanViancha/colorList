import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ColorList from "./components/ColorList";

const App = () => {
  return <>
  <ColorList colorsList={[]} />;
  <ColorList colorsList={["#554", "#940", "#4449"]} />;
  </> 
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
