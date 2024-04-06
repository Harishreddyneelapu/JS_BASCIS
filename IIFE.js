//! 
//An Immediately Invoked Function Expression (IIFE) is a common JavaScript pattern
//  where a function is declared and immediately invoked. This pattern is often used to
//   create a new scope, encapsulate variables, and avoid polluting the global scope.

// (function() {
//     var message = "Hello, world!";
//     console.log(message);
//   })();
  
//! Example
// var counterModule = (function() {
//     var count = 0;
  
//     return {
//       increment: function() {
//         count++;
//       },
//       decrement: function() {
//         count--;
//       },
//       getCount: function() {
//         return count;
//       }
//     };
//   })();
  
//   counterModule.increment();
//   counterModule.increment();
//   console.log(counterModule.getCount());
  

//!
var utils = (function() {
    var secretKey = "abc123";

    function encrypt(data) {
      return data + secretKey;
    }
  
    return {
      encryptData: function(data) {
        return encrypt(data+" ");
      },
    };
  })();
  
  console.log(utils.encryptData("Sensitive information"));
  