(() => {
  console.log(1);
  console.log(
    new Promise((resolve, reject) => {}).catch(() => {
      console.log('resolved');
    }),
  );
  console.log(2);
})();
