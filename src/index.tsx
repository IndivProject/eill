import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import SingleDetail from "./pages/Detail/SingleDetail";
import "./style/index.css";
import { ThemeProvider } from "styled-components";
import { themeColor } from "./style/ThemeColor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumDetail from "./pages/Detail/AlbumDetail/Album";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={themeColor}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/single/:idx" element={<SingleDetail />} />
        <Route path="/album/:idx" element={<AlbumDetail />} />
        <Route path="/album/:idx/:detail" element={<AlbumDetail />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
