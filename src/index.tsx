import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import "./style/index.css";
import { ThemeProvider } from "styled-components";
import { themeColor } from "./style/ThemeColor";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={themeColor}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:type/:idx" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
