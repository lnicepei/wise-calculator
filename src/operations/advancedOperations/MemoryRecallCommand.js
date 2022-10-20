import { calculator } from "../../calculator/calculator";
import { UnaryCommand } from "../../calculator/unaryOperations";
import { updateScreen } from "../../screen/updateScreen";

export class MemoryRecallCommand extends UnaryCommand {
  constructor() {
    super();
  }

  execute() {
    super.execute();
    if (calculator.value === null) {
      calculator.previousValue = +localStorage.getItem("memory");
      updateScreen();
    } else {
      if (calculator.operationSigns.at(-1) !== "=") {
        calculator.value = +localStorage.getItem("memory");
        updateScreen(calculator.value);
      }
    }
  }
}
