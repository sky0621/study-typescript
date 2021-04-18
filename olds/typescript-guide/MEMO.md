- コンパイル ... TypeScriptやBabel
- バンドル ... webpack, Browserify, Parcel

# 組み込みの型ガード
「typeof 変数」
- undefined: "undefined"
- bool型: "boolean"
- 数値: "number"
- 文字列: "string"
- シンボル: "symbol"
- 関数: "function"

# デフォルト引数、分割代入
<pre>
// 新しいデフォルト引数
function f(name="小動物", favorite="小豆餅") {
  console.log(`${name}は${favorite}が好きです`);
}
f(); // 省略して呼べる

// 分割代入を使って配列やオブジェクトを変数に展開＆デフォルト値も設定
// 最後の={}がないとエラーになるので注意
function f({name="小動物", favorite="小豆餅"}={}) {
    :
}
</pre>

# デコレータ
<pre>
function StrongZero(target) {
  target.prototype.drink = function() {
    console.log("ストロングゼロを飲んだ");
  };
  return target;
}

@StrongZero
class SmallAnimal {
}

const sa = new SmallAnimal();
sa.drink();
</pre>

# Promise は「時間がかかる仕事が終わった時に通知するという約束」

# 非同期と制御構文
<pre>
// for of, if, while, switchはawaitとの相性も良い
for (const value of iterable) {
  await doSomething(value);
}
console.log("この行は全部のループが終わったら実行される");
</pre>

APIコールがある場合は↓の方がよい？

<pre>
await Promise.all(
  iterable.map(
    async (value) => doSomething(value)
  )
);
</pre>

# Promiseの分岐と待ち合わせの制御
<pre>
async function 味噌汁温め(): Promise<味噌汁> {
  await ガスレンジ();
  return new 味噌汁();
}

async function ご飯温め(): Promise<ご飯> {
  await 電子レンジ();
  return new ご飯();
}

const [a味噌汁, aご飯] = await Promise.all([味噌汁温め(), ご飯温め()]);
いただきます(a味噌汁, aご飯);
</pre>
