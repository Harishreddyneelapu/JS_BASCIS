//! Global variables can be made local (private) with closures
// function createCounter() {
//     let count = 0;
  
//     return function() {
//       return ++count;
//     };
//   }
  
//   const counter = createCounter();
  
//   console.log(counter()); 
//   console.log(counter()); 
//   console.log(counter()); 
  

//!
// function outerFunction(outerVariable) {
//     return function(innerVariable) {
//       console.log("Outer variable:", outerVariable);
//       console.log("Inner variable:", innerVariable);
//     };
//   }
  
//   const innerFunction = outerFunction("Hello");
  
//   innerFunction("world");
  

//!
function createPerson(name) {
    var age = 0;
  
    function incrementAge() {
      age++;
      console.log(name + "'s age is now " + age);
    }
  
    return {
      setName: function(newName) {
        name = newName;
      },
      getName: function() {
        return name;
      },
      celebrateBirthday: function() {
        incrementAge();
      }
    };
  }
  
  var person1 = createPerson("Alice");
  person1.celebrateBirthday();
  person1.celebrateBirthday();
  
  var person2 = createPerson("Bob");
  person2.celebrateBirthday();
  