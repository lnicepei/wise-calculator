import { populateScreen } from "../screen/populateScreen";
import { calculator } from "../calculator/calculator";

const numbers = document.querySelectorAll(".number");
for (let number of numbers) {
  number.addEventListener("click", setCalculatorValue);
  number.addEventListener("click", populateScreen);
}

function setCalculatorValue(event) {
  calculator.value = calculator.value + event.target.textContent;
}
