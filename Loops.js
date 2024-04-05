// ? loops are control flow structures that allow you to execute a block of code repeatedly


//! for loop
// used when you know how many times you want to execute a block of code
// for(let i =0; i<5;i++){
//     console.log(i);
// }

//! while loop
// is used when you want to execute a block of code as long as a condition is true.
// let i=0;
// while(i<7){
//     console.log(i++);
// }

//! do while loop
// similar to the while loop, but it ensures that the block of code is executed at least once before checking the condition.
// let j=0;
// do{
//     console.log(j++);
// }while(j<9);

//! for in loop
// used to iterate over the enumerable properties of an object.
// const obj ={a:1,b:3,c:5};
// for(let key in obj){
//     console.log(key,obj[key]);
// }

//! for of loop
// used to iterate over iterable objects such as arrays, strings, and collections.
const arr=[1,2,3,4];
for(let val of arr){
    console.log(val);
}