import axios from 'axios';

(async () => {
  console.log(
    await axios.get('https://swapi.dev/api/people/1').then((value) => {
      return value;
    }),
  );
})();
