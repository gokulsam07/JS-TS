function greet(name, callMeBack) {
    console.log('Hi ' + name + ',Welcome!'); //normal function
    callMeBack();
}

function welcome() {
    console.log('from call back, welcome!');
}

greet('Gokul', welcome);

console.log('-------------');

//callback using async
function printInfo(name, callMeBack) {
    console.log('printing info for ' + name);
    setTimeout(function () {
        callMeBack('calling from async call back')
    }, 5000);
}

function displayMsg(msg) {
    console.log(msg);
}

printInfo('Gokul', displayMsg);


console.log('-----------------------');

function getUserDetails(userId, callBackFnUser){
    setTimeout(() => {
        const users={
            1:{id:1,name:'Gokul'},
            2:{id:2,name:'Naveen'}
        };
        const user = users[userId];
        if(user){
                callBackFnUser(null,user);
        }else{
            callBackFnUser("user not found",null);
        }
    }, 2000);
}

function handleUserData(error,user){
    if(error){
        console.log("Error : ", error);
    }
    else{console.log("User : ", user);}
}

getUserDetails(1,handleUserData);
getUserDetails(5,handleUserData);