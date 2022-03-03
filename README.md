# 苦しんで覚えるPromise（WIP)

本リポジトリは、JavaScriptのコア機能の一つであるPromiseについて、1つずつステップを追って理解を進めることを目標にして作られています。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise

本リポジトリにはソースコードのみを掲載し、解説などは別途教材やブログ記事として執筆予定です。

## Target

- JavaScriptを使って任意のソースコードを実行したことがあり、配列、for文、if文、`console.log`などごくごく基本的な文法を活用することができる
- `axios`を見たことがある
- 非同期処理はPromiseという技術を使っている、ということ自体は知ってはいるものの、実際にAPI通信などで活用することが難しい
- プログラミングにある程度習熟したつもりだが、自分なりに考えてコードを書こうとすると途端にどうしていいかわからなくなる

## Get Started

```sh
yarn
yarn ts <実行したいソースコードのパス>
例：yarn ts src/01-consoleLogIntroduce/consoleFunction
```

## How to Use

`src`以下のソースコードを、ナンバリングされている順に実行しながら理解を深めてください。

- 最初はシンプルな動作をするコードから始めるようにしています。サクサク進めてください
- 中盤以降、Promiseが出てきます。実行結果を見て、どうしてそうなっているか？を説明できるようになってから次に進むこと
- ナンバリングされている各フォルダ内では、順番は前後しても構いません。ですが、よりシンプルなものから進めるのが良いと思われます

## Reference

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://ja.javascript.info/
- https://azu.github.io/promises-book/