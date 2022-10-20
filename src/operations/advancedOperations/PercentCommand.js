import { calculator, Calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

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
