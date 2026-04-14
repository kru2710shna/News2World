import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

const STEPS = [
  "Extracting Entities",
  "Building Event Graph",
  "Generating Summary",
  "Creating Video Reel",
];

interface ProcessingScreenProps {
  onComplete: () => void;
}

const ProcessingScreen = ({ onComplete }: ProcessingScreenProps) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (activeStep < STEPS.length) {
      const timer = setTimeout(() => setActiveStep((s) => s + 1), 1200);
      return () => clearTimeout(timer);
    } else {
      const done = setTimeout(onComplete, 400);
      return () => clearTimeout(done);
    }
  }, [activeStep, onComplete]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <h2 className="mb-10 text-2xl font-bold text-foreground">
        Processing your request…
      </h2>

      <div className="flex flex-col gap-5">
        {STEPS.map((step, i) => {
          const done = i < activeStep;
          const active = i === activeStep;

          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Check className="h-4 w-4 text-primary" />
                    </motion.div>
                  ) : active ? (
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  )}
                </AnimatePresence>
              </div>
              <span
                className={`text-base font-medium ${
                  done
                    ? "text-primary"
                    : active
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessingScreen;
