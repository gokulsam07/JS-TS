//backtick  ``

//used to pass data dynamically & is used to initialize text block equivalent og java

let person ={
    name:'Gokul',
    age: 25
};
let text  = `Hi
my
name
is 
Gokul
`;
console.log(`Welcome ${person.name}, you're ${person.age}`);
console.log(text);
console.log(text.search('is')); //gives thr first match of index of string


//some problems : reverse num
let x = 12345;
let res=0;
while(x!==0){
    res=res*10+x%10;
    x=Math.floor(x/10);
}
console.log(res);
