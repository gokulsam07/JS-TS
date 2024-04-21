// Creating a promise
const pizzaPromise = new Promise((resolve, reject) => {
    // Here, you call the pizza place (performing some asynchronous operation)
    setTimeout(() => {
        // When the pizza arrives (operation succeeds), you resolve the promise
        resolve("Delicious pizza!");
        reject("Sorry, no pizza today...");
    }, 2000); // Pizza will be ready in 2 seconds
});

// Using the promise
console.log("Ordering pizza...");

// You wait for the promise to be resolved or rejected
pizzaPromise.then((pizza) => {
    // This function runs when the promise is resolved
    console.log("Yay! My pizza is here:", pizza);
}).catch((error) => {
    // This function runs when the promise is rejected
    console.error("Oops! Something went wrong:", error);
});

console.log("Waiting for pizza...");
