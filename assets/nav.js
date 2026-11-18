/* 左の欄の目次。サイト全体を 1 本の木で出す：学習ノート（トップ）→ テーマ → 論文 → 今読んでいる論文の節。
   テーマや論文を足したら、下の SITE に足す（日本語と英語の名前、サイトの根からのパス）。
   英語のページ（html lang="en"）では、en/ の下の同じパスにリンクする。
   - 今いるテーマだけ開く。テーマの名前はテーマのページへのリンク、▶▼ で開閉する。
   - 論文のページでは、ページに書いてある目次（nav.toc の ol）を、その論文の下に入れ子で移す。
   - トップとテーマのページは短いので、ページの中の目次は出さない。
   - PC の幅（1080px 以上）では木をそのまま出し、狭い幅では「目次」の 1 行に畳む。
   - JavaScript が動かないときは、ページに書いてある目次がそのまま出る。 */
(function () {
  const SITE = {
    title: { ja: '学習ノート', en: 'Study notes' },
    themes: [
      {
        name: { ja: 'AI と信頼', en: 'AI and trust' },
        path: 'topics/ai-trust/index.html',
        papers: [
          {
            name: { ja: 'AI が書く速さに、人のレビューが追いつかない', en: 'AI Writes Faster Than Humans Can Review' },
            path: 'topics/ai-trust/papers/2x-mandate.html',
          },
          {
            name: { ja: '自動化にどこまで頼るかは、信頼が導く', en: 'Trust in Automation' },
            path: 'topics/ai-trust/papers/trust-in-automation.html',
          },
          {
            name: { ja: 'Claude Code のチームは、AI が書くコードをどうレビューしているか', en: 'How the Claude Code team does code review' },
            path: 'topics/ai-trust/articles/claude-code-team-review.html',
          },
        ],
      },
    ],
  };
  const MENU = { ja: '目次', en: 'Contents' };
  const FOLD = { ja: 'たたむ', en: 'Collapse' };
  const UNFOLD = { ja: '開く', en: 'Expand' };

  const script = document.currentScript;
  const toc = document.querySelector('nav.toc');
  if (!script || !toc) return;

  const lang = document.documentElement.lang === 'en' ? 'en' : 'ja';
  const root = new URL('../', script.src); // assets/ の 1 つ上がサイトの根
  const base = lang === 'en' ? new URL('en/', root) : root;
  const norm = (p) => p.replace(/index\.html$/, '');
  const here = norm(location.pathname);

  // このファイルだけで見た目が決まるよう、木の分の CSS をここで足す
  const style = document.createElement('style');
  style.textContent = `
    .nav-wrap > summary { cursor: pointer; padding: 0.2rem 0; font-weight: 700; color: var(--ink); }
    @media (min-width: 1080px) { .nav-wrap > summary { display: none; } }
    .toc .tree-title { margin: 0.6rem 0 0.9rem; font-weight: 700; font-size: 1rem; }
    .toc .tree-title a { display: inline; padding: 0; border: 0; color: var(--ink); background: none; }
    .toc .tree, .toc .tree ol { list-style: none; margin: 0; padding: 0; }
    .toc .tree > li { margin: 0 0 0.25rem; }
    /* 項目ごとに行頭の印を付け、2 行以上に折り返しても印の後ろにそろえる（ぶら下げ） */
    .toc .tree summary { display: flex; align-items: flex-start; gap: 0.3em; padding: 0.35rem 0.6rem 0.35rem 0.25rem; border-left: 3px solid var(--rule); color: var(--ink); font-weight: 700; list-style: none; }
    .toc .tree summary::-webkit-details-marker { display: none; }
    /* 開閉のボタン。テーマの名前はテーマのページへのリンクなので、開閉はこのボタンで行う */
    .toc .tree .caret { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 1.7em; height: 1.7em; border-radius: 5px; cursor: pointer; font-size: 0.8em; color: var(--ink); }
    .toc .tree .caret:hover { background: var(--rule); }
    .toc .tree .caret::before { content: "▶"; }
    .toc .tree details[open] > summary .caret::before { content: "▼"; }
    .toc .tree li.here > details > summary { border-left-color: var(--ink); }
    .toc .tree summary a { display: inline; padding: 0; border: 0; color: inherit; font-weight: 700; text-decoration: none; }
    .toc .tree summary a:hover { text-decoration: underline; }
    .toc .tree summary a[aria-current="page"] { background: var(--b-tint); }
    .toc .tree .papers > li > a { padding-left: 1.3rem; }
    .toc .tree .papers > li > a::before { content: ""; flex: none; width: 6px; height: 6px; margin-top: 0.6em; background: currentColor; border-radius: 1px; }
    .toc .tree .page-toc a { padding-left: 2.5rem; font-size: 0.85rem; }
    /* 今読んでいる論文の行：▼ のボタンと名前。色付きの帯で今のページだと示す */
    .toc .tree .paper-here > summary { padding: 0.35rem 0.6rem 0.35rem 0.9rem; border-left-color: var(--b); background: var(--b-tint); }
    .toc .tree .paper-here > summary a { font-weight: 700; background: none; }
    .nav-wrap > summary:focus-visible, .toc .tree summary:focus-visible { outline: 3px solid var(--b); outline-offset: 2px; }
  `;
  document.head.append(style);

  const anchor = (text, path) => {
    const a = document.createElement('a');
    const url = new URL(path, base);
    a.href = url.href;
    a.textContent = text;
    const current = norm(url.pathname) === here;
    if (current) a.setAttribute('aria-current', 'page');
    return [a, current];
  };

  // ▼▶ のボタンに、マウスを乗せたときの説明（たたむ／開く）を、開いているかどうかに合わせて付ける
  const hintOn = (box, caret) => {
    const hint = () => { caret.title = box.open ? FOLD[lang] : UNFOLD[lang]; };
    box.addEventListener('toggle', hint);
    hint();
  };
  // 今いるページの名前をもう一度押したときは、読み込み直さずに、たたむ・開く
  const togglesInPlace = (link, box, caret) => {
    link.addEventListener('click', (e) => { e.preventDefault(); box.open = !box.open; });
    hintOn(box, caret);
    link.title = FOLD[lang] + ' / ' + UNFOLD[lang];
  };

  // ページに書いてある目次の項目。今読んでいる論文の下へ移す
  const pageList = toc.querySelector(':scope > ol');
  const pageItems = pageList ? [...pageList.children] : [];
  pageItems.forEach((li) => {
    // 番号のない項目（出典と照合など）にも、行頭の印を付ける
    const n = li.querySelector('.n');
    if (n && !n.textContent.trim()) n.textContent = '•';
  });
  toc.querySelectorAll(':scope > .toc-title, :scope > ol').forEach((el) => el.remove());

  const wide = window.matchMedia('(min-width: 1080px)');
  let wrap = null;

  const render = (site) => {
    const next = document.createElement('details');
    next.className = 'nav-wrap';
    const menu = document.createElement('summary');
    menu.textContent = MENU[lang];
    next.append(menu);

    const title = document.createElement('p');
    title.className = 'tree-title';
    title.append(anchor(site.title[lang], 'index.html')[0]);
    next.append(title);

    const tree = document.createElement('ol');
    tree.className = 'tree';
    for (const t of site.themes) {
      const li = document.createElement('li');
      const theme = document.createElement('details');
      const head = document.createElement('summary');
      const caret = document.createElement('span');
      caret.className = 'caret';
      caret.setAttribute('aria-hidden', 'true');
      const [themeLink, themeHere] = anchor(t.name[lang], t.path);
      head.append(caret, themeLink);
      theme.append(head);
      if (themeHere) togglesInPlace(themeLink, theme, caret);
      else hintOn(theme, caret);

      let inside = themeHere;
      const papers = document.createElement('ol');
      papers.className = 'papers';
      for (const p of t.papers) {
        const pli = document.createElement('li');
        const [paperLink, paperHere] = anchor(p.name[lang], p.path);
        if (paperHere && pageItems.length) {
          // 今読んでいる論文：節の一覧を入れ子で出し、▼ か名前を押すと、たたむ・開く
          inside = true;
          const box = document.createElement('details');
          box.className = 'paper-here';
          box.open = true;
          const ps = document.createElement('summary');
          const pc = document.createElement('span');
          pc.className = 'caret';
          pc.setAttribute('aria-hidden', 'true');
          ps.append(pc, paperLink);
          const sub = document.createElement('ol');
          sub.className = 'page-toc';
          sub.append(...pageItems);
          box.append(ps, sub);
          togglesInPlace(paperLink, box, pc);
          pli.append(box);
        } else {
          if (paperHere) inside = true;
          pli.append(paperLink);
        }
        papers.append(pli);
      }
      theme.append(papers);
      if (inside) {
        theme.open = true;
        li.className = 'here';
      }
      li.append(theme);
      tree.append(li);
    }
    next.append(tree);
    next.open = wide.matches;
    if (wrap) wrap.replaceWith(next); else toc.prepend(next);
    wrap = next;
  };

  render(SITE);

  // 幅が決まったときや、ウィンドウの幅を変えたときにも、開閉をそろえる
  wide.addEventListener('change', () => { if (wrap) wrap.open = wide.matches; });
})();
