class Car{
    constructor(brand,model,color,price){
        this.brand=brand;
        this.model=model;
        this.color=color;
        this.price=price
    }

    printCarInfo(){
        console.log(`Brand : ${this.brand}, Model : ${this.model}, Color : ${this.color}, Price : ${this.price}`);
    }
}

let q1 = new Car('Volkswagen','Polo','White',1350000);
console.table(q1);
q1.printCarInfo();

//constructor overloading is not allowed since overloading in itself is not possible in JS
