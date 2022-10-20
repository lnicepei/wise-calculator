import { BinaryCommand } from "../../calculator/binaryOperations";
import { calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class DivideCommand extends BinaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    if (this.validate()) {
      calculator.previousValue = calculator.previousValue / calculator.value;
      updateScreen();
    }
    calculator.value = 0;
  }

  wasDividedByZero() {
    if (
      Number.isNaN(calculator.previousValue) ||
      calculator.previousValue === Infinity
    ) {
      alert("You can't divide by zero!");
    } else {
      updateScreen();
    }
  }
}
