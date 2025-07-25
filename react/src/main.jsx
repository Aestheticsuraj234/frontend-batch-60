import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import { GlobalContextProvider } from "./context/GlobalContextProvider.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const root = createRoot(document.getElementById("root"));

// const H1 = React.createElement("h1" , {className:"title"} , "Hello world");

root.render(
  <GlobalContextProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </GlobalContextProvider>
);
