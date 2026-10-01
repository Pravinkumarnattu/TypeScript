let arr = [1, 2, 3];
arr = [1, 'a'];
arr = [2, 4];
arr = ['a', 'b']; // This is allowed because the array is of type 'any[]', which means it can contain elements of any type.
console.log(arr);
export {};
