import { calculator } from "../calculator/calculator";
import { arithmeticCommandSelector } from "./arithmeticOperationSelector";
import {
  CubedCommand,
  FactorialCommand,
  MemoryClearCommand,
  MemoryMinusCommand,
  MemoryPlusCommand,
  MemoryRecallCommand,
  PercentCommand,
  PowerOf10Command,
  ReciprocateCommand,
  RevertCommand,
  SquaredCommand,
  SquareRootCommand,
  ThirdPowerRootCommand,
} from "../operations/advancedOperations/index";
import {
  AllClearCommand,
  EqualsCommand,
} from "../operations/arithmeticOperations/index";

const advancedOperations = document.querySelectorAll(".advanced-operations, .equals");

for (let element of advancedOperations) {
  element.addEventListener("click", advancedCommandSelector);
}

export function advancedCommandSelector(event) {
  const operation = event?.target?.textContent || event;

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
    case "x^2":
      calculator.execute(new SquaredCommand());
      break;
    case "x^3":
      calculator.execute(new CubedCommand());
      break;
    case "10^x":
      calculator.execute(new PowerOf10Command());
      break;
    case "x!":
      calculator.execute(new FactorialCommand());
      break;
    case "AC":
      calculator.execute(new AllClearCommand());
      break;
    case "=":
      calculator.execute(new EqualsCommand());
      break;
    default:
      arithmeticCommandSelector(operation);
      break;
  }

  // if (operation === "y√x" || operation === "x^y")
  //   calculator.operationSigns.push(operation);

  console.log(calculator);
}
