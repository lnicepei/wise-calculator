import { Calculator } from "../../calculator/calculator";
document.body.innerHTML = "<div class=screen></div>";
const {
  AddCommand,
} = require("../../operations/arithmeticOperations/AddCommand");

const calculator = new Calculator();

console.log(calculator.previousValue);

test("should return null on first execution", () => {
  calculator.execute(new AddCommand());
  expect(calculator.previousValue).toBe(null);
});

test("should return 2 on pressing button 2", () => {
  calculator.value = 3;
  calculator.previousValue = 3;
  calculator.execute(new AddCommand());
  expect(calculator.previousValue).toBe(6);
});
