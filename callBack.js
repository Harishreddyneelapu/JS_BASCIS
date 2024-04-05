//! callback functions
//A callback is a function passed as an argument to another function

// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// greet("Alice", sayGoodbye);

// !

// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);

//!
const myNumbers = [2, 3, -5,-8,9,-7,9];

const posNumbers = removeNeg(myNumbers, (x) => x >= 0);


console.log(posNumbers);


function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}