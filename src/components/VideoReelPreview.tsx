import { Play } from "lucide-react";
import type { SceneCard } from "@/data/demo-data";

interface VideoReelPreviewProps {
  scenes: SceneCard[];
}

const VideoReelPreview = ({ scenes }: VideoReelPreviewProps) => (
  <div
    className="flex flex-col rounded-xl border border-border bg-card p-5"
    style={{ boxShadow: "var(--shadow-card)" }}
  >
    <div className="mb-4 flex items-center gap-2">
      <Play className="h-5 w-5 text-primary" />
      <h3 className="text-base font-bold text-foreground">Video Reel</h3>
    </div>

    {/* Phone frame */}
    <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border-2 border-foreground/10 bg-foreground/[0.03]">
      <div className="flex flex-col divide-y divide-border">
        {scenes.map((scene) => (
          <div key={scene.id} className="flex flex-col gap-2 p-3">
            <img
              src={scene.image}
              alt={scene.caption}
              loading="lazy"
              className="h-24 w-full rounded-lg object-cover"
            />
            <p className="text-[11px] leading-snug text-foreground/80">
              {scene.caption}
            </p>
            <span className="text-[10px] font-semibold text-primary">
              {scene.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default VideoReelPreview;
