import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class ThirdPowerRootCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    if (this.validate()) {
      calculator.previousValue = calculator.previousValue ** (1 / 3);
    } else {
      calculator.previousValue = -(
        this.absVal(calculator.previousValue) **
        (1 / 3)
      );
    }
    updateScreen();
  }

  absVal(value) {
    return value < 0 ? -value : value;
  }

  validate() {
    return calculator.previousValue >= 0;
  }
}
