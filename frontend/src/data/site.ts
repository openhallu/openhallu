export type ModuleCard = {
  name: string;
  href: string;
  description: string;
  eyebrow: string;
  stat: string;
  accent: string;
  intro: string;
};

export type HighlightCard = {
  title: string;
  detail: string;
  tag: string;
};

export type MetricCard = {
  label: string;
  value: string;
  detail: string;
};

export type TimelineItem = {
  title: string;
  detail: string;
  meta: string;
};

export type HomeCategoryCard = {
  title: string;
  description: string;
  stat: string;
  href: string;
  accent: string;
  icon: string;
};

export type HomeTrendItem = {
  rank: string;
  title: string;
  meta: string;
  stars: string;
};

export type HomeStatCard = {
  label: string;
  value: string;
  delta: string;
  accent: string;
};

export type SubpageSummaryCard = {
  label: string;
  value: string;
};

export type SubpageCategoryCard = {
  title: string;
  detail: string;
  count: string;
  accent: string;
};

export type SubpageTableRow = {
  name: string;
  note: string;
  type: string;
  venue: string;
  score: string;
  resources: (string | ResourceLink)[];
};

export type ResourceLink = {
  label: string;
  href: string;
};

export type SideListCard = {
  title: string;
  items: string[];
};

export type PaperCard = {
  title: string;
  year: string;
  source: string;
  category: string;
  venue?: string;
  paperUrl?: string;
  repoUrl?: string;
  coverImage?: string;
  summary: string;
  tags: string[];
  discussionPrompt: string;
  benchmarkSlot: string;
  visual: "grid" | "signal" | "mesh" | "beam";
};

export type Pill = {
  label: string;
  href?: string;
};

export const navItems: Pill[] = [
  { label: "Home", href: "/" },
  { label: "Papers", href: "/papers" },
  { label: "Dataset & Bench", href: "/dataset-bench" },
  { label: "Detection", href: "/detection" },
  { label: "Quantification", href: "/quantification" },
  { label: "Mitigation", href: "/mitigation" },
];

export const modules: ModuleCard[] = [
  {
    name: "Dataset & Bench",
    href: "/dataset-bench",
    eyebrow: "Shelf 01",
    stat: "data + eval notes",
    description: "Datasets, benchmark suites, and shared evaluation notes.",
    accent: "from-slate-50 via-white to-sky-50",
    intro: "A simple shelf for benchmark curation and dataset notes.",
  },
  {
    name: "Detection",
    href: "/detection",
    eyebrow: "Shelf 02",
    stat: "signals + examples",
    description: "Failure signals, detector families, and example cases.",
    accent: "from-amber-50 via-white to-orange-50",
    intro: "Keep detection ideas easy to scan and easy to extend.",
  },
  {
    name: "Quantification",
    href: "/quantification",
    eyebrow: "Shelf 03",
    stat: "metrics + charts",
    description: "Metrics, scorecards, and comparison views for hallucination work.",
    accent: "from-violet-50 via-white to-indigo-50",
    intro: "Built for side-by-side comparisons and lightweight charting.",
  },
  {
    name: "Mitigation",
    href: "/mitigation",
    eyebrow: "Shelf 04",
    stat: "methods + repos",
    description: "Methods, toolboxes, and shared repo links.",
    accent: "from-emerald-50 via-white to-teal-50",
    intro: "The busiest page, with papers, repo links, and notes.",
  },
  {
    name: "Papers",
    href: "/papers",
    eyebrow: "Shelf 05",
    stat: "curated reading",
    description: "A compact paper index with tags, repos, and reading trails.",
    accent: "from-zinc-50 via-white to-stone-50",
    intro: "A reading-first page for browsing, sharing, and handoff.",
  },
];

export const homeCategoryCards: HomeCategoryCard[] = [
  {
    title: "Papers",
    description: "Latest papers and links.",
    stat: "3,245 papers",
    href: "/papers",
    accent: "blue",
    icon: "📄",
  },
  {
    title: "Dataset & Bench",
    description: "Datasets and benchmarks.",
    stat: "78 datasets",
    href: "/dataset-bench",
    accent: "green",
    icon: "🗂️",
  },
  {
    title: "Detection",
    description: "Detection methods.",
    stat: "56 methods",
    href: "/detection",
    accent: "violet",
    icon: "🧭",
  },
  {
    title: "Quantification",
    description: "Quantification methods.",
    stat: "32 methods",
    href: "/quantification",
    accent: "orange",
    icon: "📈",
  },
  {
    title: "Mitigation",
    description: "Mitigation methods.",
    stat: "48 methods",
    href: "/mitigation",
    accent: "pink",
    icon: "🛡️",
  },
];

export const homeTrendItems: HomeTrendItem[] = [
  {
    rank: "1",
    title: "HallusionBench: An Advanced Diagnostic Suite for Entangled Language Hallucination & Visual Illusion in LVLMs",
    meta: "arXiv 2024 • 312 saves",
    stars: "128",
  },
  {
    rank: "2",
    title: "EgoHallusion: Benchmarking Hallucination in Multimodal Large Language Models for Embodied Interactions",
    meta: "arXiv 2024 • 267 saves",
    stars: "96",
  },
];

export const homeStatCards: HomeStatCard[] = [
  { label: "Papers", value: "3,251", delta: "+142 this month", accent: "blue" },
  { label: "Datasets", value: "78", delta: "+6 this month", accent: "green" },
  { label: "Methods", value: "136", delta: "+9 this month", accent: "violet" },
  { label: "Benchmarks", value: "42", delta: "+3 this month", accent: "orange" },
];

