import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class SquareRootCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    if (this.validate()) {
      calculator.previousValue = calculator.previousValue ** 0.5;
    } else {
      alert("You cannot extract root of a negative number");
    }
    updateScreen();
  }

  validate() {
    return calculator.previousValue >= 0;
  }
}
