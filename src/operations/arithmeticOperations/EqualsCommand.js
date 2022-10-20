import { BinaryCommand } from "../../calculator/binaryOperations";
import { calculator } from "../../calculator/calculator";

export class EqualsCommand extends BinaryCommand {
  constructor() {
    super();
  }

  // executeFirstOperation() {}

  // executeWithOneArg() {
  // if (
  //   calculator.operationSigns.at(-1) !== "=" &&
  //   calculator.operationSigns.at(-1) !== undefined
  // ) {
  //   arithmeticCommandSelector(calculator.operationSigns.at(-1));
  // }
  // }

  // executeWithTwoArgs() {
  // if (
  //   calculator.operationSigns.at(-1) !== "=" &&
  //   calculator.operationSigns.at(-1) !== undefined
  // ) {
  //   arithmeticCommandSelector(calculator.operationSigns.at(-1));
  //   calculator.value = 0;
  // } else if (
  //   calculator.operationSigns.at(-1) !== "=" &&
  //   calculator.operationSigns.at(-1) === undefined
  // ) {
  //   calculator.previousValue = 0;
  // } else {
  //   calculator.operationSigns.pop();
  //   this.executeWithTwoArgs();
  // }
  // }

  execute() {
    // if (calculator.value === null) {
    //   if (
    //     calculator.operationSigns.at(-1) !== "=" &&
    //     calculator.operationSigns.at(-1) !== undefined
    //   ) {
    //     arithmeticCommandSelector(calculator.operationSigns.at(-1));
    //   }
    // } else {
    //   if (
    //     calculator.operationSigns.at(-1) !== "=" &&
    //     calculator.operationSigns.at(-1) !== undefined
    //   ) {
    //     arithmeticCommandSelector(calculator.operationSigns.at(-1));
    //     calculator.value = 0;
    //   } else if (
    //     calculator.operationSigns.at(-1) !== "=" &&
    //     calculator.operationSigns.at(-1) === undefined
    //   ) {
    //     calculator.previousValue = 0;
    //   } else {
    //     calculator.operationSigns.pop();
    //     this.execute();
    //   }
    // }
    super.execute();
    calculator.value = null;
  }
}
