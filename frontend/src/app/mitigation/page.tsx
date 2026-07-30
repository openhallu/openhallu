import { SiteShell } from "@/components/site-shell";
import { SubpageLayout } from "@/components/subpage-layout";
import { subpageConfigs } from "@/data/site";

export default function MitigationPage() {
  return (
    <SiteShell sectionLabel="Mitigation">
      <SubpageLayout {...subpageConfigs.mitigation} />
    </SiteShell>
  );
}
