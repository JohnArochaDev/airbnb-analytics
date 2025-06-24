import 'leaflet/dist/leaflet.css';

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
        "#root": { minHeight: "100vh", backgroundColor: "rgb(17 24 39)" },
      }}
    />
    <App />
  </React.StrictMode>
);
