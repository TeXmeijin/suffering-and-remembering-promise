import axios from 'axios';

(async () => {
  const getIdPromise = new Promise((resolve, reject) => {
    resolve(2);
  });
  const id = await getIdPromise;
  const response = await axios.get('https://swapi.dev/api/people/' + id);
  console.log(response.data);
})();
