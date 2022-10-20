import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class PercentCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    calculator.previousValue = calculator.previousValue / 100;
    updateScreen();
  }
}
