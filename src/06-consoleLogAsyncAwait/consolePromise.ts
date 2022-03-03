import axios from 'axios';

(async () => {
  const promise = axios.get('https://swapi.dev/api/people/1');
  console.log(promise);
  console.log(await promise);
  console.log(promise);
})();
