ES6: Set Default Parameters for Your Functions

const increment = (number , value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
