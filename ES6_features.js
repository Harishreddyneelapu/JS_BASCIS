//! let and const
//let and const provide block-scoped declarations for variables. let allows variables 
//to be reassigned, while const declares constants whose value cannot be changed once initialized.
let x = 10;
const PI = 3.14;
console.log('Value of x:', x);
console.log('Value of PI:', PI);

//! Arrow Functions
//Arrow functions provide a more concise syntax for writing function expressions.
const add = (a, b) => a + b;
console.log('Result of add:', add(5, 7));

//! Template Literals
//Template literals allow embedding expressions within strings using ${}
// const name = 'John';
// console.log(`Hello, ${name}!`);

//! Destructuring Assignment
//Destructuring assignment allows extracting values from arrays or objects and assigning them to variables.
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log('Name:', name);
console.log('Age:', age);

//! Spread Syntax
//The spread syntax (...) allows expanding an iterable (like an array or string) into individual elements.
const numbers = [1, 2, 3];
const combined = [...numbers, 4, 5];
console.log('Combined:', combined);

//! Rest Parameters
//Rest parameters allow representing an indefinite number of arguments as an array.
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log('Sum:', sum(1, 2, 3, 4, 5));

//! Default Parameters
//Default parameters allow specifying default values for function parameters.
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}
greet();
greet('Alice');

//! Classes
//Classes provide a more convenient syntax for creating objects and implementing inheritance.
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const john = new Person('John');
john.greet();



//! promises
//Promises provide a cleaner way to work with asynchronous code, allowing better handling of asynchronous operations.
const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Asynchronous operation
      if (success) {
        resolve(data);
      } else {
        reject(error);
      }
    });
  };


  //! modules
  //ES6 introduced native support for modules, allowing you to export and import modules in your JavaScript code.
  // module1.js
    export const sum = (a, b) => a + b;

    // module2.js
    import { sum } from './module1.js';

  
