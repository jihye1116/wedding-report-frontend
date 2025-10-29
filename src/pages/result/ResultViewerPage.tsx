"use client";

import { useAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";

import CelebrationImage from "@/assets/images/celebration.png";
import { NavigateButton } from "@/components/NavigateButton";
import { Navigator } from "@/components/Navigator";
import Part1ResultPage, { part1TotalPages } from "@/pages/result/part1/page";
import Part2ResultPage, { part2TotalPages } from "@/pages/result/part2/page";
import Part3ResultPage from "@/pages/result/part3/page";
import Part4ResultPage from "@/pages/result/part4/page";
import Part5ResultPage from "@/pages/result/part5/page";
import { part3ResultStepAtom, part4ResultStepAtom } from "@/store/surveyStore";
import { ReportData } from "@/types/api";

type ResultPartStep =
  | "part1"
  | "part2"
  | "part3"
  | "part4"
  | "part5"
  | "finish";

interface ResultViewerPageProps {
  onBackToIntro: () => void;
  reportData?: ReportData | null;
}

export default function ResultViewerPage({
  onBackToIntro,
  reportData,
}: ResultViewerPageProps) {
  const [part3Step, setPart3Step] = useAtom(part3ResultStepAtom);
  const [part4Step, setPart4Step] = useAtom(part4ResultStepAtom);
  const [currentStep, setCurrentStep] = useState<ResultPartStep>("part1");
  const [partPages, setPartPages] = useState({
    part1: 0,
    part2: 0,
  });

  const steps: ResultPartStep[] = [
    "part1",
    "part2",
    "part3",
    "part4",
    "part5",
    "finish",
  ];

  // 전체 페이지 수 계산
  const totalResultPages = part1TotalPages + part2TotalPages + 21 + 5 + 1 + 1; // part1 + part2 + part3(21) + part4(5) + part5(1) + finish(1)

  // 현재 전체 페이지 번호 계산
  const getCurrentGlobalPage = () => {
    let globalPage = 0;

    if (currentStep === "part1") {
      return partPages.part1 + 1;
    }

    globalPage += part1TotalPages;

    if (currentStep === "part2") {
      return globalPage + partPages.part2 + 1;
    }

    globalPage += part2TotalPages;

    if (currentStep === "part3") {
      return globalPage + part3Step;
    }

    globalPage += 21;

    if (currentStep === "part4") {
      return globalPage + part4Step;
    }

    globalPage += 5;

    if (currentStep === "part5") {
      return globalPage + 1;
    }

    globalPage += 1;

    if (currentStep === "finish") {
      return globalPage + 1;
    }

    return 1;
  };

  const handlePartPageChange = (part: keyof typeof partPages, page: number) => {
    setPartPages((prev) => ({ ...prev, [part]: page }));
  };

  const handleNext = () => {
    window.scrollTo({ top: 0 });
    const currentIndex = steps.indexOf(currentStep);

    if (currentStep === "part1") {
      if (partPages.part1 < part1TotalPages - 1) {
        handlePartPageChange("part1", partPages.part1 + 1);
        return;
      }
    }

    if (currentStep === "part2") {
      if (partPages.part2 < part2TotalPages - 1) {
        handlePartPageChange("part2", partPages.part2 + 1);
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

    if (currentStep === "part2") {
      if (partPages.part2 > 0) {
        handlePartPageChange("part2", partPages.part2 - 1);
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
      <div className="flex h-dvh flex-col">
        <Part1ResultPage currentPage={partPages.part1} />
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          canProceed={true}
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
        />
      </div>
    );
  }

  if (currentStep === "part2") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part2ResultPage currentPage={partPages.part2} />
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          canProceed={true}
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
        />
      </div>
    );
  }

  if (currentStep === "part3") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part3ResultPage step={part3Step} />
        <Navigator
          onNext={() => {
            if (part3Step === 21) {
              handleNext();
            } else {
              setPart3Step((prev) => prev + 1);
            }
            window.scrollTo({ top: 0 });
          }}
          onBack={() => {
            if (part3Step === 1) {
              handleBack();
            } else {
              setPart3Step((prev) => prev - 1);
            }
          }}
          canProceed={true}
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
        />
      </div>
    );
  }

  if (currentStep === "part4") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part4ResultPage step={part4Step} />
        <Navigator
          onNext={() => {
            if (part4Step === 5) {
              handleNext();
            } else {
              setPart4Step((prev) => prev + 1);
            }
            window.scrollTo({ top: 0 });
          }}
          onBack={() => {
            if (part4Step === 1) {
              handleBack();
            } else {
              setPart4Step((prev) => prev - 1);
            }
          }}
          canProceed={true}
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
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
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
        />
      </div>
    );
  }

  if (currentStep === "finish") {
    return (
      <div className="flex h-dvh flex-col items-center justify-center">
        <div className="flex-2" />
        <main className="wrapper flex w-full flex-col gap-10 py-5 text-center leading-snug text-[#111111]">
          <section className="flex flex-col gap-4 leading-snug">
            <p>
              &quot;행복한 결혼이란 두 영혼이 서로를 이해하고, 함께 성장하는
              여정이다.&quot;
            </p>
            <p className="text-lg">- 톨스토이</p>
          </section>
          {/* ㅁㄴㅇㅁㄴㅇ
           */}

          <div className="result-gradient flex h-70 w-full items-center justify-center">
            <Image
              src={CelebrationImage}
              alt="Celebration"
              className=""
              width={185}
              height={250}
            />
          </div>
        </main>
        <div className="flex-1" />
        <footer className="wrapper flex w-full items-center justify-between p-10">
          <NavigateButton direction="left" onClick={handleBack} />
        </footer>
      </div>
    );
  }

  return null;
}
