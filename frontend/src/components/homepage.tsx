import Link from "next/link";
import {
  homeCategoryCards,
  modules,
  SubpageCategoryCard,
  subpageConfigs,
} from "@/data/site";

const homepageCollections = [
  { card: homeCategoryCards[0], config: subpageConfigs.papers },
  { card: homeCategoryCards[1], config: subpageConfigs.datasetBench },
  { card: homeCategoryCards[2], config: subpageConfigs.detection },
  { card: homeCategoryCards[3], config: subpageConfigs.quantification },
  { card: homeCategoryCards[4], config: subpageConfigs.mitigation },
];

function countVerifiedLinks(
  tableRows: readonly { resources: readonly (string | { label: string; href: string })[] }[],
) {
  return tableRows.reduce(
    (total, row) => total + row.resources.filter((resource) => typeof resource !== "string").length,
    0,
  );
}

function countVisibleCategories(config: {
  categories: readonly SubpageCategoryCard[];
  tableRows: readonly { type: string }[];
}) {
  return config.categories.filter((category) => {
    const filters = category.filters ?? [category.title];
    return config.tableRows.some((row) => filters.includes(row.type));
  }).length;
}

const curatedEntryCount = homepageCollections.reduce(
  (total, { config }) => total + config.tableRows.length,
  0,
);
const verifiedLinkCount = homepageCollections.reduce(
  (total, { config }) => total + countVerifiedLinks(config.tableRows),
  0,
);
const categoryCount = homepageCollections.reduce(
  (total, { config }) => total + countVisibleCategories(config),
  0,
);

function accentClasses(accent: string) {
  const accents = {
    blue: "from-blue-50 to-indigo-50 text-blue-700 border-blue-100",
    green: "from-emerald-50 to-green-50 text-emerald-700 border-emerald-100",
    violet: "from-violet-50 to-fuchsia-50 text-violet-700 border-violet-100",
    orange: "from-orange-50 to-amber-50 text-orange-700 border-orange-100",
    pink: "from-pink-50 to-rose-50 text-pink-700 border-pink-100",
  } as const;

  return accents[accent as keyof typeof accents] ?? accents.blue;
}

