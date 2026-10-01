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
