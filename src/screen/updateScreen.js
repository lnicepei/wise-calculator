import { calculator } from "../calculator/calculator";
import "../styles/screen.scss";

export function updateScreen(value) {
  const screen = document.querySelector(".screen");
  screen.textContent =
    value || (calculator.value ?? calculator.previousValue ?? 0);
}

updateScreen();
