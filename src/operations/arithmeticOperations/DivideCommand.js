import { BinaryCommand } from "../../calculator/binaryOperations";
import { calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class DivideCommand extends BinaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    if (this.validate() && this.wasDividedByZero()) {
      calculator.previousValue = calculator.previousValue / calculator.value;
      updateScreen();
    }
    calculator.value = 0;
  }

  wasDividedByZero() {
    if (calculator.value === 0) {
      alert("You cannot divide by zero!");
      return false;
    }
    return true;
  }
}
