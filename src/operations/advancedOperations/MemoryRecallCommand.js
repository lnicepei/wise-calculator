import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class MemoryRecallCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {
    // calculator.value = 0;
    calculator.previousValue = +localStorage.getItem("memory");
    updateScreen();
  }

  executeWithOneArg() {
    // calculator.value = 0;
    calculator.previousValue = +localStorage.getItem("memory");
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = +localStorage.getItem("memory");
    updateScreen(calculator.value);
  }

  undo() {}
}
