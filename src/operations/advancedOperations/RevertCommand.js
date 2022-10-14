import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class RevertCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.previousValue = -this.previousValue;
    updateScreen();
  }

  executeWithTwoArgs() {
    if (calculator.value !== 0) {
      calculator.value = -calculator.value;
      updateScreen(calculator.value);
    } else {
      calculator.previousValue = -calculator.previousValue;
      updateScreen();
    }
  }

  undoWithOneArg() {
    calculator.previousValue = -calculator.previousValue;
    updateScreen();
  }

  undoWithTwoArgs() {
    calculator.value = -calculator.value;
    updateScreen(calculator.value);
  }
}
