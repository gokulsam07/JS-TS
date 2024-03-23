let n =[1,2,3,4,5,6,7,8];

//generic callback fn for map:
let doubled = n.map((temp)=>temp*2);
console.log(doubled);


//custom ex for map:

let fah = [32,68,86,104,214];
function convertToCel(fah){
    return (fah-32)*(5/9);
}
let conv = fah.map(convertToCel);
console.log(conv);

//filtering
console.clear();

let evenFiltered = n.filter((e)=>e%2==0);
console.log(evenFiltered);

let names = ['gokul','kavin','manoj','edison','arun'];
let filteredName = names.filter((s)=>s.includes('o'));
console.log(filteredName);

//complex & real time ex:
let emp = [
    {name:'Gokul',role:'QA',gender:'male',age:24},
    {name:'Edison',role:'SAP Dev',gender:'male',age:25},
    {name:'Karthik',role:'Dev',gender:'male',age:25},
    {name:'Abi',role:'SCC',gender:'female',age:26},
    {name:'Hepzhi',role:'Dev',gender:'female',age:25}
]

/*
call back func needs return explicitly mentioned 
otherwise, it will return undefined,
 else don't use {}
 */

let empFilt = emp.filter((x)=>{return (x.name.includes('o')|| x.name.includes('i'))&& x.gender.includes('male') && x.age >24});
console.table(empFilt);


//reduce func
let number = [1,2,3,4,5,6,7,8];

let sum = number.reduce((a,b)=>a+b,0); //reduce takes 4 params, pervious value, current value, => operation, intial value (is optional)
console.log(sum);

let findTop = [30,10,45,67,8,32,45,6];
let top = findTop.reduce((max,num)=>{
if(num>max) return num;
else return max;
},findTop[0]);

console.log(top);

//one more complex ex:

let cart = [
    {item:'shirt',price:750,count:2},
    {item:'cooler shirt',price:800,count:1},
    {item:'jean',price:900,count:2}
];

let price = cart.reduce((x,y)=>{
return y.price*y.count;
},0);

console.log("Total price:" + price);