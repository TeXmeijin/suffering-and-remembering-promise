import axios from 'axios';

// この処理を実行すると、catch節のconsole.errorが実行されず、エラー全体が表示されることがわかる
// Promiseに関するエラーはtry-catch節でキャッチされずさらに上のレイヤーに投げられてしまう
// これはPromiseによるエラーはUnhandled Rejectionとして扱われるから。
// awaitするかcatchすることで、エラーが例外扱いされ、try-catch節で扱える
// 非同期処理は基本的に失敗する可能性があることを考えると、
// 原則Promiseはawaitかcatchと併用することが必須だといえる

(async () => {
  try {
    axios.get('https://yahoo.co.jp').then(() => console.log('done1'));

    axios.get('https://swapi.dev/api/NotFound').then(() => console.log('done2'));

    console.log('3番目のAPIリクエストStart');
    axios.get('https://swapi.dev/api/people/1').then(() => console.log('done3'));
  } catch (error) {
    if (error instanceof Error) {
      console.error('error', error.message);
    }
  }
})();
