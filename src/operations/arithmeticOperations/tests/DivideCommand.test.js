import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { DivideCommand } = require("../DivideCommand");

test.skip("should not change initial values of the calculator on first execution", () => {
  calculator.execute(new DivideCommand());
  expect(calculator.previousValue).toBe(null);
});

test.skip("should open calculator.previousValue on execution with one operand", () => {
  calculator.previousValue = 4;
  calculator.execute(new DivideCommand());
  expect(calculator.value).toBe(0);
});

test.skip("should divide 6 by 3, and get 2", () => {
  calculator.value = 3;
  calculator.previousValue = 6;
  calculator.execute(new DivideCommand());
  expect(calculator.previousValue).toBe(2);
});
