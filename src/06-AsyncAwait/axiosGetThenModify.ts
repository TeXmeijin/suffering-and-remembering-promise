import axios from 'axios';

(async () => {
  console.log(
    await axios.get<{ name: string }>('https://swapi.dev/api/people/1').then((value) => {
      return value.data.name;
    }),
  );
})();
