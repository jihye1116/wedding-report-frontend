"use client";

import { useState } from "react";

import FinishPage from "@/pages/FinishPage";
import IntroductionPage from "@/pages/IntroductionPage";
import Part1Page from "@/pages/part1/page";
import Part2Page from "@/pages/part2/page";
import Part3Page from "@/pages/part3/page";
import Part4Page from "@/pages/part4/page";

type PageStep =
  | "intro"
  | "question1"
  | "question2"
  | "question3"
  | "question4"
  | "finish";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<PageStep>("intro");

  // 각 파트의 현재 페이지 상태를 관리
  const [partPages, setPartPages] = useState<Record<string, number>>({
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
  });

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

  // 각 파트의 페이지 변경 핸들러
  const handlePartPageChange = (
    part: string,
    page: number,
    isBackward: boolean = false,
  ) => {
    setPartPages((prev) => ({
      ...prev,
      [part]: page,
    }));
    // 앞으로 갈 때만 스크롤을 최상단으로 이동
    if (!isBackward) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      {currentStep === "intro" && <IntroductionPage onNext={handleNext} />}

      {currentStep === "question1" && (
        <Part1Page
          onNext={handleNext}
          onBack={handleBack}
          currentPage={partPages.question1}
          onPageChange={(page, isBackward) =>
            handlePartPageChange("question1", page, isBackward)
          }
        />
      )}

      {currentStep === "question2" && (
        <Part2Page
          onNext={handleNext}
          onBack={handleBack}
          currentPage={partPages.question2}
          onPageChange={(page, isBackward) =>
            handlePartPageChange("question2", page, isBackward)
          }
        />
      )}

      {currentStep === "question3" && (
        <Part3Page
          onNext={handleNext}
          onBack={handleBack}
          currentPage={partPages.question3}
          onPageChange={(page, isBackward) =>
            handlePartPageChange("question3", page, isBackward)
          }
        />
      )}

      {currentStep === "question4" && (
        <Part4Page
          onNext={handleNext}
          onBack={handleBack}
          currentPage={partPages.question4}
          onPageChange={(page, isBackward) =>
            handlePartPageChange("question4", page, isBackward)
          }
        />
      )}

      {currentStep === "finish" && <FinishPage />}
    </div>
  );
}
