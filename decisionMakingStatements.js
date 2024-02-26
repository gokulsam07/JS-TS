function eligibleToVote(age){
    if(age>=18){
        console.log("Can vote");
    }else{
        console.log("Can't vote");
    }
}

eligibleToVote(10);
eligibleToVote(24);

//ladder

function classification(num){
    if(num==0){
        console.log("neutral");
    }
    else if(num>0){
        console.log("+ve");
    }
    else{
        console.log("-ve");
    }
}

classification(-1);
classification(1);
classification(0);


//switch case

function dayCalc($day){
    let day;
    switch($day){
        case 0:  day="Sunday"; break;
        case 1:  day="Monday"; break;
        case 2:  day="Tuesday"; break;
        case 3:  day="Wednesday"; break;
        case 4:  day="Thrusday"; break;
        case 5:  day="Friday"; break;
        case 6:  day="Saturday"; break;
        default:  day="Enter valid day"; break // if not break; things will flow over, if default is first & matches -it will still overflow
    }
    return day;
}

console.log(dayCalc(1));
console.log(dayCalc(-1));

function launchBrowser(bName){
    let browser;
    switch(bName){
        case "chrome": browser = "Launch chrome"; break;
        case "edge": browser = "Launch edge"; break;
        case "firefox": browser = "Launch firefox"; break;
        default: browser = "Launch a valid browser, '"+bName+"' doesn't exist"; break;
    }
    return browser;
}

console.log(launchBrowser("chrome"));
console.log(launchBrowser("loosu paya"));