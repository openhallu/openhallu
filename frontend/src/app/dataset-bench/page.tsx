import { SiteShell } from "@/components/site-shell";
import { SubpageLayout } from "@/components/subpage-layout";
import { subpageConfigs } from "@/data/site";

export default function DatasetBenchPage() {
  return (
    <SiteShell sectionLabel="Datasets & Benchmarks">
      <SubpageLayout {...subpageConfigs.datasetBench} />
    </SiteShell>
  );
}
