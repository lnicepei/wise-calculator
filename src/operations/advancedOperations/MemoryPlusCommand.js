import { calculator, Calculator } from "../../calculator/calculator";

export class MemoryPlusCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.memoryValue = localStorage.getItem("memory");
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    localStorage.setItem("memory", +this.memoryValue + +this.previousValue);
  }

  executeWithTwoArgs() {
    localStorage.setItem("memory", +this.memoryValue + +this.value);
  }

  undoWithOneArg() {
    localStorage.setItem("memory", +this.memoryValue - +this.previousValue);
  }

  undoWithTwoArgs() {
    localStorage.setItem("memory", +this.memoryValue - +this.value);
  }
}