import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class MultiplyCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.requiresPreviousOperationFinished = true;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value * this.previousValue;
    updateScreen();
  }

  undoWithOneArg() {
    calculator.value = null;
    calculator.previousValue = this.previousValue / this.value;
  }

  undoWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value ?? this.previousValue / this.value;
  }
}
