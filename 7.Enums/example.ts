export {}

enum Direction {
  "Up",
  "Down",
  "Left",
  "Right",
}
// Enum is a way to define a set of named constants in TypeScript. It allows us to define a set of related values that can be used as a type.
//  Enums can be defined using either numeric or string values. 
// In this example, we are using numeric values for the enum members, which will be automatically assigned starting from 0 for the first member and incrementing by 1 for each subsequent member.
//  We can also use string values for the enum members, which will be assigned the string value specified in the enum definition.

function move(direction: Direction) { // The function 'move' takes a parameter of type 'Direction', which is an enum defined above. It can be number or string representation of the enum value.
    console.log(direction);
  console.log(`Moving ${Direction[direction]}`);
}

move(Direction["Up"]); // Now we are passing number as an argument to the function, which is the numeric representation of the enum value.

const str: string = Direction[0];
const num: number = Direction["Up"];
// We can use the enum values as both strings and numbers, as shown above. 
// The string representation of the enum value can be obtained using the index signature,
// while the numeric representation can be obtained using the enum name which is given inside the enum.

console.log(str);
console.log(num);