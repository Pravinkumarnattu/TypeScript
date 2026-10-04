"use strict";
const json = '{ "name": "Pravin", "age": "20" }';
const user1 = JSON.parse(json);
const user2 = JSON.parse(json);
console.log(`Name: ${user1.name}, Age: ${user1.age}`);
// console.log(`Name: ${user2.name}, Age: ${user2.age}, Email: ${user2.email}`);
