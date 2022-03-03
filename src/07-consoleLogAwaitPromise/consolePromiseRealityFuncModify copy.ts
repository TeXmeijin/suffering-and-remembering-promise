import axios from 'axios';

(async () => {
  const getPerson = async () => {
    const res = await axios.get('https://swapi.dev/api/people/1');
    return res.data.name;
  };
  console.log(getPerson);
  console.log(getPerson());
  console.log(await getPerson());
})();
