"use client";

import { ReactNode } from "react";
import { Navigator } from "@/components/Navigator";
import { ProgressBar } from "@/components/ProgressBar";
import { usePartNavigation } from "@/hooks/usePartNavigation";
import { SurveyPart, SurveyAnswer } from "@/types/survey";

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
}

export const PartPageTemplate = ({
  part,
  answers,
  addAnswer,
  introComponent,
  questionComponent,
  questionsPerPage = 5,
  onNext,
}: PartPageTemplateProps) => {
  const {
    currentPage,
    totalPages,
    isIntroPage,
    currentQuestions,
    startIndex,
    handleNext,
    handleBack,
  } = usePartNavigation({ part, questionsPerPage, onNext });

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
                  {questionComponent(question, idx, startIndex)}
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
