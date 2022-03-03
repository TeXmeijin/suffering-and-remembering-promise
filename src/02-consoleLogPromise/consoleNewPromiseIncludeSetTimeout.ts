(() => {
  console.log(
    new Promise((resolve, reject) => {
      console.log(1);
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
      console.log(2);
    }),
  );
})();
