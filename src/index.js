import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Lists from "./Lists";
import Time from "./CurrentTime";
import Todo from "./ToDo";
import TTT from "./TicTacToe";
import Car from "./Car";
import Hello from "./Hello"
import Greet from "./Greeter"
import States from "./States"
import Listen from "./Listener"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function renderWithUpdates(){
  root.render(
  <StrictMode>
    <TTT />
  </StrictMode>
);
}

function staticRender(){
  root.render(
  <StrictMode>
    <TTT />
  </StrictMode>
);
}

//setInterval(renderWithUpdates, 1000);
staticRender();


