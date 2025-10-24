"use client";

import { useState } from "react";

import { Navigator } from "@/components/Navigator";
import Part1ResultPage from "@/pages/result/part1/page";
import Part2ResultPage from "@/pages/result/part2/page";
import Part3ResultPage from "@/pages/result/part3/page";
import Part4ResultPage from "@/pages/result/part4/page";
import Part5ResultPage from "@/pages/result/part5/page";

type ResultPartStep = "part1" | "part2" | "part3" | "part4" | "part5" | "finish";

interface ResultViewerPageProps {
  onBackToIntro: () => void;
}

export default function ResultViewerPage({
  onBackToIntro,
}: ResultViewerPageProps) {
  const [currentStep, setCurrentStep] = useState<ResultPartStep>("part1");

  const steps: ResultPartStep[] = [
    "part1",
    "part2",
    "part3",
    "part4",
    "part5",
    "finish",
  ];

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    } else {
      onBackToIntro();
    }
  };

  if (currentStep === "part1") {
    return (
      <div className="flex h-dvh flex-col">
        <main className="flex-1">
          <Part1ResultPage />
        </main>
        <Navigator onNext={handleNext} onBack={handleBack} canProceed={true} />
      </div>
    );
  }

  if (currentStep === "part2") {
    return (
      <div className="flex h-dvh flex-col">
        <main className="flex-1">
          <Part2ResultPage />
        </main>
        <Navigator onNext={handleNext} onBack={handleBack} canProceed={true} />
      </div>
    );
  }

  if (currentStep === "part3") {
    return (
      <div className="flex h-dvh flex-col">
        <main className="flex-1">
          <Part3ResultPage />
        </main>
        <Navigator onNext={handleNext} onBack={handleBack} canProceed={true} />
      </div>
    );
  }

  if (currentStep === "part4") {
    return (
      <div className="flex h-dvh flex-col">
        <main className="flex-1">
          <Part4ResultPage />
        </main>
        <Navigator onNext={handleNext} onBack={handleBack} canProceed={true} />
      </div>
    );
  }

  if (currentStep === "part5") {
    return (
      <div className="flex h-dvh flex-col">
        <main className="flex-1">
          <Part5ResultPage />
        </main>
        <Navigator onNext={handleNext} onBack={handleBack} canProceed={true} />
      </div>
    );
  }

  if (currentStep === "finish") {
    return (
      <div className="flex h-dvh items-center justify-center">
        <main className="flex flex-col gap-10 px-10 py-5 text-center leading-snug text-[#111111]">
          <h1 className="text-2xl font-bold">리포트 완료 🌸</h1>
          <section className="flex flex-col gap-4">
            <p>
              &quot;행복한 결혼이란 두 영혼이 서로를 이해하고, 함께 성장하는
              여정이다.&quot;
            </p>
            <p className="text-lg">- 톨스토이</p>
          </section>
          <p>리포트를 모두 확인하셨습니다. 감사합니다!</p>
        </main>
      </div>
    );
  }

  return null;
}
