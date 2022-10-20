import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class FactorialCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    calculator.previousValue = this.factorial(calculator.previousValue);
    updateScreen();
  }

  factorial(number) {
    if (number <= 17000 && number !== Infinity && number % 1 === 0) {
      if (number < 0) {
        return -1;
      } else if (number === 0) {
        return 1;
      } else {
        return number * this.factorial(number - 1);
      }
    } else {
      alert("Invalid number for finding its factorial");
      return number;
    }
  }
}
