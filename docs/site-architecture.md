# OpenHallu Site Architecture

## Top-Level Navigation

- Home
- Papers
- Benchmarks
- Detection
- Mitigation
- About

## Home Page

### Purpose

Introduce OpenHallu and direct visitors into the four major knowledge surfaces.

### Recommended sections

- Hero
- Module overview
- Featured papers
- Featured mitigation toolboxes
- Recently added resources
- Community / contribution CTA

## Papers

### Purpose

Act as the master index across all multimodal hallucination research content.

### Views

- All papers
- Filter by module
- Filter by modality
- Filter by year
- Filter by venue
- Filter by method family

### Core paper card fields

- title
- authors
- year
- source
- venue or platform
- module tags
- modality tags
- abstract summary
- key contribution
- paper link
- repo link
- related toolbox link

## Benchmarks

### Purpose

Organize evaluation resources.

### Entry types

- dataset
- benchmark suite
- leaderboard
- evaluation protocol

### Core benchmark fields

- name
- task
- modality
- what it measures
- metrics
- paper link
- homepage/repo link
- related methods

## Detection

### Purpose

Map the detection landscape.

### Entry types

- paper
- method
- repo
- framework

### Core detection fields

- name
- method family
- base model assumptions
- input/output type
- detection signal
- benchmark usage
- paper link
- code link

## Mitigation

### Purpose

This is the most important initial module and should be treated as a mini product inside the site.

### Recommended sub-sections

- Overview
- Mitigation Papers
- Method Categories
- Toolbox
- Baseline Implementations
- Reading Lists / Collections

### Mitigation page goals

- show the mitigation landscape clearly
- help users browse papers
- expose implementation resources fast
- connect each method to code or toolbox when possible

### Mitigation paper fields

- title
- authors
- year
- source
- method category
- modality scope
- training-free vs training-based
- model family
- summary
- strengths
- limitations
- paper link
- repo link
- related toolbox

### Mitigation toolbox fields

- toolbox name
- short description
- supported methods
- supported models
- GitHub repo
- docs link
- implementation status
- maintainer

## About

### Purpose

Explain the mission and collaboration model.

### Recommended sections

- What is multimodal hallucination
- Why OpenHallu exists
- Module maintainers
- How to contribute
- Contact / GitHub

## Content Model Principles

- One paper can belong to multiple modules.
- Module pages should feel curated, not like raw database dumps.
- Every card should help users decide whether to click.
- GitHub and paper links should always be easy to find.

## MVP Information Architecture

For the first build, the minimum viable pages are:
- Home
- Mitigation
- Papers
- About

Within MVP:
- Benchmarks and Detection can exist as structured placeholder pages
- Mitigation should be the deepest and most complete module
