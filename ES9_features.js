//!Asynchronous Iteration:

// ES9 introduced support for asynchronous iteration using the for-await-of loop,
//  which allows iterating over asynchronous data sources such as asynchronous iterators and promises

// async function fetchItems() {
//     const items = [1, 2, 3];
//     for await (const item of items) {
//       console.log(item);
//     }
//   }
//   fetchItems();

  //!Rest/Spread Properties:

// ES9 introduced support for spread properties and rest properties in object literals,
//  allowing spreading properties from an object or gathering remaining properties into a new object.

// const person = { name: 'John', age: 30, country: 'USA' };
// const { name, ...rest } = person;
// console.log(name);
// console.log(rest); 

//!Promise.prototype.finally():

// The finally() method was added to the Promise object, allowing a callback function 
// to be executed regardless of whether the Promise is fulfilled or rejected.

// fetch('https://api.example.com/data')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error))
// .finally(() => console.log('Request completed.'));


//!RegExp Improvements:

// ES9 introduced several improvements to regular expressions, including lookbehind
//  assertions ((?<=...) and (?<!...)) and named capture groups.

const str = 'hello world';
const regex = /(?<=hello) world/;
console.log(str.match(regex)); 

