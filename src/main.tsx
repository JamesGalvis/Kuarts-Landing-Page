import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        wheelMultiplier: 1,
        infinite: false,
        smoothWheel: true,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>
);
