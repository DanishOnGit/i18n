import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { LangContextProvider } from "./contexts/LanguageContext/LanguageContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </StrictMode>
);
