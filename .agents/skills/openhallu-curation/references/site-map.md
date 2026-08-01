# OpenHallu Data Map

## Rendered Sources

- `frontend/src/data/site.ts`: collection records, categories, paper dates, and resource links.
- `frontend/src/components/subpage-layout.tsx`: shared search, filters, resource pills, dates, and paper metadata display.
- `frontend/src/components/homepage.tsx`: derives homepage totals from collection table rows.
- `frontend/next.config.ts`: static export and GitHub Pages base path.

The rendered Papers page uses `subpageConfigs.papers.tableRows`. The rendered domain pages use their matching `subpageConfigs` table. `featuredPapers` is legacy data and is not the source for current collection tables; do not update it unless code inspection shows a rendered consumer.

## Collection Row Shape

```ts
{
  name: "Exact paper title",
  note: "One factual sentence describing the contribution.",
  type: "Mitigation",
  tags: ["mechanism", "task", "evaluation setting"],
  venue: "arXiv 2026",
  score: "short research focus",
  authors: ["First Author", "Second Author", "Third Author"],
  correspondingAuthors: ["Explicitly marked author"],
  affiliations: ["Institution One", "Institution Two"],
  resources: [
    { label: "paper", href: "https://arxiv.org/abs/YYMM.NNNNN" },
    { label: "github", href: "https://github.com/owner/repository" },
    { label: "Hugging Face", href: "https://huggingface.co/datasets/owner/name" },
  ],
}
```

If a public record is pending, omit invented fields and use:

```ts
metadataNote: "Author and affiliation metadata pending a public paper record."
```

Use this metadata shape on every applicable rendered row, including Papers,
Mitigation, Detection, Quantification, and Dataset & Bench. Do not leave author
metadata only on the Papers copy of a record.

## Method Tags

- Add two to four short tags per newly curated method, metric, dataset, or benchmark when public evidence supports them.
- Prefer mechanism, task, modality, evidence source, or evaluation-dimension terms. Examples: `contrastive decoding`, `atomic facts`, `object existence`, `control groups`, `visual reasoning`.
- Do not restate the row `type`; use `tags` to make the row more informative than its family label.
- Keep tags in the same order in every rendered copy of a record.
- Omit a tag that cannot be supported by the paper, project page, or official repository.

## Synchronization Checklist

For one paper with a method and dataset, check all applicable locations:

- `arxivReleaseDates`
- `subpageConfigs.papers.tableRows`
- One domain table such as `subpageConfigs.mitigation.tableRows`
- `subpageConfigs.datasetBench.tableRows` for an actual released dataset or benchmark
- Matching `authors`, `correspondingAuthors`, and `affiliations` in every rendered copy
- Matching evidence-grounded `tags` in every rendered copy
- Direct resources in each row
- Category `filters` only if the row introduces a new `type`

Homepage entry totals are derived. Do not add a separate homepage record or count.

## Link Policy

- Prefer `https://arxiv.org/abs/...` over a PDF-only URL.
- Prefer canonical organization repositories over mirrors.
- Use a direct Hugging Face dataset/model/Space URL. A generic `https://huggingface.co/datasets?search=...` URL is not a verified dataset address.
- Omit unavailable resources instead of rendering dead pills.
