/**
 * TypeScriptのUnion型を使った分岐の判定
 */

type ResponseOrUndefined = { name: string } | undefined;

const getResponse: () => ResponseOrUndefined = () => ({ name: 'name' });
const response = getResponse();

// console.log(response.name); Type Error!!

if (response) {
  // ifを使って明示的にundefinedではない(=nameを持っている)ことをTypeScriptのコンパイラに教えてあげる必要がある
  // この仕様によって、TypeScriptでエラーにならないように組むことが、すなわち実行時のエラーも防ぐことに繋げられて安全
  console.log(response.name);
}

type ResponseAorB = { type: 'person'; name: string } | { type: 'product'; price: number };
const getResponse2: () => ResponseAorB = () => ({ type: 'person', name: 'name' });
const response2 = getResponse2();

// 応用。これもTypeScriptコンパイラにUnion型のどれに該当するか特定しうる情報を与えているし、これによって実行時エラーからも安全になる
if (response2.type === 'person') {
  console.log(response2.name);
}
if (response2.type === 'product') {
  console.log(response2.price);
}
