import { calculator, Calculator } from "../../calculator/calculator";

export class MemoryClearCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {
    localStorage.clear();
  }

  executeWithOneArg() {
    localStorage.clear();
  }

  executeWithTwoArgs() {
    localStorage.clear();
  }

  undo() {}
}
