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
    [this.value, this.previousValue, this.operations] = command.execute(
      this.value,
      this.previousValue,
      this.operations
    );
    // Execute penultimate operation?
  }

  undo() {
    const lastCommand = this.operations.pop();
    [this.value, this.previousValue, this.operations] = lastCommand?.undo(
      this.value,
      this.previousValue,
      this.operations
    ) || [null, null, []];
  }
}

const calculator = new Calculator();

export { calculator };
