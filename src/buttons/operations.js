import { calculator, Calculator } from "../calculator/calculator";
import { updateScreen } from "../screen/updateScreen";

export class AddCommand extends Calculator {
  constructor(addOperand) {
    super();
    this.addOperand = +addOperand;
  }

  execute(value) {
    return +(value + this.addOperand);
  }

  undo(value) {
    return +value - this.addOperand;
  }
}

export class MultiplyCommand extends Calculator {
  constructor(multiplyOperand) {
    super();
    this.multiplyOperand = +multiplyOperand;
  }

  execute(value) {
    return +(value * this.multiplyOperand);
  }

  undo(value) {
    return +value / this.multiplyOperand;
  }
}

export class DivideCommand extends Calculator {
  constructor(divideOperand) {
    super();
    this.divideOperand = +divideOperand;
  }

  execute(value) {
    return +value / this.divideOperand;
  }

  undo(value) {
    return +value * this.divideOperand;
  }
}

export class SubtractCommand extends Calculator {
  constructor(subtractOperand) {
    super();
    this.subtractOperand = +subtractOperand;
  }

  execute(value) {
    return +value - this.subtractOperand;
  }

  undo(value) {
    return +value + this.subtractOperand;
  }
}

export class AllClearCommand extends Calculator {
  constructor() {
    super();
  }

  execute() {
    calculator.operations = [];
    return 0;
  }

  undo(value) {
    return +value;
  }
}

const operations = document.querySelectorAll(
  ".simple-operations, .advanced-operations"
);

for (let element of operations) {
  element.addEventListener("click", arithmeticCommandSelector);
}

export function arithmeticCommandSelector(event) {
  switch (event.target.textContent) {
    case "+":
      calculator.execute(new AddCommand(calculator.value));
      break;
    case "-":
      calculator.execute(new SubtractCommand(calculator.value));
      break;
    case "*":
      calculator.execute(new MultiplyCommand(calculator.value));
      break;
    case "/":
      calculator.execute(new DivideCommand(calculator.value));
      break;
    case "AC":
      calculator.execute(new AllClearCommand());
      updateScreen();
      break;
    case "undo":
      calculator.undo();
      updateScreen();
      break;
    default:
      break;
  }
}
