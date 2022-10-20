import { BinaryCommand } from "../../calculator/binaryOperations";
import { calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";

export class AddCommand extends BinaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    if (this.validate()) {
      calculator.previousValue = +calculator.value + +calculator.previousValue;
      updateScreen();
    }
    calculator.value = 0;
  }
}
