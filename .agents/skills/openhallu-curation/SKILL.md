---
name: openhallu-curation
description: Add or update verified research papers, methods, datasets, benchmarks, GitHub repositories, Hugging Face resources, authors, affiliations, and release metadata in the OpenHallu website. Use when maintaining `frontend/src/data/site.ts`, adding a coworker's publications or research-domain literature, synchronizing a paper across the Papers page and a domain collection, or reviewing OpenHallu content links while preserving the existing site structure and visual style.
---

# OpenHallu Curation

Maintain OpenHallu as a verified research index. Change collection data, not the site's design system.

Read [references/site-map.md](references/site-map.md) before editing.

## 1. Inspect Before Editing

1. Work from the repository root and inspect `git status -sb`.
2. Read the current `SubpageTableRow` type and the relevant `subpageConfigs` sections in `frontend/src/data/site.ts`.
3. Search the title, arXiv ID, DOI, GitHub URL, and Hugging Face URL for duplicates.
4. Preserve unrelated local changes. Do not commit or push unless the user explicitly requests it.

## 2. Verify Every Claim

Use primary sources in this order:

1. Publisher page or official proceedings for title and venue.
2. arXiv abstract/API and the paper PDF for title, author order, first-post date, affiliations, and corresponding-author marks.
3. The paper, project page, or author organization for the official GitHub repository.
4. The project's official README or paper for direct Hugging Face dataset, model, or Space URLs.

Apply these rules:

- Store the first three authors in publication order.
- Mark corresponding authors only when the PDF explicitly identifies them. Use an empty list when not specified; never infer from the submitter or repository owner.
- Record affiliations shown in the paper's author block. Keep the display concise.
- Use the arXiv v1 submission date for `arxivReleaseDates`, not the latest revision date.
- Link directly to a Hugging Face resource. Do not use search-result URLs as if they were datasets.
- Do not invent a GitHub, Hugging Face, dataset, venue, date, author, affiliation, or method tag. Omit unavailable links and use a factual pending note when necessary.

## 3. Add the Record

For a research paper:

1. Add a row to `subpageConfigs.papers.tableRows`.
2. Add a corresponding row to the relevant domain collection, such as `mitigation`, `detection`, or `quantification`, when the paper contributes a method there.
3. Reuse the exact title, venue, focus wording, resource URLs, and arXiv ID across both rows.
4. Add the paper's v1 date to `arxivReleaseDates`.
5. Put the same verified author metadata on every rendered collection row using `authors`, `correspondingAuthors`, and `affiliations`.
6. Add two to four concise `tags` that describe the method's mechanism, evidence source, task, or evaluation setting. Derive them from the paper abstract, method, or official repository rather than title keywords alone.

For a dataset or benchmark:

1. Add it to `subpageConfigs.datasetBench.tableRows`.
2. Include the paper, official repository, and direct Hugging Face resource when each exists.
3. Add `authors`, `correspondingAuthors`, and `affiliations` from the benchmark paper.
4. Add two to four `tags` describing the data modality, task, or evaluation dimensions.
5. Add the associated research paper to the Papers collection if the user is curating publications as well as resources.

Do not hand-edit homepage totals. `frontend/src/components/homepage.tsx` derives counts and links from `subpageConfigs`; correct collection rows automatically update the homepage. Category counts are also derived from row `type` values. Add or adjust a category filter only when introducing a genuinely new type, and never type a decorative count.

## 4. Preserve The Product

- Do not change navigation, layout, typography, colors, spacing, cards, hero composition, or shared CSS for a content-only request.
- Do not reintroduce rankings, leaderboards, popularity scores, download counts, or update schedules without a cited dataset and a reproducible calculation.
- Do not add nonfunctional controls or placeholder links.
- Keep descriptions short, factual, and consistent with neighboring records.
- Tags are compact reader-facing phrases in lower case except proper names (for example, `atomic facts`, `object existence`, `RLVR`). They must be specific enough to aid scanning, must not duplicate the primary `type`, and must not encode popularity, quality, or unsupported claims.
- Use the existing resource-pill labels: `paper`, `github`, and `Hugging Face`.
- Keep external links opening in a new tab through the existing shared component.

## 5. Validate The Change

Run from `frontend/`:

```bash
npm run lint
npm run build
GITHUB_ACTIONS=true GITHUB_REPOSITORY=openhallu/openhallu npm run build
```

Then:

1. Run `git diff --check` from the repository root.
2. Inspect the homepage, Papers page, and every affected domain or dataset page in a real browser.
3. Confirm homepage totals changed by the expected amount.
4. Confirm category filters and search find the new record.
5. Confirm the method tags are visible, evidence-grounded, and not duplicated on the same row.
6. Open every new external link and verify its destination.
7. Report verified sources, files changed, tests run, and any metadata intentionally left unspecified.

Stop before commit or push unless the user explicitly requests those actions.
