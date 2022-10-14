import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class DivideCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.previousValue = calculator.previousValue / calculator.value;
    calculator.value = 0;
    this.wasDividedByZero();
  }

  wasDividedByZero() {
    if (
      Number.isNaN(calculator.previousValue) ||
      calculator.previousValue === Infinity
    ) {
      alert("You can't divide by zero!");
    } else {
      updateScreen();
    }
  }

  undoWithOneArg() {
    calculator.value = this.value;
    calculator.previousValue = this.previousValue;
    updateScreen(calculator.value);
  }

  undoWithTwoArgs() {
    calculator.value = this.value;
    calculator.previousValue = this.previousValue;
    updateScreen(calculator.value);
  }
}
