let numArr = []; //empty array
let numArr2 = [1,2,3,4,5]; //array initialized with value
let fruits = ["Banana","Apple","Orange"];
let pLang= ["C","C++","Java","JS"]
console.log(pLang);

pLang.push("Ruby"); //add to the last of array
console.log(pLang);

pLang.pop(); //removes last,if nothing undefined;
console.log(pLang);

let color = ['v','i','b','g'];
let colorS = color.shift(); //removes the first element in array and return 
console.log(color); //will give i,b,g
console.log(colorS); //will give v

color.unshift("v"); //adds to head of array
console.log(color);

let delEle = color.splice(1,2,"lavendar"); // takes three params start index, items to delete from index, any elements to add
console.log(color); //will return the deleted items
console.log("Deleted elements:"+ delEle); //items to add is optional


let sam = ['gokul','naveen','edison','kavin','karthik'];
let sliced = sam.slice(2);
console.log(sliced); // params - start,end -- start is optional, if not given will take it from 0 till n-1 & returns the cut value


let dish = ['biriyani','gravy'];
let ingredients = ['chicken','paneer','gravy'];
let mix = dish.concat(ingredients); //add up in same order & store in third
console.log(mix); 
//console.log(mix.sort()); //sorts

console.log(mix.indexOf('gravy')); // first occurence of ele, if not -1
console.log(mix.indexOf('naan')); //-1 -- non existent

console.log(mix.indexOf('gravy',mix.indexOf('gravy')+1)); //you can start from which index you need from
//it is optional, without it, it will start from idx 0


let text = ['i','am','a','software','engineer'];
console.log(text.includes('e')); //checks for value in array
console.log(text.includes('a','gravy')); //will return tru, if atleast one exists
console.log(text.includes('engineer','software'));

//console.clear();

//for each -- much like java lambdas
let n = [1,2,3,4,5,6,7];
n.forEach((e)=>{
    console.log(e);
})
