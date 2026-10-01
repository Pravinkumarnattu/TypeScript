var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
    console.log(direction);
    console.log(`Moving ${Direction[direction]}`);
}
move(Direction["Up"]); // Now we are passing number as an argument to the function, which is the numeric representation of the enum value.
const str = Direction[0];
const num = Direction["Up"];
// We can use the enum values as both strings and numbers, as shown above. 
// The string representation of the enum value can be obtained using the index signature,
// while the numeric representation can be obtained using the enum name which is given inside the enum.
console.log(str);
console.log(num);
export {};
