# OpenHallu

OpenHallu is a research hub for multimodal hallucination papers, datasets,
benchmarks, detection, quantification, and mitigation methods.

## Local development

```bash
cd frontend
npm ci
npm run dev
```

Open http://localhost:3000 in a browser.

## Contributing

Create a feature branch from `main`, open a pull request, and merge only after
the checks pass. Changes merged into `main` automatically deploy the website.

## Agent-assisted curation

The repository includes the [`openhallu-curation`](.agents/skills/openhallu-curation/SKILL.md)
Agent Skill. It guides an agent to verify primary sources, add the first three
authors and affiliations, use direct paper/GitHub/Hugging Face links, and keep
the Papers page, domain collection, release dates, and homepage-derived counts
in sync without changing the site's visual design.

Run your agent from the repository root and reference the skill explicitly. For
example:

```text
Use $openhallu-curation to add <paper title> to OpenHallu. Verify the paper,
GitHub, Hugging Face dataset/model, first-post date, first three authors,
corresponding authors, and affiliations. Synchronize Papers and every relevant
Mitigation, Detection, Quantification, or Dataset & Bench collection. Preserve
the current site structure and visual style. Add two to four evidence-grounded
method tags, then run all validation steps.
Do not commit or push.
```

For a coworker's publication, include the title or arXiv URL and identify the
relevant collection. Ask the agent to leave unavailable metadata unspecified
rather than inventing it. Review the diff and links before committing; only add
`commit and push` to the prompt when that action is intended.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds the
static export from `frontend/` and deploys it to GitHub Pages. For the
`openhallu/openhallu` repository, the published site is:

https://openhallu.github.io/openhallu/

The generated `frontend/out/` directory and local reference PDFs are excluded
from Git because they are not required for deployment.
