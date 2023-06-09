# ポートフォリオを作る

https://flutcla.github.io/portfolio/

デプロイ: `npm run deploy`

---

## 初期設定等
参考:https://www.sukerou.com/2022/03/github-pages-react.html

### プロジェクト作成

`npx create-react-app portfolio --template typescript`

### gh-pages のインストール

`npm install gh-pages --save-dev`

#### デプロイ用コマンドを `./package.json` に記載
```json
"scripts": {
  ...,
  "deploy": "npm run build && gh-pages -d build"
}
```

### cross-env のインストール
`npm install cross-env --save-dev`

#### 環境変数の設定を `./package.json` に記載
```diff
"scripts": {
-  "build": "react-scripts build",
+  "build": "cross-env PUBLIC_URL=/<リポジトリ名> react-scripts build",
},
```

## フォントの選定
参考: https://qiita.com/cokemaniaIIDX/items/21916f02d9fe1209f600

- [Google fonts](https://fonts.google.com) からいい感じのやつを探す(今回は Noto Sans)
- `@import` を生成する `@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');`
- `./src/index.css` に `@import` を追記
- `./src/index.css` の `font-family` の先頭に `'Noto Sans JP'` を追記

## react-router-dom v6
参考: https://zenn.dev/longbridge/articles/65355d3fdb7939


---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
