# 学習ノート

[English](README.md) · **日本語**

AI が書いたコードを、何を根拠に信頼できるか。Web アプリの画面は、状態が変わったときにどう更新されるか。microtaro がこの二つの問いを、論文・記事の解説と図入りの講義資料にまとめています。 [学習ノートを開く](https://microtaro.github.io/study-notes/)

## AI と信頼

AI がコードを書く量が増えると、人がすべてを読んで確かめるのは難しくなります。企業の開発記録や公開プロジェクトのレビュー、バグ検出の実験をもとに、AI に任せられる確認と、人が担う判断を考えます。 [テーマの入口](https://microtaro.github.io/study-notes/topics/ai-trust/)

### 論文の解説 5 本

- AI の導入でコードの変更が増えた会社で、レビューの負荷と分担はどう変わったか。 [AI が書く速さに、人のレビューが追いつかない](https://microtaro.github.io/study-notes/topics/ai-trust/papers/2x-mandate.html)
- 自動化の能力に見合った頼り方ができるよう、信頼はどう形成され、変わっていくか。 [自動化にどこまで頼るかは、信頼が導く](https://microtaro.github.io/study-notes/topics/ai-trust/papers/trust-in-automation.html)
- 実際に見つかって修正されたバグを使うと、AI のレビュー役はどこまで検出できるか。 [AI のレビュー役は、どこまでバグを見つけるか](https://microtaro.github.io/study-notes/topics/ai-trust/papers/review-agents-bugs.html)
- 同じ人が AI の変更を何度もレビューすると、承認やコメントの傾向はどう変わるか。 [人は、AI の変更のレビューに慣れていく](https://microtaro.github.io/study-notes/topics/ai-trust/papers/review-habituation.html)
- 欠陥を見つける、設計の理由を確かめる、プロジェクトの知識を伝える。人と AI のレビューでは、何が多いか。 [人のレビューと AI のレビューは、中身がどう違うか](https://microtaro.github.io/study-notes/topics/ai-trust/papers/human-ai-review.html)

### 記事の解説 1 本

- Anthropic のチームが、変更のリスクに応じて人の承認を求めながら、どの確認を自動化しているか。 [Claude Code のチームは、AI が書くコードをどうレビューしているか](https://microtaro.github.io/study-notes/topics/ai-trust/articles/claude-code-team-review.html)

## WEBアプリの宣言型UIと状態管理

入力欄に文字を打つと、表示欄も更新されます。その値を持つのはどの部品で、変更を画面に伝えるのは何か。挨拶や未読バッジの例を使って、図と短いコードでたどります。 [テーマの入口](https://microtaro.github.io/study-notes/topics/declarative-ui/)

**第1章「画面と状態」**では、C++ の命令型UIと React の宣言型UI、WPF のデータバインディングと React の描画を比べます。続いて、複数の部品で状態を共有するときの置き場所、Zustand のストア、HTTP をまたいでブラウザとサーバーが担う役割を扱います。 [第1章を読む](https://microtaro.github.io/study-notes/topics/declarative-ui/materials/ui-and-state.html)

---

解説では、元の資料が示したことと microtaro の読み方を分けています。自作の文章と図は [CC BY 4.0](LICENSE)、サイトの CSS と JavaScript は [MIT](LICENSE-CODE) です。引用や数値の出典は各ページに記載しています。
