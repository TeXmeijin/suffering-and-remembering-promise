import axios from 'axios';

(() => {
  console.log(axios.get('https://swapi.dev/api/people/1').then((value) => console.log(value)));
})();
