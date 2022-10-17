import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { AddCommand } = require("../AddCommand");

test.skip("should not change initial values of the calculator on first execution", () => {
  calculator.execute(new AddCommand());
  expect(calculator.previousValue).toBe(null);
});

test.skip("should open calculator.previousValue on execution with one operand", () => {
  calculator.previousValue = 4;
  calculator.execute(new AddCommand());
  expect(calculator.value).toBe(0);
});

test.skip("should sum up 3 and 3, and get 6", () => {
  calculator.value = 3;
  calculator.previousValue = 3;
  calculator.execute(new AddCommand());
  expect(calculator.previousValue).toBe(6);
});
