import { calculator, Calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

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
