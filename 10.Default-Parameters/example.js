"use strict";
const concat = (a, b, c = "c") => {
    return a + b + c;
};
console.log(concat("a", "b", "c"));
console.log(concat("a", "b"));
