import axios from 'axios';

// awaitすると、then/catchの中身も含めて完了しないと次の処理に進まないため順序保証される

(async () => {
  await axios.get('https://yahoo.co.jp').then(() => console.log('done1'));

  await axios
    .get('https://swapi.dev/api/NotFound')
    .then(() => console.log('done2'))
    .catch(() => console.error('error2'));

  await axios.get('https://swapi.dev/api/people/1').then(() => console.log('done3'));
})();
