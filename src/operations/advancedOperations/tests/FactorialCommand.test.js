import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { FactorialCommand } = require("../FactorialCommand");

const { NumberButtonCommand } = require("../../../buttons/numbers");

test.skip("should change calculator.previousValue to 1 on first execution", () => {
  calculator.execute(new FactorialCommand());
  calculator.operationSigns = [];
  expect(calculator.previousValue).toBe(1);
});

test.skip("should be executed with one operand", () => {
  calculator.previousValue = 4;
  calculator.operationSigns = [];
  calculator.execute(new FactorialCommand());
  expect(calculator.previousValue).toBe(24);
});

test.skip("should execute previous operation before being executed itself", () => {
  calculator.value = null;
  calculator.previousValue = null;

  calculator.execute(new NumberButtonCommand(1));
  calculator.execute(new NumberButtonCommand(2));

  calculator.operationSigns.push("+");

  calculator.execute(new FactorialCommand());
  expect(calculator.previousValue).toBe(6);
});
