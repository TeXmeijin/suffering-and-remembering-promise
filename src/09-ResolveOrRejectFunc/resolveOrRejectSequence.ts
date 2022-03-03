import axios from 'axios';

(async () => {
  const getId = () =>
    new Promise<number>((resolve, reject) => {
      const resolveRandom = Math.random() > 0.5;
      if (resolveRandom) {
        resolve(2);
        return;
      }
      reject(new Error());
    });

  const id = await getId().catch(() => undefined);
  if (!id) {
    console.log('error発生');
    return;
  }

  const personId = Math.random() > 0.5 ? id : 'NotFound';
  console.log({ personId });
  const response = await axios
    .get<{ name: string }>('https://swapi.dev/api/people/' + personId)
    .catch((_) => undefined);

  if (!response) {
    console.log('error発生');
    return;
  }
  console.log(response.data.name);
})();
