import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import KnowledgeGraph from "./KnowledgeGraph";
import SummaryCard from "./SummaryCard";
import VideoReelPreview from "./VideoReelPreview";
import type { DemoResult } from "@/data/demo-data";

interface OutputScreenProps {
  result: DemoResult;
  onBack: () => void;
}

const OutputScreen = ({ result, onBack }: OutputScreenProps) => (
  <div className="container py-8">
    <div className="mb-6 flex items-center gap-3">
      <Button
        variant="ghost"
        size="icon"
        onClick={onBack}
        className="rounded-lg"
      >
        <ArrowLeft className="h-5 w-5" />
      </Button>
      <div>
        <h2 className="text-xl font-bold text-foreground">{result.topic}</h2>
        <p className="text-sm text-muted-foreground">
          Analysis complete — explore the results below
        </p>
      </div>
    </div>

    <div className="grid gap-6 lg:grid-cols-[1fr_340px_260px]">
      {/* Left — Knowledge Graph */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Knowledge Graph
        </h3>
        <KnowledgeGraph
          entities={result.entities}
          relationships={result.relationships}
        />
      </div>

      {/* Center — Summary */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          AI Summary
        </h3>
        <SummaryCard
          summary={result.summary}
          faithfulnessScore={result.faithfulnessScore}
          highlights={result.highlights}
        />
      </div>

      {/* Right — Video Reel */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Video Reel
        </h3>
        <VideoReelPreview scenes={result.scenes} />
      </div>
    </div>
  </div>
);

export default OutputScreen;
