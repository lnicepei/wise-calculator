import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { MemoryPlusCommand } = require("../MemoryPlusCommand");

const { AddCommand } = require("../../arithmeticOperations/AddCommand");

const { NumberButtonCommand } = require("../../../buttons/numbers");

test.skip("should call localStorage.setItem method", () => {
  jest.spyOn(Storage.prototype, "setItem");
  Storage.prototype.setItem = jest.fn();

  calculator.previousValue = 234;

  calculator.execute(new MemoryPlusCommand());

  expect(localStorage.setItem).toHaveBeenCalled();
});

test.skip("should not change any values on its execution", () => {
  calculator.previousValue = 2;

  calculator.execute(new MemoryPlusCommand());

  expect(calculator.previousValue).toBe(2);
});

test.skip("should NOT execute previous operation before being executed itself", () => {
  calculator.previousValue = null;

  calculator.execute(new NumberButtonCommand(1));
  calculator.execute(new AddCommand());
  calculator.execute(new NumberButtonCommand(2));

  calculator.execute(new MemoryPlusCommand());

  expect(calculator.previousValue).toBe(1);
  expect(calculator.value).toBe(2);
});
