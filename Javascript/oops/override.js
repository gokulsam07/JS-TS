class Car{
    minSpeed=100;
    constructor(make,model) {
        this.make=make;
        this.model=model;
    }
    startEngine(){
        console.log('Engine started for Car')
    }
}

class Audi extends Car{
   startEngine(){
       console.log('Engine started for Audi')
   }
}

let audi = new Audi();
let car = new Car();
car.startEngine();
audi.startEngine();
console.log(audi.minSpeed);