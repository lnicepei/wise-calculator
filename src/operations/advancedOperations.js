import { NumberButtonCommand } from "../buttons/numbers";
import { calculator, Calculator } from "../calculator/calculator";
import { updateScreen } from "../screen/updateScreen";
import { arithmeticCommandSelector } from "./arithmeticOperations";

class PercentCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  // execute() {
  //   if (this.previousValue === null && this.value === null) {
  //     calculator.value = this.value;
  //     calculator.previousValue = this.previousValue;
  //   } else if (this.value === null || this.value === 0) {
  //     updateScreen(this.previousValue / 100);
  //     calculator.value = 0;
  //     calculator.previousValue = this.previousValue / 100;
  //   } else {
  //     updateScreen(this.value / 100);
  //     calculator.value = 0;
  //     calculator.previousValue = this.value / 100;
  //   }
  // }

  executeWithOneArg() {
    calculator.value = 0;
    calculator.previousValue = this.previousValue / 100;
    updateScreen(calculator.previousValue);
  }

  executeWithTwoArgs() {
    calculator.value = 0;
    calculator.previousValue = this.value / 100;
    updateScreen(calculator.previousValue);
  }
}

class RevertCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  execute() {
    console.log(this.value, this.previousValue);
    if (this.previousValue === null && this.value === null) {
      calculator.value = this.value;
      calculator.previousValue = this.previousValue;
    } else if (this.value === null || this.value === 0) {
      updateScreen(-this.previousValue);
      calculator.value = this.value;
      calculator.previousValue = -this.previousValue;
    } else {
      updateScreen(-this.value);
      calculator.value = 0;
      calculator.previousValue = -this.value;
    }
  }
}

class ReciprocateCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  execute() {
    if (this.previousValue === null && this.value === null) {
      calculator.value = this.value;
      calculator.previousValue = this.previousValue;
    } else if (this.value === null || this.value === 0) {
      updateScreen(1 / this.previousValue);
      calculator.value = 0;
      calculator.previousValue = 1 / this.previousValue;
    } else {
      updateScreen(1 / this.value);
      calculator.value = 0;
      calculator.previousValue = 1 / this.value;
    }
  }
}

class SquareRootCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  execute() {
    if (this.previousValue === null && this.value === null) {
      calculator.value = this.value;
      calculator.previousValue = this.previousValue;
    } else if (this.value === null || this.value === 0) {
      updateScreen(this.previousValue ** 0.5);
      calculator.value = 0;
      calculator.previousValue = this.previousValue ** 0.5;
    } else {
      updateScreen(this.value ** 0.5);
      calculator.value = 0;
      calculator.previousValue = this.value ** 0.5;
    }
  }
}

class ThirdPowerRootCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  execute() {
    if (this.previousValue === null && this.value === null) {
      calculator.value = this.value;
      calculator.previousValue = this.previousValue;
    } else if (this.value === null || this.value === 0) {
      updateScreen(this.previousValue ** (1 / 3));
      calculator.value = 0;
      calculator.previousValue = this.previousValue ** (1 / 3);
    } else {
      updateScreen(this.value ** (1 / 3));
      calculator.value = 0;
      calculator.previousValue = this.value ** (1 / 3);
    }
  }
}

class YRootCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
  }

  execute() {
    if (this.previousValue === null && this.value === null) {
      calculator.value = this.value;
      calculator.previousValue = this.previousValue;
    } else if (this.value === null || this.value === 0) {
      calculator.value = 0;
      calculator.previousValue = this.previousValue;
    } else {
      updateScreen(this.value ** (1 / this.previousValue));
      calculator.value = 0;
      calculator.previousValue = this.value ** (1 / this.previousValue);
    }
  }
}

const advancedOperations = document.querySelectorAll(".advanced-operations");

for (let element of advancedOperations) {
  element.addEventListener("click", advancedCommandSelector);
}

export function advancedCommandSelector(event) {
  const operation = event?.target?.textContent || event;
  const previousOperation =
    calculator.operations[calculator.operations.length - 1];

  if (previousOperation instanceof NumberButtonCommand || operation) {
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
      default:
        arithmeticCommandSelector(operation);
        break;
    }
    calculator.operationSigns.push(operation);
  } else {
    calculator.operationSigns.splice(-1, 1, operation);
  }

  console.log(calculator);
}