export function HomeHero() {
  return (
    <section className="home-hero-shell mx-auto max-w-[1380px]">
      <div className="grid gap-10 xl:grid-cols-[0.98fr_1.02fr] xl:items-center">
        <div className="space-y-7">
          <div className="space-y-5">
            <p className="home-kicker">OpenHallu resource library</p>
            <h1 className="max-w-[12ch] text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.065em] text-[#0f172a] sm:text-[3.45rem] xl:text-[4rem]">
              OpenHallu:
              <br />
              <span className="bg-[linear-gradient(135deg,#3468ff,#7b61ff)] bg-clip-text text-transparent">
                Multimodal Hallucination
              </span>
              <br />
              Research
            </h1>
            <p className="max-w-[34rem] text-[1rem] leading-8 text-[#5a6478]">
              Papers, datasets, benchmarks, detection, quantification, and
              mitigation.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/papers" className="site-cta">
              Explore resources
            </Link>
            <Link href="/dataset-bench" className="home-secondary-cta">
              Browse datasets
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="home-mini-card">
              <p className="home-mini-label">Curated entries</p>
              <p className="home-mini-value">{curatedEntryCount}</p>
            </div>
            <div className="home-mini-card">
              <p className="home-mini-label">Collection pages</p>
              <p className="home-mini-value">{homepageCollections.length}</p>
            </div>
            <div className="home-mini-card">
              <p className="home-mini-label">Verified links</p>
              <p className="home-mini-value">{verifiedLinkCount}</p>
            </div>
          </div>
        </div>

        <div className="home-network-card">
          <div className="home-network-grid" />
          <div aria-hidden="true" className="home-network-spokes">
            <span className="home-network-spoke home-network-spoke-one" />
            <span className="home-network-spoke home-network-spoke-two" />
            <span className="home-network-spoke home-network-spoke-three" />
            <span className="home-network-spoke home-network-spoke-four" />
            <span className="home-network-spoke home-network-spoke-five" />
          </div>
          <div className="home-center-stage">
            <div className="home-center-hub">
              <span className="home-center-label">Research map</span>
              <strong>OpenHallu</strong>
              <span>{curatedEntryCount} curated entries</span>
            </div>
          </div>

          {modules.map((module, index) => {
            const collection = homepageCollections.find(({ card }) => card.href === module.href);
            const placements = [
              "left-[5%] top-[8%]",
              "right-[5%] top-[8%]",
              "left-[6%] top-[65%]",
              "right-[5%] top-[65%]",
              "left-[36%] top-[3%]",
            ];

            return (
              <Link
                key={module.href}
                href={module.href}
                className={`home-floating-node ${placements[index] ?? ""}`}
              >
                <div className="home-floating-icon">
                  {collection?.card.icon ?? "•"}
                </div>
                <div className="space-y-1">
                  <p className="text-[0.98rem] font-semibold tracking-[-0.03em] text-[#111827]">
                    {module.name}
                  </p>
                  <p className="text-[0.88rem] leading-6 text-[#667085]">
                    {collection?.config.tableRows.length ?? 0} curated entries
                  </p>
                </div>
                <span aria-hidden="true" className="home-floating-arrow">→</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeCategorySection() {
  return (
    <section className="mx-auto mt-16 max-w-[1380px] space-y-7">
      <div className="flex items-center gap-3">
        <div className="home-section-icon">✦</div>
        <h2 className="text-[1.9rem] font-semibold tracking-[-0.05em] text-[#101828]">
          Browse by category
        </h2>
      </div>
      <div className="grid gap-4 xl:grid-cols-5">
        {homepageCollections.map(({ card, config }) => (
          <Link
            key={card.href}
            href={card.href}
            className={`home-category-card bg-gradient-to-br ${accentClasses(card.accent)}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="home-category-icon">{card.icon}</div>
              <span className="text-xl">→</span>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-[1.1rem] font-semibold tracking-[-0.03em] text-[#101828]">
                {card.title}
              </h3>
              <p className="text-sm leading-6 text-[#667085]">
                {card.description}
              </p>
            </div>
            <div className="mt-4 inline-flex rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[0.8rem] font-medium">
              {config.tableRows.length} {config.tableRows.length === 1 ? "entry" : "entries"}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomeInsightSection() {
  return (
    <section className="mx-auto mt-8 grid max-w-[1380px] gap-5 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="home-info-panel p-7">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h3 className="text-[1.65rem] font-semibold tracking-[-0.05em] text-[#101828]">
            Browse collections
          </h3>
        </div>
        <div className="space-y-4">
          {homepageCollections.map(({ card, config }) => (
            <Link key={card.href} href={card.href} className="home-trend-row block transition hover:text-[#4338ca]">
              <div className="min-w-0 flex-1">
                <p className="text-[0.98rem] font-medium leading-7 text-[#111827]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-[#667085]">{card.description}</p>
              </div>
              <span className="mt-3 inline-flex text-sm font-medium text-[#5260ff]">
                {config.tableRows.length} {config.tableRows.length === 1 ? "entry" : "entries"} →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="home-info-panel p-7">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h3 className="text-[1.65rem] font-semibold tracking-[-0.05em] text-[#101828]">
            Collection snapshot
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { label: "Curated entries", value: curatedEntryCount, accent: "blue" },
            { label: "Collection pages", value: homepageCollections.length, accent: "green" },
            { label: "Visible categories", value: categoryCount, accent: "violet" },
            { label: "Verified links", value: verifiedLinkCount, accent: "orange" },
          ].map((card) => (
            <div
              key={card.label}
              className={`rounded-[24px] border bg-gradient-to-br p-5 ${accentClasses(card.accent)}`}
            >
              <p className="text-sm font-medium">{card.label}</p>
              <p className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-[#101828]">
                {card.value}
              </p>
              <p className="mt-2 text-sm text-[#667085]">Calculated from the entries shown here.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
