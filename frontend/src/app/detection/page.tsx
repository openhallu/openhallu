import { SiteShell } from "@/components/site-shell";
import { SubpageLayout } from "@/components/subpage-layout";
import { subpageConfigs } from "@/data/site";

export default function DetectionPage() {
  return (
    <SiteShell sectionLabel="Detection">
      <SubpageLayout {...subpageConfigs.detection} />
    </SiteShell>
  );
}
