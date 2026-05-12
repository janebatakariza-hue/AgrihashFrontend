import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Agri from "./pages/Registration";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Agri />
  </StrictMode>,
);
