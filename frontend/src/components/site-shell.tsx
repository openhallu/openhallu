"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { navItems } from "@/data/site";

export function SiteShell({
  children,
}: {
  children: ReactNode;
  sectionLabel?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#111111] focus:shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
      >
        Skip to content
      </a>

      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 pb-20 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-40 border-b border-[#e9edf3] bg-white/88 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1480px] flex-wrap items-center gap-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="brand-mark" />
              <div>
                <h1 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-[#111111]">
                  OpenHallu
                </h1>
                <p className="text-sm text-[#667085]">
                  Multimodal Hallucination Hub
                </p>
              </div>
            </Link>

            <nav
              aria-label="Primary"
              className="order-3 flex w-full gap-5 overflow-x-auto pb-1 lg:order-none lg:w-auto lg:flex-1 lg:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href ?? "/"}
                    aria-current={isActive ? "page" : undefined}
                    className={`top-tab ${isActive ? "top-tab-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

          </div>
        </header>

        <main id="main" className="flex-1 pt-8 sm:pt-10">{children}</main>
      </div>
    </div>
  );
}
