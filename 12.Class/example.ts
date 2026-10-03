export {};

class User {
  firstName: string = "";
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getUserInfo() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  }
  getUserAge() {
    console.log(`Age: ${this.age}`);
  }
}

const user1 = new User("Pravin", "Kuamr", 20);
user1.getUserInfo();
user1.getUserAge();
