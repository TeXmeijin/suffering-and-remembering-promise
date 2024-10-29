import axios from 'axios';

// try-catchで囲ってcatchしていないと、例外がおきた時点でcatch節に流れる
// ただしcatchしていたら流れない

(async () => {
  try {
    await axios.get('https://yahoo.co.jp').then(() => console.log('done1'));

    await axios
      .get('https://swapi.dev/api/NotFound')
      .then(() => console.log('done2'))
      .catch(() => console.error('error2'));

    await axios.get('https://swapi.dev/api/people/1').then(() => console.log('done3'));
  } catch (error) {
    if (error instanceof Error) {
      console.error('error', error.message);
    }
  }
})();
