import { calculator, Calculator } from "../calculator/calculator";
import { updateScreen } from "../screen/updateScreen";
import { NumberButtonCommand } from "../buttons/numbers";
import { advancedCommandSelector } from "./advancedOperations";

export class FirstCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  // executeFirstOperation() {
  //   calculator.value = 0;
  //   calculator.previousValue = this.previousValue;
  // }

  executeWithOneArg() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue;
  }

  executeWithTwoArgs() {}

  undo() {
    calculator.value = null;
    calculator.previousValue = null;
  }
}

export class AddCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  // execute() {
  //   if (this.previousValue === null && this.value === null) {
  //     calculator.value = this.value;
  //     calculator.previousValue = this.previousValue;
  //   } else if (this.value === null) {
  // calculator.value = 0;
  // calculator.previousValue = this.previousValue;
  //   } else {
  // updateScreen(this.previousValue + this.value);
  // calculator.value = 0;
  // calculator.previousValue = this.value + this.previousValue;
  //   }
  // }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value + this.previousValue;
    updateScreen(calculator.previousValue);
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      calculator.value = null;
      calculator.previousValue = this.previousValue - this.value;
    } else {
      calculator.value = 0;
      calculator.previousValue = this.value ?? this.previousValue - this.value;
    }
  }

  // TODO: Rewrite undo methods

  validate() {}
}

export class MultiplyCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  // execute() {
  //   if (this.previousValue === null && this.value === null) {
  //     calculator.value = this.value;
  //     calculator.previousValue = this.previousValue;
  //   } else if (this.value === null) {
  //     calculator.value = 0;
  //     calculator.previousValue = this.previousValue;
  //   } else {
  //     updateScreen(this.previousValue * this.value);
  //     calculator.value = 0;
  //     calculator.previousValue = this.previousValue * this.value;
  //   }
  // }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value * this.previousValue;
    updateScreen(calculator.previousValue);
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      calculator.value = null;
      calculator.previousValue = this.previousValue / this.value;
    } else {
      calculator.value = 0;
      calculator.previousValue = this.value ?? this.previousValue / this.value;
    }
  }
}

export class DivideCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  // execute() {
  //   if (this.previousValue === null && this.value === null) {
  //     calculator.value = this.value;
  //     calculator.previousValue = this.previousValue;
  //   } else if (this.value === null) {
  //     calculator.value = 0;
  //     calculator.previousValue = this.previousValue;
  //   } else {
  //     updateScreen(this.previousValue / this.value);
  //     calculator.value = 0;
  //     calculator.previousValue = this.previousValue / this.value;
  //   }
  // }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue / this.value;
    updateScreen(calculator.previousValue);
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      calculator.value = null;
      calculator.previousValue = this.previousValue * this.value;
    } else {
      calculator.value = 0;
      calculator.previousValue = this.value ?? this.previousValue * this.value;
    }
  }
}

export class SubtractCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  // execute() {
  //   if (this.previousValue === null && this.value === null) {
  //     calculator.value = this.value;
  //     calculator.previousValue = this.previousValue;
  //   } else if (this.value === null) {
  //     calculator.value = 0;
  //     calculator.previousValue = this.previousValue;
  //   } else {
  //     updateScreen(this.previousValue - this.value);
  //     calculator.value = 0;
  //     calculator.previousValue = this.previousValue - this.value;
  //   }
  // }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value - this.previousValue;
    updateScreen(calculator.previousValue);
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      calculator.value = null;
      calculator.previousValue = this.previousValue + this.value;
    } else {
      calculator.value = 0;
      calculator.previousValue = this.value ?? this.previousValue + this.value;
    }
  }
}

export class EqualsCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  // execute() {
  //   if (this.previousValue === null && this.value === null) {
  //     calculator.value = this.value;
  //     calculator.previousValue = this.previousValue;
  //   } else if (this.value === null) {
  //     calculator.value = 0;
  //     calculator.previousValue = this.previousValue;
  //   } else {
  //     updateScreen(this.previousValue);
  //     calculator.value = this.value;
  //     calculator.previousValue = this.previousValue;
  //   }
  // }

  executeWithTwoArgs() {
    updateScreen(calculator.previousValue);
  }

  undo() {
    if (this.value === 0 || this.value === null) {
      calculator.value = null;
      calculator.previousValue = this.previousValue + this.value;
    } else {
      calculator.value = 0;
      calculator.previousValue = this.value ?? this.previousValue + this.value;
    }
  }
}

export class AllClearCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.operations = calculator.operations;
    this.operationSigns = calculator.operationSigns;
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

const arithmeticOperations = document.querySelectorAll(
  ".arithmetic-operations, .equals"
);

for (let element of arithmeticOperations) {
  element.addEventListener("click", arithmeticCommandSelector);
}

export function arithmeticCommandSelector(event) {
  const operation = event?.target?.textContent || event;
  const previousOperation =
    calculator.operations[calculator.operations.length - 1];

  if (
    previousOperation instanceof NumberButtonCommand ||
    operation === "undo"
  ) {
    switch (calculator.operationSigns.at(-1) || 0) {
      case "+":
        calculator.execute(new AddCommand());
        break;
      case "-":
        calculator.execute(new SubtractCommand());
        break;
      case "*":
        calculator.execute(new MultiplyCommand());
        break;
      case "/":
        calculator.execute(new DivideCommand());
        break;
      case "=":
        calculator.execute(new EqualsCommand());
        break;
      case "AC":
        calculator.execute(new AllClearCommand());
        updateScreen();
        break;
      case "undo":
        calculator.undo();
        updateScreen();
        break;
      case 0:
        calculator.execute(new FirstCommand());
        break;
      default:
        advancedCommandSelector(operation);
        break;
    }
    calculator.operationSigns.push(operation);
  } else {
    calculator.operationSigns.splice(-1, 1, operation);
  }
  console.log(calculator);
}
