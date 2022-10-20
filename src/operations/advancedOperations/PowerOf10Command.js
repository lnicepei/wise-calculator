import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class PowerOf10Command extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    calculator.previousValue = 10 ** calculator.previousValue;
    updateScreen();
  }
}
