import axios from 'axios';

(() => {
  console.log(1);
  console.log(axios.get('https://swapi.dev/api/people/1').then((value) => console.log(value)));
  console.log(2);
})();
