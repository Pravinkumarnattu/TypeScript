export {}
function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));
//console.log(add("1", "2")); // We need only addition of two numbers, but here we are passing two strings as arguments to the function.
//  To avoid this issuse, we can use type annotations in TypeScript to specify the expected types of the function parameters.
// This will help catch type errors at compile time and ensure that the function is used correctly.
