import { calculator } from "../calculator/calculator";
import { updateScreen } from "../screen/updateScreen";
import { NumberButtonCommand } from "../buttons/numbers";
import { advancedCommandSelector } from "./advancedOperationSelector";
import { RevertCommand } from "../operations/advancedOperations/RevertCommand";
import { FactorialCommand } from "../operations/advancedOperations/FactorialCommand";
import { PowerOf10Command } from "../operations/advancedOperations/PowerOf10Command";
import { CubedCommand } from "../operations/advancedOperations/CubedCommand";
import { SquaredCommand } from "../operations/advancedOperations/SquaredCommand";
import { YRootCommand } from "../operations/advancedOperations/YRootCommand";
import { MemoryRecallCommand } from "../operations/advancedOperations/MemoryRecallCommand";
import { ThirdPowerRootCommand } from "../operations/advancedOperations/ThirdPowerRootCommand";
import { SquareRootCommand } from "../operations/advancedOperations/SquareRootCommand";
import { ReciprocateCommand } from "../operations/advancedOperations/ReciprocateCommand";
import { PercentCommand } from "../operations/advancedOperations/PercentCommand";
import { DivideCommand } from "../operations/arithmeticOperations/DivideCommand";
import { MultiplyCommand } from "../operations/arithmeticOperations/MultiplyCommand";
import { SubtractCommand } from "../operations/arithmeticOperations/SubtractCommand";
import { EqualsCommand } from "../operations/arithmeticOperations/EqualsCommand";
import { AllClearCommand } from "../operations/arithmeticOperations/AllClearCommand";
import { AddCommand } from "../operations/arithmeticOperations/AddCommand";

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
    previousCommand instanceof SquaredCommand ||
    previousCommand instanceof CubedCommand ||
    previousCommand instanceof YRootCommand ||
    previousCommand instanceof PowerOf10Command ||
    previousCommand instanceof FactorialCommand ||
    operation === "undo" ||
    operation === "y√x" ||
    operation === "x^y"
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
        advancedCommandSelector(operation);
        break;
    }
    calculator.operationSigns.push(operation);
  } else {
    calculator.operationSigns.splice(-1, 1, operation);
  }
  console.log(calculator);
}
