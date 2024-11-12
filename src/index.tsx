import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import "./style/index.css";
import { ThemeProvider } from "styled-components";
import { themeColor } from "./style/ThemeColor";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //   <ThemeProvider theme={themeColor}>
  //     <Provider>
  <div>hi</div>
  //     </Provider>
  //   </ThemeProvider>
);
