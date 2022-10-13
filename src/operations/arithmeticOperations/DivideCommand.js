import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";


export class DivideCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.requiresPreviousOperationFinished = true;
  }

  executeFirstOperation() { }

  executeWithOneArg() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue / this.value;
    this.wasDividedByZero();
  }

  wasDividedByZero() {
    if (Number.isNaN(calculator.previousValue) ||
      calculator.previousValue === Infinity) {
      alert("You can't divide by zero!");
    } else {
      updateScreen();
    }
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      calculator.value = null;
      calculator.previousValue = this.previousValue * this.value;
    } else {
      calculator.value = 0;
      calculator.previousValue = this.value ?? this.previousValue * this.value;
    }
  }
}
