import "../styles/calculator.scss";
import "../styles/background.scss";

export class Calculator {
  constructor() {
    this.value = null;
    this.previousValue = null;
    this.operations = [];
    this.operationSigns = [];
  }

  execute(command) {
    // this.operations.push(command);
    return command.execute(this.value, this.previousValue);
    // Execute penultimate operation?
  }

  undo() {
    const lastCommand = this.operations.pop();
    [this.value, this.previousValue] = lastCommand?.undo(
      this.value,
      this.previousValue
    ) || [null, null, []];
  }
  // TODO: Rewrite undo methods
}

const calculator = new Calculator();

export { calculator };
