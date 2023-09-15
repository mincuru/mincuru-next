This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 技術情報

## DB 構築、ORM

[Prisma](https://www.prisma.io/)を利用して DB 構築、Migration、ORM を実現。

```
npx prisma init --url mysql://root:password@localhost:3306/app
```

## Seed

```
npx prisma db seed
```

https://zenn.dev/eringiv3/books/a85174531fd56a/viewer/ebd64b

## API

OpenAPI code Generator

- API doc 生成

```
npm run openapi:export
```

- API client(SWR) 生成

```
npm run openapi:generate
```

- API doc 生成 & API client(SWR) 生成

```
npm run openapi
```

- API doc 確認

アプリケーションを実行して、ブラウザから以下の URL にアクセスする。
http://localhost:3000/swagger.json

- UI でスキーマの確認

アプリケーションを実行して、ブラウザから以下の URL にアクセスする。
http://localhost:3000/api-doc

以下のエラーが発生することは既知（修正方法は未調査）。

```
- error node_modules/swagger-ui-react/index.js (179:80) @ eval
- error ReferenceError: window is not defined
    at __webpack_require__ (/Users/wataru/github/myhome-cloud/proto-next/.next/server/webpack-runtime.js:33:43)
    at eval (./src/app/api-doc/react-swagger.tsx:7:74)
    at (sc_client)/./src/app/api-doc/react-swagger.tsx (/Users/wataru/github/myhome-cloud/proto-next/.next/server/app/api-doc/page.js:10363:1)
    at __webpack_require__ (/Users/wataru/github/myhome-cloud/proto-next/.next/server/webpack-runtime.js:33:43)
null
```

`ページネーションについて未調査`
https://medium.com/@insidetech/how-to-add-simple-dynamic-pagination-to-your-next-js-13-app-2ad8c7902af0

## GraphQL

### GraphQLスキーマの定義

スキーマは`./schemas/*.graphql`に定義。

### GraphQLスキーマからTypeScript型の生成

以下のコマンドを実行することで、GraphQLスキーマから`./src/generated/graphql.ts`にTypeScript型が生成される。
このTypeScript型は`./src/app/graphql/route.ts`で読み込んで使用している。

```
npm run codegen
```

## テスト

`未着手`

## 認証

`未着手`

## 例外ハンドリング

`未着手`

## ログ出力

`未着手`

## 環境変数

.env ファイルを利用

## CI/CD

`未着手`

## コンテナ化

`未着手`
