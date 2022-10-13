import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class SubtractCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.requiresPreviousOperationFinished = true;
  }

  executeFirstOperation() {
    calculator.value = 0;
    calculator.previousValue = 0;
  }

  executeWithOneArg() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.previousValue = this.previousValue - this.value;
    calculator.value = 0;
    updateScreen();
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      calculator.value = null;
      calculator.previousValue = this.previousValue + this.value;
    } else {
      calculator.value = 0;
      calculator.previousValue = this.value ?? this.previousValue + this.value;
    }
  }
}
