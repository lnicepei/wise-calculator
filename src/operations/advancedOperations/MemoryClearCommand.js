import { UnaryCommand } from "../../calculator/unaryOperations";

export class MemoryClearCommand extends UnaryCommand {
  constructor() {
    super();
    this.memory = +localStorage.getItem("memory");
  }

  execute() {
    localStorage.clear();
  }

  undo() {
    localStorage.setItem("memory", this.memory);
  }
}
