let sqr = num => num*num; //single param doesn't need parantheses
let op = sqr(5);
console.log(op);

let msg = ()=>'Hello World'; //no param func
console.log(msg()); 

let add = (n1,n2) => n1+n2;
console.log(add(1,2));

console.clear();

let person = {
    fName:"Gokul",
    lName:"Saminathan"
};

let fName = person=>`${person.fName} ${person.lName}`;
console.log(fName(person));


let greet = (uname, ...age) => { // ..age --> rest params or varargs. It needs parantheses
    if (age.length !== 0) {
        return `Hello ${uname}, Welcome to Disney. You're ${age} years old`;
    } else {
        return `Hello ${uname}, Welcome to Disney.`;
    }
};

console.log(greet("Gokul", 25));
console.log(greet("Naveen"));

let sum = (...num) => num.reduce((init,acc)=>init+acc,0); //not array, varargs
console.log(sum(1,2,3,5,6));

let browserDetails = (browser,...otherDetails)=>{ //rest param should be at last
    if(otherDetails.length>0) return (`${browser} browser initialized. Details: ${otherDetails}`);
    else return (`${browser} browser initialized`);
};

console.log(browserDetails('chrome'));
console.log(browserDetails('chrome','v85.12','headless'));

let maxVal = (...num) =>{
    if(num.length>0){
        return Math.max(...num);
    }
    else return 0;
};

console.log(maxVal());
console.log(maxVal(6,-2,1,10));
