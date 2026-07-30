import {
  HomeCategorySection,
  HomeHero,
  HomeInsightSection,
} from "@/components/homepage";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <div className="space-y-8 pb-8">
        <HomeHero />
        <HomeCategorySection />
        <HomeInsightSection />
      </div>
    </SiteShell>
  );
}
