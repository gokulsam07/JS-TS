class Animal {}

class Dog extends Animal {}

let animal = new Animal();
let dog = new Dog();

console.log(dog instanceof Dog); 
console.log(dog instanceof Animal); 
console.log(animal instanceof Animal); 
console.log(animal instanceof Dog); 