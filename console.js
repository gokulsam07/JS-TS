console.log("Hey")
console.info("This is info")
console.error("This is error")
console.warn("This is warning")

let person1 = {
     name:'Gokul',
    age:24,
    education: 'Bachelors',
    occupation:'QA'
}
let person2 = {
    name:'Kavin',
   age:24,
   education: 'Bachelors',
   occupation:'Dev'
}

console.log(person1);  //logs in a stratight line like an object
console.table({person1,person2}); //logs in tabular formart


console.log("-------------------");


console.group();
console.log("This");
console.log("is");
console.log("grouped");
console.log("log");
console.groupEnd(); // there is something called group collapsed as well


console.time();
for(let x=0;x<10;x++){
}
console.timeEnd();


console.clear(); // will clear all the console details


console.count("Hey");
console.count("My");
console.count("Hey");


console.assert(10===20,'The numbers aren\'t equal'); // if the assertion pass, you won't see in console


console.clear();


function test(){
    console.trace(); //gives stack trace
}

test(); console.clear();