import { calculator, Calculator } from "../calculator/calculator";
import { updateScreen } from "../screen/updateScreen";
import { NumberButtonCommand } from "./numbers";

export class FirstCommand extends Calculator {
  constructor(value, previousValue) {
    super();
    this.value = value;
    this.previousValue = previousValue;
  }

  execute() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue;
  }

  undo() {}
}

export class AddCommand extends Calculator {
  constructor(value, previousValue) {
    // encapsulated values of  calculator.value и calculator.previousValue
    super();
    this.value = value;
    this.previousValue = previousValue;
  }

  execute() {
    if (this.previousValue === null && this.value === null) {
      // return [this.value, this.previousValue];
      calculator.value = this.value;
      calculator.previousValue = this.previousValue;
    } else if (this.value === null) {
      // return [0, this.previousValue];
      calculator.value = 0;
      calculator.previousValue = this.previousValue;
    } else {
      updateScreen(this.previousValue + this.value);
      // return [0, this.value + this.previousValue];
      calculator.value = 0;
      calculator.previousValue = this.value + this.previousValue;
    }
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      return [null, this.previousValue - this.value];
    } else {
      return [0, this.value ?? this.previousValue - this.value];
    }
  }
}

export class MultiplyCommand extends Calculator {
  constructor(value, previousValue) {
    super();
    this.value = value;
    this.previousValue = previousValue;
  }

  execute() {
    if (this.previousValue === null && this.value === null) {
      calculator.value = this.value;
      calculator.previousValue = this.previousValue;
      // return;
    } else if (this.value === null) {
      calculator.value = 0;
      calculator.previousValue = this.previousValue;
      // return;
    } else {
      updateScreen(this.previousValue * this.value);
      calculator.value = 0;
      calculator.previousValue = this.value * this.previousValue;
    }
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      return [this.previousValue, this.previousValue / this.value];
    } else {
      return [0, this.value ?? this.previousValue / this.value];
    }
  }
}

export class DivideCommand {
  constructor(divideOperand) {
    // super();
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

export class SubtractCommand {
  constructor(subtractOperand) {
    // super();
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
  constructor(value, previousValue, operations, operationSigns) {
    super();
    this.value = value;
    this.previousValue = previousValue;
    this.operations = operations;
    this.operationSigns = operationSigns;
  }

  execute() {
    calculator.value = null;
    calculator.previousValue = null;
    calculator.operations = [];
    calculator.operationSigns = [];
  }

  undo() {
    calculator.value = this.value;
    calculator.previousValue = this.previousValue;
    calculator.operations = this.operations;
    calculator.operationSigns = this.operationSigns;
  }
}

const operations = document.querySelectorAll(
  ".simple-operations, .advanced-operations"
);

for (let element of operations) {
  element.addEventListener("click", arithmeticCommandSelector);
}

export function arithmeticCommandSelector(event) {
  // TODO: Если (есть операции) то выполнить последнюю и поставить текущую в массив. если нет, то поставить текущую в массив и не выполнять
  switch (
    calculator.operationSigns[calculator.operationSigns.length - 1] ||
    0
  ) {
    case "+":
      calculator.execute(
        new AddCommand(calculator.value, calculator.previousValue)
      );
      break;
    case "-":
      calculator.execute(new SubtractCommand(calculator.value));
      break;
    case "*":
      calculator.execute(
        new MultiplyCommand(calculator.value, calculator.previousValue)
      );
      break;
    case "/":
      calculator.execute(new DivideCommand(calculator.value));
      break;
    case "AC":
      calculator.execute(
        new AllClearCommand(
          calculator.value,
          calculator.previousValue,
          calculator.operations,
          calculator.operationSigns
        )
      );
      updateScreen();
      break;
    case "undo":
      calculator.undo();
      updateScreen();
      break;
    case 0:
      calculator.execute(
        new FirstCommand(calculator.value, calculator.previousValue)
      );
      break;
    default:
      break;
  }
  calculator.operationSigns.push(event?.target?.textContent || event);
  console.log(calculator);
}
