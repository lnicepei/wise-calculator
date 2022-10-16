import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class PowerOfYCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithOneArg() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithTwoArgs() {
    if (
      calculator.operationSigns.at(-1) !== undefined &&
      calculator.operationSigns.at(-1) !== "x^y"
    )
      arithmeticCommandSelector(calculator.operationSigns.at(-1));
    if (calculator.value !== 0) {
      calculator.previousValue = calculator.previousValue ** calculator.value;
      calculator.value = null;
    }

    updateScreen();
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
