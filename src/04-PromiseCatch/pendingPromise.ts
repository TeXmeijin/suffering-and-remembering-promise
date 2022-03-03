(() => {
  console.log(
    new Promise((resolve, reject) => {}).catch(() => {
      console.log('resolved');
    }),
  );
})();
