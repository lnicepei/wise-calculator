import { calculator } from "../calculator/calculator";
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
    !(
      previousCommand instanceof AddCommand ||
      previousCommand instanceof SubtractCommand ||
      previousCommand instanceof MultiplyCommand ||
      previousCommand instanceof DivideCommand
    ) ||
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
