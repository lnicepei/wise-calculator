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
    calculator.previousValue = this.isNumberDot()
      ? 0 + this.numberButton
      : +this.numberButton;
    updateScreen();
  }

  executeWithOneArg() {
    calculator.previousValue = +(this.previousValue + this.numberButton);
    updateScreen(calculator.value);
  }

  executeWithTwoArgs() {
    calculator.value = +(this.value + this.numberButton);
    updateScreen(calculator.value);
  }

  isNumberDot() {
    return this.numberButton === ".";
  }

  // undo() {
  //   if (this.previousValue === null && this.value === null) {
  //     calculator.value = this.value;
  //     calculator.previousValue = this.previousValue;
  //   } else if (this.value === null || this.value === 0) {
  //     calculator.value = null;
  //     calculator.previousValue =
  //       +this.previousValue.toString().slice(0, -1) || null;
  //   } else {
  //     calculator.value = +this.value.toString().slice(0, -1) || null;
  //     calculator.previousValue = this.previousValue;
  //   }
  // }

  undoWithOneArg() {
    // calculator.value = null;
    calculator.previousValue =
      +calculator.previousValue.toString().slice(0, -1) || null;
    updateScreen();
  }

  undoWithTwoArgs() {
    calculator.value = +this.value.toString().slice(0, -1) || null;
    calculator.previousValue = this.previousValue;
  }
}

const numbers = document.querySelectorAll(".number");

for (let number of numbers) {
  number.addEventListener("click", numberCommand);
}

function numberCommand(event) {
  calculator.execute(new NumberButtonCommand(event.target.textContent));
  console.log(calculator);
}
