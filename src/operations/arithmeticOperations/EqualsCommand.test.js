import { calculator } from "../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const {
  EqualsCommand,
} = require("../../operations/arithmeticOperations/EqualsCommand");

test.skip("should not change initial values of the calculator on first execution", () => {
  calculator.execute(new EqualsCommand());
  expect(calculator.previousValue).toBe(null);
});

test.skip("should NOT open calculator.previousValue on execution with one operand", () => {
  calculator.previousValue = 4;
  calculator.execute(new EqualsCommand());
  expect(calculator.value).toBe(null);
});

test.skip("should execute last operation and show the result of it", () => {
  calculator.previousValue = 1;
  calculator.value = 2;
  calculator.operationSigns.push("+");
  calculator.execute(new EqualsCommand());
  expect(calculator.previousValue).toBe(3);
});
