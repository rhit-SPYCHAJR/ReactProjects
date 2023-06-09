import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Lists from "./Lists";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function r(){
  root.render(
  <StrictMode>
    <Lists />
  </StrictMode>
);
  }

setInterval(r, 1000);


