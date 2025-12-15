<p align="center">
<img src="https://github.com/akashic-games/akashic-pdi/blob/master/img/akashic.png"/>
</p>

# akashic-pdi

Akashicのプラットフォーム依存層(Platform Dependent Implementation (PDI) Layer)のインターフェース定義を与えます。

## インストール

```
npm install @akashic/akashic-pdi
```

## 利用方法

```
import * as pdi from "@akashic/akashic-pdi";
```

## 開発

### ビルド:

```
npm run build
```

## テスト:

```
npm test
```

## 開発者向け

### 本ツールの publish について
* 以下の手順を踏むことで publish が行われます。
  1. package.json の version を更新したコミットを作成
  2. 1 のコミットで master ブランチを更新する
  3. GitHub Actions のリリースワークフローが実行される
* package-lock.json が原因で publish に失敗した場合は、`npm i --before <実行時の7日前の日付(yyyy-mm-dd)>` を実行して package-lock.json を更新し、再度 publish 処理を行なってください。

## ライセンス
本リポジトリは MIT License の元で公開されています。
詳しくは [LICENSE](https://github.com/akashic-games/akashic-pdi/blob/master/LICENSE) をご覧ください。

ただし、画像ファイルおよび音声ファイルは
[CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/) の元で公開されています。
