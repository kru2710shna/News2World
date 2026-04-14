import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InputScreenProps {
  onGenerate: (topic: string) => void;
}

const InputScreen = ({ onGenerate }: InputScreenProps) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic.trim()) onGenerate(topic.trim());
  };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Turn news into{" "}
          <span className="text-primary">visual stories</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Enter a topic or paste a news article to generate a knowledge graph,
          summary, and video reel.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl items-center gap-3"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder='e.g. "Gaza Ceasefire 2025"'
            className="h-13 w-full rounded-xl border border-input bg-background py-3 pl-12 pr-4 text-base text-foreground shadow-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={!topic.trim()}
          className="h-13 gap-2 rounded-xl px-6 text-base font-semibold"
        >
          <Sparkles className="h-4 w-4" />
          Generate
        </Button>
      </form>

      <button
        type="button"
        onClick={() => onGenerate("Gaza Ceasefire 2025")}
        className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline"
      >
        Try demo: Gaza Ceasefire 2025
      </button>
    </div>
  );
};

export default InputScreen;
