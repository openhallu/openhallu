import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function HeroResearchVisual() {
  return (
    <div className="relative min-h-[420px] overflow-visible rounded-[34px] xl:min-h-[540px]">
      <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_84%_78%,rgba(221,214,123,0.14),transparent_24%)]" />
      <div className="relative flex min-h-[420px] items-end justify-end xl:min-h-[540px]">
        <div className="relative h-[360px] w-full xl:h-[520px]">
          <Image
            src={`${basePath}/hero/homepage.png`}
            alt="Paper-cut illustration of a human profile and mechanical eye on transparent background"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-contain object-right-bottom drop-shadow-[0_24px_34px_rgba(35,26,10,0.28)]"
          />
        </div>
      </div>

      <div className="absolute left-4 top-4 max-w-[18rem] rotate-[-3deg] sm:left-6 sm:top-6 xl:max-w-[20rem]">
        <div className="rounded-[24px] border border-white/28 bg-white/16 px-5 py-5 text-[#f7edd8] shadow-[0_18px_36px_rgba(20,18,10,0.22)] backdrop-blur-[14px]">
          <p className="font-serif-display text-[1rem] leading-7 italic sm:text-[1.1rem] xl:text-[1.2rem] xl:leading-8">
            “Whatever I have accepted until now as most true has come to me
            through my senses. But occasionally I have found that they have
            deceived me, and it is unwise to trust completely those who have
            deceived us even once.”
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8d8b1] sm:text-[0.78rem]">
            René Descartes
          </p>
        </div>
      </div>
    </div>
  );
}

export function MitigationMapVisual() {
  return (
    <div className="paper-panel relative overflow-hidden rounded-[36px] p-4">
      <div className="absolute inset-x-0 bottom-0 h-[40%] rounded-t-[44px] bg-[linear-gradient(180deg,#6c8e57,#567047)]" />
      <svg
        viewBox="0 0 520 360"
        className="relative h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#paperShadow)">
          <rect x="38" y="34" width="142" height="82" rx="24" fill="#1F5A4D" />
          <rect x="56" y="54" width="60" height="12" rx="6" fill="#F5E7C6" />
          <rect x="56" y="76" width="94" height="10" rx="5" fill="#98B77E" />
        </g>

        <g filter="url(#paperShadow)">
          <rect x="198" y="44" width="136" height="88" rx="24" fill="#FAF4E6" />
          <rect x="220" y="64" width="54" height="54" rx="18" fill="#7CAE7C" />
          <rect x="288" y="72" width="22" height="10" rx="5" fill="#173F39" />
          <rect x="288" y="92" width="18" height="10" rx="5" fill="#6D8D64" />
        </g>

        <g filter="url(#paperShadow)">
          <rect x="350" y="34" width="138" height="84" rx="24" fill="#F8EED9" />
          <path d="M376 90L400 60L420 80L450 48" stroke="#CD9A43" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g filter="url(#paperShadow)">
          <rect x="110" y="172" width="304" height="146" rx="34" fill="#FFF8EA" />
          <circle cx="182" cy="244" r="18" fill="#123F39" />
          <circle cx="258" cy="214" r="16" fill="#F0C25C" />
          <circle cx="340" cy="252" r="20" fill="#74A67F" />
          <circle cx="230" cy="286" r="14" fill="#A3BE64" />
          <path d="M182 244L258 214" stroke="#2D6B60" strokeWidth="6" strokeLinecap="round" />
          <path d="M258 214L340 252" stroke="#2D6B60" strokeWidth="6" strokeLinecap="round" />
          <path d="M182 244L230 286" stroke="#2D6B60" strokeWidth="6" strokeLinecap="round" />
          <path d="M230 286L340 252" stroke="#2D6B60" strokeWidth="6" strokeLinecap="round" />
        </g>

        <defs>
          <filter id="paperShadow" x="24" y="24" width="478" height="308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#4D3A1A" floodOpacity="0.18" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export function PaperCardVisual({
  kind,
}: {
  kind: "grid" | "signal" | "mesh" | "beam";
}) {
  if (kind === "grid") {
    return (
      <div className="paper-dark-panel h-24 rounded-[22px] p-4">
        <div className="grid h-full grid-cols-4 gap-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className={`rounded-lg ${
                index % 3 === 0 ? "bg-[#f5f0e7]" : "bg-[#7dc0a4]"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (kind === "signal") {
    return (
      <div className="paper-panel h-24 rounded-[22px] p-4">
        <svg viewBox="0 0 260 80" className="h-full w-full">
          <path
            d="M10 52C34 52 34 20 58 20C82 20 82 60 106 60C130 60 130 28 154 28C178 28 178 48 202 48C226 48 226 20 250 20"
            stroke="#1C6B5B"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (kind === "beam") {
    return (
      <div className="paper-panel h-24 rounded-[22px] p-4">
        <svg viewBox="0 0 260 80" className="h-full w-full">
          <rect x="16" y="18" width="58" height="44" rx="14" fill="#F5F0E7" />
          <rect x="182" y="18" width="58" height="44" rx="14" fill="#174842" />
          <path
            d="M74 40H182"
            stroke="#F2BE63"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="12 10"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="paper-panel h-24 rounded-[22px] p-4">
      <svg viewBox="0 0 260 80" className="h-full w-full">
        <circle cx="56" cy="42" r="16" fill="#123F39" />
        <circle cx="128" cy="24" r="14" fill="#7DC0A4" />
        <circle cx="202" cy="48" r="18" fill="#F3C46C" />
        <path
          d="M56 42L128 24L202 48"
          stroke="#2A6F61"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
