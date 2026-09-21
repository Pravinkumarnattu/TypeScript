var mystring = "string";
var myNumber = 1;
var myBoolean = false;

mystring = myBoolean;
myBoolean = myNumber;
myNumber = mystring;

console.log(myBoolean);
