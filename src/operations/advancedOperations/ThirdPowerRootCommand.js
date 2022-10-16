import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class ThirdPowerRootCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    if (calculator.previousValue >= 0) {
      calculator.previousValue = calculator.previousValue ** (1 / 3);
    } else {
      calculator.previousValue = -(
        this.absVal(calculator.previousValue) **
        (1 / 3)
      );
    }
    updateScreen();
  }

  executeWithTwoArgs() {
    arithmeticCommandSelector(calculator.operationSigns.at(-1));
    calculator.previousValue = calculator.previousValue ** (1 / 3);
    updateScreen();
  }

  absVal(value) {
    return value < 0 ? -value : value;
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
