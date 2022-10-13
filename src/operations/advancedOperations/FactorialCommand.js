import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class FactorialCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.previousValue = this.factorial(calculator.previousValue);
    updateScreen();
  }

  executeWithTwoArgs() {
    arithmeticCommandSelector(calculator.operationSigns.at(-1));
    calculator.previousValue = this.factorial(calculator.previousValue);
    updateScreen();
  }

  factorial(number) {
    if (number < 0) {
      return -1;
    } else if (number === 0) {
      return 1;
    } else {
      return number * this.factorial(number - 1);
    }
  }
}
