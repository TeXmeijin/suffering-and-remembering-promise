(() => {
  console.log(
    new Promise((resolve, reject) => {
      reject('rejected');
    })
      .then(() => {
        console.log('resolved');
      })
      .catch((value) => {
        console.log(value);
      }),
  );
})();
