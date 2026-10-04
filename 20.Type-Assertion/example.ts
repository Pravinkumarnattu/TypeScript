export {}
// Type assertions in TypeScript allow you to explicitly tell the compiler to treat a value as a specific type, overriding its automatic type inference. 
// This is useful when you have more information about a value's type than TypeScript can automatically figure out.

const element = document.getElementById("myELement") as HTMLInputElement
const element2 = document.getElementById("myELement") as HTMLInputElement
const element3 = document.getElementById("myELement") as HTMLInputElement

element.value = "Input value"


//Syntax Options

// The as Keyword (Recommended)
// This is the standard syntax for modern TypeScript.

// const someValue: unknown = "this is a string";
// const strLength: number = (someValue as string).length;


// Common Use Cases
// 1. Working with DOM Elements
// When interacting with the webpage, browser APIs usually return a broad interface like HTMLElement or Element.
//  If you know the exact element type, an assertion allows you to access its specific properties.

// TypeScript only infers this as an HTMLElement | null
// const myInput = document.getElementById("username-field") as HTMLInputElement;

// Now you can safely access .value without compilation errors
// myInput.value = "John Doe"; 


// 2. Handling unknown or any Data
// When fetching data from an external API or parsing JSON, the data types might be inferred as any or unknown.

// const apiResponse: unknown = { id: 101, name: "Alice" };

// interface User {
//   id: number;
//   name: string;
// }

// // Asserting the schema structure
// const user = apiResponse as User;
// console.log(user.name);