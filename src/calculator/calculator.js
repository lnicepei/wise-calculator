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
    this.operations.push(command);
    return command.execute();
  }

  undo() {
    const lastCommand = this.operations.pop();
    this.operationSigns.pop();
    return lastCommand.undo();
  }
}

const calculator = new Calculator();

export { calculator };
