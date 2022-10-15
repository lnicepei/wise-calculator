import { calculator, Calculator } from "../../calculator/calculator";
import { updateScreen } from "../../screen/updateScreen";
import { arithmeticCommandSelector } from "../../selectors/arithmeticOperationSelector";

export class FactorialCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {
    calculator.previousValue = 1;
    updateScreen();
  }

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
    if (number <= 17000 && number !== Infinity) {
      if (number < 0) {
        return -1;
      } else if (number === 0) {
        return 1;
      } else {
        return number * this.factorial(number - 1);
      }
    } else {
      alert("The number is too big for finding its factorial");
      return number;
    }
  }

  undoWithOneArg() {
    calculator.previousValue = this.previousValue;
    updateScreen();
  }

  undoWithTwoArgs() {
    calculator.value = this.value;
    calculator.previousValue = this.previousValue;
    updateScreen();
  }
}
