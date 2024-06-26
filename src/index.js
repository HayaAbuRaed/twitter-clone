import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.js";
import "./index.css";
// import TwitterThemeProvider from "./style/TwitterThemeProvider.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <TwitterThemeProvider> */}
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    {/* </TwitterThemeProvider> */}
  </React.StrictMode>
);
