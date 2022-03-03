(() => {
  console.log(
    new Promise((resolve, reject) => {}).then(() => {
      console.log('resolved');
    }),
  );
})();
