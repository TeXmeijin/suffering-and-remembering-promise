import axios from 'axios';

(() => {
  console.log(
    axios
      .get('https://swapi.dev/api/NotFound')
      .then(() => console.log(undefined))
      .catch((value) => console.error(value)),
  );
})();
