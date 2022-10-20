import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class EqualsCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    updateScreen();
  }
}
