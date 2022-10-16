import { calculator } from "../../calculator/calculator";

document.body.innerHTML = "<div class=screen></div>";

const {
  AllClearCommand,
} = require("../../operations/arithmeticOperations/AllClearCommand");

test.skip("should clear up calculator values", () => {
  calculator.execute(new AllClearCommand());
  expect(calculator.previousValue).toBe(null);
  expect(calculator.value).toBe(null);
});
