import { calculator } from "../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const {
  SubtractCommand,
} = require("../../operations/arithmeticOperations/SubtractCommand");

test.skip("should not change initial values of the calculator on first execution", () => {
  calculator.execute(new SubtractCommand());
  expect(calculator.previousValue).toBe(null);
});

test.skip("should open calculator.previousValue on execution with one operand", () => {
  calculator.previousValue = 4;
  calculator.execute(new SubtractCommand());
  expect(calculator.value).toBe(0);
});

test.skip("should subtract 3 from 5, and get 2", () => {
  calculator.value = 3;
  calculator.previousValue = 5;
  calculator.execute(new SubtractCommand());
  expect(calculator.previousValue).toBe(2);
});
