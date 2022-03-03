import axios from 'axios';

(async () => {
  const getPersonPromise = axios
    .get<{ name: string }>('https://swapi.dev/api/NotFound')
    .catch((err) => 'error発生');
  console.log(getPersonPromise);
  console.log(await getPersonPromise);
  console.log(getPersonPromise);
})();
