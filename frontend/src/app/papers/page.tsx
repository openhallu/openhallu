import { SiteShell } from "@/components/site-shell";
import { SubpageLayout } from "@/components/subpage-layout";
import { subpageConfigs } from "@/data/site";

export default function PapersPage() {
  return (
    <SiteShell sectionLabel="Papers">
      <SubpageLayout {...subpageConfigs.papers} />
    </SiteShell>
  );
}
