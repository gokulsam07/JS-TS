//Object literals
let user = {
    name: 'Gokul',
    age: 25,
    country: 'India',
    occupation: 'Engineer'
};

console.log(
    "Name: " + user.name + " " + "\n" +
    "Age: " + user.age
);

//Constructor func
function Phone(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}

let ph = new Phone("Samsung", 'S21FE', 30000);
console.log("Device: " + ph.brand + ph.model + "\n" + "Price: " + ph.price);

//Class 

class Customer {
    constructor(name, age, email) { //cons var or param
        this.name = name; //instance variables
        this.age = age;
        this.email = email;
    };

    customerDemographics() {
        console.log(` \n Name : ${this.name} \n Age : ${this.age} \n Email : ${this.email}`);
    }
};

let c = new Customer("Gokul", 25, "gokuls2381@gmail.com");
c.customerDemographics(); //c is instance of class just like in Java

//Object.create() with some prototype
let emp = {
  printInfo(){
    console.log(` \n Hello ${this.name}, Welcome!`);
  }
};

let emp1 = Object.create(emp);
emp1.name ='Gokul';
emp1.printInfo();

//Factory function: returns object
function createDept(depName,hod){
    return {
        depName: depName,
        hod:hod,

        getDepDetails(){
            console.log(depName);
        },
        getHod(){
            console.log(hod);
        }
    };
}

let d = createDept("Mech","Naveen");
d.getHod();
d.getDepDetails();
