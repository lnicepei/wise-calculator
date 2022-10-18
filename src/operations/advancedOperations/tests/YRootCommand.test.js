import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { YRootCommand } = require("../YRootCommand");

const { NumberButtonCommand } = require("../../../buttons/numbers");

beforeEach(() => {
  calculator.value = null;
  calculator.previousValue = null;
  calculator.operationSigns = [];
});

test.skip("should not change previousValue and value on first execution", () => {
  calculator.execute(new YRootCommand());
  expect(calculator.previousValue).toBe(null);
  expect(calculator.value).toBe(null);
});

test("should be executed with one operand", () => {
  calculator.previousValue = 4;
  calculator.execute(new YRootCommand());
  expect(calculator.value).toBe(0);
});

test("should work properly with two operands", () => {
  calculator.previousValue = 3;
  calculator.value = 27;

  calculator.execute(new YRootCommand());

  expect(calculator.previousValue).toBe(3);
});

test("should execute previous operation before being executed itself", () => {
  calculator.execute(new NumberButtonCommand(1));
  calculator.operationSigns.push("+");
  calculator.execute(new NumberButtonCommand(2));

  calculator.execute(new YRootCommand());

  expect(calculator.previousValue).toBe(3);
  expect(calculator.value).toBe(0);
});
