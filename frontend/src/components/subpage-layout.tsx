"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  arxivReleaseDates,
  SubpageCategoryCard,
  SubpageTableRow,
} from "@/data/site";

type SubpageLayoutProps = {
  breadcrumb: readonly string[];
  title: string;
  description: string;
  overview: string;
  heroIcon: string;
  badge: string;
  followLabel: string;
  categories: readonly SubpageCategoryCard[];
  tableTitle: string;
  tableColumns: readonly string[];
  tableRows: readonly SubpageTableRow[];
  sectionTitle?: string;
};

function accentPill(accent: string) {
  const accents = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    green: "bg-emerald-50 text-emerald-700 border-emerald-100",
    violet: "bg-violet-50 text-violet-700 border-violet-100",
    orange: "bg-orange-50 text-orange-700 border-orange-100",
    pink: "bg-pink-50 text-pink-700 border-pink-100",
  } as const;

  return accents[accent as keyof typeof accents] ?? accents.blue;
}

function getReleaseDate(resources: SubpageTableRow["resources"]) {
  const paper = resources.find(
    (resource) => typeof resource !== "string" && resource.href.includes("arxiv.org/abs/"),
  );
  const match = typeof paper === "string" ? undefined : paper?.href.match(/abs\/(\d{4}\.\d{5})/);

  return match ? arxivReleaseDates[match[1]] : undefined;
}

