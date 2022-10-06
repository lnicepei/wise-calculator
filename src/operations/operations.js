import { Calculator } from "../calculator/calculator";

export class AddCommand extends Calculator {
  constructor(addOperand) {
    super(addOperand);
    this.addOperand = addOperand;
  }

  execute(value) {
    return value + this.addOperand;
  }

  undo(value) {
    return value - this.addOperand;
  }
}

export class MultiplyCommand extends Calculator {
  constructor(multiplyOperand) {
    this.multiplyOperand = multiplyOperand;
  }

  execute(value) {
    return value * this.multiplyOperand;
  }

  undo(value) {
    return value / this.multiplyOperand;
  }
}

export class DivideCommand extends Calculator {
  constructor(addOperand) {
    this.addOperand = addOperand;
  }

  execute(value) {
    return value / this.addOperand;
  }

  undo(value) {
    return value * this.addOperand;
  }
}

export class SubtractCommand extends Calculator {
  constructor(addOperand) {
    this.addOperand = addOperand;
  }

  execute(value) {
    return value - this.addOperand;
  }

  undo(value) {
    return value + this.addOperand;
  }
}
