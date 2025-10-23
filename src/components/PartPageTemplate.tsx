"use client";

import { ReactNode } from "react";
import { Navigator } from "@/components/Navigator";
import { ProgressBar } from "@/components/ProgressBar";
import { usePartNavigation } from "@/hooks/usePartNavigation";
import { SurveyPart, SurveyAnswer } from "@/types/survey";
import { detailedSurveyData } from "@/data/detailedSurveyData";

interface PartPageTemplateProps {
  part: SurveyPart;
  answers: SurveyAnswer[];
  addAnswer: (questionId: number, answer: string | number) => void;
  introComponent: ReactNode;
  questionComponent: (
    question: any,
    idx: number,
    startIndex: number,
  ) => ReactNode;
  questionsPerPage?: number;
  onNext?: () => void;
  onBack?: () => void;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export const PartPageTemplate = ({
  part,
  answers,
  addAnswer,
  introComponent,
  questionComponent,
  questionsPerPage = 5,
  onNext,
  onBack,
  currentPage: externalCurrentPage,
  onPageChange,
}: PartPageTemplateProps) => {
  const {
    currentPage: internalCurrentPage,
    totalPages,
    handleNext,
    handleBack,
  } = usePartNavigation({
    part,
    questionsPerPage,
    onNext,
    onBack,
    currentPage: externalCurrentPage,
    onPageChange,
  });

  // 외부에서 전달받은 currentPage가 있으면 사용, 없으면 내부 상태 사용
  const currentPage =
    externalCurrentPage !== undefined
      ? externalCurrentPage
      : internalCurrentPage;

  // isIntroPage 계산
  const isIntroPage = currentPage === 0;

  // currentQuestions 계산
  const questionPageIndex = currentPage - 1; // 소개 페이지(0) 다음부터 문항 시작
  const startIndex = questionPageIndex * (questionsPerPage || 5);
  const endIndex = startIndex + (questionsPerPage || 5);
  const currentQuestions = isIntroPage
    ? []
    : part.questions.slice(startIndex, endIndex);

  // 전체 문항 번호 계산
  const getGlobalQuestionNumber = (questionId: number) => {
    let globalNumber = 0;
    for (let i = 0; i < part.partNumber - 1; i++) {
      globalNumber += detailedSurveyData.parts[i].questions.length;
    }
    return globalNumber + questionId;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="container mx-auto flex-1 px-4 py-8">
        {isIntroPage ? (
          introComponent
        ) : (
          <div className="px-10">
            <ProgressBar answers={answers} />
            <div className="flex flex-col gap-8.5 py-5">
              {currentQuestions.map((question, idx) => (
                <div key={question.id}>
                  {questionComponent(
                    question,
                    idx,
                    getGlobalQuestionNumber(question.id),
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Navigator
        onNext={handleNext}
        onBack={handleBack}
        currentPage={currentPage + 1}
        totalPages={totalPages}
        partNumber={part.partNumber}
      />
    </div>
  );
};
