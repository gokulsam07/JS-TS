const promises = [
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Promise 1 rejected')), 1000)),
    new Promise((resolve,reject) => setTimeout(() => resolve('Promise 2 resolved')), 5000),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Promise 3 rejected')), 500))
  ];
  
  Promise.any(promises)
    .then(result => {
      console.log('First fulfilled promise:', result);
    })
    .catch(errors => {
      console.error('All promises were rejected:', errors);
    });
  
    //Will wait until any one of the promise is resolved, the it will return it //if all are failing, will return all the fails together
//If all promises are resolved, the first fullfiled one is returned and processed