import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import InputScreen from "@/components/InputScreen";
import ProcessingScreen from "@/components/ProcessingScreen";
import OutputScreen from "@/components/OutputScreen";
import { DEMO_RESULTS, DEMO_RESULT } from "@/data/demo-data";
import type { DemoResult } from "@/data/demo-data";

type AppView = "input" | "processing" | "output";

const Index = () => {
  const [view, setView] = useState<AppView>("input");
  const [result, setResult] = useState<DemoResult>(DEMO_RESULT);

  const handleGenerate = useCallback((topic: string) => {
    const match = DEMO_RESULTS.find(
      (d) => d.topic.toLowerCase() === topic.toLowerCase()
    );
    setResult(match ?? DEMO_RESULT);
    setView("processing");
  }, []);

  const handleProcessingComplete = useCallback(() => {
    setView("output");
  }, []);

  const handleBack = useCallback(() => {
    setView("input");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {view === "input" && <InputScreen onGenerate={handleGenerate} />}
      {view === "processing" && (
        <ProcessingScreen onComplete={handleProcessingComplete} />
      )}
      {view === "output" && (
        <OutputScreen result={result} onBack={handleBack} />
      )}
    </div>
  );
};

export default Index;
