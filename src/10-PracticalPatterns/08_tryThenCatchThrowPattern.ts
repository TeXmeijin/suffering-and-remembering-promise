import axios from 'axios';

/**
 * どの順で何が表示されるか、表示される内容がそうなる理由など
 * 答えられたら本章の理解度は高いといえます
 */

(async () => {
  try {
    axios.get('https://yahoo.co.jp').then(() => console.log('done1'));

    axios
      .get('https://swapi.dev/api/NotFound')
      .then(() => console.log('done2'))
      .catch((e) => {
        console.error('error2');
        throw new Error('swapiでエラーが起きました');
      });

    console.log('3番目のAPIリクエストStart');
    axios.get('https://swapi.dev/api/people/1').then(() => console.log('done3'));
  } catch (error) {
    if (error instanceof Error) {
      console.error('error', error.message);
    }
  }
})();