export function SubpageLayout(props: SubpageLayoutProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const normalizedQuery = query.trim().toLowerCase();
  const categoryStats = useMemo(
    () =>
      props.categories
        .map((category) => {
          const filters = category.filters ?? [category.title];
          const rows = props.tableRows.filter((row) => filters.includes(row.type));

          return { category, count: rows.length };
        })
        .filter(({ count }) => count > 0),
    [props.categories, props.tableRows],
  );
  const linkedResourceCount = useMemo(
    () =>
      props.tableRows.flatMap((row) => row.resources).filter((resource) => typeof resource !== "string")
        .length,
    [props.tableRows],
  );
  const datedPaperCount = useMemo(
    () => props.tableRows.filter((row) => getReleaseDate(row.resources)).length,
    [props.tableRows],
  );
  const visibleRows = useMemo(() => {
    const category = categoryStats.find(({ category }) => category.title === activeCategory)?.category;
    const filters = category?.filters ?? (category ? [category.title] : undefined);
    const categoryRows = filters
      ? props.tableRows.filter((row) => filters.includes(row.type))
      : props.tableRows;

    return categoryRows.filter((row) =>
      !normalizedQuery ||
      [row.name, row.note, row.type, row.venue, row.score]
        .concat(row.tags ?? [])
        .concat(row.authors ?? [], row.correspondingAuthors ?? [], row.affiliations ?? [])
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [activeCategory, categoryStats, normalizedQuery, props.tableRows]);

  return (
    <div className="mx-auto max-w-[1480px] space-y-7">
      <div className="subpage-breadcrumb">
        {props.breadcrumb.map((item, index) => (
          <span key={item} className="flex items-center gap-2">
            {index > 0 ? <span className="text-[#c0c5d1]">›</span> : null}
            <span>{item}</span>
          </span>
        ))}
      </div>

      <section className="subpage-hero-card">
        <div className="grid gap-7 xl:grid-cols-[190px_minmax(0,1fr)_0.72fr] xl:items-start">
          <div className="subpage-icon-panel">
            <div className="subpage-icon-orb">{props.heroIcon}</div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[#0f172a]">
                {props.title}
              </h1>
            </div>
            <p className="max-w-3xl text-[1rem] leading-8 text-[#556072]">
              {props.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Curated entries", value: String(props.tableRows.length) },
                { label: "Categories", value: String(categoryStats.length) },
                { label: "Verified links", value: String(linkedResourceCount) },
                { label: "Dated papers", value: String(datedPaperCount) },
              ].map((stat) => (
                <div key={stat.label} className="subpage-stat-pill">
                  <span className="font-semibold text-[#4338ca]">{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.98rem] leading-8 text-[#556072]">{props.overview}</p>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eceff5] pb-4">
        <p className="text-sm text-[#667085]">
          {normalizedQuery || activeCategory
            ? `${visibleRows.length} matching ${visibleRows.length === 1 ? "entry" : "entries"}`
            : `${props.tableRows.length} curated entries`}
        </p>
        <div className="subpage-search-box">
          <span>⌕</span>
          <input
            aria-label={`Search ${props.title}`}
            className="subpage-search-input"
            onChange={(event) => setQuery(event.target.value)}
            placeholder={`Search ${props.title.toLowerCase()}...`}
            type="search"
            value={query}
          />
        </div>
      </div>

      <section className="space-y-8">
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-[1.7rem] font-semibold tracking-[-0.05em] text-[#111827]">
                {props.sectionTitle ?? "Method Categories"}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {categoryStats.map(({ category, count }) => (
                <button
                  key={category.title}
                  aria-pressed={activeCategory === category.title}
                  className={`subpage-category-card ${activeCategory === category.title ? "subpage-category-card-active" : ""}`}
                  onClick={() =>
                    setActiveCategory((current) => (current === category.title ? null : category.title))
                  }
                  type="button"
                >
                  <div className="flex items-start gap-3">
                    <div className={`subpage-category-icon ${accentPill(category.accent)}`}>
                      ✦
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[1rem] font-semibold tracking-[-0.03em] text-[#111827]">
                        {category.title}
                      </h3>
                      <p className="text-sm leading-6 text-[#667085]">
                        {category.detail}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium text-[#475467]">
                    {count} {count === 1 ? "entry" : "entries"}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="subpage-main-table-card">
            <div className="mb-5">
              <h2 className="text-[1.7rem] font-semibold tracking-[-0.05em] text-[#111827]">
                {props.tableTitle}
              </h2>
            </div>

            <div className="hidden grid-cols-[1.9fr_0.9fr_0.7fr_0.9fr_1fr_0.8fr] gap-4 border-b border-[#edf0f5] px-4 pb-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#98a2b3] lg:grid">
              {props.tableColumns.map((column) => (
                <div key={column}>{column}</div>
              ))}
            </div>

            <div className="mt-3 space-y-2.5">
              {visibleRows.map((row, index) => (
                <div key={row.name} className="subpage-table-row">
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-[1rem] font-semibold text-[#4f46e5]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[1rem] font-semibold leading-7 text-[#111827]">
                          {row.name}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#667085]">{row.note}</p>
                        {row.tags?.length ? (
                          <div className="subpage-row-tags" aria-label="Method tags">
                            {row.tags.map((tag) => (
                              <span key={tag} className="subpage-row-tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="subpage-table-pill">{row.type}</div>
                  <div className="text-sm text-[#667085]">vision-language</div>
                  <div className="text-sm text-[#475467]">
                    <p>{row.venue}</p>
                    {getReleaseDate(row.resources) ? (
                      <p className="mt-1 text-xs text-[#98a2b3]">
                        First posted {getReleaseDate(row.resources)}
                      </p>
                    ) : null}
                  </div>
                  <div className="text-sm font-medium text-[#111827]">{row.score}</div>
                  <div className="flex gap-2">
                    {row.resources.map((resource) =>
                      typeof resource === "string" ? (
                        resource === "arXiv pending" ? (
                          <span key={resource} className="subpage-resource-pill">
                            {resource}
                          </span>
                        ) : null
                      ) : (
                        <Link
                          key={resource.href}
                          className="subpage-resource-pill transition hover:border-[#c7d2fe] hover:text-[#4338ca]"
                          href={resource.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {resource.label}
                        </Link>
                      ),
                    )}
                  </div>
                  {row.authors?.length ? (
                    <div className="subpage-paper-meta">
                      <span>
                        <strong>Authors:</strong> {row.authors.join(", ")}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>
                        <strong>Corresponding:</strong>{" "}
                        {row.correspondingAuthors?.length
                          ? row.correspondingAuthors.join(", ")
                          : "not specified"}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>
                        <strong>Affiliation:</strong> {row.affiliations?.join("; ")}
                      </span>
                    </div>
                  ) : row.metadataNote ? (
                    <div className="subpage-paper-meta subpage-paper-meta-pending">
                      {row.metadataNote}
                    </div>
                  ) : null}
                </div>
              ))}
              {visibleRows.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-[#667085]">
                  No entries match “{query.trim()}”.
                </p>
              ) : null}
            </div>
          </div>
      </section>
    </div>
  );
}
