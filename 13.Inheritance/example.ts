export {};

class Person {
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

class User extends Person {
  constructor(firstName: string, lastName: string, age: number) {
    super(firstName, lastName, age);
  }
}
class Admin extends Person {
  role: string;
  constructor(firstName: string, lastName: string, age: number, role: string) {
    super(firstName, lastName, age);
    this.role = role;
  }

  getUserInfo() {
    console.log(
      `Hello, ${this.firstName} ${this.lastName}, Role: ${this.role}`,
    );
  }

  manageUsers() {
    console.log(`Managing users as ${this.role}`);
  }
}

const user1 = new User("Pravin", "Kumar", 20);
const admin1 = new Admin("John", "Doe", 30, "Administrator");

user1.getUserInfo();
user1.getUserAge();

admin1.getUserInfo();
admin1.getUserAge();
admin1.manageUsers();
