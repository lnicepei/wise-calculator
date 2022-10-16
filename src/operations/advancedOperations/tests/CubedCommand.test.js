import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { CubedCommand } = require("../CubedCommand");

const { NumberButtonCommand } = require("../../../buttons/numbers");

test.skip("should not change initial values of the calculator on first execution", () => {
  calculator.execute(new CubedCommand());
  calculator.operationSigns = [];
  expect(calculator.previousValue).toBe(null);
});

test.skip("should be executed with one operand", () => {
  calculator.previousValue = 4;
  calculator.operationSigns = [];

  calculator.execute(new CubedCommand());

  expect(calculator.previousValue).toBe(64);
});

test.skip("should execute previous operation before being executed itself", () => {
  calculator.previousValue = null;
  calculator.value = null;

  calculator.execute(new NumberButtonCommand(1));
  calculator.operationSigns.push("+");
  calculator.execute(new NumberButtonCommand(2));

  calculator.execute(new CubedCommand());

  expect(calculator.previousValue).toBe(27);
});
