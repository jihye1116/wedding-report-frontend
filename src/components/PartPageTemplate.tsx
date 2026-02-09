"use client";

import { useSetAtom } from "jotai";
import {
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";

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

  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const [shuffleSeed] = useState(() => Math.random());

  const seededRandom = (seed: number, index: number) => {
    const x = Math.sin(seed * 9999 + index) * 10000;
    return x - Math.floor(x);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [part.questions, questionsPerPage, shuffleSeed]);

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

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {isIntroPage ? (
          introComponent
        ) : (
          <div className="wrapper">
            <ProgressBar />
            <div className="flex flex-col gap-8.5 py-5">
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

                      if (question.type === "rating") {
                        if (idx < currentQuestions.length - 1) {
                          setTimeout(() => {
                            questionRefs.current[idx + 1]?.scrollIntoView({
                              behavior: "smooth",
                              block: "nearest",
                            });
                          }, 150);
                        } else {
                          setTimeout(() => {
                            window.scrollTo({
                              top: document.body.scrollHeight,
                              behavior: "smooth",
                            });
                          }, 150);
                        }
                      }
                    },
                  },
                );

                return (
                  <div
                    key={question.id}
                    ref={(el) => {
                      questionRefs.current[idx] = el;
                    }}
                  >
                    {enhancedQuestionElement}
                  </div>
                );
              })}
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
