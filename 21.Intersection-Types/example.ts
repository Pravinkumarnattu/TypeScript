export {};

// In TypeScript, an intersection type combines multiple types into a single type using the & (ampersand) operator.
// This allows you to add together existing types to create a new type that has all the properties and features of each constituent type.

// Basic Syntax and Example
// Think of an intersection type as an "AND" requirement: an object of this type must satisfy all merged type contracts simultaneously.
type HasName = { name: string };
type HasAge = { age: number };

// Combining two types into an intersection type
type Person = HasName & HasAge;

// The user object MUST have both name AND age
const user: Person = {
  name: "Alice",
  age: 30,
};

interface Employee {
  id: number;
  name: string;
}

interface Admin {
  isAdmin: boolean;
}

type AdminEmployee = Employee & Admin;

const person: AdminEmployee = {
  id: 1,
  name: "pravin",
  isAdmin: true,
};

console.log(person.id);
console.log(person.name);
console.log(person.isAdmin);
