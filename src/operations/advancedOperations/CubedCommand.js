import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class CubedCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    calculator.previousValue = calculator.previousValue ** 3;
    updateScreen();
  }
}
