import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import InputScreen from "@/components/InputScreen";
import ProcessingScreen from "@/components/ProcessingScreen";
import OutputScreen from "@/components/OutputScreen";
import { DEMO_RESULT } from "@/data/demo-data";

type AppView = "input" | "processing" | "output";

const Index = () => {
  const [view, setView] = useState<AppView>("input");

  const handleGenerate = useCallback((_topic: string) => {
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
        <OutputScreen result={DEMO_RESULT} onBack={handleBack} />
      )}
    </div>
  );
};

export default Index;
