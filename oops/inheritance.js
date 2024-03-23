class Vehicle {
    static isStarted = false;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    giveVehicleInfo() {
        if (Vehicle.isStarted) {
            return `${this.make}, ${this.model}, ${this.year}`;
        } else {
            return 'start the vehicle to get info';
        }
    }

    start() {
        Vehicle.isStarted = true;
        console.log('started engine');
    }

    stop() {
        Vehicle.isStarted = false;
        console.log('stopped engine');
    }
}


//child or sub class
class Bike extends Vehicle {
    constructor(make, model, year, wheels, seatingCap) {
        super(make, model, year);
        this.wheels = wheels;
        this.seatingCap = seatingCap;
    }

    giveVehicleInfo() {
        if (Vehicle.isStarted) {
            return `${this.make}, ${this.model}, ${this.year},${this.wheels},${this.seatingCap} `;
        } else {
            return 'start the bike to get info';
        }
    }
}

let v1 = new Vehicle('Maruti', 'Alto', 2010);
let detailsV1 = v1.giveVehicleInfo();
console.log(detailsV1);
v1.start();
detailsV1 = v1.giveVehicleInfo();
console.log(detailsV1);
v1.stop();

console.log("-----------------------------------------")

let b1 = new Bike('Honda', 'SP125', 2020, 2, 2);
let detailsB1 = b1.giveVehicleInfo();
console.log(detailsB1);
b1.start();
detailsB1 = b1.giveVehicleInfo();
console.log(detailsB1);
b1.stop();

//Multiple parent class is not allowed for a class in JS i.e Multiple inheritance
//Multi level inheritance is allowed in JS parent -> child -> grandchild