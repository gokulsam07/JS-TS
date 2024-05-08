let age:number = 25.45;
var fName:string = 'Gokul';
//forced type

console.log(age.valueOf());

function getInf(){
    let nmyName:String ='Gokul';
    let age:number = 25;
}

declare let globalVar: string ;
globalVar=  'Hello, world!';;


console.log(globalVar); // Output: Hello, world!


function noReturn():void{
    console.log("Hello, this is void return");
}

function returnNum():number{
    return 1;
}

console.log(returnNum());

function returnString(): string{
    return "Returning String";
}

console.log(returnString());