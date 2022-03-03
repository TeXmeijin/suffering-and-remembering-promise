(() => {
  console.log(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    }).then((value) => {
      console.log(value);
    }),
  );
})();
