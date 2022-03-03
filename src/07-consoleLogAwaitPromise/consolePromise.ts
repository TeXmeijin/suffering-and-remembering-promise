import axios from 'axios';

(async () => {
  const getPersonPromise = axios.get('https://swapi.dev/api/people/1');
  console.log(getPersonPromise);
  console.log(await getPersonPromise);
  console.log(getPersonPromise);
})();
