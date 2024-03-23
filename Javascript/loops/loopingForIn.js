const browser = ["chrome","edge","firefox"];

for(let br in browser){
    console.log(browser[br]) //this is how you're supposed to get the element in  for in loop
    console.log(br) //this will give the index alone if you write like this from 0 to n-1
}