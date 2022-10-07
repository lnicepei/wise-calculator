import { updateScreen } from "../screen/updateScreen";
import { Calculator, calculator } from "../calculator/calculator";
import "../styles/numbers.scss";

class NumberButtonCommand extends Calculator {
  constructor(numberButton) {
    super();
    this.numberButton = numberButton;
  }

  execute(value) {
    return +(value + this.numberButton); // in order to remove initial 0
  }

  undo(value) {
    return value.toString().substring(0, value.toString().length - 1);
  }
}

const numbers = document.querySelectorAll(".number");

for (let number of numbers) {
  number.addEventListener("click", numberCommand);
}

function numberCommand(event) {
  calculator.execute(new NumberButtonCommand(event.target.textContent));
  updateScreen();
}
