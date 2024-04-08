// Primitive data types
let num = 10;
let name = "John Doe";
let isActive = true;
let undefinedVar;
let nullVar = null;
const key = Symbol('unique');

// Non-primitive data types
let person = { name: "John", age: 30 };
let numbers = [1, 2, 3, 4, 5];

function greet(name) {
  console.log(`Hello, ${name}!`);
}

console.log(num); 
console.log(name); 
console.log(isActive); 
console.log(undefinedVar);
console.log(nullVar);
console.log(key);
console.log(person); 
console.log(numbers); 
greet("Alice"); 
