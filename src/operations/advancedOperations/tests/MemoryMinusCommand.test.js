import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { MemoryMinusCommand } = require("../MemoryMinusCommand");

const { AddCommand } = require("../../arithmeticOperations/AddCommand");

const { NumberButtonCommand } = require("../../../buttons/numbers");

test.skip("should not change any values on its execution", () => {
  calculator.execute(new MemoryMinusCommand());
  calculator.operationSigns = [];
  expect(calculator.previousValue).toBe(null);
});

test.skip("should call localStorage method", () => {
  jest.spyOn(Storage.prototype, "setItem");
  Storage.prototype.setItem = jest.fn();

  calculator.previousValue = 234;

  calculator.execute(new MemoryMinusCommand());

  expect(localStorage.setItem).toHaveBeenCalled();
});

test.skip("should NOT execute previous operation before being executed itself", () => {
  calculator.previousValue = null;
  calculator.execute(new NumberButtonCommand(1));
  calculator.execute(new AddCommand());
  calculator.execute(new NumberButtonCommand(2));

  calculator.execute(new MemoryMinusCommand());

  expect(calculator.previousValue).toBe(1);
  expect(calculator.value).toBe(2);
});
