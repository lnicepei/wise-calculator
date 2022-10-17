import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { MultiplyCommand } = require("../MultiplyCommand");

test.skip("should not change initial values of the calculator on first execution", () => {
  calculator.execute(new MultiplyCommand());
  expect(calculator.previousValue).toBe(null);
});

test.skip("should open calculator.previousValue on execution with one operand", () => {
  calculator.previousValue = 4;
  calculator.execute(new MultiplyCommand());
  expect(calculator.value).toBe(0);
});

test.skip("should multiply 3 and 3, and get 9", () => {
  calculator.value = 3;
  calculator.previousValue = 3;
  calculator.execute(new MultiplyCommand());
  expect(calculator.previousValue).toBe(9);
});
