//!Array.prototype.includes()
//The includes() method is used to check whether an array includes a certain element,
// returning true or false as appropriate.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // Output: true
console.log(numbers.includes(6)); // Output: false


//!Exponentiation Operator (**)
//The exponentiation operator ** raises the left operand to the power of the right operand.
console.log(2 ** 3); 


//!Async Functions
//Async functions make it easier to work with asynchronous code by allowing the use of 
//the async keyword to declare asynchronous functions, and the await keyword to wait for the resolution of a Promise.

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  }

  
  //!Shared Memory and Atomics
  //ES7 introduced the SharedArrayBuffer object and the Atomics object,
  // which provide low-level support for shared memory and atomic operations.

    const buffer = new SharedArrayBuffer(16);
    const view = new Int32Array(buffer);

    // Example of using Atomics to perform atomic operations
    Atomics.store(view, 0, 42); 
    console.log(Atomics.load(view, 0)); 
