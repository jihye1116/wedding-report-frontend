"use client";

import { useSetAtom } from "jotai";
import {
  cloneElement,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Navigator } from "@/components/Navigator";
import { ProgressBar } from "@/components/ProgressBar";
import { detailedSurveyData } from "@/data";
import { usePartNavigation } from "@/hooks/usePartNavigation";
import { currentPageAtom, currentPartAtom } from "@/store/surveyStore";
import { SurveyAnswer, SurveyPart, SurveyQuestion } from "@/types/survey";

interface PartPageTemplateProps {
  part: SurveyPart;
  answers?: SurveyAnswer[];
  addAnswer?: (questionId: number, answer: string | number) => void;
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
  ) => boolean;
}

export const PartPageTemplate = ({
  part,
  answers: _answers,
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

  // [수정] 배열 대신 Map을 사용하여 Ref 관리 (Render phase 에러 방지)
  // 초기값을 null로 두고 callback에서 초기화하는 것보다, 안정성을 위해 빈 Map으로 초기화
  const itemsRef = useRef<Map<number, HTMLDivElement>>(new Map());
  const navigatorRef = useRef<HTMLDivElement>(null);

  const GAP_SIZE = 64;

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

  const currentPage =
    externalCurrentPage !== undefined
      ? externalCurrentPage
      : internalCurrentPage;

  useEffect(() => {
    setCurrentPart(part.partNumber);
    setCurrentPage(currentPage);
  }, [part.partNumber, currentPage, setCurrentPart, setCurrentPage]);

  const isIntroPage = currentPage === 0;

  // --- Shuffle Logic ---
  const [shuffleSeed] = useState(() => Math.random());

  const seededRandom = (seed: number, index: number) => {
    const x = Math.sin(seed * 9999 + index) * 10000;
    return x - Math.floor(x);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const shuffleQuestions = (questions: SurveyQuestion[], seed: number) => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(seed, i) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const reorganizedQuestions = useMemo(() => {
    const questionsWithImages = part.questions.filter((q) => q.image);
    const questionsWithoutImages = part.questions.filter((q) => !q.image);

    const shuffledWithImages = shuffleQuestions(
      questionsWithImages,
      shuffleSeed,
    );
    const shuffledWithoutImages = shuffleQuestions(
      questionsWithoutImages,
      shuffleSeed * 2,
    );

    const result: SurveyQuestion[] = [];
    const totalQuestionPages = Math.ceil(
      part.questions.length / (questionsPerPage || 5),
    );
    let normalQuestionIdx = 0;

    for (let pageIdx = 0; pageIdx < totalQuestionPages; pageIdx++) {
      const imageQuestion = shuffledWithImages[pageIdx];
      const normalQuestionsCount = imageQuestion
        ? (questionsPerPage || 5) - 1
        : questionsPerPage || 5;
      const normalQuestions = shuffledWithoutImages.slice(
        normalQuestionIdx,
        normalQuestionIdx + normalQuestionsCount,
      );
      normalQuestionIdx += normalQuestionsCount;

      if (imageQuestion) {
        result.push(imageQuestion, ...normalQuestions);
      } else {
        result.push(...normalQuestions);
      }
    }
    return result;
  }, [part.questions, questionsPerPage, shuffleSeed, shuffleQuestions]); // 의존성 추가

  const currentQuestions = useMemo(() => {
    if (isIntroPage) return [];
    const questionPageIndex = currentPage - 1;
    const startIndex = questionPageIndex * (questionsPerPage || 5);
    const endIndex = startIndex + (questionsPerPage || 5);
    return reorganizedQuestions.slice(startIndex, endIndex);
  }, [reorganizedQuestions, currentPage, isIntroPage, questionsPerPage]);

  const allQuestionsAnswered = customValidation
    ? customValidation(currentQuestions, _answers || [])
    : currentQuestions.every((question) =>
        _answers?.some((a) => a.questionId === question.id),
      );

  const getPartStartNumber = (partNumber: number) => {
    let startNumber = 0;
    for (let i = 0; i < partNumber - 1; i++) {
      startNumber += detailedSurveyData.parts[i]?.questions.length || 0;
    }
    return startNumber;
  };

  const getDisplayQuestionNumber = (question: SurveyQuestion) => {
    const indexInReorganized = reorganizedQuestions.findIndex(
      (q) => q.id === question.id,
    );
    const partStartNumber = getPartStartNumber(part.partNumber);
    return partStartNumber + indexInReorganized + 1;
  };

  /**
   * 고정 스크롤 로직 (Map Ref 사용)
   */
  const scrollFixedAmount = useCallback(
    (currentIndex: number) => {
      // requestAnimationFrame을 사용하여 렌더링 완료 후 실행 보장
      requestAnimationFrame(() => {
        // 1. 마지막 질문인 경우
        if (currentIndex === currentQuestions.length - 1) {
          navigatorRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return;
        }

        // 2. 일반 질문 높이 기준 계산
        let standardStep = 0;

        // Map에서 DOM 요소 찾기
        const nodes = itemsRef.current;

        // 이미지가 없는 질문의 인덱스를 찾음
        const standardQuestionIndex = currentQuestions.findIndex(
          (q) => !q.image,
        );
        const standardNode = nodes.get(standardQuestionIndex);

        if (standardNode) {
          standardStep = standardNode.offsetHeight + GAP_SIZE;
        } else {
          // fallback: 현재 질문 높이 사용
          const currentNode = nodes.get(currentIndex);
          if (currentNode) {
            standardStep = currentNode.offsetHeight + GAP_SIZE;
          }
        }

        if (standardStep > 0) {
          window.scrollBy({
            top: standardStep,
            behavior: "smooth",
          });
        }
      });
    },
    [currentQuestions, GAP_SIZE],
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {isIntroPage ? (
          introComponent
        ) : (
          <div className="wrapper">
            <ProgressBar />

            <div className="mx-auto flex max-w-3xl flex-col gap-16 py-10">
              {currentQuestions.map((question, idx) => {
                const questionElement = questionComponent(
                  question,
                  idx,
                  getDisplayQuestionNumber(question),
                  currentQuestions.length,
                );

                const enhancedQuestionElement = cloneElement(
                  questionElement as ReactElement<{
                    addAnswer?: (
                      questionId: number,
                      answer: string | number,
                    ) => void;
                  }>,
                  {
                    addAnswer: (
                      questionId: number,
                      answer: string | number,
                    ) => {
                      _addAnswer?.(questionId, answer);
                      scrollFixedAmount(idx);
                    },
                  },
                );

                return (
                  <div
                    key={question.id}
                    // [수정] Map에 Ref 저장 (렌더링 중 읽기 방지)
                    ref={(node) => {
                      if (node) {
                        itemsRef.current.set(idx, node);
                      } else {
                        itemsRef.current.delete(idx);
                      }
                    }}
                    className="flex flex-col justify-center"
                  >
                    {enhancedQuestionElement}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      <div ref={navigatorRef}>
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          currentPage={currentPage}
          totalPages={totalPages}
          partNumber={part.partNumber}
          canProceed={isIntroPage || allQuestionsAnswered}
        />
      </div>
    </div>
  );
};
