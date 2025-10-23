"use client";

import Part1Page from "@/pages/part1/page";
import { useState } from "react";

import { IntroductionPage } from "@/pages/IntroductionPage";

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

      {currentStep === "question1" && <Part1Page />}

      {currentStep === "question2" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold">설문 2</h1>
          <p className="mt-4 text-gray-600">두 번째 질문입니다</p>
        </div>
      )}

      {currentStep === "question3" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold">설문 3</h1>
          <p className="mt-4 text-gray-600">세 번째 질문입니다</p>
        </div>
      )}

      {currentStep === "question4" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold">설문 4</h1>
          <p className="mt-4 text-gray-600">네 번째 질문입니다</p>
        </div>
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
