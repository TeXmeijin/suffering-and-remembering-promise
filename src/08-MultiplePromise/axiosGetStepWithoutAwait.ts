import axios from 'axios';

(() => {
  console.log(1);
  console.log(axios.get('https://swapi.dev/api/people/1').then((value) => console.log(value.data)));
  console.log(2);
  console.log(axios.get('https://swapi.dev/api/people/2').then((value) => console.log(value.data)));
  console.log(3);
})();
