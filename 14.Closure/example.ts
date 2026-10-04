// without closure

// let count = 0;
// const increment = () => {
//   count++;
// };
// const getCount = () => {
//   return count;
// };

// increment();
// console.log(getCount());

// without closure, the count variable is in the global scope,
// which can lead to unintended side effects if other parts of the code modify it.
// That's why closures are often preferred for encapsulating state and behavior in a more controlled manner.

// with closure

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
const counter2 = createCounter();
counter.increment();
counter2.increment();
counter2.increment();
console.log(counter.getCount());
console.log(counter2.getCount());

// Closure is a powerful feature in JavaScript and TypeScript that allows functions to have access to variables from their outer scope even after the outer function has finished executing.
//  In this example, the `createCounter` function returns an object with two methods: `increment` and `getCount`. Each time `createCounter` is called, a new closure is created with its own private `count` variable. This encapsulation prevents external code from directly accessing or modifying the `count` variable, thus avoiding potential side effects and maintaining state integrity.