import { SiteShell } from "@/components/site-shell";
import { SubpageLayout } from "@/components/subpage-layout";
import { subpageConfigs } from "@/data/site";

export default function QuantificationPage() {
  return (
    <SiteShell sectionLabel="Quantification">
      <SubpageLayout {...subpageConfigs.quantification} />
    </SiteShell>
  );
}
