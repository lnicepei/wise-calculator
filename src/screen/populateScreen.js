import { calculator } from "../calculator/calculator";

export function populateScreen(event) {
  const screen = document.querySelector(".screen");
  screen.textContent = calculator.value;
}
