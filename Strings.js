//? In JavaScript, strings are used to represent textual data. Strings can be created using single quotes ('), double quotes ("), or backticks (``). 


// //! length
// const str = 'Hello, World!';
// console.log(str.length); 

// //! charAt(index)
// const st = 'hello, world!';
// console.log(str.charAt(0));

// //! concat(string1,string2)
// const str1 = 'Hello';
// const str2 ='world!';
// console.log(str1.concat(', ',str2));

// //! toUpperCase()
// const string1 = 'hello';
// console.log(string1.toUpperCase());

// //! toLowerCase()
// const string = 'HELLO';
// console.log(string.toLowerCase());

// //! slice(start,end)
// const string2 = 'Hello, World!';
// console.log(str.slice(7, 12));

// //! substring(start,end)
// const s = 'Hello, World!';
// console.log(str.substring(7, 12));

// //! indexOf(substr)
// const S ='Hello, world!';
// console.log(S.indexOf('world!'));

// //! replace(searchValue, newValue)
// const Str = 'Hello, World!';
// console.log(Str.replace('World', 'JavaScript')); 

// //! split(separator)
// const STR = 'apple,banana,orange';
// console.log(STR.split(','));

//! charCodeAt(index)
// const ST = 'Hello';
// console.log(ST.charCodeAt(0));

//!padStart(targetLength, padString)
const str = '44';
console.log(str.padStart(3,'0'));

//!padEnd(targetLength, padString)
const str1 = '45';
console.log(str1.padEnd(3,'0'));

//! trim()
const stri = '    hello, world   ';
console.log(stri.trim());