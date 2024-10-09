import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MusicContextProvider } from "./context/MusicContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MusicContextProvider>
      <App />
    </MusicContextProvider>
  </StrictMode>
);
