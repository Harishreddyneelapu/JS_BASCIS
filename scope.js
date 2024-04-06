// var globalVariable = "I am global";

// function scopeExample() {
    
//     var localVariable = "I am local";

//     console.log("Inside function: " + globalVariable);

//     console.log("Inside function: " + localVariable);
// }


// scopeExample();


// //console.log("Outside function: " + localVariable); // Uncommenting this line will result in an error


// console.log("Outside function: " + globalVariable);


//! function scope 
// var globalVariable = "I am global";

// function functionScopeExample() {
//     var functionScopedVariable = "I am function scoped";

//     console.log("Inside function: " + globalVariable);
//     console.log("Inside function: " + functionScopedVariable);
// }

// functionScopeExample();

// console.log("Outside function: " + globalVariable);

//! blockedscope

// var globalVariable = "I am global";

// function blockScopeExample() {
//     if (true) {
//         let blockScopedVariable = "I am block scoped";

//         console.log("Inside block: " + globalVariable);
//         console.log("Inside block: " + blockScopedVariable);
//     }
// }

// blockScopeExample();

// console.log("Outside function: " + globalVariable);


//! hoisting
// console.log(myVariable);
// var myVariable = "I am hoisted";

// var myVariable; 
// console.log(myVariable);
// myVariable = "I am hoisted";

//!JavaScript Declarations are Hoisted

// console.log(myVariable); // Outputs: undefined
// var myVariable = "I am hoisted";

//!The let and const Keywords
// console.log(myLetVariable); // Throws ReferenceError
// let myLetVariable = "I am not hoisted";

// console.log(myConstVariable); // Throws ReferenceError
// const myConstVariable = "I am not hoisted either";

// //!JavaScript Initializations are Not Hoisted
var myVariable = "I am initialized";

console.log(myVariable); // Outputs: I am initialized

