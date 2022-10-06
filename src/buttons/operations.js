import { calculator } from "../calculator/calculator";
import {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  SubtractCommand,
} from "../operations/operations";
import { screen } from "../screen/screen";
import "../styles/numbers.scss";

const operations = document.querySelector(".operations").children;
console.log(operations);
for (let element of operations) {
  element.addEventListener("click", eventHandler);
}

function eventHandler(event) {
  switch (event.target.textContent) {
    case "+":
      calculator.execute(new AddCommand(screen.rightOperand));
      break;
    case "-":
      calculator.execute(new SubtractCommand(screen.rightOperand));
      break;
    case "*":
      calculator.execute(new MultiplyCommand(screen.rightOperand));
      break;
    case "/":
      calculator.execute(new DivideCommand(screen.rightOperand));
      break;

    default:
      break;
  }
}
