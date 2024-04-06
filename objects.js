//! Example
// // Creating an object using object literal syntax
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };


// console.log("First Name:", person.firstName);
// console.log("Last Name:", person["lastName"]);
// console.log("Age:", person.age); 


// console.log("Full Name:", person.fullName()); 

// // Modifying object properties
// person.age = 35;

// // Adding new property
// person.country = "USA";

// // Deleting a property
// delete person.age;

// // Iterating through object properties
// for (var key in person) {
//     console.log(key + ": " + person[key]);
// }


//! with new and constructor
// Define a constructor function
// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.fullName = function() {
//         return this.firstName + " " + this.lastName;
//     };
// }

// // Create a new instance of the Person object using the new keyword
// var person1 = new Person("John", "Doe", 30);

// // Accessing object properties and method
// console.log("First Name:", person1.firstName); 
// console.log("Last Name:", person1.lastName); 
// console.log("Age:", person1.age); 
// console.log("Full Name:", person1.fullName());

//! properties and methods


// var car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     isRunning: false,
//     start: function() {
//         this.isRunning = true;
//         console.log("The " + this.brand + " " + this.model + " has started.");
//     },
//     stop: function() {
//         this.isRunning = false;
//         console.log("The " + this.brand + " " + this.model + " has stopped.");
//     }
// };

// // Accessing object properties
// console.log("Brand:", car.brand); 
// console.log("Model:", car.model); 
// console.log("Year:", car.year);

// // Calling object methods
// car.start();
// console.log("Is running:", car.isRunning); 
// car.stop(); 
// console.log("Is running:", car.isRunning);


//! objects display

//as a String
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// var propertiesAsString = Object.keys(person).map(key => key + ": " + person[key]).join(", ");

// console.log("Object properties as a string:", propertiesAsString);

//! as a JSON
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// var jsonRepresentation = JSON.stringify(person);

// console.log("Object as JSON:", jsonRepresentation);


//! for in loop

// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// };

// console.log("Object properties using for...in loop:");
// for (var key in person) {
//     console.log(key + ": " + person[key]);
// }


//! object accessors

// var temperature = {
//     _celsius: 0,

//     get celsius() {
//         return this._celsius;
//     },

//     set celsius(value) {
//         this._celsius = value;
//     },

//     get fahrenheit() {
//         return (this._celsius * 9 / 5) + 32;
//     },

//     set fahrenheit(value) {
//         this._celsius = (value - 32) * 5 / 9;
//     }
// };

// temperature.celsius = 20; 
// console.log("Celsius:", temperature.celsius); 
// console.log("Fahrenheit:", temperature.fahrenheit); 

// temperature.fahrenheit = 86; 
// console.log("Celsius:", temperature.celsius);
// console.log("Fahrenheit:", temperature.fahrenheit); 

//!object prototype
// Parent constructor function
// function Animal(name) {
//     this.name = name;
// }

// // Adding a method to the prototype of Animal
// Animal.prototype.sayName = function() {
//     console.log("My name is " + this.name);
// };

// // Child constructor function inheriting from Animal
// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// // Inheriting prototype from Animal
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// // Adding a method specific to Dog
// Dog.prototype.bark = function() {
//     console.log("Woof!");
// };

// // Creating instances
// var animal = new Animal("Unknown");
// var dog = new Dog("Buddy", "Labrador");

// // Accessing inherited method
// animal.sayName(); // Outputs: My name is Unknown
// dog.sayName(); // Outputs: My name is Buddy

// // Accessing method specific to Dog
// dog.bark(); // Outputs: Woof!

//!object iterables
var myIterable = {
    [Symbol.iterator]: function() {
        var index = 0;
        var data = [1, 2, 3, 4, 5];

        return {
            next: function() {
                return {
                    value: data[index],
                    done: index++ >= data.length
                };
            }
        };
    }
};

// Using for...of loop to iterate over the iterable object
for (var item of myIterable) {
    console.log(item);
};
