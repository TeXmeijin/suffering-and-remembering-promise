import axios from 'axios';

(async () => {
  console.log(1);
  const getIdPromise = new Promise((resolve, reject) => {
    resolve(2);
  });
  console.log(2);
  getIdPromise.then((id) => {
    console.log(3);
    axios.get('https://swapi.dev/api/people/' + id).then((response) => {
      console.log(4);
      console.log(response.data);
    });
  });
  console.log(5);
})();
