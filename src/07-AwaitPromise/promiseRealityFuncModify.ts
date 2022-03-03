import axios from 'axios';

(async () => {
  const getPerson = () => {
    return axios.get('https://swapi.dev/api/people/1').then((res) => res.data.name);
  };
  console.log(getPerson);
  console.log(getPerson());
  console.log(await getPerson());
})();
