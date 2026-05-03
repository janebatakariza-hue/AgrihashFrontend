import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Agri from "./LandingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Agri />
  </StrictMode>,
);
