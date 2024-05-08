//issues with js

function getInfo(){
    if(fName.length>0){ //fName is not even defined, but no compile time error or no type script param 
        console.log("PASS");
    }
    else{
        console.log("FAIL");
    }
}

//you'll get error only in the run time
getInfo();

//check start1.ts for ts 