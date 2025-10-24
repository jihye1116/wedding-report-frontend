"use client";

import Image from "next/image";
import { useState } from "react";

import CelebrationImage from "@/assets/images/celebration.png";
import { NavigateButton } from "@/components/NavigateButton";
import { Navigator } from "@/components/Navigator";
import Part1ResultPage, { part1TotalPages } from "@/pages/result/part1/page";
import Part2ResultPage from "@/pages/result/part2/page";
import Part3ResultPage from "@/pages/result/part3/page";
import Part4ResultPage from "@/pages/result/part4/page";
import Part5ResultPage from "@/pages/result/part5/page";

type ResultPartStep =
  | "part1"
  | "part2"
  | "part3"
  | "part4"
  | "part5"
  | "finish";

interface ResultViewerPageProps {
  onBackToIntro: () => void;
}

export default function ResultViewerPage({
  onBackToIntro,
}: ResultViewerPageProps) {
  const [currentStep, setCurrentStep] = useState<ResultPartStep>("part1");
  const [partPages, setPartPages] = useState({
    part1: 0,
  });

  const steps: ResultPartStep[] = [
    "part1",
    "part2",
    "part3",
    "part4",
    "part5",
    "finish",
  ];

  const handlePartPageChange = (part: keyof typeof partPages, page: number) => {
    setPartPages((prev) => ({ ...prev, [part]: page }));
  };

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);

    if (currentStep === "part1") {
      if (partPages.part1 < part1TotalPages - 1) {
        handlePartPageChange("part1", partPages.part1 + 1);
        return;
      }
    }

    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.indexOf(currentStep);

    if (currentStep === "part1") {
      if (partPages.part1 > 0) {
        handlePartPageChange("part1", partPages.part1 - 1);
        return;
      }
    }

    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    } else {
      onBackToIntro();
    }
  };

  if (currentStep === "part1") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part1ResultPage currentPage={partPages.part1} />
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          canProceed={true}
          currentPage={partPages.part1}
          totalPages={part1TotalPages}
        />
      </div>
    );
  }

  if (currentStep === "part2") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part2ResultPage />
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          canProceed={true}
          currentPage={partPages.part1}
          totalPages={part1TotalPages}
        />
      </div>
    );
  }

  if (currentStep === "part3") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part3ResultPage />
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          canProceed={true}
          currentPage={partPages.part1}
          totalPages={part1TotalPages}
        />
      </div>
    );
  }

  if (currentStep === "part4") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part4ResultPage
          onNext={handleNext}
          onBack={handleBack}
          currentPage={0}
        />
      </div>
    );
  }

  if (currentStep === "part5") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part5ResultPage />
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          canProceed={true}
          currentPage={partPages.part1}
          totalPages={part1TotalPages}
        />
      </div>
    );
  }

  if (currentStep === "finish") {
    return (
      <div className="flex h-dvh flex-col items-center justify-center">
        <div className="flex-2" />
        <main className="flex flex-col gap-10 px-10 py-5 text-center leading-snug text-[#111111]">
          <section className="flex flex-col gap-4 leading-snug">
            <p>
              &quot;행복한 결혼이란 두 영혼이 서로를 이해하고, 함께 성장하는
              여정이다.&quot;
            </p>
            <p className="text-lg">- 톨스토이</p>
          </section>
          <Image src={CelebrationImage} alt="Celebration" className="mx-auto" />
        </main>
        <div className="flex-1" />
        <footer className="flex w-full items-center justify-between p-10">
          <NavigateButton direction="left" onClick={handleBack} />
        </footer>
      </div>
    );
  }

  return null;
}
