"use strict";
const concat = (a, b, c) => {
    // It means that the parameter can be passed or not passed when calling the function. 
    // If the parameter is not passed, it will be undefined by default.
    return a + b + c;
};
console.log(concat("a", "b", "c"));
console.log(concat("a", "b"));
