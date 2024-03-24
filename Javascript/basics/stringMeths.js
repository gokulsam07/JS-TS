let s = "  Javascript ";
console.log(s.length);
console.log(s.charAt(6));/*or*/ console.log(s[5]);
console.log(s.includes('z'));
console.log(s.charCodeAt(0)); //ASCII 
console.log(s.toLowerCase());console.log(s.toUpperCase());
console.log(s.slice(4,s.length)); /*or*/ console.log(s.slice(4));
console.log(s.substring(4)); /*or*/ console.log(s.substring(4,s.length-1));
let sp = s.split('a');
console.log(sp);
let rep = s.replaceAll('a','b'); //replace only replaces first occurence
console.log(rep);
console.log(s.trim()); //trimStart & trimEnd removes leading & trailing spaces respectively
let x = rep.padEnd(16,"*");//also start is there, num is till which length
console.log(x);