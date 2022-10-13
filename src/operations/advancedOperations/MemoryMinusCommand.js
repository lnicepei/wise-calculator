import { calculator, Calculator } from "../../calculator/calculator";

export class MemoryMinusCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.memoryValue = localStorage.getItem("memory");
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    localStorage.setItem("memory", +this.memoryValue - +this.previousValue);
  }

  executeWithTwoArgs() {
    localStorage.setItem("memory", +this.memoryValue - +this.value);
  }

  undo() {}
}
