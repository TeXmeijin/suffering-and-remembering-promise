import axios from 'axios';

// try-catchで囲ってcatchしていないと、例外がおきた時点でcatch節に流れる。
// Reactなどフロントエンドにおいてcatchを割愛している場合は、
// ErrorBoundaryやFrameworkが用意しているエラーコンポーネント、Suspenseなどの
// 境界まで処理が飛ぶことが多い（それらがcatchを代替している）

(async () => {
  try {
    await axios.get('https://yahoo.co.jp').then(() => console.log('done1'));

    await axios.get('https://swapi.dev/api/NotFound').then(() => console.log('done2'));

    await axios.get('https://swapi.dev/api/people/1').then(() => console.log('done3'));
  } catch (error) {
    if (error instanceof Error) {
      console.error('error', error.message);
    }
  }
})();
