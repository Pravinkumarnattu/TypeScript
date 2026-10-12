export {};

//In TypeScript, a tuple is a specialized array with a fixed length and predefined types for each position.
//  While a standard JavaScript array can grow indefinitely and contain any mix of types, a TypeScript tuple
// enforces the exact order and type of its elements during compilation.

//1. Basic Syntax & Usage
//Array
const userArray = ["Pravin", 20, true];

userArray[0] = 50;
console.log(userArray);

//Tuple
const userTuple: [string, number, boolean] = ["Pravin", 20, true];

// userTuple[0] = 50; // Type 'number' is not assignable to type 'string'.
userTuple[0] = "Kumar";
console.log(userTuple);

//2. Tuple Variations and Features

// Named Tuple Example
const coordinate: [x: number, y: number] = [10, 25];
const [x, y] = coordinate;
console.log(x, y);

// Optional Element Example (3rd element is optional)
const point: [number, number, string?] = [10, 20];
const coloredPoint: [number, number, string?] = [10, 20, "red"];

//Rest Elements
let restTuple: [string, ...number[]];
restTuple = ["Pravin", 20, 21, 23];
console.log(restTuple);

// 3. Modifying Elements & The Immutability Loophole

//The Loophole: Because tuples compile to standard JavaScript arrays,
// array mutation methods like .push(), .pop(), and .splice() are allowed by default,
// which can bypass the fixed length restriction at runtime.
let profile: [string, number] = ["Bob", 30];
profile.push("admin"); // TypeScript allows this! Length is now 3.

//To enforce strict fixed lengths and prevent mutations, use the readonly modifier or the as const assertion.
// 1. Using readonly
// const strictUser: readonly [string, number] = ["Alice", 25];
// strictUser.push("admin"); // ❌ Error: Property 'push' does not exist on type 'readonly [string, number]'

// // 2. Using 'as const' (Infers a readonly tuple automatically)
// const location = [40.7128, -74.006] as const;
// location[0] = 34.0522; // ❌ Error: Cannot assign to '0' because it is a read-only property

// 4. Destructuring Tuples
const employee: [string, number, boolean] = ["John Doe", 45, true];

// Destructuring
const [name, age, isActive] = employee;
console.log(name); // "John Doe"
