const promises = [
    new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Promise 2 rejected')), 500)),
    new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), 1500))
  ];
  
  Promise.race(promises)
    .then(result => {
      console.log('First settled promise:', result);
    })
    .catch(error => {
      console.error('First settled promise rejected with error:', error);
    });
  
    //Whichever promise is first fulfilled, the results of the promise will be handled in the then or catch of race