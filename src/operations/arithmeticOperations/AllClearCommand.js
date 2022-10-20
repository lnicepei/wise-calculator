import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class AllClearCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    calculator.value = null;
    calculator.previousValue = null;
    updateScreen();
  }
}
