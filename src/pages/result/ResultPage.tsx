"use client";

import { useState } from "react";
import Image from "next/image";

import { Navigator } from "@/components/Navigator";
import { StartButton } from "@/components/StartButton";
import Logo from "@/assets/icons/logo.svg";

interface ResultPageProps {
  resultId: string;
}

type ResultStep =
  | "intro1"
  | "intro2"
  | "result1"
  | "result2"
  | "result3"
  | "result4"
  | "finish";

export default function ResultPage({ resultId }: ResultPageProps) {
  const [currentStep, setCurrentStep] = useState<ResultStep>("intro1");
  const [introStep, setIntroStep] = useState(0);

  const handleNext = () => {
    const steps: ResultStep[] = [
      "intro1",
      "intro2",
      "result1",
      "result2",
      "result3",
      "result4",
      "finish",
    ];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: ResultStep[] = ["intro1", "intro2"];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const handleIntroNext = () => {
    if (introStep === 0) {
      setIntroStep(1);
    } else {
      handleNext();
    }
  };

  const handleIntroBack = () => {
    if (introStep === 1) {
      setIntroStep(0);
    } else {
      handleBack();
    }
  };

  // 결과 소개 페이지 1
  if (currentStep === "intro1") {
    return (
      <div className="flex h-dvh flex-col items-center justify-center">
        <Image
          className="mx-auto py-5"
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
        />
        <main className="flex flex-col gap-10 px-10 py-5">
          <h1 className="text-center text-3xl font-medium text-[#111111]">
            꽃길 리포트가 <br /> 완성되었습니다!
          </h1>
          <article className="flex flex-col gap-4 leading-snug whitespace-pre-wrap text-[#111111]">
            <p>리포트가 완성되었습니다. </p>
            <p>
              [신혼생활 시뮬레이션 스토리북]프로젝트에 참여해주셔서
              감사합니다.{" "}
            </p>
            <p>접속하신 링크는 추후 삭제될 예정이니, </p>
            <p>아래 '다운받기' 버튼을 눌러 결과를 확인해보세요. </p>
            <p>그럼, 확인해 볼까요? {"\n"}</p>
          </article>
        </main>
        <div className="flex justify-end p-10">
          <StartButton onClick={handleIntroNext} text="다운받기" />
        </div>
      </div>
    );
  }

  // 결과 소개 페이지 2
  if (currentStep === "intro2") {
    return (
      <div className="flex h-dvh flex-col">
        <Image
          className="mx-auto py-5"
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
        />
        <main className="flex flex-col gap-10 px-10 py-5">
          <h1 className="text-center text-3xl font-medium text-[#111111]">
            리포트 구성 안내
          </h1>
          <article className="flex flex-col gap-4 leading-snug whitespace-pre-wrap text-[#111111]">
            <p>리포트는 총 4개 파트로 구성되어 있습니다:</p>
            <p>• Part 1: 기본 성격 특성</p>
            <p>• Part 2: 관계 및 소통</p>
            <p>• Part 3: 가치관 및 라이프스타일</p>
            <p>• Part 4: 결혼 및 미래 계획</p>
            <p>각 파트별로 상세한 분석 결과를 확인하실 수 있습니다.</p>
          </article>
        </main>
        <Navigator
          onNext={handleIntroNext}
          onBack={handleIntroBack}
          canProceed={true}
        />
      </div>
    );
  }

  // 결과 파트 1
  if (currentStep === "result1") {
    return (
      <div className="flex h-dvh flex-col">
        <main className="flex flex-1 flex-col items-center justify-center gap-10 px-10 py-5 text-center leading-snug text-[#111111]">
          <h1 className="text-2xl font-bold">Part 1: 기본 성격 특성</h1>
          <p>결과 파트 1 - 구현 예정</p>
        </main>
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          currentPage={0}
          totalPages={1}
          partNumber={1}
          canProceed={true}
        />
      </div>
    );
  }

  // 결과 파트 2
  if (currentStep === "result2") {
    return (
      <div className="flex h-dvh flex-col">
        <main className="flex flex-1 flex-col items-center justify-center gap-10 px-10 py-5 text-center leading-snug text-[#111111]">
          <h1 className="text-2xl font-bold">Part 2: 관계 및 소통</h1>
          <p>결과 파트 2 - 구현 예정</p>
        </main>
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          partNumber={2}
          canProceed={true}
        />
      </div>
    );
  }

  // 완료 페이지
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
