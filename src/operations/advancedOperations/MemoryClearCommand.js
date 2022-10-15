import { calculator, Calculator } from "../../calculator/calculator";

export class MemoryClearCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.memory = +localStorage.getItem("memory");
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

  undoWithOneArg() {
    localStorage.setItem("memory", this.memory);
  }

  undoWithTwoArgs() {
    localStorage.setItem("memory", this.memory);
  }
}
