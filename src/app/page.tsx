"use client";

import Part1Page from "@/pages/part1/page";
import Part2Page from "@/pages/part2/page";
import Part3Page from "@/pages/part3/page";
import Part4Page from "@/pages/part4/page";
import { IntroductionPage } from "@/pages/IntroductionPage";
import { useState } from "react";

type PageStep =
  | "intro"
  | "question1"
  | "question2"
  | "question3"
  | "question4"
  | "finish";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<PageStep>("intro");

  const handleNext = () => {
    const steps: PageStep[] = [
      "intro",
      "question1",
      "question2",
      "question3",
      "question4",
      "finish",
    ];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: PageStep[] = [
      "intro",
      "question1",
      "question2",
      "question3",
      "question4",
      "finish",
    ];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  return (
    <div>
      {currentStep === "intro" && <IntroductionPage onNext={handleNext} />}

      {currentStep === "question1" && (
        <Part1Page onNext={() => setCurrentStep("question2")} />
      )}

      {currentStep === "question2" && (
        <Part2Page onNext={() => setCurrentStep("question3")} />
      )}

      {currentStep === "question3" && (
        <Part3Page onNext={() => setCurrentStep("question4")} />
      )}

      {currentStep === "question4" && (
        <Part4Page onNext={() => setCurrentStep("finish")} />
      )}

      {currentStep === "finish" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold">결과 페이지</h1>
          <p className="mt-4 text-gray-600">설문이 완료되었습니다</p>
        </div>
      )}
    </div>
  );
}
