(() => {
  console.log(
    new Promise((resolve, reject) => {
      resolve('resolved');
    }).then((value) => {
      console.log(value);
    }),
  );
})();
