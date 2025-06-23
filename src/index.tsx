import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "@mui/material/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles
      styles={{
        body: { margin: 0 },
        "#root": { minHeight: "100vh", backgroundColor: "#101827" },
      }}
    />
    <App />
  </React.StrictMode>
);
