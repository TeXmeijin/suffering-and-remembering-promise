import axios from 'axios';

// try-catchで囲ってcatchしていないと、例外がおきた時点でcatch節に流れる
// ただしcatchしていたら流れない
// そこで、起きたエラーを開発者やユーザーにわかりやすいメッセージに変えて再度throwすることで
// より上位のcatch節にエラーが起きたことを伝えつつ意味を汲み取りやすくすることがある
// たとえばバックエンドFWでは、throwするのはエラー内容を示すErrorオブジェクトで、
// 最後にFW側がcatchして、その例外にステータスコード(400など)を付与してレスポンスするなど。

(async () => {
  try {
    await axios.get('https://yahoo.co.jp').then(() => console.log('done1'));

    await axios
      .get('https://swapi.dev/api/NotFound')
      .then(() => console.log('done2'))
      .catch((e) => {
        console.error('error2');
        throw new Error('swapi.devでエラーが起きました');
      });

    await axios.get('https://swapi.dev/api/people/1').then(() => console.log('done3'));
  } catch (error) {
    if (error instanceof Error) {
      console.error('error', error.message);
    }
  }
})();