export const homeHighlights: HighlightCard[] = [
  {
    title: "Open layout",
    detail: "Top tabs, separate pages, and room for new contributors.",
    tag: "navigation",
  },
  {
    title: "Calm visual tone",
    detail: "White space first, subtle borders, and typography that stays out of the way.",
    tag: "visual",
  },
  {
    title: "Maintenance-friendly",
    detail: "Each module gets its own route so teams can work independently.",
    tag: "structure",
  },
];

export const homeMetrics: MetricCard[] = [
  { label: "Modules", value: "5", detail: "home + 4 working surfaces" },
  { label: "Open space", value: "2", detail: "hero + workbench blocks" },
  { label: "Status", value: "Live", detail: "ready for content expansion" },
];

export const homeTimeline: TimelineItem[] = [
  {
    title: "Homepage as preview",
    detail: "Keep the landing page light and use it to route attention into the modules.",
    meta: "openai-style landing",
  },
  {
    title: "Tabs on top",
    detail: "Use a single header nav so people can jump between surfaces quickly.",
    meta: "shared shell",
  },
  {
    title: "Room to grow",
    detail: "Leave a few open cards for new content, demos, or notes.",
    meta: "future-proof",
  },
];

export const featureNotes = [
  "Dataset & Bench for data sources and benchmark curation.",
  "Detection for failure signals and detector families.",
  "Quantification for metrics, scores, and comparisons.",
  "Mitigation for methods, repos, and shared fixes.",
  "Papers for a compact literature index.",
];

export const datasetBenchItems = [
  {
    name: "Dataset shelf 📚",
    detail: "Keep image, video, and multimodal datasets in one shared place.",
  },
  {
    name: "Benchmark board 🧪",
    detail: "A light comparison table for tasks, models, and settings.",
  },
  {
    name: "Repro notes 📝",
    detail: "Track prompts, seeds, model versions, and eval settings.",
  },
];

export const detectionItems = [
  {
    name: "Signal watch 🔎",
    detail: "Keep uncertainty, contradiction, and grounding mismatch easy to scan.",
  },
  {
    name: "Detector map 🧭",
    detail: "Group evidence-based, self-check, and verification-style detectors here.",
  },
  {
    name: "Failure gallery 👀",
    detail: "Leave a slot for compact examples of what each detector catches.",
  },
];

export const quantificationItems = [
  {
    name: "Metric shelf 📊",
    detail: "Keep hallucination rate, faithfulness, task accuracy, and calibration together.",
  },
  {
    name: "Scorecards 🧾",
    detail: "Drop in model-by-model and method-by-method comparisons.",
  },
  {
    name: "Trend room 📈",
    detail: "Save a simple spot for charts once the results land.",
  },
];

export const mitigationCategories = [
  {
    title: "Decoding-time 🎛️",
    detail: "Sampling control, re-ranking, constrained decoding, and fallback behavior.",
  },
  {
    title: "Retrieval-augmented 🧲",
    detail: "Ground generation with retrieved evidence or cross-modal memory.",
  },
  {
    title: "Verification-based ✅",
    detail: "Self-check, external check, and consistency loops before final output.",
  },
  {
    title: "Training-time alignment 🧵",
    detail: "Fine-tuning, preference learning, and targeted supervision.",
  },
  {
    title: "Tool-augmented 🧰",
    detail: "Mitigation through search, OCR, structured verifiers, and tool use.",
  },
  {
    title: "Uncertainty-aware 🌫️",
    detail: "Confidence, calibration, and abstention to reduce unsafe generations.",
  },
];

export const mitigationFocus = [
  {
    title: "Activation edits 🧠",
    detail: "A lot of recent work edits internal representations without retraining the whole model.",
  },
  {
    title: "Verification loops 🔁",
    detail: "Grounding loops and revise-after-draft patterns keep showing up across papers.",
  },
  {
    title: "Uncertainty gates 🌫️",
    detail: "Entropy, confidence, and calibration are often used as lightweight gates.",
  },
];

