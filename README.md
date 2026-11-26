# Study notes

**English** · [日本語](README.ja.md)

microtaro’s readings of research papers and articles, with original study materials grouped by theme. Each page is available in English and Japanese.

[Read the study notes](https://microtaro.github.io/study-notes/en/)

## Repository layout

```text
index.html          Japanese home page with themes and updates
assets/site.css     Shared site styles
assets/paper.css    Shared styles for explainers
assets/nav.js       Site navigation by theme, page, and section
topics/
  <theme>/
    index.html      Theme question, contents, and sources
    papers/         Paper explainers, one page per paper
    articles/       Article explainers, one page per article
    materials/      Original study materials
    data/           Figures and measurements in CSV or JSON
en/                 English pages, following the same structure
```

The site runs on GitHub Pages without a build step. To read it locally, clone the repository and open [en/index.html](en/index.html) in a browser.

## Editorial approach

- Each explainer distinguishes the authors’ findings from microtaro’s interpretation.
- Paper explainers link to the specific arXiv version used. The original papers stay with their publishers or repositories.
- The [contributor guidelines](AGENTS.md) describe how pages are written and checked.

## Licenses

- Original text and figures are licensed under [CC BY 4.0](LICENSE).
- CSS and JavaScript in `assets/` are licensed under [MIT](LICENSE-CODE).
- Quotations and numerical data drawn from a paper are subject to the rights stated in that page’s sources.
