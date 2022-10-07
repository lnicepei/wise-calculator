import { calculator } from "../calculator/calculator";
import "../styles/screen.scss";

export function updateScreen() {
  console.log(calculator.operations)
  const screen = document.querySelector(".screen");
  screen.textContent = `${calculator.value}`;
}

updateScreen();
