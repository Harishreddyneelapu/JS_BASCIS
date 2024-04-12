//! call back functions



function divideAsync(a, b, callback) {
    
    setTimeout(() => {
        
        if (b === 0) {
            
            callback(new Error('Division by zero'));
            
        } else {
            
            const result = a / b;
            
            callback(null, result);
            
        }
    }, 1000); 
}


console.log('Start of program');
divideAsync(10, 0, (error, result) => {
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Result:', result);
    }
});
console.log('End of program');


// disavantages : callback hell, pyramid of dome, inversion of control

//! promises
// by using promises we solve the  inversion of control problem why because here we attach the callback functions not like passed as arguments.
//syntax also lean.

// function divideAsyncPromise(a, b) {
    
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
            
//             if (b === 0) {
                
//                 reject(new Error('Division by zero'));
//             } else {
                
//                 const result = a / b;
                
//                 resolve(result);
//             }
//         }, 3000); 
//     });
// }


// console.log('Start of program');
// divideAsyncPromise(10, 2)
//     .then(result => {
//         console.log('Result:', result);
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     })
    
// console.log("End of the program");


//? by using finally


// function divideAsyncProm(a,b){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=>{
//             if(b===0){
//                 reject(new Error("cant divide by zero"));
//             }else{
//                 const result = a/b;
//                 resolve(result);
//             }
//         },3000);
//     });

// }
// console.log("start");
// divideAsyncProm(10,2)
//     .then(result =>{
//         console.log("RESULT :",result);
//     })
//     .catch(error =>{
//         console.log('error',error.message);
//     })
//     .finally(()=>{
//         console.log("end")

//     });

//lead to nested .then whenever dealing with multiple asynchronous functions


    //! async and await
    // cleaner syntax and better readability
        
    // async function divideAsyncAwait(a, b) {
        
    //     await new Promise(resolve => setTimeout(resolve, 3000));
        
        
    //     if (b === 0) {
            
    //         throw new Error('Division by zero');
    //     } else {
            
    //         return a / b;
    //     }
    // }

    
    // async function run() {
    //     console.log('Start of program');
    //     try {
    //         const result = await divideAsyncAwait(10, 2);
    //         console.log('Result:', result);
    //         console.log("ongoing");
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     } finally {
    //         console.log('End of program');
    //     }
        
    // }

    // run();
