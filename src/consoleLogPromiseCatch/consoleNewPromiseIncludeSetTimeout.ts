(() => {
  console.log(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('rejected');
      }, 1000);
    })
      .then(() => {
        console.log('resolved');
      })
      .catch((value) => {
        console.log(value);
      }),
  );
})();
