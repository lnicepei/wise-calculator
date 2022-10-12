import { NumberButtonCommand } from "../buttons/numbers";
import { calculator, Calculator } from "../calculator/calculator";
import { updateScreen } from "../screen/updateScreen";
import { arithmeticCommandSelector } from "./arithmeticOperations";

class FirstAdvancedCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeWithOneArg() {}
}

export class PercentCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeWithOneArg() {
    // calculator.value = 0;
    calculator.previousValue = this.previousValue / 100;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value / 100;
    updateScreen();
  }

  undo() {}
}

export class RevertCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.previousValue = -this.previousValue;
    updateScreen();
  }

  executeWithTwoArgs() {
    if (calculator.value !== 0) {
      calculator.value = -calculator.value;
      updateScreen(calculator.value);
    } else {
      calculator.previousValue = -calculator.previousValue;
      updateScreen();
    }
  }
}

export class ReciprocateCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.previousValue = 1 / calculator.previousValue;
    updateScreen();
  }

  executeWithTwoArgs() {
    arithmeticCommandSelector(calculator.operationSigns.at(-1));
    calculator.previousValue = 1 / calculator.previousValue;
    updateScreen();
  }
}

export class SquareRootCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue ** 0.5;
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value ** 0.5;
    arithmeticCommandSelector(calculator.operationSigns.at(-1));
    calculator.previousValue = 1 / calculator.previousValue;
    updateScreen();
    updateScreen();
  }

  undo() {}
}

export class ThirdPowerRootCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue ** (1 / 3);
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue ** (1 / 3);
    updateScreen();
  }
}

export class MemoryRecallCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {
    // calculator.value = 0;
    calculator.previousValue = +localStorage.getItem("memory");
    updateScreen();
  }

  executeWithOneArg() {
    // calculator.value = 0;
    calculator.previousValue = +localStorage.getItem("memory");
    updateScreen();
  }

  executeWithTwoArgs() {
    calculator.value = +localStorage.getItem("memory");
    // calculator.previousValue = ;
    updateScreen(calculator.value);
  }

  undo() {}
}

export class MemoryClearCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {
    localStorage.clear();
  }

  executeWithOneArg() {
    localStorage.clear();
  }

  executeWithTwoArgs() {
    localStorage.clear();
  }

  undo() {}
}

export class MemoryPlusCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.memoryValue = localStorage.getItem("memory");
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    localStorage.setItem("memory", +this.memoryValue + +this.previousValue);
  }

  executeWithTwoArgs() {
    localStorage.setItem("memory", +this.memoryValue + +this.value);
  }

  undo() {}
}

export class MemoryMinusCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.memoryValue = localStorage.getItem("memory");
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    localStorage.setItem("memory", +this.memoryValue - +this.previousValue);
  }

  executeWithTwoArgs() {
    localStorage.setItem("memory", +this.memoryValue - +this.value);
  }

  undo() {}
}

export class YRootCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  executeFirstOperation() {}

  executeWithOneArg() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue;
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value ** (1 / this.previousValue);
    updateScreen(calculator.previousValue);
  }
}

const advancedOperations = document.querySelectorAll(".advanced-operations");

for (let element of advancedOperations) {
  element.addEventListener("click", advancedCommandSelector);
}

export function advancedCommandSelector(event) {
  const operation = event?.target?.textContent || event;
  const previousOperation = calculator.operations.at(-1);

  // if (calculator.previousValue !== null) {
  switch (operation) {
    case "%":
      calculator.execute(new PercentCommand());
      break;
    case "+/-":
      calculator.execute(new RevertCommand());
      break;
    case "1/x":
      calculator.execute(new ReciprocateCommand());
      break;
    case "√x":
      calculator.execute(new SquareRootCommand());
      break;
    case "3√x":
      calculator.execute(new ThirdPowerRootCommand());
      break;
    case "y√x":
      calculator.execute(new YRootCommand());
      break;
    case "mr":
      calculator.execute(new MemoryRecallCommand());
      break;
    case "mc":
      calculator.execute(new MemoryClearCommand());
      break;
    case "m+":
      calculator.execute(new MemoryPlusCommand());
      break;
    case "m-":
      calculator.execute(new MemoryMinusCommand());
      break;
    default:
      arithmeticCommandSelector(operation);
      break;
  }
  // calculator.operationSigns.push(operation);
  // } else {
  //   calculator.operationSigns.splice(-1, 1, operation);
  // }

  console.log(calculator);
}
