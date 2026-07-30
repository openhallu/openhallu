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

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds the
static export from `frontend/` and deploys it to GitHub Pages. For the
`openhallu/openhallu` repository, the published site is:

https://openhallu.github.io/openhallu/

The generated `frontend/out/` directory and local reference PDFs are excluded
from Git because they are not required for deployment.
