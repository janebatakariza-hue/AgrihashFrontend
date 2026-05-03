import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Agri from "./pages/LandingPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Agri />
  </StrictMode>,
);
