import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class SquaredCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    calculator.previousValue = calculator.previousValue ** 2;
    updateScreen();
  }
}
