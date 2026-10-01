export {};

const concat = (a: string, b: string, c: string = "c") => {
  return a + b + c;
};

console.log(concat("a", "b", "c"));
console.log(concat("a", "b"));
