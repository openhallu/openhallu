# OpenHallu Product Brief

## Working Title

OpenHallu

## One-Sentence Positioning

OpenHallu is a community website for multimodal hallucination research that organizes papers, benchmarks, detection methods, and mitigation resources into a public, collaborative knowledge hub.

## Core Goal

Build a clean public-facing site where researchers and builders can:
- understand the multimodal hallucination landscape quickly
- browse papers by module and topic
- discover benchmarks, detection methods, and mitigation strategies
- jump from curated entries to the underlying GitHub repos, toolboxes, and papers

## Primary Modules

### 1. Paper

Purpose:
- serve as the canonical research layer
- collect curated multimodal hallucination papers from arXiv, X, WeChat public accounts, Xiaohongshu, and other sources

Expected user value:
- quickly see what is new
- browse by task, modality, method family, and venue
- find mitigation-relevant literature without doing scattered searching

### 2. Benchmark

Purpose:
- document datasets, leaderboards, and evaluation settings related to multimodal hallucination

Expected user value:
- compare benchmarks
- understand what each benchmark measures
- identify gaps between benchmarks and real-world mitigation use cases

### 3. Detection

Purpose:
- organize methods that detect multimodal hallucination, uncertainty, or factual inconsistency

Expected user value:
- understand the detection method landscape
- locate repos and code quickly
- compare assumptions, inputs, and outputs

### 4. Mitigation

Purpose:
- showcase mitigation papers, method summaries, and implementation resources
- connect users to working toolboxes and reproducible baselines

Expected user value:
- discover mitigation directions
- inspect implementation resources
- jump directly into GitHub repos/toolboxes

## Your Responsibility

You are the owner of the mitigation module.

That means your near-term scope is:
- define the mitigation information architecture
- collect mitigation papers through the swarm workflow
- curate mitigation tags and categories
- link paper entries to related repos and toolboxes
- expose your mitigation toolbox and baseline implementations through the website

## Site Role in the Ecosystem

OpenHallu is not just a static reading list.
It should become:
- a curated research portal
- a community contribution surface
- a bridge from papers to code
- a landing page for modular toolboxes

## MVP Goal

The first useful version should let a visitor:
- understand what OpenHallu is within 10 seconds
- navigate to benchmark, detection, or mitigation
- browse a mitigation paper list with structured metadata
- click from a mitigation toolbox card to the corresponding GitHub repo

## Design Direction

The UI should feel:
- research-native, not generic SaaS
- editorial and intentional
- modular enough to grow with community contributions

We will use Figma Community Skills as inspiration for:
- modular cards
- library-style browsing
- polished community/discovery interactions

## Non-Goals for MVP

- full user accounts
- complex submission workflow
- automated crawling pipeline for every source
- full benchmark leaderboard backend
- repo sync automation

## Immediate Decisions

For now, optimize for:
- clear information architecture
- high-quality mitigation presentation
- simple GitHub linking
- easy future expansion to benchmark and detection
