# study-notes

[English](README.md) · **日本語**

論文を自分なりに読み解いた解説と、そこから作った資料を、テーマごとに置くリポジトリです。
GitHub Pages で、そのまま Web サイトとして読めます。

[学習ノートを読む](https://microtaro.github.io/study-notes/)

## 構成

```
index.html          トップ：テーマの一覧と更新履歴
assets/site.css     全ページ共通の見た目
assets/paper.css    論文の解説ページの共通の部品
assets/nav.js       左の欄の目次（テーマ → 論文 → 今のページの節を 1 本の木で出す）
topics/
  <テーマ>/
    index.html      テーマの入口：問い、収録の一覧、出典
    papers/         論文の解説（1 論文 1 ページ）
    articles/       記事の解説（1 記事 1 ページ）
    materials/      自作の資料（複数の論文をまとめたものなど）
    data/           資料に載せた数値の CSV / JSON
en/                 英語のページ（上と同じ構成）
```

ビルドは不要です。clone したら `index.html` をブラウザで開けば読めます。

## 書き方

- 論文が言っていることと、microtaro の読み方を分けて書いています。
- 論文の原文は置かず、読んだ版の arXiv の URL にリンクしています。
- 作成のルールは [AGENTS.md](AGENTS.md) にあります。

## ライセンス

- 自作の文章と図：[CC BY 4.0](LICENSE)
- コード（`assets/` の CSS と JavaScript）：[MIT](LICENSE-CODE)
- 論文から引用した文や数値：それぞれの論文のライセンスによります（各ページの「出典」に記載）
