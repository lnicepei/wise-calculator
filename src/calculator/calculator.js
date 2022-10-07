import "../styles/calculator.scss";
import "../styles/background.scss";

export class Calculator {
  constructor() {
    // this.firstOperand = 0;
    // this.secondOperand = null; //TODO: what to do with those operands??
    this.value = 0;
    this.previousValue = null;
    this.operations = [];
  }

  execute(command) {
    if (this.operations[this.operations.length - 1] !== command)
      this.operations.push(command);
    this.value = command.execute(this.value);
  }

  undo() {
    const lastCommand = this.operations.pop();
    this.value = lastCommand.undo(this.value) || 0; // TODO: undo all operations should return this.value = 0
  }
}

const calculator = new Calculator();

export { calculator };
