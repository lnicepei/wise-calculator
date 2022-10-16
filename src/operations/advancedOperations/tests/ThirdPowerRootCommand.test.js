import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { ThirdPowerRootCommand } = require("../ThirdPowerRootCommand");

const { NumberButtonCommand } = require("../../../buttons/numbers");

test.skip("should not change initial values of the calculator on first execution", () => {
  calculator.execute(new ThirdPowerRootCommand());
  calculator.operationSigns = [];
  expect(calculator.previousValue).toBe(null);
});

test.skip("should be executed with one operand", () => {
  calculator.previousValue = 8;

  calculator.execute(new ThirdPowerRootCommand());

  expect(calculator.previousValue).toBe(2);
});

test.skip("should execute previous operation before being executed itself", () => {
  calculator.previousValue = null;
  calculator.value = null;

  calculator.execute(new NumberButtonCommand(15));
  calculator.operationSigns.push("+");
  calculator.execute(new NumberButtonCommand(12));

  calculator.execute(new ThirdPowerRootCommand());

  expect(calculator.previousValue).toBe(3);
});
