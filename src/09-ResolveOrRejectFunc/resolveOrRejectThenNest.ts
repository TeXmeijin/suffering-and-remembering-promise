import axios from 'axios';

(async () => {
  const id = Math.random() > 0.5 ? 1 : 'NotFound';
  console.log({ id });
  await axios
    .get<{ name: string }>('https://swapi.dev/api/people/' + id)
    .then((response) => {
      console.log(response.data.name);
    })
    .catch((_) => console.log('error発生'));
})();
