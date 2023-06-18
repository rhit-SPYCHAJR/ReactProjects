import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Lists from "./Lists";
import Time from "./CurrentTime";
import TTT from "./TicTacToe";
import Button from "./Button"
import Greet from "./Greeter"
import Listen from "./Listener"

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
    <Lists />
  </StrictMode>
);
}

//setInterval(renderWithUpdates, 1000);
staticRender();


