import axios from 'axios';

(async () => {
  // 現実世界のAPIを模倣するために、半々の確率で失敗するように実装
  const validOrInvalidId = Math.random() > 0.5 ? 1 : 'NotFound';
  console.log({ id: validOrInvalidId });
  const response = await axios
    .get<{ name: string }>('https://swapi.dev/api/people/' + validOrInvalidId)
    .catch((_) => undefined);

  if (!response) {
    console.log('error発生');
    return;
  }
  console.log(response.data.name);
})();
