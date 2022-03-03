import axios from 'axios';

(async () => {
  console.log(1);
  console.log(await axios.get('https://swapi.dev/api/people/1'));
  console.log(2);
})();
