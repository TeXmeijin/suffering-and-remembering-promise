import axios from 'axios';

(() => {
  console.log(1);
  console.log(
    axios
      .get('https://swapi.dev/api/NotFound')
      .then((value) => {
        console.log(2);
        console.log(value);
      })
      .catch((value) => {
        console.log(3);
        console.error(value);
      }),
  );
  console.log(4);
})();
