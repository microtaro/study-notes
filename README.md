# Study notes

**English** · [日本語](README.ja.md)

microtaro’s study notes collect explainers on papers and articles alongside original teaching materials. New topics will be added over time. [Browse the study notes](https://microtaro.github.io/study-notes/en/)

## AI and trust

As AI produces more code, people have less time to review it all. These readings use company records, open-source reviews, and bug-detection experiments to ask which checks AI can handle and where human judgment matters. [Explore this theme](https://microtaro.github.io/study-notes/en/topics/ai-trust/)

### Five paper explainers

- How did review workload and responsibilities change at a company that increased its volume of code changes with AI? [AI Writes Faster Than Humans Can Review](https://microtaro.github.io/study-notes/en/topics/ai-trust/papers/2x-mandate.html)
- How does trust develop and change as people learn what an automated system can handle? [Trust in Automation](https://microtaro.github.io/study-notes/en/topics/ai-trust/papers/trust-in-automation.html)
- How many real bugs can AI reviewers detect when tested on bugs that developers eventually found and fixed? [(When) Should a Software Factory be Lights-off?](https://microtaro.github.io/study-notes/en/topics/ai-trust/papers/review-agents-bugs.html)
- How do approvals and comments change as the same people review more AI-generated changes? [Habituation at the Gate](https://microtaro.github.io/study-notes/en/topics/ai-trust/papers/review-habituation.html)
- How do people and AI differ in the defects they flag, the design choices they question, and the project knowledge they share? [Human-AI Synergy in Agentic Code Review](https://microtaro.github.io/study-notes/en/topics/ai-trust/papers/human-ai-review.html)

### One article explainer

- Which checks does Anthropic automate, and how does the team decide when a change needs human approval? [How the Claude Code team does code review](https://microtaro.github.io/study-notes/en/topics/ai-trust/articles/claude-code-team-review.html)

## Declarative UI and state management in web apps

When text typed into one field appears in another, which component owns the value and what tells the UI to update? Follow a greeting and an unread badge through diagrams and short code examples. [Explore this theme](https://microtaro.github.io/study-notes/en/topics/declarative-ui/)

**Chapter 1, “The UI and its state,”** compares imperative C++ examples with declarative React UI, and WPF data binding with React rendering. It then shows where to keep shared state, how a Zustand store connects components, and how the browser and server divide responsibilities over HTTP. [Read Chapter 1](https://microtaro.github.io/study-notes/en/topics/declarative-ui/materials/ui-and-state.html)

---

Each explainer distinguishes the source’s findings from microtaro’s interpretation. Original text and diagrams are available under [CC BY 4.0](LICENSE), and site CSS and JavaScript under [MIT](LICENSE-CODE). Each page cites its sources for quotations and data.
