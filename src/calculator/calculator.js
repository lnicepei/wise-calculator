import "../styles/calculator.scss";

export class Calculator {
  constructor(value = 0) {
    this.value = value;
    this.operations = [];
  }

  execute(command) {
    this.operations.push(command);
    this.value = command.execute(this.value);
  }

  undo() {
    const lastCommand = this.operations.pop();
    this.value = lastCommand.undo(this.value);
  }
}

const calculator = new Calculator();

export { calculator };
