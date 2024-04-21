const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 1000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise 3 rejected'));
    }, 1500);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values); // Output: ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved'] //only if all the promises is accepted, this will execute
    })
    .catch((error) => {
      console.error('One of the promises rejected:', error);
    });
  