export const featuredPapers: PaperCard[] = [
  {
    title: "Adversarial Orthogonal Disentanglement for LVLM Hallucination Mitigation",
    year: "2026",
    source: "arXiv",
    venue: "arXiv 2026",
    category: "Mitigation",
    paperUrl: "https://arxiv.org/abs/2605.25377",
    repoUrl: "https://github.com/Hunter-Wrynn/AOD",
    summary: "Training-free contrastive decoding based on adversarially disentangled hallucination directions.",
    tags: ["LVLM", "representation disentanglement", "contrastive decoding"],
    discussionPrompt: "Does the learned hallucination direction transfer across LVLM architectures and datasets?",
    benchmarkSlot: "POPE, AMBER, MMMU",
    visual: "mesh",
  },
  {
    title: "Search-G1: Grounded Search Agents via Representation-Based Intrinsic Rewards",
    year: "2026",
    source: "arXiv pending",
    venue: "arXiv pending",
    category: "Mitigation",
    summary: "Grounded search agents driven by representation-based intrinsic rewards.",
    tags: ["grounded search", "agents", "intrinsic rewards"],
    discussionPrompt: "Can representation-based intrinsic rewards improve grounding without weakening search efficiency?",
    benchmarkSlot: "Awaiting arXiv release",
    visual: "signal",
  },
  {
    title: "See Different, Think Better: Visual Variations Mitigating Hallucinations in LVLMs",
    year: "2025",
    source: "ACM MM 2025",
    venue: "ACM MM 2025",
    category: "Mitigation",
    paperUrl: "https://arxiv.org/abs/2507.22003",
    repoUrl: "https://github.com/oliviadzy/ViHallu",
    summary: "Visual variations and visual instruction construction improve visual-semantic alignment for hallucination mitigation.",
    tags: ["visual variation", "fine-tuning", "LVLM"],
    discussionPrompt: "Which visual variations improve grounding without weakening semantic consistency?",
    benchmarkSlot: "Multiple hallucination benchmarks",
    visual: "grid",
  },
  {
    title: "Bridging Perception and Reasoning: Token Reweighting for RLVR in Multimodal LLMs",
    year: "2026",
    source: "arXiv",
    venue: "arXiv 2026",
    category: "Mitigation",
    paperUrl: "https://arxiv.org/abs/2603.25077",
    summary: "ToR dynamically reweights coupled perception and reasoning tokens during multimodal RLVR.",
    tags: ["RLVR", "token reweighting", "grounded reasoning"],
    discussionPrompt: "How stable is token reweighting across different RLVR objectives and model families?",
    benchmarkSlot: "Multimodal reasoning benchmarks",
    visual: "signal",
  },
  {
    title: "Not All Tokens See Equally: Perception-Grounded Policy Optimization for Large Vision-Language Models",
    year: "2026",
    source: "arXiv",
    venue: "arXiv 2026",
    category: "Mitigation",
    paperUrl: "https://arxiv.org/abs/2604.01840",
    summary: "PGPO amplifies learning signals for visually dependent tokens through fine-grained credit assignment.",
    tags: ["RLVR", "policy optimization", "token visual dependency"],
    discussionPrompt: "Does token-level visual dependency remain reliable under distribution shift?",
    benchmarkSlot: "Seven multimodal reasoning benchmarks",
    visual: "mesh",
  },
  {
    title: "Entropy Is Not Enough: Unlocking Effective Reinforcement Learning for Visual Reasoning via Vision-Anchored Token Selection",
    year: "2026",
    source: "arXiv",
    venue: "arXiv 2026",
    category: "Mitigation",
    paperUrl: "https://arxiv.org/abs/2606.03937",
    summary: "VEPO couples visual sensitivity with token entropy to improve RL credit assignment for visual reasoning.",
    tags: ["RLVR", "vision-anchored tokens", "entropy"],
    discussionPrompt: "Which vision-sensitive tokens remain useful when the reasoning path changes?",
    benchmarkSlot: "Visual reasoning benchmarks",
    visual: "beam",
  },
  {
    title: "Hallucination-aware intermediate representation edit in large vision-language models",
    year: "2026",
    source: "arXiv",
    venue: "arXiv 2026",
    category: "Mitigation",
    paperUrl: "https://arxiv.org/abs/2603.29405",
    repoUrl: "https://github.com/ASGO-MM/HIRE",
    coverImage: "/papers/hire/method.png",
    summary: "Hallucination-aware intermediate representation edit in large vision-language models.",
    tags: ["activation editing", "VLM", "representation editing"],
    discussionPrompt: "How does intermediate representation editing affect faithfulness versus general capability?",
    benchmarkSlot: "Benchmark board open",
    visual: "beam",
  },
  {
    title:
      "NoLan: Mitigating Object Hallucinations in Large Vision-Language Models via Dynamic Suppression of Language Priors",
    year: "2026",
    source: "arXiv",
    venue: "arXiv 2026",
    category: "Mitigation",
    paperUrl: "https://arxiv.org/abs/2602.22144",
    repoUrl: "https://github.com/lingfengren/NoLan",
    coverImage: "/papers/nolan/figure1.png",
    summary: "Mitigating object hallucinations via dynamic suppression of language priors.",
    tags: ["language priors", "object hallucination", "decoding"],
    discussionPrompt: "Does suppressing language priors transfer across models and prompts?",
    benchmarkSlot: "Benchmark board open",
    visual: "grid",
  },
  {
    title: "Understanding and Mitigating Hallucinations in Multimodal Chain-of-Thought Models",
    year: "2026",
    source: "CVPR 2026",
    venue: "CVPR 2026",
    category: "Mitigation",
    paperUrl: "https://arxiv.org/abs/2603.27201",
    repoUrl: "https://github.com/ASGO-MM/MCoT-hallucination",
    coverImage: "/papers/mcot/method.jpg",
    summary: "Understanding and mitigating hallucinations in multimodal chain-of-thought models.",
    tags: ["multimodal CoT", "reasoning", "mitigation"],
    discussionPrompt: "Does chain-of-thought make hallucination easier to detect or harder to suppress?",
    benchmarkSlot: "Benchmark board open",
    visual: "signal",
  },
  {
    title: "Revis: Sparse Latent Steering to Mitigate Object Hallucination in Large Vision-Language Models",
    year: "2026",
    source: "ICML 2026",
    venue: "ICML 2026",
    category: "Mitigation",
    paperUrl: "https://arxiv.org/abs/2602.11824",
    repoUrl: "https://github.com/antgroup/Revis",
    coverImage: "/papers/revis/layer_27_calib.png",
    summary: "Sparse latent steering to mitigate object hallucination in large vision-language models.",
    tags: ["latent steering", "object hallucination", "activation editing"],
    discussionPrompt: "Is sparse latent steering a better tradeoff than full activation editing?",
    benchmarkSlot: "Benchmark board open",
    visual: "mesh",
  },
  {
    title: "R-CoV: Region-Aware Chain-of-Verification for Alleviating Object Hallucinations in LVLMs",
    year: "2026",
    source: "arXiv",
    venue: "arXiv 2026",
    category: "Verification",
    paperUrl: "https://arxiv.org/abs/2604.20696",
    repoUrl: "https://github.com/Jiahao000/R-CoV",
    coverImage: "/papers/rcov/teaser.png",
    summary: "Region-aware chain-of-verification for alleviating object hallucinations in LVLMs.",
    tags: ["verification", "region-aware", "object hallucination"],
    discussionPrompt: "How much verification is enough before the cost outweighs the gain?",
    benchmarkSlot: "Benchmark board open",
    visual: "beam",
  },
  {
    title:
      "Thinking in Uncertainty: Mitigating Hallucinations in MLRMs with Latent Entropy-Aware Decoding",
    year: "2026",
    source: "arXiv",
    venue: "arXiv 2026",
    category: "Uncertainty",
    paperUrl: "https://arxiv.org/abs/2603.13366",
    repoUrl: "https://github.com/mlrm-LEAD/mlrm-LEAD",
    coverImage: "/papers/lead/method.png",
    summary: "Mitigating hallucinations in MLRMs with latent entropy-aware decoding.",
    tags: ["entropy-aware", "decoding", "MLRM"],
    discussionPrompt: "How much of the gain comes from entropy gating versus the decoding recipe?",
    benchmarkSlot: "Benchmark board open",
    visual: "signal",
  },
];

