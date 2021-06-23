# 概要

## 技術

- JavaScript

  - 命令的な View で DOM 操作を行う。

- TypeScript

  - イベント処理の型推論

  ```
  type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  }
  ```

- [React](https://ja.reactjs.org/docs/getting-started.html)

  - URL と画面の紐づけ(ルーティング)を自分で記述する必要がある。
  - CSS Modules を使う際に webpack の設定を記述する必要がある。
  - サーバーサイドレンダリングを実現する事が難しい。
  - 宣言的な View で、状態の変化を意識せずにデータさえ与えたら勝手に View が変わるため、メンテナンス性が高い。
  - 親からコンポーネントを呼び出すときに少しデータを変えることによって、同じコンポーネントだけど表示は変えることが出来る。
  - コンポーネントの中に状態を閉じ込めることによって、ユーザーのアクションを作ることが出来たり、他のコンポーネントに影響を与えないで UI を作ることが出来る。
  - コンポーネントの再レンダリングを管理することによって、ユーザーがアクションを起こした時やページが切り替わった時に、コンポーネントを再び描画させることなくパフォーマンスの高いサイトを作ることが出来る。
  - 子コンポーネントは必ず 1 つの div を返すとする。(React.Fragment を使用しない)
  - map 構文では、一意となるように key を指定する必要がある(重複がないことを確認するため)。データの増減が容易＋修正が全箇所に反映される。データと処理の部分は分けるように意識することで可読性が高くなる。(リファクタリング)
  - 拡張子を.jsx・.tsx にすることで、React の補完がきくようになる。
  - [絶対パスインポート](https://nextjs.org/docs/advanced-features/module-path-aliases)にすることで複雑にならない。tsconfig.json と.vscode/settings.json に設定する。
  - React の[イベント(クリックイベントなど)](https://ja.reactjs.org/docs/events.html)は様々なブラウザで同様の操作が起きるように、wrapper ということで React 側で使いやすいようにしてくれている。基本的にはブラウザのネイティブイベントと同様。関数宣言をコンポーネントの外部で行った場合、コンポーネントの内部の変数にアクセスしようとすると、引数として渡さないといけなくなる。引数が必要になる場合は内部に関数宣言した方が良い。
    - 関数宣言を内部に行うと、コンポーネントが再レンダリングされる段階でメソッドも再生成されてしまうため、パフォーマンスが劣ってしまう。
    - 回避策：useCallback(第 2 引数が必要)

- [Next.js](https://nextjs.org/docs)

  - 画像の最適化・国際化対応・Next.js Analytics・Hybrid SSG and SSR・Static Generation・TypeScript サポート・Fast Refresh・API Routes・Bundling
  - Zero Config で設定ファイルを記述する必要がない。
  - ファイルの規則に沿って、ルーティングが自動生成される。
  - ビルトインで最初から CSS Modules を使うことが出来る。CSS Modules を使うことで CSS の管理が容易になる。CSS のクラス名が被らないように一意の値を割り振る。絶対にクラスセレクターでなければならない。メンテナンス性の高いアプリケーション開発を行うことが可能になる。
  - Link コンポーネントによって読み込みが必要な部分だけで済み、Prefetch によりリンク先のデータをバックグラウンドで読み込むため、高速なページ遷移が実現できる。

- [React Hot Toast](https://react-hot-toast.com/)
  - Toast に特化したライブラリ(パッケージ)
  - 軽量で TypeScript 対応もありヘッドレスもできる。
  - 他にも[Material UI](https://material-ui.com/ja/components/snackbars/)や[ChakraUI](https://chakra-ui.com/docs/feedback/toast)が Toast を実装している。
  - Material UI は状態管理を行う必要があり、Chakra UI は hooks を呼び出す必要あり。
  - Tailwind CSS を使用していて、Toast 実装のために material UI を導入することはサイズが大きくなり、あまり好ましくない。
