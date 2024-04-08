// Declaring variables
var age = 30;
let message = "Hello, world!";
const PI = 3.14;


age = 35;
message = "Updated message";

console.log("Age:", age);
console.log("Message:", message); 
console.log("PI:", PI);


//!Scope
//! global scope
var globalVar = 10;

function foo() {
  console.log(globalVar); 
}

console.log(globalVar);

//! local scope
function bar() {
    var localVar = 20;
    console.log(localVar);
  }
  
  bar();
  // console.log(localVar);
  
  //!block scoope
  if (true) {
    let blockVar = 30;
    console.log(blockVar); // Output: 30
  }
  
  // console.log(blockVar);

  //!functional scope
  function baz() {
    var functionVar = 40;
    console.log(functionVar); // Output: 40
  }
  
  baz();
  // console.log(functionVar);
  
  //! example
  // Global scope
    var globalVar = 10;

    function foo() {
    // Local scope
    var localVar = 20;
    console.log("Inside foo function - localVar:", localVar); 

    // Function scope
    var functionVar = 30;
    console.log("Inside foo function - functionVar:", functionVar); 
    }

    foo();
    console.log("Outside foo function - globalVar:", globalVar); 
    
    // console.log("Outside foo function - localVar:", localVar);

    // Block scope
    if (true) {
    let blockVar = 40;
    console.log("Inside block - blockVar:", blockVar);
    }
    
    // console.log("Outside block - blockVar:", blockVar);