export const mitigationToolboxes = [
  {
    name: "Mitigation toolbox",
    description: "A strong starting repo for mitigation experiments and baseline handoff.",
    status: "GitHub",
    focus: "Core repo",
    href: "https://github.com/ASGO-MM/HIRE",
  },
  {
    name: "Baseline repos",
    description: "A compact link for baseline implementations and follow-up repos.",
    status: "Curated",
    focus: "Baselines",
    href: "https://github.com/lingfengren/NoLan",
  },
];

export const mitigationDiscussions = [
  {
    title: "Repro notes 📝",
    body: "Drop prompts, seeds, model versions, and failure cases here.",
    tags: ["reproducibility", "discussion"],
  },
  {
    title: "Showcase wall 🖼️",
    body: "Leave room for before/after examples and small demo snapshots.",
    tags: ["benchmark", "showcase"],
  },
];

export const benchmarkShowcase = [
  {
    name: "OpenHallu benchmark board 🧪",
    task: "Open slot",
    modality: ["multimodal", "vlm"],
    metrics: ["hallucination rate", "faithfulness", "task accuracy"],
    description: "Drop benchmark outputs here once the runs are ready.",
    paperUrl: "#",
    notes: "Populate with OpenHallu benchmark comparisons.",
  },
];

export const recentSignals = [
  "🛠️ mitigation page leads the way",
  "📄 2026 papers already linked",
  "🧪 benchmark board stays open",
];

