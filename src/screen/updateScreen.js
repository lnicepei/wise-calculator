import { calculator } from "../calculator/calculator";
import "../styles/topBar.scss";

export function updateScreen(value) {
  const screen = document.querySelector(".screen");
  if (value === 0) value = "0";
  screen.textContent = value || (calculator.previousValue ?? 0);
}

updateScreen();
