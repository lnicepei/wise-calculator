import { updateScreen } from "../screen/updateScreen";
import { arithmeticCommandSelector } from "../selectors/arithmeticOperationSelector";
import { calculator, Calculator } from "./calculator";
import { NumberButtonCommand } from "../buttons/numbers";
import { UnaryCommand } from "./unaryOperations";

export class BinaryCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  execute() {
    if (this.validate() && calculator.operationSigns.length === 2) {
      if (
        calculator.operations.at(-2) instanceof NumberButtonCommand ||
        calculator.operations.at(-2) instanceof UnaryCommand
      ) {
        arithmeticCommandSelector(calculator.operationSigns.shift());
      }
    }
  }

  undo() {
    calculator.value = this.value;
    calculator.previousValue = this.previousValue;
    updateScreen(calculator.value);
  }

  validate() {
    return calculator.previousValue !== null && calculator.value !== null;
  }

  validateFirstPress() {
    return calculator.previousValue !== null;
  }
}
