(async () => {
  const getPersonPromise = new Promise((resolve, reject) => {
    resolve(2);
  });
  console.log(getPersonPromise);
  const promiseResult = await getPersonPromise;
  console.log(promiseResult);
})();
