export {};

class User {
  firstName: string = "";
  lastName: string;
  age: number;
  gender: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
  ) {
    this.gender = gender;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static isAdult(age: number): boolean { 
    return age >= 18;
  }
}

console.log(User.isAdult(20));

// Static functions are methods that belong to the class itself rather than an instance of the class. They can be called without creating an instance of the class. 
// In this example, the `isAdult` static function checks if a given age is 18 or older and returns a boolean value.

// Static keyword is used to define static methods in a class. 
//  They are often used for utility functions that don't require access to instance properties or methods.
// Main purpose of static keyword is to create methods that can be called on the class itself, rather than on instances of the class. 
// Apart from that, static methods can also be used to create factory methods that return instances of the class, or to define constants that are shared across all instances of the class.