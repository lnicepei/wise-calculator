import { BinaryCommand } from "../calculator/binaryOperations";
import { calculator } from "../calculator/calculator";
import { UnaryCommand } from "../calculator/unaryOperations";
import {
  PowerOfYCommand,
  YRootCommand,
} from "../operations/advancedOperations/index";
import {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from "../operations/arithmeticOperations/index";

const arithmeticOperations = document.querySelectorAll(
  ".arithmetic-operations"
);

for (let element of arithmeticOperations) {
  element.addEventListener("click", arithmeticCommandSelector);
}

export function arithmeticCommandSelector(event) {
  const operation = event?.target?.textContent || event;
  const currentCommand = calculator.operations.at(-1);
  const previousCommand = calculator.operations.at(-2);

  if (
    !(currentCommand instanceof BinaryCommand) ||
    previousCommand instanceof UnaryCommand
  ) {
    switch (calculator.operationSigns.pop() || operation) {
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
      case "x^y":
        calculator.execute(new PowerOfYCommand());
        break;
      case "y√x":
        calculator.execute(new YRootCommand());
        break;
      default:
        break;
    }
  }
  console.log(calculator);
  if (operation !== "=")
    calculator.operationSigns.push(operation);
}
