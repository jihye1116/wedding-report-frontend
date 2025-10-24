"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAtom } from "jotai";

import { detailedSurveyData } from "@/data/detailedSurveyData";
import { answersAtom } from "@/store/surveyStore";
import FinishPage from "@/pages/survey/FinishPage";
import IntroductionPage from "@/pages/survey/IntroductionPage";
import Part1Page from "@/pages/survey/part1/page";
import Part2Page from "@/pages/survey/part2/page";
import Part3Page from "@/pages/survey/part3/page";
import Part4Page from "@/pages/survey/part4/page";
import ResultPage from "@/pages/result/ResultPage";
import { LoadingSpinner } from "@/components/LoadingSpinner";

type PageStep =
  | "intro"
  | "question1"
  | "question2"
  | "question3"
  | "question4"
  | "finish";

function SurveyPage() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<PageStep>("intro");
  const [, setAnswers] = useAtom(answersAtom);
  const [resultId, setResultId] = useState<string | null>(null);

  // 각 파트의 현재 페이지 상태를 관리
  const [partPages, setPartPages] = useState<Record<string, number>>({
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
  });

  // URL에서 결과 ID 확인
  useEffect(() => {
    if (searchParams) {
      const id = searchParams.get("id");
      if (id) {
        setResultId(id);
      }
    }
  }, [searchParams]);

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

  // 결과 ID가 있으면 결과 페이지 표시
  if (resultId) {
    return <ResultPage resultId={resultId} />;
  }

  return (
    <div>
      {process.env.NODE_ENV === "development" && (
        <button
          onClick={() => {
            // 모든 rating 문항은 3점, text 문항은 "테스트 답변입니다"로 설정
            const testAnswers = detailedSurveyData.parts.flatMap((part) =>
              part.questions.map((question) => ({
                questionId: question.id,
                answer: question.type === "rating" ? 3 : "테스트 답변입니다.",
              })),
            );
            setAnswers(testAnswers);
            setCurrentStep("finish");
          }}
          className="fixed right-4 bottom-4 z-50 rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          테스트 데이터 설정
        </button>
      )}
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

export default function Home() {
  return (
    <Suspense fallback={<div className="flex h-dvh items-center justify-center"><LoadingSpinner /></div>}>
      <SurveyPage />
    </Suspense>
  );
}
