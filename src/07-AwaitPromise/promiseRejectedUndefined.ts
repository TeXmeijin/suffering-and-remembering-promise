import axios from 'axios';

(async () => {
  const getPerson = () =>
    axios.get<{ name: string }>('https://swapi.dev/api/NotFound').catch(() => undefined);
  console.log(getPerson);
  console.log(await getPerson());
  console.log(getPerson());
})();
