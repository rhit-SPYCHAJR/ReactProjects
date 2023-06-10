import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Lists from "./Lists";
import Time from "./CurrentTime";
import Todo from "./ToDo";
//import TTT from "./TicTacToe";
import Comp from "./Components";
import Hello from "./Hello"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function renderWithUpdates(){
  root.render(
  <StrictMode>
    <Time />
  </StrictMode>
);
}

function staticRender(){
  root.render(
  <StrictMode>
    <Hello />
  </StrictMode>
);
}

//setInterval(renderWithUpdates, 1000);
staticRender();


