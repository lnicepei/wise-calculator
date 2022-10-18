import { NumberButtonCommand } from "../buttons/numbers";
import { calculator } from "../calculator/calculator";
import {
  CubedCommand,
  FactorialCommand,
  MemoryClearCommand,
  MemoryMinusCommand,
  MemoryPlusCommand,
  MemoryRecallCommand,
  PercentCommand,
  PowerOf10Command,
  PowerOfYCommand,
  ReciprocateCommand,
  RevertCommand,
  SquaredCommand,
  SquareRootCommand,
  ThirdPowerRootCommand,
  YRootCommand,
} from "../operations/advancedOperations/index";
import {
  AddCommand,
  DivideCommand,
  EqualsCommand,
  MultiplyCommand,
  SubtractCommand,
} from "../operations/arithmeticOperations/index";
import { advancedCommandSelector } from "./advancedOperationSelector";

const arithmeticOperations = document.querySelectorAll(
  ".arithmetic-operations, .equals, .undo"
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
    previousCommand instanceof ReciprocateCommand ||
    previousCommand instanceof RevertCommand ||
    previousCommand instanceof PercentCommand ||
    previousCommand instanceof SquareRootCommand ||
    previousCommand instanceof ThirdPowerRootCommand ||
    previousCommand instanceof MemoryRecallCommand ||
    previousCommand instanceof MemoryClearCommand ||
    previousCommand instanceof MemoryMinusCommand ||
    previousCommand instanceof MemoryPlusCommand ||
    previousCommand instanceof SquaredCommand ||
    previousCommand instanceof CubedCommand ||
    previousCommand instanceof YRootCommand ||
    previousCommand instanceof PowerOf10Command ||
    previousCommand instanceof FactorialCommand ||
    previousCommand instanceof PowerOfYCommand ||
    operation === "undo" ||
    operation === "y√x" ||
    operation === "AC" ||
    operation === "x^y"
  ) {
    switch (
      (operation !== "undo" &&
        calculator.operationSigns.at(-1) !== "=" &&
        calculator.operationSigns.at(-1)) ||
      operation
    ) {
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
      case "undo":
        calculator.undo();
        break;
      default:
        advancedCommandSelector(calculator.operationSigns.at(-1) || operation);
        break;
    }
    if (operation !== "y√x" && operation !== "x^y" && operation !== "undo")
      calculator.operationSigns.push(operation);
  } else {
    calculator.operationSigns.splice(-1, 1, operation);
  }
  console.log(calculator);
}
