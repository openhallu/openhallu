import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section className="page-section mx-auto max-w-[1100px] py-10 sm:py-16">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-[0.72rem] font-medium tracking-[0.08em] text-[#8a8f98]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-medium leading-[1.16] tracking-[-0.04em] text-[#111111] sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b6f76] sm:text-[0.98rem]">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
