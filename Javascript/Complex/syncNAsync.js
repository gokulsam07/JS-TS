//sync: happens sequentially, blocks next step until previous is done, takes more time //blocking API       
//async : happens concurrently not blocking any task //non blocking API

/*Asynchronous operations do not block the main thread. 
Instead, they allow the program to continue executing other tasks while waiting for certain operations to complete.
Callback functions, Promises, and Async/Await are common mechanisms used to handle asynchronous operations in JavaScript.*/

//sync ex
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

 const fs = require('fs');
// let op = fs.readFileSync("C:\\PersonalWorkspace\\NodeLearnings\\Javascript\\Complex\\sample.txt","utf-8");
// console.log(op);
// console.log("End of sync op");


//async ex
// console.log("Start");
// setTimeout(() => {
//     console.log("time out done");
// }, 2000);

// console.log("End");
// in the above ex, start and stop will be executed without waiting for the time out done for 2s



console.log("---------------------------------");
fs.readFile("C:\\PersonalWorkspace\\NodeLearnings\\Javascript\\Complex\\sample.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
console.log("End of async op");