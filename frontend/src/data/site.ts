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
  href: string;
  accent: string;
  icon: string;
};

export type SubpageCategoryCard = {
  title: string;
  detail: string;
  count: string;
  accent: string;
  filters?: readonly string[];
};

export type SubpageTableRow = {
  name: string;
  note: string;
  type: string;
  tags?: readonly string[];
  venue: string;
  score: string;
  resources: (string | ResourceLink)[];
  authors?: readonly string[];
  correspondingAuthors?: readonly string[];
  affiliations?: readonly string[];
  metadataNote?: string;
};

export type ResourceLink = {
  label: string;
  href: string;
};

export const arxivReleaseDates: Record<string, string> = {
  "1809.02156": "Sep 6, 2018",
  "2002.07650": "Feb 18, 2020",
  "2305.10355": "May 17, 2023",
  "2306.13394": "Jun 23, 2023",
  "2310.00754": "Oct 1, 2023",
  "2308.15126": "Aug 29, 2023",
  "2310.14566": "Oct 23, 2023",
  "2311.01477": "Nov 2, 2023",
  "2311.07397": "Nov 13, 2023",
  "2410.02762": "Oct 3, 2024",
  "2411.16724": "Nov 23, 2024",
  "2507.22003": "Jul 29, 2025",
  "2508.19972": "Aug 27, 2025",
  "2602.22144": "Feb 25, 2026",
  "2603.13366": "Mar 9, 2026",
  "2603.25077": "Mar 26, 2026",
  "2603.27201": "Mar 28, 2026",
  "2603.29405": "Mar 31, 2026",
  "2604.01840": "Apr 2, 2026",
  "2604.20696": "Apr 22, 2026",
  "2605.12258": "May 12, 2026",
  "2605.25377": "May 25, 2026",
  "2606.03937": "Jun 2, 2026",
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
    href: "/papers",
    accent: "blue",
    icon: "📄",
  },
  {
    title: "Dataset & Bench",
    description: "Datasets and benchmarks.",
    href: "/dataset-bench",
    accent: "green",
    icon: "🗂️",
  },
  {
    title: "Detection",
    description: "Detection methods.",
    href: "/detection",
    accent: "violet",
    icon: "🧭",
  },
  {
    title: "Quantification",
    description: "Quantification methods.",
    href: "/quantification",
    accent: "orange",
    icon: "📈",
  },
  {
    title: "Mitigation",
    description: "Mitigation methods.",
    href: "/mitigation",
    accent: "pink",
    icon: "🛡️",
  },
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
    tableTitle: "Curated Methods",
    tableColumns: ["Method", "Type", "Modality", "Venue / First Post", "Focus", "Resources"],
    tableRows: [
      {
        name: "HallusionBench",
        note: "Control-group diagnosis of language hallucination and visual illusion in LVLMs.",
        type: "Consistency-based",
        tags: ["control groups", "visual illusion", "language hallucination"],
        venue: "CVPR 2024",
        score: "paired visual diagnosis",
        authors: ["Tianrui Guan", "Fuxiao Liu", "Xiyang Wu"],
        correspondingAuthors: [],
        affiliations: ["University of Maryland, College Park"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2310.14566" },
          { label: "github", href: "https://github.com/tianyi-lab/HallusionBench" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets/rayguan/HallusionBench" },
        ],
      },
      {
        name: "POPE",
        note: "Polling-based object probing for detecting object hallucination in LVLMs.",
        type: "Consistency-based",
        tags: ["object existence", "yes/no probing", "adversarial negatives"],
        venue: "EMNLP 2023",
        score: "object perception probing",
        authors: ["Yifan Li", "Yifan Du", "Kun Zhou"],
        correspondingAuthors: ["Wayne Xin Zhao"],
        affiliations: ["Renmin University of China", "Meituan Group"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2305.10355" },
          { label: "github", href: "https://github.com/RUCAIBox/POPE" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets/MM-Hallu/POPE" },
        ],
      },
      {
        name: "FaithScore",
        note: "Atomic image-fact verification for fine-grained hallucination detection.",
        type: "Knowledge-based",
        tags: ["atomic facts", "image grounding", "reference-free"],
        venue: "Findings of EMNLP 2024",
        score: "atomic fact verification",
        authors: ["Liqiang Jing", "Ruosen Li", "Yunmo Chen"],
        correspondingAuthors: [],
        affiliations: ["University of Texas at Dallas", "Johns Hopkins University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2311.01477" },
          { label: "github", href: "https://github.com/bcdnlp/FAITHSCORE" },
        ],
      },
      {
        name: "HaELM",
        note: "A reproducible local language-model evaluator for LVLM hallucinations.",
        type: "Model-based",
        tags: ["LLM evaluator", "local evaluation", "hallucination scoring"],
        venue: "arXiv 2023",
        score: "model-based evaluation",
        authors: ["Junyang Wang", "Yiyang Zhou", "Guohai Xu"],
        correspondingAuthors: [],
        affiliations: ["Shandong University", "Beijing Jiaotong University", "Xi'an Jiaotong University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2308.15126" },
          { label: "github", href: "https://github.com/junyangwang0410/HaELM" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets/MM-Hallu/HaELM" },
        ],
      },
      {
        name: "AMBER",
        note: "An LLM-free pipeline for detecting existence, attribute, and relation hallucinations.",
        type: "Knowledge-based",
        tags: ["existence", "attributes", "relations"],
        venue: "arXiv 2023",
        score: "multi-dimensional detection",
        authors: ["Junyang Wang", "Yuhang Wang", "Guohai Xu"],
        correspondingAuthors: [],
        affiliations: ["Beijing Jiaotong University", "Alibaba Group"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2311.07397" },
          { label: "github", href: "https://github.com/junyangwang0410/AMBER" },
        ],
      },
      {
        name: "GLSim: Detecting Object Hallucinations in LVLMs via Global-Local Similarity",
        note: "A training-free detector that combines global scene similarity with local visual grounding for object hallucination detection.",
        type: "Model-based",
        tags: ["global-local similarity", "Visual Logit Lens", "object grounding"],
        venue: "NeurIPS 2025",
        score: "global-local grounding",
        authors: ["Seongheon Park", "Sharon Li"],
        correspondingAuthors: [],
        affiliations: ["University of Wisconsin–Madison"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2508.19972" },
          { label: "github", href: "https://github.com/deeplearning-wisc/glsim" },
        ],
      },
      {
        name: "Instruction Lens Score: Your Instruction Contributes a Powerful Object Hallucination Detector for Multimodal Large Language Models",
        note: "A training-free object hallucination detector that uses calibrated local and instruction-context consistency scores.",
        type: "Model-based",
        tags: ["instruction embeddings", "Logit Lens", "object hallucination"],
        venue: "ICML 2026",
        score: "instruction-token scoring",
        authors: ["Runhe Lai", "Xinhua Lu", "Yanqi Wu"],
        correspondingAuthors: ["Weijiang Yu", "Ruixuan Wang"],
        affiliations: [
          "Sun Yat-sen University",
          "Peng Cheng Laboratory",
          "Key Laboratory of Machine Intelligence and Advanced Computing, MOE",
        ],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2605.12258" },
          { label: "github", href: "https://github.com/Fraserlairh/Instruction-Lens-Score" },
        ],
      },
      {
        name: "Devils in Middle Layers of Large Vision-Language Models: Interpreting, Detecting and Mitigating Object Hallucinations via Attention Lens",
        note: "An attention-lens analysis identifies middle-layer signals for object hallucination detection and visual-attention adjustment.",
        type: "Model-based",
        tags: ["attention lens", "middle layers", "object hallucination"],
        venue: "CVPR 2025",
        score: "attention-based signals",
        authors: ["Zhangqi Jiang", "Junkai Chen", "Beier Zhu"],
        correspondingAuthors: ["Tingjin Luo", "Xu Yang"],
        affiliations: [
          "National University of Defense Technology",
          "Southeast University",
          "Nanyang Technological University",
        ],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2411.16724" },
          { label: "github", href: "https://github.com/ZhangqiJiang07/middle_layers_indicating_hallucinations" },
        ],
      },
    ] satisfies SubpageTableRow[],
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
        count: "1 entry",
        accent: "green",
      },
      {
        title: "Object Hallucination",
        detail: "Object-level probes for visual grounding failures.",
        count: "1 entry",
        accent: "blue",
      },
      {
        title: "Evaluation Suite",
        detail: "Multi-task evaluation suites with hallucination subsets.",
        count: "1 entry",
        accent: "orange",
      },
      {
        title: "Captioning",
        detail: "Captioning metrics and benchmark setups.",
        count: "1 entry",
        accent: "violet",
      },
      {
        title: "Multitask",
        detail: "Hallucination evaluation across multiple task settings.",
        count: "1 entry",
        accent: "pink",
      },
    ] satisfies SubpageCategoryCard[],
    sectionTitle: "Dataset Categories",
    tableTitle: "Curated Benchmarks",
    tableColumns: ["Benchmark", "Focus", "Modality", "Venue / First Post", "Coverage", "Resources"],
    tableRows: [
      {
        name: "HallusionBench",
        note: "A diagnostic benchmark for language hallucination and visual illusion.",
        type: "Image QA",
        tags: ["control groups", "visual illusion", "language hallucination"],
        venue: "CVPR 2024",
        score: "52 tasks",
        authors: ["Tianrui Guan", "Fuxiao Liu", "Xiyang Wu"],
        correspondingAuthors: [],
        affiliations: ["University of Maryland, College Park"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2310.14566" },
          { label: "github", href: "https://github.com/tianyi-lab/HallusionBench" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets/rayguan/HallusionBench" },
        ],
      },
      {
        name: "POPE",
        note: "Object perception benchmark for probing object hallucination.",
        type: "Object Hallucination",
        tags: ["object existence", "yes/no probing", "adversarial negatives"],
        venue: "EMNLP 2023",
        score: "3 splits",
        authors: ["Yifan Li", "Yifan Du", "Kun Zhou"],
        correspondingAuthors: ["Wayne Xin Zhao"],
        affiliations: ["Renmin University of China", "Meituan Group"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2305.10355" },
          { label: "github", href: "https://github.com/RUCAIBox/POPE" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets/MM-Hallu/POPE" },
        ],
      },
      {
        name: "MME",
        note: "A comprehensive multimodal evaluation suite with perception tasks used for hallucination analysis.",
        type: "Evaluation Suite",
        tags: ["perception", "cognition", "multi-task evaluation"],
        venue: "NeurIPS 2025",
        score: "28 models",
        authors: ["Chaoyou Fu", "Peixian Chen", "Yunhang Shen"],
        correspondingAuthors: ["Ke Li"],
        affiliations: ["Nanjing University", "Tencent Youtu Lab", "Xiamen University", "CASIA"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2306.13394" },
          { label: "github", href: "https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models/tree/Evaluation" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets/MM-Hallu/MME" },
        ],
      },
      {
        name: "CHAIR",
        note: "Classic object hallucination metric and benchmark setup.",
        type: "Captioning",
        tags: ["captioning", "object labels", "hallucination rate"],
        venue: "CVPR 2018",
        score: "2 metrics",
        authors: ["Anna Rohrbach", "Lisa Anne Hendricks", "Kaylee Burns"],
        correspondingAuthors: [],
        affiliations: ["UC Berkeley", "Boston University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/1809.02156" },
          { label: "github", href: "https://github.com/ruotianluo/self-critical.pytorch" },
          { label: "Hugging Face", href: "https://huggingface.co/datasets/MM-Hallu/CHAIR" },
        ],
      },
      {
        name: "AMBER",
        note: "A benchmark for multimodal hallucination evaluation across tasks.",
        type: "Multitask",
        tags: ["existence", "attributes", "relations"],
        venue: "arXiv 2023",
        score: "11 settings",
        authors: ["Junyang Wang", "Yuhang Wang", "Guohai Xu"],
        correspondingAuthors: [],
        affiliations: ["Beijing Jiaotong University", "Alibaba Group"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2311.07397" },
          { label: "github", href: "https://github.com/junyangwang0410/AMBER" },
        ],
      },
    ] satisfies SubpageTableRow[],
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
        count: "1 entry",
        accent: "pink",
        filters: ["Composite Score"],
      },
    ] satisfies SubpageCategoryCard[],
    sectionTitle: "Metric Categories",
    tableTitle: "Curated Metrics",
    tableColumns: ["Metric", "Type", "Modality", "Venue / First Post", "Coverage", "Resources"],
    tableRows: [
      {
        name: "CHAIR",
        note: "Classic object hallucination metric for captioning outputs.",
        type: "Hallucination Rate",
        tags: ["captioning", "object labels", "hallucination rate"],
        venue: "CVPR 2018",
        score: "object hallucination",
        authors: ["Anna Rohrbach", "Lisa Anne Hendricks", "Kaylee Burns"],
        correspondingAuthors: [],
        affiliations: ["UC Berkeley", "Boston University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/1809.02156" },
          { label: "github", href: "https://github.com/ruotianluo/self-critical.pytorch" },
        ],
      },
      {
        name: "POPE Score",
        note: "Probe-based evaluation score for object perception hallucination.",
        type: "Faithfulness",
        tags: ["object existence", "binary probing", "F1 score"],
        venue: "EMNLP 2023",
        score: "object perception probing",
        authors: ["Yifan Li", "Yifan Du", "Kun Zhou"],
        correspondingAuthors: ["Wayne Xin Zhao"],
        affiliations: ["Renmin University of China", "Meituan Group"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2305.10355" },
          { label: "github", href: "https://github.com/RUCAIBox/POPE" },
        ],
      },
      {
        name: "FaithScore",
        note: "Reference-free faithfulness score over verified atomic image facts.",
        type: "Faithfulness",
        tags: ["atomic facts", "image grounding", "reference-free"],
        venue: "Findings of EMNLP 2024",
        score: "atomic fact precision",
        authors: ["Liqiang Jing", "Ruosen Li", "Yunmo Chen"],
        correspondingAuthors: [],
        affiliations: ["University of Texas at Dallas", "Johns Hopkins University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2311.01477" },
          { label: "github", href: "https://github.com/bcdnlp/FAITHSCORE" },
        ],
      },
      {
        name: "HaELM",
        note: "A trained evaluator that scores hallucination in LVLM responses.",
        type: "Faithfulness",
        tags: ["LLM evaluator", "local evaluation", "hallucination scoring"],
        venue: "arXiv 2023",
        score: "model-based scoring",
        authors: ["Junyang Wang", "Yiyang Zhou", "Guohai Xu"],
        correspondingAuthors: [],
        affiliations: ["Shandong University", "Beijing Jiaotong University", "Xi'an Jiaotong University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2308.15126" },
          { label: "github", href: "https://github.com/junyangwang0410/HaELM" },
        ],
      },
      {
        name: "AMBER Score",
        note: "A composite score over generative and discriminative hallucination dimensions.",
        type: "Composite Score",
        tags: ["existence", "attributes", "relations"],
        venue: "arXiv 2023",
        score: "existence / attribute / relation",
        authors: ["Junyang Wang", "Yuhang Wang", "Guohai Xu"],
        correspondingAuthors: [],
        affiliations: ["Beijing Jiaotong University", "Alibaba Group"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2311.07397" },
          { label: "github", href: "https://github.com/junyangwang0410/AMBER" },
        ],
      },
      {
        name: "Uncertainty Estimation in Autoregressive Structured Prediction",
        note: "A general ensemble-based framework for token-level and sequence-level uncertainty estimation in autoregressive structured prediction.",
        type: "Calibration",
        tags: ["ensemble uncertainty", "token-level estimates", "sequence-level estimates"],
        venue: "ICLR 2021",
        score: "autoregressive uncertainty",
        authors: ["Andrey Malinin", "Mark Gales"],
        correspondingAuthors: [],
        affiliations: ["Yandex", "Higher School of Economics", "University of Cambridge"],
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2002.07650" }],
      },
    ] satisfies SubpageTableRow[],
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
        title: "Training-time",
        detail: "Visual instruction tuning and perception-grounded reinforcement learning.",
        count: "4 entries",
        accent: "pink",
        filters: ["Fine-tuning", "Perception-grounded RL"],
      },
      {
        title: "Activation Editing",
        detail: "Representation editing and sparse steering methods.",
        count: "2 entries",
        accent: "violet",
        filters: ["Activation Editing"],
      },
      {
        title: "Decoding-time",
        detail: "Sampling control, reranking, and constrained decoding approaches.",
        count: "1 entry",
        accent: "blue",
        filters: ["Decoding-time"],
      },
      {
        title: "Verification-based",
        detail: "Self-check and revise-after-draft methods.",
        count: "2 entries",
        accent: "green",
        filters: ["Verification-based"],
      },
      {
        title: "Tool-augmented",
        detail: "Search and externally grounded pipelines.",
        count: "1 entry",
        accent: "orange",
        filters: ["Tool-augmented"],
      },
      {
        title: "Uncertainty-aware",
        detail: "Entropy and confidence-aware decoding.",
        count: "1 entry",
        accent: "pink",
        filters: ["Uncertainty-aware"],
      },
    ] satisfies SubpageCategoryCard[],
    sectionTitle: "Method Categories",
    tableTitle: "Curated Methods",
    tableColumns: ["Method", "Type", "Modality", "Venue / First Post", "Focus", "Resources"],
    tableRows: [
      {
        name: "ViHallu",
        note: "Visual variations and visual instruction construction improve visual-semantic alignment for LVLM hallucination mitigation.",
        type: "Fine-tuning",
        tags: ["visual variations", "instruction tuning", "alignment"],
        venue: "ACM MM 2025",
        score: "visual alignment",
        authors: ["Ziyun Dai", "Xiaoqiang Li", "Shaohua Zhang"],
        correspondingAuthors: [],
        affiliations: ["Shanghai University", "Shanghai Business School"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2507.22003" },
          { label: "github", href: "https://github.com/oliviadzy/ViHallu" },
        ],
      },
      {
        name: "ToR",
        note: "Token reweighting jointly optimizes perception and reasoning tokens for multimodal RLVR.",
        type: "Perception-grounded RL",
        tags: ["RLVR", "token reweighting", "grounded reasoning"],
        venue: "arXiv 2026",
        score: "RLVR / grounding",
        authors: ["Jinda Lu", "Junkang Wu", "Jinghan Li"],
        correspondingAuthors: ["Jinda Lu"],
        affiliations: ["University of Science and Technology of China"],
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2603.25077" }],
      },
      {
        name: "PGPO",
        note: "Policy optimization with token-level visual dependency for grounded multimodal reasoning.",
        type: "Perception-grounded RL",
        tags: ["RLVR", "policy optimization", "visual dependency"],
        venue: "arXiv 2026",
        score: "RLVR / token credit",
        authors: ["Zekai Ye", "Qiming Li", "Xiaocheng Feng"],
        correspondingAuthors: [],
        affiliations: ["Harbin Institute of Technology", "Peng Cheng Laboratory"],
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2604.01840" }],
      },
      {
        name: "VEPO",
        note: "Vision-anchored token selection combines visual sensitivity with entropy during RL.",
        type: "Perception-grounded RL",
        tags: ["RLVR", "token selection", "visual reasoning"],
        venue: "arXiv 2026",
        score: "RLVR / visual reasoning",
        authors: ["Senjie Jin", "Peixin Wang", "Boyang Liu"],
        correspondingAuthors: ["Tao Gui"],
        affiliations: ["Fudan University"],
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2606.03937" }],
      },
      {
        name: "AOD",
        note: "Adversarial orthogonal disentanglement with training-free contrastive decoding for LVLM hallucination mitigation.",
        type: "Activation Editing",
        tags: ["contrastive decoding", "disentanglement", "training-free"],
        venue: "arXiv 2026",
        score: "contrastive decoding",
        authors: ["Ruoxi Cheng", "Haoxuan Ma", "Zhengfei Hai"],
        correspondingAuthors: ["Xingjun Ma"],
        affiliations: ["Fudan University / Tencent", "Nanjing University", "Southeast University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2605.25377" },
          { label: "github", href: "https://github.com/Hunter-Wrynn/AOD" },
        ],
      },
      {
        name: "Search-G1",
        note: "Grounded search agents via representation-based intrinsic rewards.",
        type: "Tool-augmented",
        tags: ["search agents", "intrinsic rewards", "grounding"],
        venue: "arXiv pending",
        score: "awaiting release",
        metadataNote: "Author and affiliation metadata pending a public paper record.",
        resources: ["arXiv pending"],
      },
      {
        name: "HIRE",
        note: "Intermediate representation editing for hallucination mitigation.",
        type: "Activation Editing",
        tags: ["representation editing", "activation steering", "LVLM"],
        venue: "arXiv 2026",
        score: "representation editing",
        authors: ["Wei Suo", "Hanzu Zhang", "Lijun Zhang"],
        correspondingAuthors: ["Peng Wang"],
        affiliations: ["Northwestern Polytechnical University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.29405" },
          { label: "github", href: "https://github.com/ASGO-MM/HIRE" },
        ],
      },
      {
        name: "NoLan",
        note: "Suppress language priors dynamically during generation.",
        type: "Decoding-time",
        tags: ["language priors", "dynamic suppression", "object hallucination"],
        venue: "arXiv 2026",
        score: "language-prior suppression",
        authors: ["Lingfeng Ren", "Weihao Yu", "Runpeng Yu"],
        correspondingAuthors: ["Weihao Yu", "Xinchao Wang"],
        affiliations: ["National University of Singapore", "Peking University Shenzhen Graduate School"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2602.22144" },
          { label: "github", href: "https://github.com/lingfengren/NoLan" },
        ],
      },
      {
        name: "MCoT",
        note: "Mitigate reasoning-time hallucinations in multimodal CoT.",
        type: "Verification-based",
        tags: ["multimodal CoT", "reasoning", "mitigation"],
        venue: "CVPR 2026",
        score: "multimodal CoT",
        authors: ["Ji Ma", "Wei Suo", "Peng Wang"],
        correspondingAuthors: ["Wei Suo"],
        affiliations: ["Northwestern Polytechnical University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.27201" },
          { label: "github", href: "https://github.com/ASGO-MM/MCoT-hallucination" },
        ],
      },
      {
        name: "R-CoV",
        note: "Region-aware chain-of-verification for LVLM hallucination.",
        type: "Verification-based",
        tags: ["region-aware", "chain-of-verification", "object hallucination"],
        venue: "arXiv 2026",
        score: "region verification",
        authors: ["Jiahao Xie", "Alessio Tonioni", "Nathalie Rauschmayr"],
        correspondingAuthors: [],
        affiliations: ["Max Planck Institute for Informatics / VIA Research Center", "Google"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2604.20696" },
          { label: "github", href: "https://github.com/Jiahao000/R-CoV" },
        ],
      },
      {
        name: "LEAD",
        note: "Latent entropy-aware decoding for multimodal reasoning models.",
        type: "Uncertainty-aware",
        tags: ["latent entropy", "decoding", "multimodal reasoning"],
        venue: "arXiv 2026",
        score: "entropy-aware decoding",
        authors: ["Zhongxing Xu", "Zhonghua Wang", "Zhe Qian"],
        correspondingAuthors: [],
        affiliations: ["Monash University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.13366" },
          { label: "github", href: "https://github.com/mlrm-LEAD/mlrm-LEAD" },
        ],
      },
      {
        name: "Analyzing and Mitigating Object Hallucination in Large Vision-Language Models",
        note: "LURE rectifies object hallucinations by revising LVLM descriptions using co-occurrence, uncertainty, and object-position signals.",
        type: "Fine-tuning",
        tags: ["post-hoc revision", "object uncertainty", "co-occurrence"],
        venue: "ICLR 2024",
        score: "hallucination revision",
        authors: ["Yiyang Zhou", "Chenhang Cui", "Jaehong Yoon"],
        correspondingAuthors: [],
        affiliations: ["University of North Carolina at Chapel Hill"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2310.00754" },
          { label: "github", href: "https://github.com/YiyangZhou/LURE" },
        ],
      },
      {
        name: "Interpreting and Editing Vision-Language Representations to Mitigate Hallucinations",
        note: "A representation-editing approach that removes hallucinated object features from VLM image representations.",
        type: "Activation Editing",
        tags: ["representation editing", "knowledge erasure", "object hallucination"],
        venue: "ICLR 2025",
        score: "latent representation editing",
        authors: ["Nick Jiang", "Anish Kachinthaya", "Suzie Petryk"],
        correspondingAuthors: [],
        affiliations: ["University of California, Berkeley"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2410.02762" },
          { label: "github", href: "https://github.com/nickjiang2378/vl-interp" },
        ],
      },
      {
        name: "Devils in Middle Layers of Large Vision-Language Models: Interpreting, Detecting and Mitigating Object Hallucinations via Attention Lens",
        note: "An attention-lens analysis identifies middle-layer signals for object hallucination detection and visual-attention adjustment.",
        type: "Decoding-time",
        tags: ["attention lens", "middle layers", "object hallucination"],
        venue: "CVPR 2025",
        score: "attention-based signals",
        authors: ["Zhangqi Jiang", "Junkai Chen", "Beier Zhu"],
        correspondingAuthors: ["Tingjin Luo", "Xu Yang"],
        affiliations: [
          "National University of Defense Technology",
          "Southeast University",
          "Nanyang Technological University",
        ],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2411.16724" },
          { label: "github", href: "https://github.com/ZhangqiJiang07/middle_layers_indicating_hallucinations" },
        ],
      },
    ] satisfies SubpageTableRow[],
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
    tableTitle: "Curated Papers",
    tableColumns: ["Paper", "Topic", "Modality", "Venue / First Post", "Focus", "Resources"],
    tableRows: [
      {
        name: "See Different, Think Better: Visual Variations Mitigating Hallucinations in LVLMs",
        note: "ViHallu uses visual variations and visual instruction construction for visual-semantic alignment.",
        type: "Mitigation",
        tags: ["visual variations", "instruction tuning", "alignment"],
        venue: "ACM MM 2025",
        score: "visual alignment",
        authors: ["Ziyun Dai", "Xiaoqiang Li", "Shaohua Zhang"],
        correspondingAuthors: [],
        affiliations: ["Shanghai University", "Shanghai Business School"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2507.22003" },
          { label: "github", href: "https://github.com/oliviadzy/ViHallu" },
        ],
      },
      {
        name: "Bridging Perception and Reasoning: Token Reweighting for RLVR in Multimodal LLMs",
        note: "ToR reweights coupled perception and reasoning tokens during multimodal RLVR.",
        type: "Mitigation",
        tags: ["RLVR", "token reweighting", "grounded reasoning"],
        venue: "arXiv 2026",
        score: "RLVR / grounding",
        authors: ["Jinda Lu", "Junkang Wu", "Jinghan Li"],
        correspondingAuthors: ["Jinda Lu"],
        affiliations: ["University of Science and Technology of China"],
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2603.25077" }],
      },
      {
        name: "Not All Tokens See Equally: Perception-Grounded Policy Optimization for Large Vision-Language Models",
        note: "PGPO amplifies learning signals for visually dependent tokens.",
        type: "Mitigation",
        tags: ["RLVR", "policy optimization", "visual dependency"],
        venue: "arXiv 2026",
        score: "RLVR / token credit",
        authors: ["Zekai Ye", "Qiming Li", "Xiaocheng Feng"],
        correspondingAuthors: [],
        affiliations: ["Harbin Institute of Technology", "Peng Cheng Laboratory"],
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2604.01840" }],
      },
      {
        name: "Entropy Is Not Enough: Unlocking Effective Reinforcement Learning for Visual Reasoning via Vision-Anchored Token Selection",
        note: "VEPO combines visual sensitivity and token entropy for visual reasoning RL.",
        type: "Mitigation",
        tags: ["RLVR", "token selection", "visual reasoning"],
        venue: "arXiv 2026",
        score: "RLVR / visual reasoning",
        authors: ["Senjie Jin", "Peixin Wang", "Boyang Liu"],
        correspondingAuthors: ["Tao Gui"],
        affiliations: ["Fudan University"],
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2606.03937" }],
      },
      {
        name: "Adversarial Orthogonal Disentanglement for LVLM Hallucination Mitigation",
        note: "AOD disentangles hallucination directions for training-free contrastive decoding in LVLMs.",
        type: "Mitigation",
        tags: ["contrastive decoding", "disentanglement", "training-free"],
        venue: "arXiv 2026",
        score: "LVLM / decoding",
        authors: ["Ruoxi Cheng", "Haoxuan Ma", "Zhengfei Hai"],
        correspondingAuthors: ["Xingjun Ma"],
        affiliations: ["Fudan University / Tencent", "Nanjing University", "Southeast University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2605.25377" },
          { label: "github", href: "https://github.com/Hunter-Wrynn/AOD" },
        ],
      },
      {
        name: "Search-G1: Grounded Search Agents via Representation-Based Intrinsic Rewards",
        note: "Grounded search agents; public arXiv record is pending.",
        type: "Mitigation",
        tags: ["search agents", "intrinsic rewards", "grounding"],
        venue: "arXiv pending",
        score: "agents / grounding",
        metadataNote: "Author and affiliation metadata pending a public paper record.",
        resources: ["arXiv pending"],
      },
      {
        name: "Hallucination-aware intermediate representation edit in large vision-language models",
        note: "Intermediate representation editing for LVLM hallucination mitigation.",
        type: "Mitigation",
        tags: ["representation editing", "activation steering", "LVLM"],
        venue: "arXiv 2026",
        score: "VLM / editing",
        authors: ["Wei Suo", "Hanzu Zhang", "Lijun Zhang"],
        correspondingAuthors: ["Peng Wang"],
        affiliations: ["Northwestern Polytechnical University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.29405" },
          { label: "github", href: "https://github.com/ASGO-MM/HIRE" },
        ],
      },
      {
        name: "NoLan: Mitigating Object Hallucinations in Large Vision-Language Models via Dynamic Suppression of Language Priors",
        note: "Dynamic suppression of language priors during decoding.",
        type: "Mitigation",
        tags: ["language priors", "dynamic suppression", "object hallucination"],
        venue: "arXiv 2026",
        score: "decoding / object",
        authors: ["Lingfeng Ren", "Weihao Yu", "Runpeng Yu"],
        correspondingAuthors: ["Weihao Yu", "Xinchao Wang"],
        affiliations: ["National University of Singapore", "Peking University Shenzhen Graduate School"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2602.22144" },
          { label: "github", href: "https://github.com/lingfengren/NoLan" },
        ],
      },
      {
        name: "Understanding and Mitigating Hallucinations in Multimodal Chain-of-Thought Models",
        note: "Hallucination analysis and mitigation for multimodal CoT.",
        type: "Mitigation",
        tags: ["multimodal CoT", "reasoning", "mitigation"],
        venue: "CVPR 2026",
        score: "reasoning / CoT",
        authors: ["Ji Ma", "Wei Suo", "Peng Wang"],
        correspondingAuthors: ["Wei Suo"],
        affiliations: ["Northwestern Polytechnical University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.27201" },
          { label: "github", href: "https://github.com/ASGO-MM/MCoT-hallucination" },
        ],
      },
      {
        name: "R-CoV: Region-Aware Chain-of-Verification for Alleviating Object Hallucinations in LVLMs",
        note: "Region-aware verification loops for object hallucinations.",
        type: "Verification",
        tags: ["region-aware", "chain-of-verification", "object hallucination"],
        venue: "arXiv 2026",
        score: "verification / region",
        authors: ["Jiahao Xie", "Alessio Tonioni", "Nathalie Rauschmayr"],
        correspondingAuthors: [],
        affiliations: ["Max Planck Institute for Informatics / VIA Research Center", "Google"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2604.20696" },
          { label: "github", href: "https://github.com/Jiahao000/R-CoV" },
        ],
      },
      {
        name: "Thinking in Uncertainty: Mitigating Hallucinations in MLRMs with Latent Entropy-Aware Decoding",
        note: "Entropy-aware decoding for multimodal reasoning models.",
        type: "Uncertainty",
        tags: ["latent entropy", "decoding", "multimodal reasoning"],
        venue: "arXiv 2026",
        score: "uncertainty / decoding",
        authors: ["Zhongxing Xu", "Zhonghua Wang", "Zhe Qian"],
        correspondingAuthors: [],
        affiliations: ["Monash University"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2603.13366" },
          { label: "github", href: "https://github.com/mlrm-LEAD/mlrm-LEAD" },
        ],
      },
      {
        name: "GLSim: Detecting Object Hallucinations in LVLMs via Global-Local Similarity",
        note: "A training-free detector that combines global scene similarity with local visual grounding for object hallucination detection.",
        type: "Detection",
        tags: ["global-local similarity", "Visual Logit Lens", "object grounding"],
        venue: "NeurIPS 2025",
        score: "global-local grounding",
        authors: ["Seongheon Park", "Sharon Li"],
        correspondingAuthors: [],
        affiliations: ["University of Wisconsin–Madison"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2508.19972" },
          { label: "github", href: "https://github.com/deeplearning-wisc/glsim" },
        ],
      },
      {
        name: "Instruction Lens Score: Your Instruction Contributes a Powerful Object Hallucination Detector for Multimodal Large Language Models",
        note: "A training-free object hallucination detector that uses calibrated local and instruction-context consistency scores.",
        type: "Detection",
        tags: ["instruction embeddings", "Logit Lens", "object hallucination"],
        venue: "ICML 2026",
        score: "instruction-token scoring",
        authors: ["Runhe Lai", "Xinhua Lu", "Yanqi Wu"],
        correspondingAuthors: ["Weijiang Yu", "Ruixuan Wang"],
        affiliations: [
          "Sun Yat-sen University",
          "Peng Cheng Laboratory",
          "Key Laboratory of Machine Intelligence and Advanced Computing, MOE",
        ],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2605.12258" },
          { label: "github", href: "https://github.com/Fraserlairh/Instruction-Lens-Score" },
        ],
      },
      {
        name: "Analyzing and Mitigating Object Hallucination in Large Vision-Language Models",
        note: "LURE rectifies object hallucinations by revising LVLM descriptions using co-occurrence, uncertainty, and object-position signals.",
        type: "Mitigation",
        tags: ["post-hoc revision", "object uncertainty", "co-occurrence"],
        venue: "ICLR 2024",
        score: "hallucination revision",
        authors: ["Yiyang Zhou", "Chenhang Cui", "Jaehong Yoon"],
        correspondingAuthors: [],
        affiliations: ["University of North Carolina at Chapel Hill"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2310.00754" },
          { label: "github", href: "https://github.com/YiyangZhou/LURE" },
        ],
      },
      {
        name: "Uncertainty Estimation in Autoregressive Structured Prediction",
        note: "A general ensemble-based framework for token-level and sequence-level uncertainty estimation in autoregressive structured prediction.",
        type: "Quantification",
        tags: ["ensemble uncertainty", "token-level estimates", "sequence-level estimates"],
        venue: "ICLR 2021",
        score: "autoregressive uncertainty",
        authors: ["Andrey Malinin", "Mark Gales"],
        correspondingAuthors: [],
        affiliations: ["Yandex", "Higher School of Economics", "University of Cambridge"],
        resources: [{ label: "paper", href: "https://arxiv.org/abs/2002.07650" }],
      },
      {
        name: "Interpreting and Editing Vision-Language Representations to Mitigate Hallucinations",
        note: "A representation-editing approach that removes hallucinated object features from VLM image representations.",
        type: "Mitigation",
        tags: ["representation editing", "knowledge erasure", "object hallucination"],
        venue: "ICLR 2025",
        score: "latent representation editing",
        authors: ["Nick Jiang", "Anish Kachinthaya", "Suzie Petryk"],
        correspondingAuthors: [],
        affiliations: ["University of California, Berkeley"],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2410.02762" },
          { label: "github", href: "https://github.com/nickjiang2378/vl-interp" },
        ],
      },
      {
        name: "Devils in Middle Layers of Large Vision-Language Models: Interpreting, Detecting and Mitigating Object Hallucinations via Attention Lens",
        note: "An attention-lens analysis identifies middle-layer signals for object hallucination detection and visual-attention adjustment.",
        type: "Detection",
        tags: ["attention lens", "middle layers", "object hallucination"],
        venue: "CVPR 2025",
        score: "attention-based signals",
        authors: ["Zhangqi Jiang", "Junkai Chen", "Beier Zhu"],
        correspondingAuthors: ["Tingjin Luo", "Xu Yang"],
        affiliations: [
          "National University of Defense Technology",
          "Southeast University",
          "Nanyang Technological University",
        ],
        resources: [
          { label: "paper", href: "https://arxiv.org/abs/2411.16724" },
          { label: "github", href: "https://github.com/ZhangqiJiang07/middle_layers_indicating_hallucinations" },
        ],
      },
    ] satisfies SubpageTableRow[],
    aboutTitle: "About This Collection",
    aboutBody:
      "Paper metadata, repo links, and topic tags for easier scanning and handoff.",
    citeLabel: "Cite This Collection",
  },
} as const;
