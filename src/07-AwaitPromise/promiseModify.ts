import axios from 'axios';

(async () => {
  const getPersonPromise = axios
    .get<{ name: string }>('https://swapi.dev/api/people/1')
    .then((res) => res.data.name);
  console.log(getPersonPromise);
  console.log(await getPersonPromise);
  console.log(getPersonPromise);
})();
