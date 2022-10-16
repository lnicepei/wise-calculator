import { calculator } from "../../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const { MemoryRecallCommand } = require("../MemoryRecallCommand");

test.skip("should substitute initial value with the one from memory", () => {
  calculator.execute(new MemoryRecallCommand());
  expect(calculator.previousValue).toBe(0);
});

test.skip("should change values on its execution", () => {
  calculator.previousValue = 1234;
  calculator.execute(new MemoryRecallCommand());
  expect(calculator.previousValue).toBe(0);
});

test.skip("should call localStorage.getItem method", () => {
  jest.spyOn(Storage.prototype, "getItem");
  Storage.prototype.getItem = jest.fn();

  calculator.previousValue = 234;

  calculator.execute(new MemoryRecallCommand());

  expect(localStorage.getItem).toHaveBeenCalled();
});
