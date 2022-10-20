import { BinaryCommand } from "../../calculator/binaryOperations";
import { calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class SubtractCommand extends BinaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    if (this.validate()) {
      calculator.previousValue = calculator.previousValue - calculator.value;
      updateScreen();
    }
    calculator.value = 0;
  }
}
