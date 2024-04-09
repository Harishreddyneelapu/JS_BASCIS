//?
// Inheritance in JavaScript allows objects to inherit properties and methods from other objects,
//  enabling code reuse and creating hierarchical relationships between objects. There are multiple ways to 
//  implement inheritance in JavaScript, including prototype chaining, constructor function inheritance,
//   and ES6 class inheritance

//!Prototype Chaining:

// Prototype chaining involves linking objects through their prototype chain. Each object has a prototype,
//  which is another object that it inherits properties and methods from. When a property or method is 
//  accessed on an object, JavaScript looks up the prototype chain until it finds a matching property or method.

// Parent constructor function
// function Animal(name) {
//     this.name = name;
//   }
  
//   // Add method to parent prototype
//   Animal.prototype.speak = function() {
//     console.log(this.name + ' makes a sound.');
//   };
  
//   // Child constructor function
//   function Dog(name, breed) {
//     Animal.call(this, name); // Call parent constructor
//     this.breed = breed;
//   }
  
//   // Set up prototype chain
//   Dog.prototype = Object.create(Animal.prototype);
//   Dog.prototype.constructor = Dog;
  
//   // Add method to child prototype
//   Dog.prototype.bark = function() {
//     console.log(this.name + ' barks.');
//   };
  
//   // Create instances
//   const animal = new Animal('Animal');
//   const dog = new Dog('Buddy', 'Golden Retriever');
  
//   // Usage
//   animal.speak();
//   dog.speak();   
//   dog.bark();    
  

  //!Constructor Function Inheritance:

// Constructor function inheritance involves using the call() or apply() method to invoke
//  the parent constructor within the child constructor, enabling the child object to inherit 
//  properties from the parent.

// Parent constructor function
// function Animal(name) {
//     this.name = name;
//   }
  
//   // Add method to parent prototype
//   Animal.prototype.speak = function() {
//     console.log(this.name + ' makes a sound.');
//   };
  
//   // Child constructor function
//   function Dog(name, breed) {
//     Animal.call(this, name); // Call parent constructor
//     this.breed = breed;
//   }
  
//   // Usage
//   const animal = new Animal('Animal');
//   const dog = new Dog('Buddy', 'Golden Retriever');
  
//   // Usage
//   animal.speak(); 
//   // dog.speak();//// This would throw an error because the Dog prototype doesn't inherit from Animal prototype


  //!ES6 Class Inheritance:

// ES6 introduced class syntax, which provides a more concise and familiar way to implement 
// inheritance in JavaScript. You can use the extends keyword to create subclasses that inherit from a superclass.
  
// Superclass
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + ' makes a sound.');
    }
  }
  
  // Subclass
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call superclass constructor
      this.breed = breed;
    }
  
    bark() {
      console.log(this.name + ' barks.');
    }
  }
  
  // Usage
  const animal = new Animal('Animal');
  const dog = new Dog('Buddy', 'Golden Retriever');
  
  // Usage
  animal.speak(); 
  dog.speak();    
  dog.bark();     
  