const concat = (a:string, b:string, c?:string) => { // ? is used to make the parameter optional. 
// It means that the parameter can be passed or not passed when calling the function. 
// If the parameter is not passed, it will be undefined by default.
  return a + b + c;
};

console.log(concat("a", "b", "c"));
console.log(concat("a", "b"));
