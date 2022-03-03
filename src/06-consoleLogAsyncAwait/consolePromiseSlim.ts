import axios from 'axios';

(async () => {
  const promise = axios
    .get<{ name: string }>('https://swapi.dev/api/people/1')
    .then((res) => res.data.name);
  console.log(promise);
  console.log(await promise);
  console.log(promise);
})();
