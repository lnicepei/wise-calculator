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
    if (this.isNumberDot() && calculator.previousValue !== Infinity) {
      if (!this.includesDot(calculator.previousValue ?? 0)) {
        calculator.previousValue = this.previousValue + this.numberButton;
      }
    } else {
      if (calculator.previousValue !== Infinity) {
        if (this.numberButton === "0") {
          if (calculator.previousValue !== 0)
            calculator.previousValue =
              calculator.previousValue + this.numberButton;
        } else {
          calculator.previousValue = +(
            calculator.previousValue + this.numberButton
          );
        }
      } else {
        calculator.value = null;
        calculator.operationSigns = [];
        calculator.previousValue = +this.numberButton;
      }
    }
    updateScreen(calculator.value);
  }

  executeWithTwoArgs() {
    if (
      calculator.operationSigns.at(-1) === "=" ||
      calculator.operationSigns.at(-1) === "x!" ||
      calculator.operationSigns.at(-1) === "x^2" ||
      calculator.operationSigns.at(-1) === "x^3" ||
      calculator.operationSigns.at(-1) === "1/x" ||
      calculator.operationSigns.at(-1) === "√x" ||
      calculator.operationSigns.at(-1) === "3√x" ||
      calculator.previousValue === Infinity
    ) {
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
          if (calculator.value !== 0)
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
    calculator.value = +calculator.value.toString().slice(0, -1) || null;
    updateScreen(calculator.value);
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
