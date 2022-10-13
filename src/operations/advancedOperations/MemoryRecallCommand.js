import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class MemoryRecallCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {
    calculator.previousValue = +localStorage.getItem("memory");
    updateScreen();
  }

  executeWithOneArg() {
    calculator.previousValue = +localStorage.getItem("memory");
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = +localStorage.getItem("memory");
    updateScreen(calculator.value);
  }

  undo() {}
}
