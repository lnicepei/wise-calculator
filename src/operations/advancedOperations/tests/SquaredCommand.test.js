import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { SquaredCommand } = require("../SquaredCommand");

const { NumberButtonCommand } = require("../../../buttons/numbers");

test.skip("should not change initial values of the calculator on first execution", () => {
  calculator.execute(new SquaredCommand());
  calculator.operationSigns = [];
  expect(calculator.previousValue).toBe(null);
});

test.skip("should be executed with one operand", () => {
  calculator.previousValue = 4;

  calculator.execute(new SquaredCommand());

  expect(calculator.previousValue).toBe(16);
});

test.skip("should execute previous operation before being executed itself", () => {
  calculator.previousValue = null;
  calculator.value = null;

  calculator.execute(new NumberButtonCommand(2));
  calculator.operationSigns.push("+");
  calculator.execute(new NumberButtonCommand(3));

  calculator.execute(new SquaredCommand());

  expect(calculator.previousValue).toBe(25);
});
