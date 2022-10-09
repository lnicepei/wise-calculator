import { calculator, Calculator } from "../calculator/calculator";
import { updateScreen } from "../screen/updateScreen";
import { NumberButtonCommand } from "./numbers";

export class AddCommand extends Calculator {
  constructor(value, previousValue) {
    // encapsulated values of  calculator.value и calculator.previousValue
    super();
    this.value = value;
    this.previousValue = previousValue;
    this.operands = [value, previousValue];
  }
// should I pass any arguments here???????
  execute(value, previousValue, operations) {
    // if (previousValue === null && value === null) {
    //   return [value, previousValue, operations];
    // } else if (value === null) {
    //   return [0, previousValue, operations];
    // } else {
    //   updateScreen(previousValue + this.value);
    //   return [0, previousValue + this.value, operations];
    // }
    if (previousValue === null && value === null) {
      return [value, previousValue, operations];
    } else if (value === null) {
      return [0, this.operands[1], operations];
    } else {
      updateScreen(previousValue + this.value);
      return [0, this.operands[0] + this.operands[1], operations];
    }
  }

  undo(value, previousValue, operations) {
    if (value === 0 || value === null) {
      return [null, previousValue - this.value, operations];
    } else {
      return [0, value ?? previousValue - this.value, operations];
    }
  }
}

export class MultiplyCommand extends Calculator {
  constructor(value, previousValue) {
    super();
    this.value = value;
    this.previousValue = previousValue;
    this.operands = [value, previousValue]
  }

  execute(value, previousValue, operations) {
    // if (previousValue === null && value === null) {
    //   return [value, previousValue, operations];
    // } else if (value === null) {
    //   return [0, previousValue, operations];
    // } else {
    //   updateScreen(previousValue * this.value);
    //   return [0, previousValue * this.value, operations];
    // }
    // return [0, value + this.value, operations];
    if (previousValue === null && value === null) {
      return [value, previousValue, operations];
    } else if (value === null) {
      return [0, this.operands[1], operations];
    } else {
      updateScreen(previousValue + this.value);
      return [0, this.operands[0] + this.operands[1], operations];
    }
  }

  undo(value, previousValue, operations) {
    if (value === 0 || value === null) {
      return [previousValue, previousValue / this.value, operations];
    } else {
      console.log(previousValue, this.value);
      return [0, value ?? previousValue / this.value, operations];
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
  constructor(value, previousValue, operations) {
    super();
    this.value = value;
    this.previousValue = previousValue;
    this.operations = operations;
  }

  execute() {
    return [null, null, []];
  }

  undo() {
    return [this.value, this.previousValue, this.operations];
  }
}

const operations = document.querySelectorAll(
  ".simple-operations, .advanced-operations"
);

for (let element of operations) {
  element.addEventListener("click", arithmeticCommandSelector);
}

export function arithmeticCommandSelector(event) {
  // TODO: Выполнять операцию только тогда, когда есть два операнда??????Г а так: проверять это условие в нажимальщике кнопок
  switch (event?.target?.textContent || event) {
    case "+":
      calculator.execute(
        new AddCommand(+calculator.value, +calculator.previousValue)
      );
      break;
    case "-":
      calculator.execute(new SubtractCommand(calculator.value));
      break;
    case "*":
      calculator.execute(
        new MultiplyCommand(+calculator.value, +calculator.previousValue)
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
          calculator.operations
        )
      );
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
