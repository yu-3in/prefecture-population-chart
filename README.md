# 都道府県別人口グラフ

RESAS API を用いた都道府県別に人口を視覚的に表示するサービスです。

https://prefecture-population-chart.vercel.app/

![スクリーンショット 2023-06-22 18 26 34](https://github.com/yuuumiravy/prefecture-population-chart/assets/73621966/3d6b2189-5b17-461c-9b16-44d9832c7161)

## Quick Start

開発に関する制約等の詳細は [DEVELOPMENT.md](/docs/DEVELOPMENT.md)を参照してください。

### 前提

- npm または yarn がインストールされていること
- 本リポジトリを clone または fork していること
- コマンドラインから vercel が使用できる（ログインされている状態）

以降 yarn で説明をしていきます。npm の場合は適宜読み替えてください。

### ライブラリのインストール

```cmd
$ yarn
```

### .env を作成

※`.env.local`などはライブラリが対応していないため必ず`.env`で作成してください

```cmd
$ cp .env.example .env
```

ご自身の RESAS API KEY を `RESAS_API_KEY`にセットしてください。

### vercel.json を作成

ルートディレクトリ直下に`vercel.json`を作成し、以下の内容をコピペする。

```vercel.json
{
  "description": "ローカル環境では、クライアント(localhost:5173)とAPIサーバ(localhost:3000)のURLが異なるためCORSが発生する。そのため、vercel.jsonでCORSの問題を解決している。CORSは本番環境では必要なため、.gitignoreにvercel.jsonを指定してpushしないようにしている。現状CORSの設定だけが記述されているが、今後他の設定が追加された場合はvercel.jsonをproductionへデプロイする必要があるのでCORS対策は別の方法を取る必要がある。",
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Credentials", "value": "true" },
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-API-KEY"
        }
      ]
    }
  ]
}

```

### ローカルサーバの起動

フロントエンドサーバの起動

```cmd
$ yarn dev
```

### バックエンドサーバの起動

※ローカル環境のバックエンドサーバには Vercel を使用しています。そのため、Vercel がコマンドラインから使用できる必要があります。

```cmd
$ yarn vercel dev
```

http://localhost:5173 にアクセスすると画面が表示されます。

## Tips: 開発コマンド

### テストの実行

```cmd
$ yarn test
```

### linter の実行

```cmd
$ yarn link
```

```cmd
$ yarn lint:fix
```

### prettier の実行

```cmd
$ yarn format
```

```cmd
$ yarn format:fix
```

### ビルドの実行

```cmd
$yarn build
```

## 主な利用技術

#### スクリプト

- React
- TypeScript

#### 状態管理

- Redux Toolkit
- RTK Query

#### (グラフ等の)ライブラリ

- highcharts
- react-google-charts

### スタイリング

- CSS
- emotion

#### フォーマッターなど

- ESlint
- Prettier
- vitest

#### デプロイ

- vercel

## 工夫したポイント

### RESAS API KEY の露出対策

スクリプトコードに API KEY を埋め込むと、悪意のあるユーザが API KEY を主見出し、悪用されかねません。
そこで、今回は簡易的な対策として Vercel Serverless Functions を活用したプロキシサーバによる対策を講じました。

プロキシサーバ側で API KEY を管理して、ブラウザからはそのプロキシサーバへ RESAS へのリクエストを代理要求することで、API KEY を露出させずに安全に情報を取得できるようになります。

### RESAS への過剰なリクエストを防止

RTK Query によって、一度リクエストした情報がキャッシュされ再びリクエストされることはありません。これによりトラフィックの削減とサーバの負荷軽減が実現されています。特に都道府県別の人口の情報は、チェックボックスがクリックされるたびにリクエストが走ると大量のトラフィックとなってしまいます。RTK Query を用いることでこの問題が解消され、UX の向上にもつながっています。

### ディレクトリ設計

`features`ディレクトリを採用することで機能ごとにコンポーネントや API、constants などをまとめて管理するようにしています。これにより、その機能に対して集中して開発ができるようになるだけでなく、機能間の依存もなくなりバグが少なくなります。
