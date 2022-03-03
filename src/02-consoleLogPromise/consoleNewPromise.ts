(() => {
  console.log(
    new Promise((resolve, reject) => {
      resolve('resolved');
    }),
  );
})();
