export {}

enum Direction {
  "Up",
  "Down",
  "Left",
  "Right",
}


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
