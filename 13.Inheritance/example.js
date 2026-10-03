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
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
    getUserAge() {
        console.log(`Age: ${this.age}`);
    }
}
class User extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }
}
class Admin extends Person {
    role;
    constructor(firstName, lastName, age, role) {
        super(firstName, lastName, age);
        this.role = role;
    }
    getUserInfo() {
        console.log(`Hello, ${this.firstName} ${this.lastName}, Role: ${this.role}`);
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
export {};
