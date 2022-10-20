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
    command.execute();
  }

  undo() {
    const lastCommand = this.operations.pop();
    this.operationSigns.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }

  // если нет второго операнда, выбросить ошибку, в противном случае - выполнить
  // последнюю операцию, если возможно(не менять, если не возможно)

  // при смене знака с бинарного на бинарный менять знак

  // при смене с бинарного на унарный выбрасывать ошибку
}

const calculator = new Calculator();

export { calculator };
