import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class AllClearCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {
    calculator.value = null;
    calculator.previousValue = null;
    updateScreen();
  }

  executeWithOneArg() {
    calculator.value = null;
    calculator.previousValue = null;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = null;
    calculator.previousValue = null;
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
    updateScreen();
  }
}
