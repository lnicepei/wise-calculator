import { UnaryCommand } from "../../calculator/unaryOperations";

export class MemoryMinusCommand extends UnaryCommand {
  constructor() {
    super();
    this.memoryValue = localStorage.getItem("memory");
  }

  execute() {
    localStorage.setItem(
      "memory",
      +this.memoryValue - (this.value ?? this.previousValue)
    );
  }

  undo() {
    localStorage.setItem(
      "memory",
      +this.memoryValue + +(this.value ?? this.previousValue)
    );
  }
}
