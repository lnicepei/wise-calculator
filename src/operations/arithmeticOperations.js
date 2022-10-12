import { calculator, Calculator } from "../calculator/calculator";
import { updateScreen } from "../screen/updateScreen";
import { NumberButtonCommand } from "../buttons/numbers";
import {
  advancedCommandSelector,
  MemoryRecallCommand,
  ReciprocateCommand,
} from "./advancedOperations";

export class AddCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value + this.previousValue;
    updateScreen();
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
    this.requiresPreviousOperationFinished = true;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value * this.previousValue;
    updateScreen();
  }

  undoWithOneArg() {
    calculator.value = null;
    calculator.previousValue = this.previousValue / this.value;
  }

  undoWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value ?? this.previousValue / this.value;
  }
}

export class DivideCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.requiresPreviousOperationFinished = true;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue / this.value;
    if (
      Number.isNaN(calculator.previousValue) ||
      calculator.previousValue === Infinity
    ) {
      alert("You can't divide by zero!");
    } else {
      updateScreen();
    }
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
    this.requiresPreviousOperationFinished = true;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.value = 0;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.previousValue = this.previousValue - this.value;
    calculator.value = 0;
    updateScreen();
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

  executeFirstOperation() {}

  executeWithOneArg() {
    if (calculator.operationSigns.at(-1) !== "=")
      arithmeticCommandSelector(calculator.operationSigns.at(-1));
  }

  executeWithTwoArgs() {
    arithmeticCommandSelector(calculator.operationSigns.at(-1));
    calculator.value = 0;
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
    this.requiresPreviousOperationFinished = false;
  }

  executeFirstOperation() {
    calculator.value = null;
    calculator.previousValue = null;
    calculator.operations = [];
    calculator.operationSigns = [];
  }

  executeWithOneArg() {
    calculator.value = null;
    calculator.previousValue = null;
    calculator.operations = [];
    calculator.operationSigns = [];
  }

  executeWithTwoArgs() {
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
  const previousCommand = calculator.operations.at(-1);

  if (
    previousCommand instanceof NumberButtonCommand ||
    previousCommand instanceof EqualsCommand ||
    operation === "undo"
  ) {
    switch (operation) {
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
      default:
        // advancedCommandSelector(operation);
        break;
    }
    calculator.operationSigns.push(operation);
  } else {
    calculator.operationSigns.splice(-1, 1, operation);
  }
  console.log(calculator);
}
