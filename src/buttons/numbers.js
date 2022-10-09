import { updateScreen } from "../screen/updateScreen";
import { Calculator, calculator } from "../calculator/calculator";
import "../styles/numbers.scss";

export class NumberButtonCommand extends Calculator {
  constructor(numberButton, value, previousValue) {
    super();
    this.numberButton = numberButton;
    this.value = value;
    this.previousValue = previousValue;
  }
  execute() {
    if (this.value > 1000000000000000 || this.previousValue > 1000000000000000)
      return;

    if (this.numberButton === ".") {
      if (this.value !== null && !this.value.toString().includes(".")) {
        calculator.value = this.value + ".";
        calculator.previousValue = this.previousValue;
        return;
      }
      if (!this.previousValue.toString().includes(".")) {
        calculator.value = this.value;
        calculator.previousValue = this.previousValue + ".";
        return;
      }
      // TODO: Rewrite undo methods
      return;
    }

    if (this.previousValue === null && this.value === null) {
      calculator.value = this.value;
      calculator.previousValue = +this.numberButton;
    } else if (this.value === null) {
      calculator.value = this.value;
      calculator.previousValue = +(this.previousValue + this.numberButton);
    } else {
      calculator.value = +(this.value + this.numberButton);
      calculator.previousValue = this.previousValue;
    }
  }

  undo() {
    if (this.previousValue === null && this.value === null) {
      return [this.value, this.previousValue];
    } else if (this.value === null || this.value === 0) {
      return [null, +this.previousValue.toString().slice(0, -1) || null];
    } else {
      return [+this.value.toString().slice(0, -1) || null, previousValue];
    }
  }
  // TODO: Rewrite undo methods
}

const numbers = document.querySelectorAll(".number");

for (let number of numbers) {
  number.addEventListener("click", numberCommand);
}

function numberCommand(event) {
  calculator.execute(
    new NumberButtonCommand(
      event.target.textContent,
      calculator.value,
      calculator.previousValue
    )
  );
  console.log(calculator);
  updateScreen();
}
