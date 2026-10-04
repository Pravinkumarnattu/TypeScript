class Person {
    firstName = "";
    lastName;
    age;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getUserInfo() {
        console.log(`Hello, ${this.firstName} ${this.lastName}, Age: ${this.age}`);
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setAge(age) {
        this.age = age;
    }
}
class User extends Person {
    gender;
    constructor(firstName, lastName, age, gender) {
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
export {};
