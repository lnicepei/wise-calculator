import { calculator, Calculator } from "../../calculator/calculator";

export class AllClearCommand extends Calculator {
  constructor() {
    super();
    this.value = calculator.value;
    this.previousValue = calculator.previousValue;
    this.operations = calculator.operations;
    this.operationSigns = calculator.operationSigns;
    this.requiresPreviousOperationFinished = false;
  }

  executeFirstOperation() {
    calculator.value = null;
    calculator.previousValue = null;
    calculator.operations = [];
    calculator.operationSigns = [];
  }

  executeWithOneArg() {
    calculator.value = null;
    calculator.previousValue = null;
    calculator.operations = [];
    calculator.operationSigns = [];
  }

  executeWithTwoArgs() {
    calculator.value = null;
    calculator.previousValue = null;
    calculator.operations = [];
    calculator.operationSigns = [];
  }

  undo() {
    calculator.value = this.value;
    calculator.previousValue = this.previousValue;
    calculator.operations = this.operations;
    calculator.operationSigns = this.operationSigns;
  }
}
