import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class CubedCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.previousValue = calculator.previousValue ** 3;
    updateScreen();
  }

  executeWithTwoArgs() {
    arithmeticCommandSelector(calculator.operationSigns.at(-1));
    calculator.previousValue = calculator.previousValue ** 3;
    updateScreen();
  }

  undoWithOneArg() {
    calculator.previousValue = calculator.previousValue ** (1 / 3);
    updateScreen();
  }

  undoWithTwoArgs() {
    calculator.previousValue = calculator.previousValue ** (1 / 3);
    updateScreen();
  }
}
