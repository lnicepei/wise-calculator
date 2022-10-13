import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class AddCommand extends Calculator {
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
    calculator.previousValue = +calculator.value + +calculator.previousValue;
    calculator.value = 0;
    updateScreen();
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      calculator.value = null;
      calculator.previousValue = this.previousValue - this.value;
    } else {
      calculator.value = 0;
      calculator.previousValue = this.value ?? this.previousValue - this.value;
    }
  }

  // TODO: Rewrite undo methods
  validate() {}
}
