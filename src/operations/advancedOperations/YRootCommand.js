import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class YRootCommand extends Calculator {
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
    if (calculator.operationSigns.at(-1) !== "y√x")
      arithmeticCommandSelector(calculator.operationSigns.at(-1));
    if (calculator.value !== 0) {
      calculator.previousValue =
        calculator.value ** (1 / calculator.previousValue);
      calculator.value = 0;
    }
    updateScreen();
  }

  undo() {}
}
