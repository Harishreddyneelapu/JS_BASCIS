//! A Promise is an Object that links Producing code and Consuming code
//! A Promise contains both the producing code and calls to the consuming code:

// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
  
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


// !

// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("hello world !!"); }, 3000);
//   });
  
//   myPromise.then(function(value) {
//     console.log(value);
//   });

//!

// const mypromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const randomNum = Math.random();
//         if(randomNum>0.5){
//             resolve(randomNum);
//         }else{
//             reject(new Error("Number is too small"));
//         }
//     },2000)
// });
// mypromise
// .then((result)=>{
//     console.log("success:",result)
// })
// .catch((error)=>{
//     console.error("Errror:",error.message);
// });

//!  chaining promises
// function asyncOperation() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(10);
//       }, 1000);
//     });
//   }
  
//   asyncOperation()
//     .then((result) => {
//       console.log("First operation result:", result);
//       return result * 2;
//     })
//     .then((result) => {
//       console.log("Second operation result:", result);
//       return result * 3;
//     })
//     .then((result) => {
//       console.log("Third operation result:", result);
//     })
//     .catch((error) => {
//       console.error("Error:", error.message);
//     });
  

    //! promise.all

    // const promise1 = Promise.resolve(3);
    // const promise2 = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 100, 'foo');
    // });
    // const promise3 = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 500, 'bar');
    // });

    // Promise.all([promise1, promise2, promise3])
    //     .then((values) => {
    //     console.log(values);
    // });



    //! Promise.race

    // const promise1 = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 500, 'one');
    //   });
      
    // const promise2 = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 100, 'two');
    // });
      
    // Promise.race([promise1, promise2])
    //     .then((value) => {
    //     console.log(value); // Logs "two" because it resolves first
    // });
      //promise.any
      //.finally

    //! promise.any
    // const promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Error 1'));
    // const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Result 2'));
    // const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Result 3'));

    // Promise.any([promise1, promise2, promise3])
    // .then((value) => {
    //     console.log(value); 
    // })
    // .catch((error) => {
    //     console.error(error); 
    // });

    //! promise.finally

    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'Result');
      });
      
      promise
        .then((value) => {
        console.log(value); // Logs "two" because it resolves first
    });
     
    //! promise.any
    // const promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'Error 1'));
    // const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Result 2'));
    // const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Result 3'));

    // Promise.any([promise1, promise2, promise3])
    // .then((value) => {
    //     console.log(value); 
    // })
    // .catch((error) => {
    //     console.error(error); 
    // });

    //! promise.finally

    const promise = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'Result');
      });
      
      promise
        .then((value) => {
          console.log(value); 
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          console.log('Promise completed'); 
        });
      