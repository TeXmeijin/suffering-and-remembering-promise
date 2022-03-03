(() => {
  console.log(
    setTimeout(() => {
      console.log('setTimeout executed');
    }, 1000),
  );
})();
