export {};

// class NumberStack {
//   private items: number[] = [];

//   push(item: number): void {
//     this.items.push(item);
//   }

//   pop(): number | undefined {
//     // pipe operator is used to indicate that the return type can be either a number or undefined, which is useful for handling cases where the stack might be empty.
//     return this.items.pop();
//   }
// }

// class StringStack {
//   private items: string[] = [];

//   push(item: string): void {
//     this.items.push(item);
//   }

//   pop(): string | undefined {
//     return this.items.pop();
//   }
// }

// const numberStack = new NumberStack();
// numberStack.push(1);
// numberStack.push(2);
// console.log(numberStack.pop()); // Output: 2

// const stringStack = new StringStack();
// stringStack.push("Alice");
// stringStack.push("Pravin");
// console.log(stringStack.pop()); // Output: Pravin

// Generics allow you to create reusable components that can work with a variety of types rather than a single one.
// Generics provide a way to create functions, classes, and interfaces that can operate on different data types while still maintaining type safety.
// Generics are defined using angle brackets <> and can be used to define type parameters that can be replaced with specific types when the generic is used.
// Example of a generic class that can work with any type of data, not just numbers or strings. The type parameter T is used to define the type of the items in the stack, allowing for greater flexibility and reusability.

class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // Output: 2

const stringStack = new Stack<string>();
stringStack.push("Alice");
stringStack.push("Pravin");
console.log(stringStack.pop()); // Output: Pravin
