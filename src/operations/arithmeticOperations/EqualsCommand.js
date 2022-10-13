import { calculator, Calculator } from "../../calculator/calculator";
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
      // arithmeticCommandSelector(calculator.operationSigns.at(-1));
    } else {
      // calculator.previousValue = 0;
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

  undo() {
    if (this.value === 0 || this.value === null) {
      calculator.value = null;
      calculator.previousValue = this.previousValue + this.value;
    } else {
      calculator.value = 0;
      calculator.previousValue = this.value ?? this.previousValue + this.value;
    }
  }
}
