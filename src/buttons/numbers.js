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
    if (
      this.isNumberDot() &&
      !this.includesDot(calculator.previousValue ?? 0)
    ) {
      calculator.previousValue = 0 + this.numberButton;
    } else {
      calculator.previousValue = +this.numberButton;
    }
    updateScreen();
  }

  executeWithOneArg() {
    if (this.isNumberDot()) {
      if (!this.includesDot(calculator.previousValue ?? 0)) {
        calculator.previousValue = this.previousValue + this.numberButton;
      }
    } else {
      if (this.numberButton === "0") {
        calculator.previousValue = calculator.previousValue + this.numberButton;
      } else {
        calculator.previousValue = +(
          calculator.previousValue + this.numberButton
        );
      }
    }
    updateScreen(calculator.value);
  }

  executeWithTwoArgs() {
    if (calculator.operationSigns.at(-1) === "=") {
      calculator.operationSigns.pop();
      calculator.value = null;
      calculator.previousValue = null;
      calculator.previousValue = +(this.value + this.numberButton);
      updateScreen();
    } else {
      if (this.isNumberDot()) {
        if (!this.includesDot(calculator.value ?? 0)) {
          calculator.value = this.value + this.numberButton;
        }
      } else {
        if (this.numberButton === "0") {
          calculator.value = calculator.value + this.numberButton;
        } else {
          calculator.value = +(calculator.value + this.numberButton);
        }
      }
      updateScreen(calculator.value);
    }
  }

  isNumberDot() {
    return this.numberButton === ".";
  }

  includesDot(value) {
    return value.toString().includes(".");
  }

  undoWithOneArg() {
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
