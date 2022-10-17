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
    if (this.previousValue === null && this.value === null) {
      command.executeFirstOperation();
    } else if (this.value === null) {
      command.executeWithOneArg();
    } else {
      command.executeWithTwoArgs();
    }
  }

  undo() {
    const lastCommand = this.operations.pop();
    this.operationSigns.pop();
    if (lastCommand)
      if (this.value === null) {
        lastCommand.undoWithOneArg();
      } else {
        lastCommand.undoWithTwoArgs();
      }
  }
}

const calculator = new Calculator();

export { calculator };
