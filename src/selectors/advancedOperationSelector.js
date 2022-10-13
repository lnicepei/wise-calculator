import { calculator } from "../calculator/calculator";
import { arithmeticCommandSelector } from "./arithmeticOperationSelector";
import { CubedCommand } from "../operations/advancedOperations/CubedCommand";
import { FactorialCommand } from "../operations/advancedOperations/FactorialCommand";
import { MemoryClearCommand } from "../operations/advancedOperations/MemoryClearCommand";
import { MemoryMinusCommand } from "../operations/advancedOperations/MemoryMinusCommand";
import { MemoryPlusCommand } from "../operations/advancedOperations/MemoryPlusCommand";
import { MemoryRecallCommand } from "../operations/advancedOperations/MemoryRecallCommand";
import { PercentCommand } from "../operations/advancedOperations/PercentCommand";
import { PowerOf10Command } from "../operations/advancedOperations/PowerOf10Command";
import { PowerOfYCommand } from "../operations/advancedOperations/PowerOfYCommand";
import { ReciprocateCommand } from "../operations/advancedOperations/ReciprocateCommand";
import { RevertCommand } from "../operations/advancedOperations/RevertCommand";
import { SquaredCommand } from "../operations/advancedOperations/SquaredCommand";
import { SquareRootCommand } from "../operations/advancedOperations/SquareRootCommand";
import { ThirdPowerRootCommand } from "../operations/advancedOperations/ThirdPowerRootCommand";
import { YRootCommand } from "../operations/advancedOperations/YRootCommand";

const advancedOperations = document.querySelectorAll(".advanced-operations");

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
    case "x^2":
      calculator.execute(new SquaredCommand());
      break;
    case "x^3":
      calculator.execute(new CubedCommand());
      break;
    case "10^x":
      calculator.execute(new PowerOf10Command());
      break;
    case "x^y":
      calculator.execute(new PowerOfYCommand());
      break;
    case "x!":
      calculator.execute(new FactorialCommand());
      break;
    default:
      arithmeticCommandSelector(operation);
      break;
  }

  if (operation === "y√x" || operation === "x^y")
    calculator.operationSigns.push(operation);

  console.log(calculator);
}
