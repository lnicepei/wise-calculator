import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

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
    calculator.previousValue = calculator.previousValue ** calculator.value;
    calculator.value = 0;
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
