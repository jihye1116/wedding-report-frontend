"use client";

import { useSetAtom } from "jotai";
import { ReactNode, useEffect } from "react";

import { Navigator } from "@/components/Navigator";
import { ProgressBar } from "@/components/ProgressBar";
import { usePartNavigation } from "@/hooks/usePartNavigation";
import { currentPageAtom, currentPartAtom } from "@/store/surveyStore";
import { SurveyAnswer, SurveyPart, SurveyQuestion } from "@/types/survey";

interface PartPageTemplateProps {
  part: SurveyPart;
  answers?: SurveyAnswer[]; // 페이지에서 사용되지만 템플릿에서는 직접 사용 안함
  addAnswer?: (questionId: number, answer: string | number) => void; // 페이지에서 사용되지만 템플릿에서는 직접 사용 안함
  introComponent: ReactNode;
  questionComponent: (
    question: SurveyQuestion,
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
  answers: _answers,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addAnswer: _addAnswer,
  introComponent,
  questionComponent,
  questionsPerPage = 5,
  onNext,
  onBack,
  currentPage: externalCurrentPage,
  onPageChange,
}: PartPageTemplateProps) => {
  const setCurrentPart = useSetAtom(currentPartAtom);
  const setCurrentPage = useSetAtom(currentPageAtom);

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

  // 페이지나 파트가 변경될 때마다 전역 상태 업데이트
  useEffect(() => {
    setCurrentPart(part.partNumber);
    setCurrentPage(currentPage);
  }, [part.partNumber, currentPage, setCurrentPart, setCurrentPage]);

  // isIntroPage 계산
  const isIntroPage = currentPage === 0;

  // currentQuestions 계산
  const questionPageIndex = currentPage - 1; // 소개 페이지(0) 다음부터 문항 시작
  const startIndex = questionPageIndex * (questionsPerPage || 5);
  const endIndex = startIndex + (questionsPerPage || 5);
  const currentQuestions = isIntroPage
    ? []
    : part.questions.slice(startIndex, endIndex);

  // 현재 페이지의 모든 문항이 답변되었는지 확인
  const allQuestionsAnswered = currentQuestions.every((question) =>
    _answers?.some((a) => a.questionId === question.id),
  );

  // 전체 문항 번호 계산
  const getGlobalQuestionNumber = (questionId: number) => {
    // questionId가 이미 전역 번호이므로 그대로 반환
    return questionId;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {isIntroPage ? (
          introComponent
        ) : (
          <div className="px-10">
            <ProgressBar />
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
        currentPage={currentPage}
        totalPages={totalPages}
        partNumber={part.partNumber}
        canProceed={isIntroPage || allQuestionsAnswered}
      />
    </div>
  );
};
