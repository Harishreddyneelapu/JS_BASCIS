//?
// Abstraction in JavaScript involves hiding the implementation details of an object and 
// exposing only the necessary features or interfaces to the outside world. It allows developers 
// to work with high-level concepts without needing to understand the inner workings of the object.

//!Using Functions:

// Functions encapsulate a set of instructions behind a single interface, allowing users to 
// interact with them without needing to know how they are implemented internally.

function calculateTotalPrice(items) {
    let total = 0;
    items.forEach(item => {
      total += item.price;
    });
    return total;
  }
  

//! Using Objects:

// Objects encapsulate related data and behavior into a single unit, providing a clean 
// interface for interacting with the data and methods

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    drive() {
      console.log('The car is driving.');
    }
  };
  

  //!Using Classes (Introduced in ES6):

// Classes provide a blueprint for creating objects with predefined properties and methods.
//  They encapsulate data and behavior into a single unit, allowing for easier abstraction and code organization.

    class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
    }

  
  //!Using Modules:

// Modules allow you to encapsulate related functionality into separate files or modules.
//  By exporting only the necessary functions or variables, you can abstract away the implementation
//   details from the rest of the application.

// math.js
    export function add(a, b) {
        return a + b;
    }
    
    // main.js
    import { add } from './math.js';
    console.log(add(2, 3));
  