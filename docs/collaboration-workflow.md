# OpenHallu Collaboration Workflow

## Collaboration Model

OpenHallu will likely be maintained by multiple people.
To avoid chaos, split ownership by module.

Recommended ownership:
- benchmark owner
- detection owner
- mitigation owner
- site/platform owner

One person can hold multiple roles early on, but the model should stay modular.

## Your Ownership

You own mitigation.

That means you should maintain:
- mitigation content quality
- mitigation taxonomy
- mitigation paper curation
- mitigation toolbox linking

## Suggested Repository Structure

At the content layer, use module-scoped folders:

```text
content/
  mitigation/
    papers/
    toolboxes/
  shared/
```

## Paper Contribution Workflow

1. collect candidate paper
2. normalize metadata
3. deduplicate
4. categorize
5. publish

## Toolbox Contribution Workflow

1. define toolbox metadata
2. confirm destination GitHub link
3. write short description
4. publish as a card on the mitigation page

## Review Rules

- avoid duplicate entries
- keep summaries short and factual
- prefer official links when possible
- record unknown fields as missing instead of guessing

## Phase Plan

### Phase 1

Planning and information architecture

### Phase 2

Frontend shell and homepage

### Phase 3

Mitigation module implementation

### Phase 4

Paper ingestion and curation

### Phase 5

Benchmark and detection expansion

## Immediate Next Inputs Needed From You

- mitigation toolbox repo link
- any existing baseline repos
- preferred frontend stack if you have one
- whether this should be static-only at first or backed by a lightweight CMS/data layer
