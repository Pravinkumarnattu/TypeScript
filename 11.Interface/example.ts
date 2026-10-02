interface User {
  firstName: string;
  lastName: string;
  age?: number; // The age property is optional, meaning it may or may not be present in the object.
}

// const greetUser = (user: { firstName: string; lastName: string }) => { // This will not throw an error because the user parameter is defined as an object with firstName and lastName properties even if it has additional properties, but required parameters are must passes as an object with those properties.
//   console.log(user);
//   console.log(`Hello, ${user.firstName} ${user.lastName}`);
// };

// const logUser = (user: { firstName: string; lastName: string, age: number }) => {
//   console.log(`Hello, ${user.firstName} ${user.lastName}, age: ${user.age}`);
// };

const greetUser = (user: User) => {
  console.log(user);
  console.log(`Hello, ${user.firstName} ${user.lastName}`);
};

const logUser = (user: User) => {
  console.log(
    `Hello, ${user.firstName} ${user.lastName}, age: ${user.age ?? 0}`,
  );
};

const user1 = { firstName: "John", lastName: "Doe" };

greetUser(user1); // This will work because user1 has the required properties for greetUser
logUser(user1);

// To reduce redundancy, we can define an interface for the user object and use it in both functions.
// An Interface is a way to define the shape of an object in TypeScript. It allows us to define the properties and their types that an object should have.
// Interface only defines the shape of an object, it does not provide any implementation. It is used for type-checking at compile-time and disappear at runtime(js not included this interface) 
// and ensuring that objects adhere to a specific structure.
