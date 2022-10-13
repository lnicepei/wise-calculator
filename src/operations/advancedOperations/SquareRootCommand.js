import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class SquareRootCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    if (calculator.previousValue >= 0) {
      calculator.previousValue = this.previousValue ** 0.5;
      updateScreen();
    } else {
      arithmeticCommandSelector("AC");
    }
  }

  executeWithTwoArgs() {
    arithmeticCommandSelector(calculator.operationSigns.at(-1));
    if (calculator.previousValue >= 0) {
      calculator.value = null;
      calculator.previousValue = calculator.previousValue ** 0.5;
    } else {
      arithmeticCommandSelector("AC");
    }
    updateScreen();
  }

  undo() {}
}
