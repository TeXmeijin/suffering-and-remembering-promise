import axios from 'axios';

// awaitすると、thenの中身も含めて完了しないと次の処理に進まないため順序保証される
// 現代JavaScriptにおいては特に理由がない限りawaitで実行するほうが自然である

(async () => {
  await axios.get('https://yahoo.co.jp').then(() => console.log('done1'));

  await axios.get('https://swapi.dev/api/people').then(() => console.log('done2'));

  await axios.get('https://swapi.dev/api/people/1').then(() => console.log('done3'));
})();
