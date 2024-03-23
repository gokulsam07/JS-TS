//func declaration

function add(a, b) {
   return a + b;
}
let op = add(5, 6);
console.log(op);

//func expression : no name for func, can use var name

let opx = function (x, y) {
   return x * y;
};
console.log(opx(-1, 5));
let res = opx(7, 5);
console.log(res);

// arrow func --> most modern & prominently used
let opy = (n1, n2) => n1 / n2;
console.log(opy(3, 7));

//func constructor
let ox = new Function('a', 'b', 'return a*b');//needs to be in  ''  //takes varargs inp & last is func body
console.log(ox(7, 6)); //this is not used mostly

//console.clear();

//IIFE (Immediately Invoked Function Expression)
(function () {
   console.log("IIFE Func");
})();

//Generator func
function* genFunc(...num) {
   for (let n of num) {
      yield n * 1;
      yield n * 2;
      yield n * 3;
   }
};

let result = genFunc(2, 4, -3);
let next = result.next();
while (!next.done) {  //debug & check how it works
   console.log(next.value);
   next = result.next();
}

//Anonymous func : it actually doesn't have a name
let un = [1, 2, 3, 4, 5, 6, 7];
let opv = un.filter(function (x) {
   if (x % 2 === 0) { return x };
});

//or this is equivalent of

/*
let opv = un.filter((x)=>{
   if(x%2===0){return x};
});
*/
console.log(opv);


//Recursive func
let fac = function (n) {
   if (n === 0 || n === 1) return 1;
   else {
      return n * fac(n - 1);
   }
};

console.log(fac(5));


//Higher order function
function add(a, b) {
   return a + b;
}

function subtract(a, b) {
   return a - b;
}

function multiply(a, b) {
   return a * b;
}

function divide(a, b) {
   return a / b;
}

let ops = function(operation, a, b) {
   return operation(a,b) 
}

console.log(ops(subtract,4,5));