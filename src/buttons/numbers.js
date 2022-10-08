import { updateScreen } from "../screen/updateScreen";
import { Calculator, calculator } from "../calculator/calculator";
import "../styles/numbers.scss";

class NumberButtonCommand extends Calculator {
  constructor(numberButton) {
    super();
    this.numberButton = numberButton;
  }

  execute(value, previousValue, operations) {
    console.log(operations);
    if (value > 1000000000000000) value = 0;

    if (this.numberButton === ".") {
      if (value !== null && !value.toString().includes(".")) {
        return [value + ".", previousValue];
      }
      if(!previousValue.toString().includes(".")) {
        return [value, previousValue + "."];
      }
    }

    if (previousValue === null && value === null) {
      return [value, +this.numberButton.toString()];
    } else if (value === null) {
      return [
        value,
        +(previousValue.toString() + this.numberButton.toString()),
      ];
    } else {
      return [
        +(value.toString() + this.numberButton.toString()),
        previousValue,
      ];
    }
  }

  undo(value, previousValue) {
    console.log("Undo from numbers");
    if (value === null) {
      return [
        null,
        +previousValue
          ?.toString()
          .substring(0, previousValue.toString().length - 1) || null,
      ]; // FIXME: undo no longer works
    } else {
      return [
        +value.toString().substring(0, value.toString().length - 1) || null,
        previousValue,
      ];
    }
  }
}

const numbers = document.querySelectorAll(".number");

for (let number of numbers) {
  number.addEventListener("click", numberCommand);
}

function numberCommand(event) {
  calculator.execute(new NumberButtonCommand(event.target.textContent));
  console.log(calculator);
  updateScreen();
}
