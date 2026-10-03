// const greetUser = (user: { firstName: string; lastName: string }) => { // This will not throw an error because the user parameter is defined as an object with firstName and lastName properties even if it has additional properties, but required parameters are must passes as an object with those properties.
//   console.log(user);
//   console.log(`Hello, ${user.firstName} ${user.lastName}`);
// };
// const logUser = (user: { firstName: string; lastName: string, age: number }) => {
//   console.log(`Hello, ${user.firstName} ${user.lastName}, age: ${user.age}`);
// };
const greetUser = (user) => {
    console.log(user);
    console.log(`Hello, ${user.firstName} ${user.lastName}`);
};
const logUser = (user) => {
    console.log(`Hello, ${user.firstName} ${user.lastName}, age: ${user.age ?? 0}`);
};
const user1 = { firstName: "John", lastName: "Doe", age: 20, gender: "male" }; // This object has additional properties (age and gender) that are not defined in the User interface, but it will still work because the required properties (firstName and lastName) are present.
greetUser({ firstName: "John", lastName: "Doe", age: 20 }); // This will get an error because the object literal passed to the function has additional properties, while passing additional properties, we have use variable to store the object and then pass it to the function, it will work because the required properties are present in the object.
logUser(user1);
export {};
// To reduce redundancy, we can define an interface for the user object and use it in both functions.
// An Interface is a way to define the shape of an object in TypeScript. It allows us to define the properties and their types that an object should have.
// Interface only defines the shape of an object, it does not provide any implementation. It is used for type-checking at compile-time and disappear at runtime(js not included this interface)
// and ensuring that objects adhere to a specific structure.
