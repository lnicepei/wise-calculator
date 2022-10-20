import { updateScreen } from "../screen/updateScreen";
import { arithmeticCommandSelector } from "../selectors/arithmeticOperationSelector";
import { calculator, Calculator } from "./calculator";

export class UnaryCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  execute() {
    if (
      calculator.operationSigns.at(-1) !== undefined
      // && calculator.value !== 0
    )
      arithmeticCommandSelector(calculator.operationSigns.at(-1));
    calculator.value = null;
  }

  undo() {
    calculator.value = this.value;
    calculator.previousValue = this.previousValue;
    calculator.value === null ? updateScreen() : updateScreen(calculator.value);
  }
}
