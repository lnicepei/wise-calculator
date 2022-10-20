// класс бинарных операций
// и здесь валидировать

import { updateScreen } from "../screen/updateScreen";
import { arithmeticCommandSelector } from "../selectors/arithmeticOperationSelector";
import { BinaryCommand } from "./binaryOperations";
import { calculator, Calculator } from "./calculator";

export class UnaryCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  execute() {
    if (
      calculator.operationSigns.at(-1) !== undefined
      // calculator.operations.at(-1) instanceof BinaryCommand
    )
      arithmeticCommandSelector(calculator.operationSigns.at(-1));
    calculator.value = null;
    // updateScreen();
  }

  undo() {
    calculator.value = this.value;
    calculator.previousValue = this.previousValue;
    calculator.value === null ? updateScreen() : updateScreen(calculator.value);
  }
}
