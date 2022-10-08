import "../styles/calculator.scss";
import "../styles/background.scss";

export class Calculator {
  constructor() {
    this.value = null;
    this.previousValue = null;
    this.operations = [];
  }

  execute(command) {
    this.operations.push(command);
    [this.value, this.previousValue] = command.execute(
      this.value,
      this.previousValue,
      this.operations
    );
  }

  undo() {
    const lastCommand = this.operations.pop();
    [this.value, this.previousValue] = lastCommand?.undo(
      this.value,
      this.previousValue
    ) || [null, null];
  }
}

const calculator = new Calculator();

export { calculator };