export const subpageConfigs = {
  detection: {
    breadcrumb: ["Home", "Detection Methods", "Overview"],
    title: "Detection Methods",
    description:
      "Methods for detecting multimodal hallucinations.",
    overview:
      "Links, benchmarks, and short notes.",
    heroIcon: "🔎",
    badge: "Follow",
    followLabel: "How we collect methods",
    stats: [
      { label: "Methods", value: "212" },
      { label: "Papers", value: "39" },
      { label: "Benchmarks", value: "12" },
      { label: "Last updated", value: "May 12, 2026" },
    ] satisfies SubpageSummaryCard[],
    tabs: ["Overview", "All Methods", "By Modality", "By Type", "By Benchmark"],
    sidebarNav: [
      "Overview",
      "All Methods",
      "By Modality",
      "By Type",
      "By Benchmark",
      "Comparison",
      "Timeline",
      "Contribute",
    ],
    categories: [
      {
        title: "Model-based",
        detail: "Leverage model internal states or trained detectors.",
        count: "78 methods",
        accent: "violet",
      },
      {
        title: "Consistency-based",
        detail: "Check consistency across modalities or outputs.",
        count: "62 methods",
        accent: "blue",
      },
      {
        title: "Knowledge-based",
        detail: "Use external knowledge to verify content.",
        count: "34 methods",
        accent: "green",
      },
      {
        title: "Uncertainty-based",
        detail: "Estimate uncertainty or confidence of outputs.",
        count: "26 methods",
        accent: "orange",
      },
      {
        title: "Others",
        detail: "Other innovative or hybrid approaches.",
        count: "12 methods",
        accent: "pink",
      },
    ] satisfies SubpageCategoryCard[],
    sectionTitle: "Method Categories",
    tableTitle: "Popular Methods",
    tableColumns: ["Method", "Type", "Modality", "Venue (Year)", "Benchmarks (Avg. Rank)", "Resources"],
    tableRows: [
      {
        name: "HalluLens",
        note: "A general framework for detecting visual hallucinations in LVLMs.",
        type: "Model-based",
        venue: "CVPR 2024",
        score: "5 / 8",
        resources: ["paper", "github"],
      },
      {
        name: "POPE",
        note: "Probe-based Object Perception Evaluation for LVLMs.",
        type: "Consistency-based",
        venue: "ICLR 2024",
        score: "2 / 8",
        resources: ["paper", "github"],
      },
      {
        name: "VCD",
        note: "Visual Credibility Detection for Multimodal Outputs.",
        type: "Model-based",
        venue: "NeurIPS 2023",
        score: "3 / 6",
        resources: ["paper", "github"],
      },
      {
        name: "HalluDetect",
        note: "Detecting hallucinations via cross-modal discrepancy.",
        type: "Consistency-based",
        venue: "ACL 2024",
        score: "4 / 7",
        resources: ["paper", "github"],
      },
      {
        name: "UnDetect",
        note: "Uncertainty-aware detection for hallucination.",
        type: "Uncertainty-based",
        venue: "AAAI 2024",
        score: "6 / 7",
        resources: ["paper", "github"],
      },
    ] satisfies SubpageTableRow[],
    rightCards: [
      { title: "Leaderboard (Average Rank)", items: ["1  POPE  1.85", "2  LURE  2.21", "3  VCD  2.48", "4  HalluLens  2.73", "5  MMDP  3.12"] },
      { title: "Top Benchmarks", items: ["MME-Hall 156 methods", "POPE 134 methods", "CHAIR 98 methods", "HallusionBench 87 methods", "AMBER 72 methods"] },
      { title: "Method Timeline", items: ["2019 10", "2020 20", "2021 30", "2022 40", "2023 50", "2024 72", "2025 48", "2026 30"] },
    ] satisfies SideListCard[],
    aboutTitle: "About This Collection",
    aboutBody:
      "Collected from papers, repositories, and official implementations.",
    citeLabel: "Cite This Collection",
  },
  datasetBench: {
    breadcrumb: ["Home", "Datasets & Benchmarks", "Overview"],
    title: "Datasets & Benchmarks",
    description:
      "Datasets and benchmark suites for multimodal hallucination research.",
    overview:
      "Tasks, settings, and benchmark notes.",
    heroIcon: "🗂️",
    badge: "Follow",
    followLabel: "How we collect benchmarks",
    stats: [
      { label: "Datasets", value: "78" },
      { label: "Benchmarks", value: "42" },
      { label: "Tasks", value: "19" },
      { label: "Last updated", value: "May 14, 2026" },
    ] satisfies SubpageSummaryCard[],
    tabs: ["Overview", "All Datasets", "By Modality", "By Task", "By Benchmark"],
    sidebarNav: [
      "Overview",
      "All Datasets",
      "By Modality",
      "By Task",
      "By Benchmark",
      "Comparison",
      "Timeline",
      "Contribute",
    ],
    categories: [
      {
        title: "Image QA",
        detail: "Datasets and benchmarks for image-grounded question answering.",
        count: "24 datasets",
        accent: "green",
      },
      {
        title: "Video QA",
        detail: "Resources for temporal hallucination evaluation.",
        count: "12 datasets",
        accent: "blue",
      },
      {
        title: "Embodied",
        detail: "Benchmarks for egocentric and interactive settings.",
        count: "8 datasets",
        accent: "orange",
      },
      {
        title: "Chart & OCR",
        detail: "Datasets with tables, charts, OCR, and grounded evidence.",
        count: "18 datasets",
        accent: "violet",
      },
      {
        title: "Open slots",
        detail: "Room for new evaluation suites and task-specific notes.",
        count: "16 slots",
        accent: "pink",
      },
    ] satisfies SubpageCategoryCard[],
    sectionTitle: "Dataset Categories",
    tableTitle: "Popular Benchmarks",
    tableColumns: ["Benchmark", "Focus", "Modality", "Venue (Year)", "Coverage", "Resources"],
    tableRows: [
      {
        name: "HallusionBench",
        note: "A diagnostic benchmark for language hallucination and visual illusion.",
        type: "Image QA",
        venue: "arXiv 2024",
        score: "52 tasks",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2310.14566" },
          { label: "github", href: "https://github.com/tianyi-lab/HallusionBench" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets?search=HallusionBench" },
        ],
      },
      {
        name: "POPE",
        note: "Object perception benchmark for probing object hallucination.",
        type: "Object Hallucination",
        venue: "ICCV 2023",
        score: "3 splits",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2305.10355" },
          { label: "github", href: "https://github.com/RUCAIBox/POPE" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets?search=POPE" },
        ],
      },
      {
        name: "MME-Hall",
        note: "Multimodal evaluation suite with hallucination-focused subsets.",
        type: "Evaluation Suite",
        venue: "NeurIPS 2024",
        score: "28 models",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2306.13394" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets?search=MME" },
        ],
      },
      {
        name: "CHAIR",
        note: "Classic object hallucination metric and benchmark setup.",
        type: "Captioning",
        venue: "CVPR 2018",
        score: "2 metrics",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/1809.02156" },
          { label: "github", href: "https://github.com/ruotianluo/self-critical.pytorch" },
        ],
      },
      {
        name: "AMBER",
        note: "A benchmark for multimodal hallucination evaluation across tasks.",
        type: "Multitask",
        venue: "ACL 2025",
        score: "11 settings",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2311.07397" },
          { label: "github", href: "https://github.com/junyangwang0410/AMBER" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets?search=AMBER" },
        ],
      },
    ] satisfies SubpageTableRow[],
    rightCards: [
      { title: "Most Used Tasks", items: ["Object QA", "Captioning", "Video reasoning", "Embodied grounding", "OCR grounding"] },
      { title: "Top Benchmarks", items: ["HallusionBench", "POPE", "MME-Hall", "CHAIR", "AMBER"] },
      { title: "Recent Updates", items: ["+6 datasets in May", "+2 benchmark suites", "+4 evaluation notes", "+1 shared scorecard"] },
    ] satisfies SideListCard[],
    aboutTitle: "About This Collection",
    aboutBody:
      "Official releases, common settings, and benchmark notes for reproducible comparison.",
    citeLabel: "Cite This Collection",
  },
  quantification: {
    breadcrumb: ["Home", "Quantification", "Overview"],
    title: "Quantification Methods",
    description:
      "Metrics and scorecards for multimodal hallucination research.",
    overview:
      "Definitions, mappings, and short notes.",
    heroIcon: "📊",
    badge: "Follow",
    followLabel: "How we collect metrics",
    stats: [
      { label: "Methods", value: "32" },
      { label: "Metrics", value: "21" },
      { label: "Benchmarks", value: "14" },
      { label: "Last updated", value: "May 10, 2026" },
    ] satisfies SubpageSummaryCard[],
    tabs: ["Overview", "All Metrics", "By Modality", "By Type", "By Benchmark"],
    sidebarNav: [
      "Overview",
      "All Metrics",
      "By Modality",
      "By Type",
      "By Benchmark",
      "Comparison",
      "Timeline",
      "Contribute",
    ],
    categories: [
      {
        title: "Faithfulness",
        detail: "Metrics for groundedness, factual consistency, and attribution.",
        count: "8 metrics",
        accent: "orange",
      },
      {
        title: "Hallucination Rate",
        detail: "Direct measures of hallucination frequency or severity.",
        count: "6 metrics",
        accent: "violet",
      },
      {
        title: "Calibration",
        detail: "Confidence, uncertainty, and abstention-related measures.",
        count: "4 metrics",
        accent: "blue",
      },
      {
        title: "Task Accuracy",
        detail: "Benchmark-linked accuracy metrics used with hallucination measures.",
        count: "7 metrics",
        accent: "green",
      },
      {
        title: "Composite Scores",
        detail: "Combined scorecards for side-by-side evaluation.",
        count: "7 metrics",
        accent: "pink",
      },
    ] satisfies SubpageCategoryCard[],
    sectionTitle: "Metric Categories",
    tableTitle: "Popular Metrics",
    tableColumns: ["Metric", "Type", "Modality", "Venue (Year)", "Benchmarks", "Resources"],
    tableRows: [
      {
        name: "CHAIR",
        note: "Classic object hallucination metric for captioning outputs.",
        type: "Hallucination Rate",
        venue: "CVPR 2018",
        score: "5 / 8",
        resources: ["paper", "metric"],
      },
      {
        name: "POPE Score",
        note: "Probe-based evaluation score for object perception hallucination.",
        type: "Faithfulness",
        venue: "ICCV 2023",
        score: "2 / 5",
        resources: ["paper", "github"],
      },
      {
        name: "HalluScore",
        note: "A unified scorecard for multimodal hallucination comparisons.",
        type: "Composite Score",
        venue: "ACL 2025",
        score: "4 / 6",
        resources: ["paper", "leaderboard"],
      },
      {
        name: "Entropy Gate",
        note: "Uncertainty-driven metric for hallucination risk estimation.",
        type: "Calibration",
        venue: "CVPR 2026",
        score: "3 / 4",
        resources: ["paper", "github"],
      },
      {
        name: "FaithBench",
        note: "Scorecard setup for faithfulness and task accuracy.",
        type: "Faithfulness",
        venue: "NeurIPS 2025",
        score: "6 / 7",
        resources: ["paper", "dataset"],
      },
    ] satisfies SubpageTableRow[],
    rightCards: [
      { title: "Top Scorecards", items: ["HalluScore", "FaithBench", "CHAIR", "POPE Score", "Entropy Gate"] },
      { title: "Most Used Benchmarks", items: ["HallusionBench", "POPE", "MME-Hall", "AMBER", "CHAIR"] },
      { title: "Metric Timeline", items: ["2019 4", "2020 8", "2021 12", "2022 18", "2023 24", "2024 27", "2025 30", "2026 32"] },
    ] satisfies SideListCard[],
    aboutTitle: "About This Collection",
    aboutBody:
      "Metric definitions, benchmark mappings, and lightweight comparison notes.",
    citeLabel: "Cite This Collection",
  },
  mitigation: {
    breadcrumb: ["Home", "Mitigation", "Overview"],
    title: "Mitigation Methods",
    description:
      "Methods for reducing multimodal hallucinations.",
    overview:
      "Repos, benchmarks, and short notes.",
    heroIcon: "🛡️",
    badge: "Follow",
    followLabel: "How we collect methods",
    stats: [
      { label: "Methods", value: "52" },
      { label: "Papers", value: "32" },
      { label: "Repos", value: "18" },
      { label: "Last updated", value: "Jul 30, 2026" },
    ] satisfies SubpageSummaryCard[],
    tabs: ["Overview", "All Methods", "By Family", "By Benchmark", "By Resource"],
    sidebarNav: [
      "Overview",
      "All Methods",
      "By Family",
      "By Benchmark",
      "By Resource",
      "Comparison",
      "Timeline",
      "Contribute",
    ],
    categories: [
      {
        title: "Decoding-time",
        detail: "Sampling control, reranking, and constrained decoding approaches.",
        count: "14 methods",
        accent: "pink",
      },
      {
        title: "Verification-based",
        detail: "Self-check, external check, and revise-after-draft methods.",
        count: "11 methods",
        accent: "violet",
      },
      {
        title: "Activation Editing",
        detail: "Representation editing and sparse steering methods.",
        count: "8 methods",
        accent: "blue",
      },
      {
        title: "Tool-augmented",
        detail: "Search, OCR, and verifier-assisted pipelines.",
        count: "9 methods",
        accent: "green",
      },
      {
        title: "Uncertainty-aware",
        detail: "Entropy gating, abstention, and confidence-aware decoding.",
        count: "8 methods",
        accent: "orange",
      },
    ] satisfies SubpageCategoryCard[],
    sectionTitle: "Method Categories",
    tableTitle: "Popular Methods",
    tableColumns: ["Method", "Type", "Modality", "Venue (Year)", "Benchmarks (Avg. Rank)", "Resources"],
    tableRows: [
      {
        name: "ViHallu",
        note: "Visual variations and visual instruction construction improve visual-semantic alignment for LVLM hallucination mitigation.",
        type: "Fine-tuning",
        venue: "ACM MM 2025",
        score: "visual alignment",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2507.22003" },
          { label: "github", href: "https://github.com/oliviadzy/ViHallu" },
        ],
      },
      {
        name: "ToR",
        note: "Token reweighting jointly optimizes perception and reasoning tokens for multimodal RLVR.",
        type: "Perception-grounded RL",
        venue: "arXiv 2026",
        score: "RLVR / grounding",
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2603.25077" }],
      },
      {
        name: "PGPO",
        note: "Policy optimization with token-level visual dependency for grounded multimodal reasoning.",
        type: "Perception-grounded RL",
        venue: "arXiv 2026",
        score: "RLVR / token credit",
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2604.01840" }],
      },
      {
        name: "VEPO",
        note: "Vision-anchored token selection combines visual sensitivity with entropy during RL.",
        type: "Perception-grounded RL",
        venue: "arXiv 2026",
        score: "RLVR / visual reasoning",
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2606.03937" }],
      },
      {
        name: "AOD",
        note: "Adversarial orthogonal disentanglement with training-free contrastive decoding for LVLM hallucination mitigation.",
        type: "Activation Editing",
        venue: "arXiv 2026",
        score: "POPE / AMBER",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2605.25377" },
          { label: "github", href: "https://github.com/Hunter-Wrynn/AOD" },
        ],
      },
      {
        name: "Search-G1",
        note: "Grounded search agents via representation-based intrinsic rewards.",
        type: "Tool-augmented",
        venue: "arXiv pending",
        score: "awaiting release",
        resources: ["arXiv pending"],
      },
      {
        name: "HIRE",
        note: "Intermediate representation editing for hallucination mitigation.",
        type: "Activation Editing",
        venue: "arXiv 2026",
        score: "2 / 6",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.29405" },
          { label: "github", href: "https://github.com/ASGO-MM/HIRE" },
        ],
      },
      {
        name: "NoLan",
        note: "Suppress language priors dynamically during generation.",
        type: "Decoding-time",
        venue: "arXiv 2026",
        score: "3 / 6",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2602.22144" },
          { label: "github", href: "https://github.com/lingfengren/NoLan" },
        ],
      },
      {
        name: "MCoT",
        note: "Mitigate reasoning-time hallucinations in multimodal CoT.",
        type: "Verification-based",
        venue: "CVPR 2026",
        score: "4 / 7",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.27201" },
          { label: "github", href: "https://github.com/ASGO-MM/MCoT-hallucination" },
        ],
      },
      {
        name: "R-CoV",
        note: "Region-aware chain-of-verification for LVLM hallucination.",
        type: "Verification-based",
        venue: "arXiv 2026",
        score: "1 / 5",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2604.20696" },
          { label: "github", href: "https://github.com/Jiahao000/R-CoV" },
        ],
      },
      {
        name: "LEAD",
        note: "Latent entropy-aware decoding for multimodal reasoning models.",
        type: "Uncertainty-aware",
        venue: "arXiv 2026",
        score: "5 / 7",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.13366" },
          { label: "github", href: "https://github.com/mlrm-LEAD/mlrm-LEAD" },
        ],
      },
    ] satisfies SubpageTableRow[],
    rightCards: [
      { title: "Leaderboard (Average Rank)", items: ["1  R-CoV  1.62", "2  HIRE  1.88", "3  NoLan  2.13", "4  LEAD  2.47", "5  Revis  2.80"] },
      { title: "Top Benchmarks", items: ["POPE 28 methods", "HallusionBench 22 methods", "MME-Hall 18 methods", "AMBER 15 methods", "CHAIR 12 methods"] },
      { title: "Method Timeline", items: ["2019 2", "2020 4", "2021 8", "2022 14", "2023 21", "2024 30", "2025 39", "2026 48"] },
    ] satisfies SideListCard[],
    aboutTitle: "About This Collection",
    aboutBody:
      "Mitigation methods from papers, repos, and reproduced baselines.",
    citeLabel: "Cite This Collection",
  },
  papers: {
    breadcrumb: ["Home", "Papers", "Overview"],
    title: "Paper Index",
    description:
      "Full titles, links, and topic tags.",
    overview:
      "A compact reading index for quick scanning.",
    heroIcon: "📄",
    badge: "Follow",
    followLabel: "How we collect papers",
    stats: [
      { label: "Papers", value: "3,251" },
      { label: "Repos", value: "1,182" },
      { label: "Benchmarks", value: "42" },
      { label: "Last updated", value: "Jul 30, 2026" },
    ] satisfies SubpageSummaryCard[],
    tabs: ["Overview", "All Papers", "By Topic", "By Venue", "By Resource"],
    sidebarNav: [
      "Overview",
      "All Papers",
      "By Topic",
      "By Venue",
      "By Resource",
      "Comparison",
      "Timeline",
      "Contribute",
    ],
    categories: [
      {
        title: "Mitigation",
        detail: "Methods for reducing and preventing hallucinations.",
        count: "1,110 papers",
        accent: "pink",
      },
      {
        title: "Detection",
        detail: "Methods for identifying hallucinations and risk signals.",
        count: "694 papers",
        accent: "violet",
      },
      {
        title: "Benchmarks",
        detail: "Datasets, evaluation suites, and benchmark-oriented papers.",
        count: "483 papers",
        accent: "green",
      },
      {
        title: "Quantification",
        detail: "Metrics, scorecards, and quantitative evaluation protocols.",
        count: "362 papers",
        accent: "orange",
      },
      {
        title: "Surveys",
        detail: "Survey papers and broad overviews across the field.",
        count: "123 papers",
        accent: "blue",
      },
    ] satisfies SubpageCategoryCard[],
    sectionTitle: "Paper Topics",
    tableTitle: "Recent Papers",
    tableColumns: ["Paper", "Topic", "Modality", "Venue (Year)", "Signals", "Resources"],
    tableRows: [
      {
        name: "See Different, Think Better: Visual Variations Mitigating Hallucinations in LVLMs",
        note: "ViHallu uses visual variations and visual instruction construction for visual-semantic alignment.",
        type: "Mitigation",
        venue: "ACM MM 2025",
        score: "visual alignment",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2507.22003" },
          { label: "github", href: "https://github.com/oliviadzy/ViHallu" },
        ],
      },
      {
        name: "Bridging Perception and Reasoning: Token Reweighting for RLVR in Multimodal LLMs",
        note: "ToR reweights coupled perception and reasoning tokens during multimodal RLVR.",
        type: "Mitigation",
        venue: "arXiv 2026",
        score: "RLVR / grounding",
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2603.25077" }],
      },
      {
        name: "Not All Tokens See Equally: Perception-Grounded Policy Optimization for Large Vision-Language Models",
        note: "PGPO amplifies learning signals for visually dependent tokens.",
        type: "Mitigation",
        venue: "arXiv 2026",
        score: "RLVR / token credit",
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2604.01840" }],
      },
      {
        name: "Entropy Is Not Enough: Unlocking Effective Reinforcement Learning for Visual Reasoning via Vision-Anchored Token Selection",
        note: "VEPO combines visual sensitivity and token entropy for visual reasoning RL.",
        type: "Mitigation",
        venue: "arXiv 2026",
        score: "RLVR / visual reasoning",
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2606.03937" }],
      },
      {
        name: "Adversarial Orthogonal Disentanglement for LVLM Hallucination Mitigation",
        note: "AOD disentangles hallucination directions for training-free contrastive decoding in LVLMs.",
        type: "Mitigation",
        venue: "arXiv 2026",
        score: "LVLM / decoding",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2605.25377" },
          { label: "github", href: "https://github.com/Hunter-Wrynn/AOD" },
        ],
      },
      {
        name: "Search-G1: Grounded Search Agents via Representation-Based Intrinsic Rewards",
        note: "Grounded search agents; public arXiv record is pending.",
        type: "Mitigation",
        venue: "arXiv pending",
        score: "agents / grounding",
        resources: ["arXiv pending"],
      },
      {
        name: "Hallucination-aware intermediate representation edit in large vision-language models",
        note: "Intermediate representation editing for LVLM hallucination mitigation.",
        type: "Mitigation",
        venue: "arXiv 2026",
        score: "VLM / editing",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.29405" },
          { label: "github", href: "https://github.com/ASGO-MM/HIRE" },
        ],
      },
      {
        name: "NoLan: Mitigating Object Hallucinations in Large Vision-Language Models via Dynamic Suppression of Language Priors",
        note: "Dynamic suppression of language priors during decoding.",
        type: "Mitigation",
        venue: "arXiv 2026",
        score: "decoding / object",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2602.22144" },
          { label: "github", href: "https://github.com/lingfengren/NoLan" },
        ],
      },
      {
        name: "Understanding and Mitigating Hallucinations in Multimodal Chain-of-Thought Models",
        note: "Hallucination analysis and mitigation for multimodal CoT.",
        type: "Mitigation",
        venue: "CVPR 2026",
        score: "reasoning / CoT",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.27201" },
          { label: "github", href: "https://github.com/ASGO-MM/MCoT-hallucination" },
        ],
      },
      {
        name: "R-CoV: Region-Aware Chain-of-Verification for Alleviating Object Hallucinations in LVLMs",
        note: "Region-aware verification loops for object hallucinations.",
        type: "Verification",
        venue: "arXiv 2026",
        score: "verification / region",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2604.20696" },
          { label: "github", href: "https://github.com/Jiahao000/R-CoV" },
        ],
      },
      {
        name: "Thinking in Uncertainty: Mitigating Hallucinations in MLRMs with Latent Entropy-Aware Decoding",
        note: "Entropy-aware decoding for multimodal reasoning models.",
        type: "Uncertainty",
        venue: "arXiv 2026",
        score: "uncertainty / decoding",
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.13366" },
          { label: "github", href: "https://github.com/mlrm-LEAD/mlrm-LEAD" },
        ],
      },
    ] satisfies SubpageTableRow[],
    rightCards: [
      { title: "Trending Topics", items: ["object hallucination", "verification", "uncertainty-aware decoding", "activation editing", "multimodal CoT"] },
      { title: "Top Venues", items: ["arXiv", "CVPR", "ICLR", "NeurIPS", "ACL"] },
      { title: "Paper Timeline", items: ["2019 28", "2020 64", "2021 118", "2022 266", "2023 542", "2024 894", "2025 1102", "2026 1231"] },
    ] satisfies SideListCard[],
    aboutTitle: "About This Collection",
    aboutBody:
      "Paper metadata, repo links, and topic tags for easier scanning and handoff.",
    citeLabel: "Cite This Collection",
  },
} as const;
