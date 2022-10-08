import { calculator, Calculator } from "../calculator/calculator";
import { updateScreen } from "../screen/updateScreen";

export class AddCommand extends Calculator {
  constructor(addOperand) { // addOperand == calculator.value
    super();
    this.addOperand = addOperand;
  }

  execute(value, previousValue) {
    if (value === null) {
      return [0, previousValue];
    } else {
      updateScreen(previousValue + this.addOperand);
      return [0, previousValue + this.addOperand];
    }
  }

  undo(value, previousValue) {
    console.log("Undo from operations");
    if (value === 0 || value === null) {
      return [null, previousValue - this.addOperand];
    } else {
      return [value, previousValue];
    }
  }
}

export class MultiplyCommand extends Calculator {
  constructor(multiplyOperand) {
    super();
    this.multiplyOperand = +multiplyOperand;
  }

  execute(value, previousValue) {
    if (value === null) {
      return [0, previousValue];
    } else {
      updateScreen(previousValue * this.multiplyOperand);
      return [0, previousValue * this.multiplyOperand];
    }
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
    calculator.previousValue = value;
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
    calculator.previousValue = value;
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
    calculator.previousValue = 0;
    calculator.value = null;
    calculator.operations = [];
    return 0; // FIXME: return proper resetters
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
  console.log(calculator);
}
