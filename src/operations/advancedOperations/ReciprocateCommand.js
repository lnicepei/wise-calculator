import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class ReciprocateCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    if (this.validate()) {
      calculator.previousValue = 1 / calculator.previousValue;
    } else {
      alert("You cannot divide by zero");
    }
    updateScreen();
  }

  validate() {
    return +calculator.previousValue !== 0;
  }
}
