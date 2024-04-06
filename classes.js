// //! classes
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     greet() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   }
  
//   // Creating an instance of the Person class
//   const person1 = new Person('John', 30);
//   person1.greet(); 
  
//   class Student extends Person {
//     constructor(name, age, grade) {
//       super(name, age);
//       this.grade = grade;
//     }
  
//     study() {
//       console.log(`${this.name} is studying hard for the exam.`);
//     }
//   }
  
//   const student1 = new Student('Alice', 20, 'A');
//   student1.greet(); 
//   student1.study(); 

//   //! static 
//   class MathHelper {
//     static square(x) {
//       return x * x;
//     }
  
//     static pi = 3.14159;
//   }
  
//   console.log(MathHelper.square(5));
//   console.log(MathHelper.pi);
  
  //! class inheritance 
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  
    fetch() {
      console.log(`${this.name} fetches the ball.`);
    }
  }
  
  const myDog = new Dog('Buddy', 'Golden Retriever');
  
  myDog.speak();
  myDog.fetch();
  