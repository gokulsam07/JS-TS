// function startCoffeeMachine(callBack){
//     setTimeout(() => {
//         callBack("Coffee machine is ready");
//     }, 2000);
// };

// function grindCoffeeBeans(callBack){

//     setTimeout(() => {
      
//         callBack("Grinding is done");
//     }, 1000);
// };

// function boilWater(callBack){
   
//     setTimeout(() => {
  
//         callBack("water is boiled");
//     }, 500);
// };


// function pourBoilingWater(callBack){
  
//     setTimeout(() => {
  
//         callBack("water is poured");
//     }, 500);
// };


// function putGroundCoffee(callBack){
 
//     setTimeout(() => {
      
//         callBack("ground coffee is added");
//     }, 500);
// };


// function mixCoffee(callBack){
   
//     setTimeout(() => {
        
//         callBack("Coffee is ready");
//     }, 500);
// };

// function enjoyCoffee(){
//     console.log("Enjoy your Coffee, Gokul!");
// }

// //CallBack Hell or Pyramid of Doom -- poor readability 
// startCoffeeMachine((msg) => {
//     console.log(msg);
//     grindCoffeeBeans((msg) => {
//         console.log(msg);
//         boilWater((msg) => {
//             console.log(msg);
//             pourBoilingWater((msg) => {
//                 console.log(msg);
//                 putGroundCoffee((msg) => {
//                     console.log(msg);
//                     mixCoffee((msg) => {
//                         console.log(msg);
//                         enjoyCoffee();
//                     });
//                 });
//             });
//         });
//     });
// });


//To avoid this Promises & async - await is created

function startCoffeeMachine() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = "Coffee machine is ready";
          //  console.log(message);
            resolve(message);
        }, 2000);
    });
}

function grindCoffeeBeans() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = "Grinding is done";
          //  console.log(message);
            resolve(message);
        }, 1000);
    });
}

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = "Water is boiled";
          //  console.log(message);
            resolve(message);
        }, 500);
    });
}

function pourBoilingWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = "Water is poured";
           // console.log(message);
            resolve(message);
        }, 500);
    });
}

function putGroundCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = "Ground coffee is added";
            //console.log(message);
            resolve(message);
        }, 500);
    });
}

function mixCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = "Coffee is ready";
          //  console.log(message);
            resolve(message);
        }, 500);
    });
}

function enjoyCoffee() {
    console.log("Enjoy your Coffee, Gokul!");
}

// Chain promises to perform the coffee-making process
startCoffeeMachine()
    .then(message => grindCoffeeBeans().then(() => message))
    .then(message => boilWater().then(() => message))
    .then(message => pourBoilingWater().then(() => message))
    .then(message => putGroundCoffee().then(() => message))
    .then(message => mixCoffee().then(() => message))
    .then(() => enjoyCoffee())
    .catch(error => console.error("Error:", error));
