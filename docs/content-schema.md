# OpenHallu Content Schema

## Paper Schema

```json
{
  "id": "string",
  "title": "string",
  "authors": ["string"],
  "year": 2026,
  "source_platform": "arxiv | x | wechat | xiaohongshu | github | other",
  "paper_url": "string",
  "repo_url": "string",
  "module_tags": ["papers", "benchmark", "detection", "mitigation"],
  "modality_tags": ["image", "video", "audio", "vlm", "multimodal"],
  "method_tags": ["string"],
  "venue": "string",
  "summary": "string",
  "key_contribution": "string",
  "strengths": ["string"],
  "limitations": ["string"],
  "related_toolbox_ids": ["string"],
  "notes": "string",
  "status": "candidate | curated | featured"
}
```

## Toolbox Schema

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "github_url": "string",
  "docs_url": "string",
  "owner": "string",
  "supported_methods": ["string"],
  "supported_models": ["string"],
  "related_paper_ids": ["string"],
  "status": "planned | active | archived"
}
```

## Benchmark Schema

```json
{
  "id": "string",
  "name": "string",
  "task": "string",
  "modality": ["string"],
  "metrics": ["string"],
  "description": "string",
  "paper_url": "string",
  "repo_url": "string",
  "notes": "string"
}
```

## Detection Schema

```json
{
  "id": "string",
  "name": "string",
  "method_family": "string",
  "input_type": "string",
  "output_type": "string",
  "description": "string",
  "paper_url": "string",
  "repo_url": "string",
  "related_benchmarks": ["string"]
}
```

## Mitigation Taxonomy Draft

- decoding-time
- retrieval-augmented
- verification-based
- training-time alignment
- preference optimization
- tool-augmented
- reasoning-calibrated
- uncertainty-aware

## Notes

- `module_tags` should allow cross-listing.
- Fields can start sparse; unknown values should remain empty rather than guessed.
- We can later convert this schema into JSON, YAML, Markdown frontmatter, or CMS entries depending on the frontend stack.
