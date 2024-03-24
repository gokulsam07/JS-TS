//combine arrays & objects
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2]; // Combines two arrays
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

const obj1 = { name: 'John', age: 30 };
const obj2 = { city: 'New York', country: 'USA' };
const combinedObj = { ...obj1, ...obj2 }; // Combines two objects
console.log(combinedObj); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }


//copy array & objects : creates shallow copy
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

const originalObj = { name: 'John', age: 30 };
const copiedObj = { ...originalObj };
console.log(copiedObj); // Output: { name: 'John', age: 30 }


//add element to array
const arrx = [1, 2, 3];
const newArr = [...arrx, 4, 5, 6];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]

//add prop to objects
const objx = { name: 'John', age: 30 };
const newObj = { ...objx, gender: 'Male' }; // Adds a new key-value pair to an object
console.log(newObj); // Output: { name: 'John', age: 30, gender: 'Male' }


//varargs
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers); // Passes elements of array as arguments
console.log(result); // Output: 6


//remove duplicates using spread
let arr= [1,1,2,3,4,5,2,3,5];
let uArr = [...new Set(arr)];
console.log(uArr);

//without spread
uArr = [new Set(arr)]; //[ Set(5) { 1, 2, 3, 4, 5 } ]
console.log(uArr);


