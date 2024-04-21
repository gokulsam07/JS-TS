const arr = [1,2,3,4,5];
const [a,b,c] =arr;
console.log(a);
console.log(b);
console.log(c);

const pLang = ["C","C++","Java","Python","JS"];
const [p,q,r,...s] =pLang;
console.log(p);
console.log(q);
console.log(r);
console.log(s);


const person = {
    firstName :'Gokul',
    lastName : 'Saminathan',
};

function printName({firstName,lastName}){
    console.log("Hi", firstName + " " + lastName);
};

printName(person);


const {firstName,lastName,age=24} = person;
console.log(firstName);
console.log(lastName);


//Object destructuring {}
//Array destructuring [] -- can use ... op in array destructuring

