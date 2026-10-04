export {}

interface User {
  name: string;
  age: number;
}

const json = '{ "name": "Pravin", "age": "20" }';

const user1 = JSON.parse(json); // Type of the user1 is assumed with any
const user: User = JSON.parse(json);
const user2 = JSON.parse(json) as User;

console.log(`Name: ${user1.name}, Age: ${user1.age}`);
//console.log(`Name: ${user2.name}, Age: ${user2.age}, Email: ${user2.email}`); //This will raise Property 'email' does not exist on type 'User'.

let name = "pravin" as string
