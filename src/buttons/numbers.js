import { updateScreen } from "../screen/updateScreen";
import { Calculator, calculator } from "../calculator/calculator";
import "../styles/numbers.scss";

export class NumberButtonCommand extends Calculator {
  constructor(numberButton) {
    super();
    this.numberButton = numberButton;
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {
    calculator.previousValue = +this.numberButton;
    updateScreen();
  }

  executeWithOneArg() {
    calculator.previousValue = +(this.previousValue + this.numberButton);
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = +(this.value + this.numberButton);
    updateScreen();
  }

  undo() {
    if (this.previousValue === null && this.value === null) {
      calculator.value = this.value;
      calculator.previousValue = this.previousValue;
    } else if (this.value === null || this.value === 0) {
      calculator.value = null;
      calculator.previousValue =
        +this.previousValue.toString().slice(0, -1) || null;
    } else {
      calculator.value = +this.value.toString().slice(0, -1) || null;
      calculator.previousValue = this.previousValue;
    }
  }

  // TODO: Rewrite undo methods
}

const numbers = document.querySelectorAll(".number");

for (let number of numbers) {
  number.addEventListener("click", numberCommand);
}

function numberCommand(event) {
  calculator.execute(new NumberButtonCommand(event.target.textContent));
  console.log(calculator);
  updateScreen();
}
