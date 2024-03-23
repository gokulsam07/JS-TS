//method overloading is not possible in js because there is no strict type of data
function print(){
    console.log("hi");
}

function print(name){
    console.log(`Hi ${name}`);
}

function print(name,age){
    console.log(`Hi ${name}, you're ${age}`);
}

print(); //still will call the name, age loaded func 
print('Gokul'); // age will be undefined

//because of this reason overloading is not possible
//so how can you overload similar thing in js?

function display(browser,version,...remote){
    if(remote.length!==0){
        if(typeof browser==='string'&& typeof version ==='string'){
            console.log(`launching ${browser} ${version}`);
        }
        else{
            console.log(`launching ${browser} latest version`);
        }
    }
    else{
        console.log(`launching ${browser} latest in remote i.e, selenium grid `);
    }
};

display('chrome','124.67.383','yes');
display('chrome');

