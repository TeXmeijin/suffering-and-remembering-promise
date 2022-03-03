# 苦しんで覚えるPromise(WIP)

本リポジトリは、JavaScriptのコア機能の一つであるPromiseについて、1つずつステップを追って理解を進めることを目標にして作られています。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise

本リポジトリにはソースコードのみを掲載し、解説などは別途教材やブログ記事として執筆予定です。

## Target

- JavaScriptを使って任意のソースコードを実行したことがあり、配列、for文、if文、`console.log`などごくごく基本的な文法を活用することができる
- `axios`を見たことがある
- 非同期処理はPromiseという技術を使っている、ということ自体は知ってはいるものの、実際にAPI通信などで活用することが難しい
- プログラミングにある程度習熟したつもりだが、自分なりに考えてコードを書こうとすると途端にどうしていいかわからなくなる

## Concept

- 極限までシンプルにしたコードから、確実に一歩ずつ理解を深める
  - 市販の教材は、一つのコードに多くの学習事項を込めすぎている。本リポジトリではほとんど最小の差分のみを各コード間に作り、一歩ずつ理解を深められるようにしている
- 動かして、見て理解することができる
  - むしろ、説明はほとんどなく、コードを実行して出力される内容を見るだけで進められる

## Get Started

```sh
yarn
yarn ts <実行したいソースコードのパス>
例：yarn ts src/01-consoleLogIntroduce/consoleFunction
```

## How to Learn

`src`以下のソースコードを、ナンバリングされている順に実行しながら理解を深めてください。

- 最初はシンプルな動作をするコードから始めるようにしています。サクサク進めてください
- 中盤以降、Promiseが出てきます。実行結果を見て、どうしてそうなっているか？を説明できるようになってから次に進むこと
- 必要に応じて、自分なりに、「ここをこう変えるとどうなるだろう？」と試してみるのもいいでしょう
- 逆に言えば、どこから理解が追いつかなくなったか、が自覚できるはずなので、その点を踏まえて身近な先輩などに相談してみるといった使い方もいいと思います
- ナンバリングされている各フォルダ内では、順番は前後しても構いません。ですが、よりシンプルなものから進めるのがいいと思われます

▼序盤のコード
```ts
(() => {
  const func = () => {};
  console.log(func);
})();
```

▼中盤のコード
```ts
(() => {
  console.log(
    new Promise((resolve, reject) => {
      resolve('resolved');
    }).then((value) => {
      console.log(value);
    }),
  );
})();
```

## Reference

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://ja.javascript.info/
- https://azu.github.io/promises-book/

## Thanks

本リポジトリのコンセプトは「苦しんで覚えるC言語」という書籍を模倣しています。学生時代に非常にお世話になった素晴らしいプログラミング本です。
https://www.shuwasystem.co.jp/book/9784798030142.html