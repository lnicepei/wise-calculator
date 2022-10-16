import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { PowerOfYCommand } = require("../PowerOfYCommand");

const { NumberButtonCommand } = require("../../../buttons/numbers");

test.skip("should not change previousValue and change value to 0 on first execution", () => {
  calculator.execute(new PowerOfYCommand());
  expect(calculator.previousValue).toBe(null);
  expect(calculator.value).toBe(0);
});

test.skip("should be executed with one operand", () => {
  calculator.previousValue = 4;

  calculator.execute(new PowerOfYCommand());

  expect(calculator.value).toBe(0);
});

test.skip("should work properly with two operands", () => {
  calculator.previousValue = 4;
  calculator.value = 2;
  calculator.operationSigns = [];

  calculator.execute(new PowerOfYCommand());

  expect(calculator.previousValue).toBe(16);
});

test.skip("should execute previous operation before being executed itself", () => {
  calculator.previousValue = null;
  calculator.value = null;

  calculator.execute(new NumberButtonCommand(1));
  calculator.operationSigns.push("+");
  calculator.execute(new NumberButtonCommand(2));

  calculator.execute(new PowerOfYCommand());

  expect(calculator.previousValue).toBe(3);
});
