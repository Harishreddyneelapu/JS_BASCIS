//?
// Polymorphism in JavaScript refers to the ability of objects to exhibit different behaviors 
// or have different forms while sharing a common interface. This allows you to use objects of 
// different types interchangeably in a program. Polymorphism is typically achieved through method overriding,
//  where subclasses provide their own implementation of methods inherited from a superclass.

//!Method Overriding:

// Method overriding allows subclasses to provide a specialized implementation of a method inherited 
// from a superclass. When the method is called on an instance of the subclass, the overridden method 
// is executed instead of the superclass method.

// class Animal {
//     speak() {
//       console.log('Animal makes a sound.');
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log('Dog barks.');
//     }
//   }
  
//   const animal = new Animal();
//   const dog = new Dog();
  
//   animal.speak(); 
//   dog.speak();    

  //! Using the Same Interface:

// Polymorphism in JavaScript relies on objects adhering to the same interface, meaning they expose 
// the same methods or properties. This allows you to treat objects of different types uniformly based 
// on their shared interface.
  
// function makeSound(animal) {
//     animal.speak(); // Calls the speak method on the animal object
//   }
  
//   const animal = {
//     speak() {
//       console.log('Animal makes a sound.');
//     }
//   };
  
//   const dog = {
//     speak() {
//       console.log('Dog barks.');
//     }
//   };
  
//   makeSound(animal); 
//   makeSound(dog);   
  

  //!Dynamic Binding:

// In JavaScript, method calls are dynamically bound at runtime based on the type of the object.
//  This means that the correct implementation of a method is determined based on the actual type 
//  of the object at runtime, rather than its declared type.

class Animal {
    speak() {
      console.log('Animal makes a sound.');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log('Dog barks.');
    }
  }
  
  const animal = new Animal();
  const dog = new Dog();
  let someAnimal = Math.random() > 0.5 ? animal : dog;
  
  someAnimal.speak(); 
  