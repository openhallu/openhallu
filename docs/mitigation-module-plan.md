# Mitigation Module Plan

## Module Mission

The mitigation module should become the most complete and actionable part of OpenHallu in the first release.

It needs to bridge three things:
- mitigation literature
- mitigation method understanding
- mitigation implementation/toolbox access

## What the module should contain

### 1. Mitigation overview

A short editorial explanation of:
- what mitigation means in multimodal hallucination
- why it matters
- the major method families

### 2. Mitigation paper library

A curated list of papers collected through the swarm workflow and manual curation.

Sources may include:
- arXiv
- X
- WeChat public accounts
- Xiaohongshu
- GitHub references from repos

### 3. Method categories

Initial category proposal:
- decoding-time mitigation
- retrieval-augmented mitigation
- verification / self-check mitigation
- training-time alignment
- preference optimization / feedback-based mitigation
- tool-augmented mitigation
- multimodal chain-of-thought / reasoning calibration
- uncertainty-aware mitigation

These are provisional and can be refined after paper collection.

### 4. Toolbox section

This section should present your mitigation toolbox and any baseline implementations.

Primary behavior:
- each toolbox card explains what it contains
- clicking the card takes the user to the GitHub repo

### 5. Resource linking

Each mitigation paper entry should eventually support links to:
- the paper
- the official repo
- your toolbox implementation if relevant
- benchmark usage if relevant

## Content ingestion workflow

### Stage A: collect

Use the paper-swarm process to collect candidate papers and links from your source set.

### Stage B: normalize

For each paper, extract:
- title
- authors
- year
- source platform
- paper URL
- repo URL if available
- short summary
- method category
- notes

### Stage C: curate

Remove duplicates, merge cross-posted content, and assign stable tags.

### Stage D: publish

Render curated entries as cards or structured lists in the mitigation page.

## Suggested page structure

### Section 1

Hero + concise explanation of mitigation

### Section 2

Category explorer

### Section 3

Featured mitigation papers

### Section 4

All mitigation papers with filters

### Section 5

Toolbox and implementations

### Section 6

Contribution / update CTA

## MVP requirements for this module

- one polished mitigation landing page
- at least one structured mitigation paper list
- placeholders for category filters
- a toolbox section linking to GitHub repos
- content schema ready for future automation

## What is blocked on your future input

We will need from you:
- your mitigation toolbox GitHub repo
- any baseline repos you want exposed
- preferred paper sources and search terms
- any existing paper spreadsheet, notes, or curation docs
