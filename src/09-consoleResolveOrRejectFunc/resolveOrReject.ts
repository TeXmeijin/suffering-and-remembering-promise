import axios from 'axios';

(async () => {
  const id = Math.random() > 0.5 ? 1 : 'NotFound';
  console.log({ id });
  const response = await axios
    .get<{ name: string }>('https://swapi.dev/api/people/' + id)
    .catch((_) => undefined);

  if (!response) {
    console.log('error発生');
    return;
  }
  console.log(response.data.name);
})();
