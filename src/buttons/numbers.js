import { updateScreen } from "../screen/updateScreen";
import { Calculator, calculator } from "../calculator/calculator";
import "../styles/numbers.scss";
// Хранить значение в виде строки (для удобства добавления .)

export class NumberButtonCommand extends Calculator {
  constructor(numberButton) {
    super();
    this.numberButton = numberButton;
  }

  execute(value, previousValue, operations) {
    if (value > 1000000000000000 || previousValue > 1000000000000000)
      return [value, previousValue, operations];

    if (this.numberButton === ".") {
      if (value !== null && !value.toString().includes(".")) {
        return [value + ".", previousValue, operations];
      }
      if (!previousValue.toString().includes(".")) {
        return [value, previousValue + ".", operations];
      }
      return [value, previousValue, operations];
    }

    if (previousValue === null && value === null) {
      return [value, +this.numberButton, operations];
    } else if (value === null) {
      return [value, +(previousValue + this.numberButton), operations];
    } else {
      return [+(value + this.numberButton), previousValue, operations];
    }
  }

  undo(value, previousValue, operations) {
    if (previousValue === null && value === null) {
      return [value, previousValue, operations];
    } else if (value === null || value === 0) {
      return [
        null,
        +previousValue
          .toString()
          .substring(0, previousValue.toString().length - 1) || null,
        operations,
      ];
    } else {
      return [
        +value.toString().substring(0, value.toString().length - 1) || null,
        previousValue,
        operations,
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
