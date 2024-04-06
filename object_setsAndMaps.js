// //! sets

// // Creating a new Set
// var mySet = new Set();

// // Adding values to the Set
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(4);
// mySet.add(5);

// // Adding duplicate values (ignored)
// mySet.add(1);
// mySet.add(2);

// // Checking size of the Set
// console.log("Size of the Set:", mySet.size); // Outputs: 5

// // Checking if a value exists in the Set
// console.log("Does the Set contain 3?", mySet.has(3)); // Outputs: true
// console.log("Does the Set contain 6?", mySet.has(6)); // Outputs: false

// // Deleting a value from the Set
// mySet.delete(4);

// // Iterating over the Set
// console.log("Values in the Set:");
// for (var item of mySet) {
//     console.log(item);
// }

// // Clearing the Set
// mySet.clear();
// console.log("Size of the Set after clearing:", mySet.size); // Outputs: 0

// // Creating a new Set
// var mySet = new Set();

// // Adding values to the Set
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);

// // Retrieving values of the Set using values() method
// console.log("Values of the Set:");
// for (let value of mySet.values()) {
//     console.log(value);
// }

// // Retrieving keys of the Set using keys() method (same as values in a Set)
// console.log("\nKeys of the Set:");
// for (let key of mySet.keys()) {
//     console.log(key);
// }

// // Retrieving entries of the Set using entries() method (key and value are the same in a Set)
// console.log("\nEntries of the Set:");
// for (let entry of mySet.entries()) {
//     console.log(entry);
// }


//! maps

// // Creating a new Map
// var myMap = new Map();

// // Adding key-value pairs to the Map
// myMap.set("key1", "value1");
// myMap.set("key2", "value2");
// myMap.set(3, "value3");

// // Retrieving values of the Map using values() method
// console.log("Values of the Map:");
// for (let value of myMap.values()) {
//     console.log(value);
// }

// // Retrieving keys of the Map using keys() method
// console.log("\nKeys of the Map:");
// for (let key of myMap.keys()) {
//     console.log(key);
// }

// // Retrieving entries of the Map using entries() method
// console.log("\nEntries of the Map:");
// for (let entry of myMap.entries()) {
//     console.log(entry);
// }

// // Accessing values using keys
// console.log("\nAccessing values using keys:");
// console.log("Value corresponding to 'key1':", myMap.get("key1"));
// console.log("Value corresponding to 3:", myMap.get(3));

// // Checking if a key exists in the Map
// console.log("\nDoes the Map contain 'key2'?", myMap.has("key2")); // Outputs: true
// console.log("Does the Map contain 'key3'?", myMap.has("key3")); // Outputs: false

// // Deleting a key-value pair from the Map
// myMap.delete("key1");

// // Clearing the Map
// myMap.clear();
// console.log("\nSize of the Map after clearing:", myMap.size); // Outputs: 0

// //! typeOf
// var myMap = new Map();
// console.log(typeof myMap); // Outputs: "object"

// //! instanceOf
// var myMap = new Map();
// console.log(myMap instanceof Map); // Outputs: true

//! object references
// Object definition
var originalObject = { prop: "value" };

// Assigning object reference to another variable
var referenceToObject = originalObject;

// Modifying the original object
originalObject.prop = "modified value";

// Accessing the modified object through the reference
console.log(referenceToObject.prop); // Outputs: "modified value"

// Changing the value using the reference
referenceToObject.prop = "another value";

// Accessing the modified object through the original variable
console.log(originalObject.prop); // Outputs: "another value"
