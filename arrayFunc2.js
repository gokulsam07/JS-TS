let num = [1,2,3,4,5,6,7,7];
let flag = num.every((x)=>x<10); //every is a func to test if the given condition matches the ele of []
console.log(flag);

let flag2 = num.some((x)=>x/7===1); //atleast one is true
console.log(flag2);
//console.clear();
console.log(num.find((x)=>x/7===1)); //return true whenever it matches
console.log(num.find((x)=>x/8===1)); //undefined if no match

//console.clear();

console.log(num.indexOf(7));
console.log(num.lastIndexOf(7));

num.reverse(); // initial array itself is reversed
console.log(num);
console.clear();


let names = ['123balu','abi','dinesh','Dinesh','calvin'];
console.log(names.sort());

//sort precedence --> number, caps, small