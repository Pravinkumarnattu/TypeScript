export {};

class User {
  name: string = "";
  static totalUsers: number = 0; 

  constructor(name: string) {
    this.name = name;
    User.totalUsers++;
  }

  static getTotalUsers() {
    return User.totalUsers;
  }
}

const user1 = new User("Pravin");
const user2 = new User("Alice");

console.log(User.getTotalUsers());
console.log(User.totalUsers);

// static properties are properties that belong to the class itself rather than an instance of the class.