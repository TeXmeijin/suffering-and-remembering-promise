(() => {
  console.log(1);
  console.log(
    new Promise((resolve, reject) => {
      console.log(2);
      resolve('resolved');
      console.log(3);
    }).then((value) => {
      console.log(value);
    }),
  );
  console.log(4);
})();
