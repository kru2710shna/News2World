import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

interface SummaryCardProps {
  summary: string;
  faithfulnessScore: number;
  highlights: string[];
}

const SummaryCard = ({ summary, faithfulnessScore, highlights }: SummaryCardProps) => (
  <div
    className="flex h-full flex-col rounded-xl border border-border bg-card p-6"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <FileText className="h-5 w-5 text-primary" />
        <h3 className="text-base font-bold text-foreground">Summary</h3>
      </div>
      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 font-semibold">
        {faithfulnessScore}% Faithful
      </Badge>
    </div>

    <p className="mb-5 text-sm leading-relaxed text-foreground/80">{summary}</p>

    <div>
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Key Highlights
      </h4>
      <ul className="space-y-1.5">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            <span className="font-medium">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default SummaryCard;
