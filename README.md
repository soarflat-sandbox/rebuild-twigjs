# rebuild-twigjs

twig.js を`window`からアクセスできるようにビルドし直したもの。

## 最新バージョンの twig.js はブラウザで利用できない

twig.js は`v0.9.0`以降から、モジュールの形式が UMD 形式になったため、`window`からはアクセスできなくなった。

以下は`v0.8.9`から`v0.9.0`になるまでコミット

https://github.com/twigjs/twig.js/compare/0.8.9...v0.9.0

その中の以下のコミットで、モジュールを`window`からアクセスできるようにする記述があった`src/twig.module.js`が削除されている。

https://github.com/twigjs/twig.js/commit/6c53643f58302a49827b405a5e378b6b9abd1120

そのため、最新バージョン（`v1.15.2`）では、以下のように HTML から`twig.min.js`を読み込んで利用することはできない。

```html
<!DOCTYPE html>
<html>
  <script src="./twig.min.js"></script>
  <script>
    // twig は利用できない
    const template = twig({
      data: 'The {{ baked_good }} is a lie.',
    });

    console.log(template.render({ baked_good: 'cupcake' }));
  </script>
</html>
```

## このリポジトリでやっていること

以下のように`npm install`で取得した`twig`（`twig.js`）を`export`して、`window`からアクセスできるように webpack でビルドした。

```js
import TWIG from 'twig';

export const twig = TWIG.twig;

export const Twig = TWIG;
```

そのため、ビルドした`twig.min.js`は以、以下のように HTML から`twig.min.js`を読み込んで利用できる。

```html
<!DOCTYPE html>
<html>
  <script src="./twig.min.js"></script>
  <script>
    const template = twig({
      data: 'The {{ baked_good }} is a lie.',
    });

    console.log(template.render({ baked_good: 'cupcake' }));
  </script>
</html>
```
