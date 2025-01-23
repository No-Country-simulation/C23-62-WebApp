import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Starfund } from "./assets/Starfund";
import { BrowserRouter } from "react-router-dom";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Starfund />
    </BrowserRouter>
  </StrictMode>
);
