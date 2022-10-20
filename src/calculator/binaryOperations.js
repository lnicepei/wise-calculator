import { updateScreen } from "../screen/updateScreen";
import { arithmeticCommandSelector } from "../selectors/arithmeticOperationSelector";
import { calculator, Calculator } from "./calculator";

export class BinaryCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  execute() {
    if (this.validate() && calculator.operationSigns.length === 2) {
      arithmeticCommandSelector(calculator.operationSigns.shift());
    }
  }

  undo() {
    calculator.value = this.value;
    calculator.previousValue = this.previousValue;
    updateScreen(calculator.value);
  }

  validate() {
    return (
      calculator.previousValue !== null && calculator.value !== null
    );
  }

  validateFirstPress() {
    return calculator.previousValue !== null;
  }
}
