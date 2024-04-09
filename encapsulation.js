// //? 
// Encapsulation in JavaScript involves bundling data (variables) and methods (functions)
//  that operate on the data within a single unit, typically an object. It allows you to 
//  control access to the data and hide implementation details from the outside, 
//  thereby preventing unintended modification and ensuring data integrity.

//! Using Closures:

// JavaScript closures allow you to create private variables and methods within a function scope.
//  These variables and methods are accessible only within the function scope, making them encapsulated.
// function Counter() {
//     let count = 0;
    
//     this.increment = function() {
//       count++;
//     };
    
//     this.getCount = function() {
//       return count;
//     };
//   }
  
//   const counter = new Counter();
//   counter.increment();
//   console.log(counter.getCount()); 
  

  //!Using Constructor Functions:

// Constructor functions can be used to create objects with encapsulated properties and 
// methods. By defining properties and methods using this within the constructor function,
//  you can encapsulate them within the object instance.

// function Person(name, age) {
//     let _name = name;
//     let _age = age; 
  
//     this.getName = function() {
//       return _name;
//     };
  
//     this.getAge = function() {
//       return _age;
//     };
//   }
  
//   const person = new Person('John', 30);
//   console.log(person.getName());
//   console.log(person.getAge());  
  

  //!Using ES6 Classes:

// ES6 introduced class syntax, which provides a more concise and familiar way
//  to achieve encapsulation in JavaScript. You can define private properties and methods using the # prefix.

class Person {
    #name; 
    #age;  
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
    }
  
    getName() {
      return this.#name;
    }
  
    getAge() {
      return this.#age;
    }
  }
  
  const person = new Person('John', 30);
  console.log(person.getName()); 
  console.log(person.getAge());  
  