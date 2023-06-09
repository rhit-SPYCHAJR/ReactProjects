import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import List from "./List";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function r(){
  root.render(
  <StrictMode>
    <List />
  </StrictMode>
);
  }

setInterval(r, 1000);


