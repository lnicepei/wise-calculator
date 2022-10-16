import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { PowerOf10Command } = require("../PowerOf10Command");

const { NumberButtonCommand } = require("../../../buttons/numbers");

test.skip("should not change initial values of the calculator on first execution", () => {
  calculator.execute(new PowerOf10Command());
  expect(calculator.previousValue).toBe(1);
});

test.skip("should be executed with one operand", () => {
  calculator.previousValue = 4;

  calculator.execute(new PowerOf10Command());

  expect(calculator.previousValue).toBe(10000);
});

test.skip("should execute previous operation before being executed itself", () => {
  calculator.previousValue = null;
  calculator.value = null;

  calculator.execute(new NumberButtonCommand(1));
  calculator.operationSigns.push("+");
  calculator.execute(new NumberButtonCommand(2));

  calculator.execute(new PowerOf10Command());

  expect(calculator.previousValue).toBe(1000);
});
