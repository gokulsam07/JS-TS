var x =10; //global scope
function test(){
    var y=20;
}
console.log(x);


function test2(){
    var str = "Hellow"; //block scope
    console.log(str);
}

test2(); //calling the function


var var1 = "chrome";
console.log(var1);
var var1 = "edge"; //variable can be reinitialised
console.log(var1);
var1 = "firefox"; //can be reassigned
console.log(var1);
var a; //not initialised var will be undefined
console.log(a);