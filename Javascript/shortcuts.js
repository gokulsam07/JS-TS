let arr= [1,1,2,3,4,5,2,3,5];
let uArr = [...new Set(arr)];
console.log(uArr);


let strnum ='45';
let cn=parseInt(45);
console.log(typeof parseInt(45));
console.log(typeof String(cn));

if(!isNaN(cn)) console.log("It is a number");
//swap
let a =5,b=10;
[a,b]=[b,a]; //swapping
console.log(a,b);

//check object property
let person ={
    name:'Gokul',
    age:25
}

console.log(person.hasOwnProperty('name')); 
console.log(person.hasOwnProperty('address'));

//remove falsy values
let val =[1,5,6,null,4,undefined,NaN,false,0];//zero is also falsy
console.log(val.filter(Boolean));

//array join
let nm = ['hi','gokul','how','are','you'];
let joined = nm.join(' ');
console.log(joined);

//object property
console.log(person['name']);
console.log(person['age']);

//keys array
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person)); //K-V array

//get curr date & time
console.log(new Date().toLocaleDateString());

//check var is defined or not
let x;
console.log(typeof x === 'undefined');

//array truncate
arr.length=4; //will truncate till this length
console.log(arr);

//last item in array
console.log(arr.slice(-1)); //just takes the last value
console.log(arr);
