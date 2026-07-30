"use client";

import Link from "next/link";
import { useState } from "react";
import type { PaperCard } from "@/data/site";

export function HomePreviewCard({
  badge,
  title,
  body,
  href,
  tone = "sky",
}: {
  badge: string;
  title: string;
  body: string;
  href: string;
  tone?: "sky" | "sand" | "mint";
}) {
  const tones = {
    sky: {
      panel:
        "bg-[radial-gradient(circle_at_30%_20%,rgba(236,241,255,0.96),transparent_34%),linear-gradient(180deg,#f7f8fb,#eef2ff)]",
      stage:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(243,246,255,0.95))]",
    },
    sand: {
      panel:
        "bg-[radial-gradient(circle_at_30%_20%,rgba(255,244,214,0.92),transparent_34%),linear-gradient(180deg,#fcfaf5,#f7f0df)]",
      stage:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(250,243,223,0.95))]",
    },
    mint: {
      panel:
        "bg-[radial-gradient(circle_at_30%_20%,rgba(225,245,236,0.94),transparent_34%),linear-gradient(180deg,#f7faf8,#eaf6ef)]",
      stage:
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(236,247,240,0.95))]",
    },
  } as const;

  const theme = tones[tone];

  return (
    <Link
      href={href}
      className="community-card group block rounded-[28px] p-5 transition hover:translate-y-[-2px]"
    >
      <div className={`rounded-[22px] border border-black/8 p-4 ${theme.panel}`}>
        <div
          className={`flex aspect-[1.4/1] items-center justify-center rounded-[18px] border border-white/70 ${theme.stage}`}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white text-3xl shadow-[0_14px_28px_rgba(15,23,42,0.06)]">
            {badge}
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-xl font-medium tracking-[-0.04em] text-[#111111]">
        {title}
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-7 text-[#6b6f76]">{body}</p>
      <div className="community-frame mt-5 rounded-[18px] px-4 py-3">
        <p className="text-[0.68rem] font-medium tracking-[0.08em] text-[#8a8f98]">
          Open tab
        </p>
        <p className="mt-1 text-sm font-medium text-[#111111]">{title} →</p>
      </div>
    </Link>
  );
}

export function ModuleStripCard({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-[26px] border border-black/8 bg-white px-6 py-5 transition hover:translate-y-[-2px] hover:shadow-[0_16px_48px_rgba(15,23,42,0.04)]"
    >
      <h3 className="text-[1.1rem] font-medium tracking-[-0.03em] text-[#111111]">
        {name}
      </h3>
      <p className="max-w-sm text-sm leading-7 text-[#6b6f76]">{description}</p>
      <span className="text-sm font-medium text-[#111111]">Open →</span>
    </Link>
  );
}

export function PaperListItem({ paper }: { paper: PaperCard }) {
  const [liked, setLiked] = useState(false);
  const paperTags = [
    paper.category,
    paper.venue ?? `${paper.source} ${paper.year}`,
    paper.tags[0],
  ].filter(Boolean);
  const visitUrl = paper.paperUrl ? getVisitUrl(paper.paperUrl) : undefined;

  return (
    <article className="hf-list-card px-4 py-3.5">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="min-w-0">
          <h3 className="text-[1rem] font-medium leading-[1.4] tracking-[-0.02em] text-[#111111]">
            {paper.title}
          </h3>
        </div>
        <div className="flex shrink-0 flex-wrap justify-start gap-2 sm:justify-end">
          {paper.paperUrl ? (
            <Link href={paper.paperUrl} className="hf-link-rect">
              paper
            </Link>
          ) : (
            <span className="hf-link-rect cursor-default opacity-60">arXiv pending</span>
          )}
          {paper.repoUrl ? (
            <Link href={paper.repoUrl} className="hf-link-rect">
              github
            </Link>
          ) : null}
          {visitUrl ? (
            <Link href={visitUrl} className="hf-link-rect">
              visit
            </Link>
          ) : null}
          <button
            type="button"
            onClick={() => setLiked((current) => !current)}
            className={`hf-link-rect ${liked ? "hf-link-rect-active" : ""}`}
            aria-pressed={liked}
          >
            {liked ? "liked" : "like"}
          </button>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {paperTags.map((tag) => (
          <span key={tag} className="hf-chip">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function getVisitUrl(paperUrl: string) {
  if (paperUrl.includes("arxiv.org/abs/")) {
    return `${paperUrl.replace("/abs/", "/pdf/")}.pdf`;
  }

  return paperUrl;
}

export function SimpleCallout({
  title,
  body,
  items,
}: {
  title: string;
  body: string;
  items: string[];
}) {
  return (
    <div className="community-soft-card rounded-[30px] p-8">
      <p className="text-[0.72rem] font-medium tracking-[0.08em] text-[#8a8f98]">
        Community note
      </p>
      <h3 className="mt-4 max-w-lg text-3xl font-medium tracking-[-0.05em] text-[#111111]">
        {title}
      </h3>
      <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b6f76]">{body}</p>
      <ul className="mt-6 space-y-3 text-sm leading-7 text-[#111111]">
        {items.map((item) => (
          <li key={item} className="community-row">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
