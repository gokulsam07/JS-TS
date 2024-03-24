class Car{
    static wheel=4;
    constructor(model, make,price){
        this.make=make;
        this.model=model;
        this.price=price;
    }
    static stop(){
        console.log('stopped car');
    }
};

let c1= new Car('Maruti','Breeza','1300000');
console.log(Car.wheel);
Car.stop();
 //static methods in JS is not accessible using object, will throw exception
try{
    c1.stop();
}
catch{
    console.log('Cant use object to call static method');
}