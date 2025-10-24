"use client";

import { useState } from "react";

import Intro1Page from "./intro/Intro1Page";
import Intro2Page from "./intro/Intro2Page";
import Intro3Page from "./intro/Intro3Page";
import ResultViewerPage from "./ResultViewerPage";

interface ReportIntroductionPageProps {
  resultId: string;
}

type IntroStep = "intro1" | "intro2" | "intro3" | "viewing_results";

export default function ReportIntroductionPage({
  resultId,
}: ReportIntroductionPageProps) {
  const [currentStep, setCurrentStep] = useState<IntroStep>("intro1");

  const handleNext = () => {
    const steps: IntroStep[] = [
      "intro1",
      "intro2",
      "intro3",
      "viewing_results",
    ];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: IntroStep[] = [
      "intro1",
      "intro2",
      "intro3",
      "viewing_results",
    ];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  if (currentStep === "intro1") {
    return <Intro1Page onNext={handleNext} />;
  }

  if (currentStep === "intro2") {
    return <Intro2Page onNext={handleNext} />;
  }

  if (currentStep === "intro3") {
    return <Intro3Page onNext={handleNext} onBack={handleBack} />;
  }

  if (currentStep === "viewing_results") {
    return <ResultViewerPage onBackToIntro={() => setCurrentStep("intro3")} />;
  }

  return null;
}
