export {}; // This file is treated as a module because of the export statement above. It prevents the file from being treated as a script, which would make all top-level declarations global. 
// It is a good practice to include this statement in TypeScript files that are intended to be modules, as it helps avoid potential naming conflicts and keeps the code organized.

let obj = {
  name: "John",
  id: 1,
};
// obj = { name: "Doe" }; // Duck typing is not satisfied here because the new object does not have the 'id' property.
// obj = { id: 2 }; //  We have to ensure that the new object has all the required properties of the original object is called duck typing.
obj = { id: 2, name: "Max" };
console.log(obj);
// What is duck typing? Ans: Duck typing is a concept in programming where the type or class of an object is determined by its behavior (methods and properties) rather than its explicit declaration. In other words, if an object "quacks like a duck" (has the necessary methods and properties), it can be treated as that type, regardless of its actual class or type. This allows for more flexible and dynamic code, as objects can be used interchangeably based on their capabilities rather than their specific types.