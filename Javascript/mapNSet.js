//Map operator
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap.entries());
console.log(myMap.keys());
console.log(myMap.values());

//Iterating Map
for (const [key, value] of myMap) {
    console.log(key, value);
}
console.log("----------------------------");
myMap.forEach((value, key) => {
    console.log(key, value);
});
console.log("----------------------------");

//Set operator
const mySet = new Set([1, 2, 3, 4, 5]);
for (const item of mySet) {
    console.log(item);
}
console.log("----------------------------");
mySet.forEach(item => {
    console.log(item);
});
