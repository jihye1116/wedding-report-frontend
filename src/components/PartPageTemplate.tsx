"use client";

import { useSetAtom } from "jotai";
import { ReactNode, useEffect, useMemo } from "react";

import { Navigator } from "@/components/Navigator";
import { ProgressBar } from "@/components/ProgressBar";
import { usePartNavigation } from "@/hooks/usePartNavigation";
import { currentPageAtom, currentPartAtom } from "@/store/surveyStore";
import { SurveyAnswer, SurveyPart, SurveyQuestion } from "@/types/survey";
import { detailedSurveyData } from "@/data";

interface PartPageTemplateProps {
  part: SurveyPart;
  answers?: SurveyAnswer[]; // 페이지에서 사용되지만 템플릿에서는 직접 사용 안함
  addAnswer?: (questionId: number, answer: string | number) => void; // 페이지에서 사용되지만 템플릿에서는 직접 사용 안함
  introComponent: ReactNode;
  questionComponent: (
    question: SurveyQuestion,
    idx: number,
    startIndex: number,
    totalQuestionsInPage: number,
  ) => ReactNode;
  questionsPerPage?: number;
  onNext?: () => void;
  onBack?: () => void;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  customValidation?: (
    questions: SurveyQuestion[],
    answers: SurveyAnswer[],
  ) => boolean; // 커스텀 검증 함수
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
  customValidation,
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

  // 문항을 섞는 함수
  const shuffleQuestions = (questions: SurveyQuestion[]) => {
    // Fisher-Yates shuffle 알고리즘
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // 전체 문항을 섞어서 페이지별로 재구성 (part가 변경될 때만 재계산)
  const reorganizedQuestions = useMemo(() => {
    // 이미지가 있는 문항과 없는 문항을 분리
    const questionsWithImages = part.questions.filter((q) => q.image);
    const questionsWithoutImages = part.questions.filter((q) => !q.image);

    // 각각 랜덤으로 섞음
    const shuffledWithImages = shuffleQuestions(questionsWithImages);
    const shuffledWithoutImages = shuffleQuestions(questionsWithoutImages);

    // 페이지별로 재구성: 각 페이지마다 이미지 문항 1개 + 일반 문항 (questionsPerPage - 1)개
    const result: SurveyQuestion[] = [];
    const totalQuestionPages = Math.ceil(
      part.questions.length / (questionsPerPage || 5),
    );
    let normalQuestionIdx = 0; // 일반 문항 인덱스 추적

    for (let pageIdx = 0; pageIdx < totalQuestionPages; pageIdx++) {
      const imageQuestion = shuffledWithImages[pageIdx]; // 해당 페이지의 이미지 문항 (없을 수도 있음)

      // 현재 페이지에 넣을 일반 문항 개수 계산
      const normalQuestionsCount = imageQuestion
        ? (questionsPerPage || 5) - 1
        : questionsPerPage || 5;

      // 일반 문항 가져오기
      const normalQuestions = shuffledWithoutImages.slice(
        normalQuestionIdx,
        normalQuestionIdx + normalQuestionsCount,
      );
      normalQuestionIdx += normalQuestionsCount;

      // 이미지 문항이 있으면 맨 앞에, 그 다음 일반 문항들
      if (imageQuestion) {
        result.push(imageQuestion, ...normalQuestions);
      } else {
        result.push(...normalQuestions);
      }
    }

    return result;
  }, [part.questions, questionsPerPage]);

  // currentQuestions 계산
  const currentQuestions = useMemo(() => {
    if (isIntroPage) return [];

    const questionPageIndex = currentPage - 1; // 소개 페이지(0) 다음부터 문항 시작
    const startIndex = questionPageIndex * (questionsPerPage || 5);
    const endIndex = startIndex + (questionsPerPage || 5);
    return reorganizedQuestions.slice(startIndex, endIndex);
  }, [reorganizedQuestions, currentPage, isIntroPage, questionsPerPage]);

  // 현재 페이지의 모든 문항이 답변되었는지 확인
  const allQuestionsAnswered = customValidation
    ? customValidation(currentQuestions, _answers || [])
    : currentQuestions.every((question) =>
        _answers?.some((a) => a.questionId === question.id),
      );

  // 각 파트의 시작 번호 계산
  const getPartStartNumber = (partNumber: number) => {
    let startNumber = 0;
    for (let i = 0; i < partNumber - 1; i++) {
      startNumber += detailedSurveyData.parts[i]?.questions.length || 0;
    }
    return startNumber;
  };

  // 전체 문항 번호 계산 (문항이 나오는 순서 기준)
  const getDisplayQuestionNumber = (question: SurveyQuestion) => {
    // reorganizedQuestions에서의 인덱스를 찾아서 파트 시작 번호에 더함
    const indexInReorganized = reorganizedQuestions.findIndex(
      (q) => q.id === question.id,
    );
    const partStartNumber = getPartStartNumber(part.partNumber);
    return partStartNumber + indexInReorganized + 1;
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
                  {/* 실제 ID: {question.id} */}
                  {questionComponent(
                    question,
                    idx,
                    getDisplayQuestionNumber(question),
                    currentQuestions.length,
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
