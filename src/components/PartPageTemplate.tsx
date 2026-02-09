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

  const itemsRef = useRef<Map<number, HTMLDivElement>>(new Map());
  const headerRef = useRef<HTMLDivElement>(null);
  const navigatorRef = useRef<HTMLDivElement>(null);

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
  }, [part.questions, questionsPerPage, shuffleSeed, shuffleQuestions]);

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
   * [Bottom-Align Scroll Logic]
   * 전략: 다음 질문의 "바닥(Bottom)"을 화면 하단 100px 위치로 끌어올린다.
   * 효과: 질문의 상단 시작점과는 무관하게, '답변 버튼'이 무조건 화면에 들어오게 됨.
   */
  const scrollToNext16p = useCallback(
    (currentIndex: number) => {
      // 1. 박자감: 클릭 후 0.2초 멍 때리기 (사용자가 "눌렀다"는 인식을 하는 시간)
      setTimeout(() => {
        const nextNode = itemsRef.current.get(currentIndex + 1);

        if (nextNode) {
          // 다음 질문의 위치 정보
          const rect = nextNode.getBoundingClientRect();

          // 문서 전체 기준, 다음 질문의 바닥(Bottom) 절대 좌표
          const absoluteBottom = window.scrollY + rect.bottom;

          // 현재 뷰포트(화면)의 높이
          const viewportHeight = window.innerHeight;

          // 목표: 질문의 바닥이 화면 바닥에서 100px 위에 오도록 설정
          // 계산: (절대 바닥 좌표) - (화면 높이 - 100px)
          const BOTTOM_OFFSET = 100;
          const targetScrollPosition =
            absoluteBottom - (viewportHeight - BOTTOM_OFFSET);

          window.scrollTo({
            top: targetScrollPosition,
            behavior: "smooth",
          });
        } else if (currentIndex === currentQuestions.length - 1) {
          // 마지막 질문인 경우, 다음 페이지 버튼(네비게이터)이 화면 중앙에 오도록
          navigatorRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 200); // 0.2초 딜레이
    },
    [currentQuestions.length],
  );

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="flex-1">
        {isIntroPage ? (
          introComponent
        ) : (
          <div className="wrapper">
            {/* Header (ProgressBar) */}
            <div
              ref={headerRef}
              className="sticky top-0 z-20 bg-slate-50 pt-2 pb-2 transition-all"
            >
              <ProgressBar />
            </div>

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
                      // 스크롤 트리거
                      scrollToNext16p(idx);
                    },
                  },
                );

                return (
                  <div
                    key={question.id}
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
