"use strict";
let obj = {
    name: "John",
    id: 1,
};
// obj = { name: "Doe" }; // Duck typing is not satisfied here because the new object does not have the 'id' property.
// obj = { id: 2 }; //  We have to ensure that the new object has all the required properties of the original object is called duck typing.
obj = { id: 2, name: "Max" };
console.log(obj);
