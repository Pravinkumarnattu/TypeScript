export {};

class Person {
  protected firstName: string = "";
  protected lastName: string;
  private age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getUserInfo() {
    console.log(`Hello, ${this.firstName} ${this.lastName}, Age: ${this.age}`);
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }
  setLastName(lastName: string) {
    this.lastName = lastName;
  }
  setAge(age: number) {
    this.age = age;
  }
}

class User extends Person {
  gender: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
  ) {
    super(firstName, lastName, age);
    this.gender = gender;
  }
}

const user1 = new User("Pravin", "Kumar", 20, "Male");
user1.getUserInfo();

user1.setFirstName("John");
user1.setLastName("Doe");
user1.setAge(25);

user1.getUserInfo();
console.log(user1.gender);