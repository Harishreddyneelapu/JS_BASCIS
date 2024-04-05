//? In JavaScript, arrays are used to store multiple values in a single variable. Arrays can contain elements of any data type, including numbers, strings, objects, and even other arrays. JavaScript provides a variety of methods to manipulate arrays efficiently.

//! push()
// Adds one or more elements to the end of an array and returns the new length of the array.
// const cars =['bmw','nissan'];
// cars.push('maruthi');
// console.log(cars);

//! pop()
// Removes the last element from an array and returns that element.
// const fruits=['apple','banana','cherry'];
// fruits.pop();
// console.log(fruits);

//! shift()
// Removes the first element from an array and returns that element.
// const games=['cricket','chess','badminton'];
// const firstGame=games.shift();
// console.log(firstGame);

//! unShift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
// const phones = ['vivo','realme'];
// const mobiles =phones.unshift('apple','onePlus');
// console.log(mobiles);

//! splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// const fruits =['apple','banana','cherry'];
// fruits.splice(1,1,'grapes');
// console.log(fruits);

//! slice()
//Returns a shallow copy of a portion of an array into a new array object selected from begin to end
// const fruits = ['apple', 'banana', 'orange'];
// const citrus = fruits.slice(1);
// console.log(fruits);
// console.log(citrus);


//! concat()
//  Combines two or more arrays and returns a new array.
// const fruits = ['apple', 'banana'];
// const vegetables = ['carrot', 'spinach'];
// const food = fruits.concat(vegetables);
// console.log(food);

//! forEach()
//  Executes a provided function once for each array element.
// const arr =[1,2,3,3];
// arr.forEach(num =>console.log(num));

//! map()
//map() method creates a new array by applying a function to each element of the original array.
const arr1 = [1,2,3,4,5];
const squaredNumbers = arr1.map((num)=>num*num);
console.log(squaredNumbers);

//! filter()
// filter() method creates a new array with all elements that pass the test implemented by the provided function.
const numbers = [1,2,3,4,5];
const evenNumbers = numbers.filter((num)=>num%2==0);
console.log(evenNumbers);

//! reduce()
//reduce() method executes a reducer function (provided by you) on each element of the array, resulting in a single output value.
const values =[1,3,3,3,4,5];
const sum=values.reduce((total,num)=>total+num,0);
console.log(sum);