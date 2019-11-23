# MEMO
## TypeScriptには、変数宣言空間と型宣言空間という2つの宣言空間があります。
### 型宣言空間(Type Declaration Space)
<pre>
class Foo {};
interface Bar {};
type Bas = {};
</pre>
### 変数宣言空間(Variable Declaration Space)
<pre>
class Foo {};
var someVar = Foo;
var someOtherVar = 123;
</pre>

## ファイルモジュール(File Module)＝external modules
### TypeScriptファイルのルートレベルにimportまたはexportが存在する場合、そのファイル内にローカルスコープ(local scope)が作成されます。
#### ひとまとめexport
<pre>
// file `foo.ts`
let someVar = 123;
type SomeType = {
  foo: string;
};
export {
  someVar,
  SomeType
};
</pre>

#### 別名export
<pre>
// file `foo.ts`
let someVar = 123;
export { someVar as aDifferentName };
</pre>
#### importパターン集
<pre>
import { someVar, SomeType } from './foo';
import { someVar as aDifferentName } from './foo';
import * as foo from './foo';
import 'core-js'; // a common polyfill library
</pre>