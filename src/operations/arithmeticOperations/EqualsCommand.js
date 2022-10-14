import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class EqualsCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    if (
      calculator.operationSigns.at(-1) !== "=" &&
      calculator.operationSigns.at(-1) !== undefined
    ) {
      arithmeticCommandSelector(calculator.operationSigns.at(-1));
    } else {
      calculator.previousValue = 0;
    }
  }

  executeWithTwoArgs() {
    if (
      calculator.operationSigns.at(-1) !== "=" &&
      calculator.operationSigns.at(-1) !== undefined
    ) {
      arithmeticCommandSelector(calculator.operationSigns.at(-1));
      calculator.value = 0;
    } else if (
      calculator.operationSigns.at(-1) !== "=" &&
      calculator.operationSigns.at(-1) === undefined
    ) {
      calculator.previousValue = 0;
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
