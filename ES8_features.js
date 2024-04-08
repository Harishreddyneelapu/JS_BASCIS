//! String Padding:

// The padStart() and padEnd() methods allow padding a string with spaces or other characters to a specified length.

// const str = 'hello';
// console.log(str.padStart(10, 'X'));
// console.log(str.padEnd(10, 'Y')); 

//!Object.values() and Object.entries():

// The Object.values() method returns an array of a given object's own enumerable property values,
//  and Object.entries() returns an array of a given object's own enumerable property [key, value] pairs.

// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.values(obj));
// console.log(Object.entries(obj)); 


//!Async Functions with Async/Await 
//  Async functions allow writing asynchronous code in a synchronous-looking manner, 
// making it easier to work with Promises.

// async function fetchData() {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
//   fetchData()
//   .then(data => {
//     console.log('Data fetched successfully:', data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
  
  //!railing Commas in Function Parameter Lists and Calls:

// Trailing commas in function parameter lists and calls are now allowed, which can make code easier to maintain,
//  especially for large argument lists or in dynamic code generation scenarios.

// function foo(
//     a,
//     b,
//   ) {
//     // Function body
//   }
  
//   foo(
//     'x',
//     'y',
//   );
  
  
//!Object.getOwnPropertyDescriptors()
//The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.
const obj = {
    name: 'John',
    age: 30
  };
  
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  console.log(descriptors);
  