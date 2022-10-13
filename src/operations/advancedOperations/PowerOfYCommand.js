import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class PowerOfYCommand extends Calculator {
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
    if (calculator.operationSigns.at(-1) !== "x^y")
      arithmeticCommandSelector(calculator.operationSigns.at(-1));
    calculator.previousValue = calculator.previousValue ** calculator.value;
    updateScreen();
  }
}
