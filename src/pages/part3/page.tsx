"use client";

import { RatingSelector } from "@/components/RatingSelector";
import { detailedSurveyData } from "@/data/detailedSurveyData";
import { useSurvey } from "@/hooks/useSurvey";
import { getSurveyPart } from "@/utils/surveyUtils";
import { PartPageTemplate } from "@/components/PartPageTemplate";
import Part3Intro from "./intro";

const QUESTIONS_PER_PAGE = 5;

interface Part3PageProps {
  onNext?: () => void;
  onBack?: () => void;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Part3Page({
  onNext,
  onBack,
  currentPage,
  onPageChange,
}: Part3PageProps) {
  const { answers, addAnswer } = useSurvey({
    surveyData: detailedSurveyData,
  });

  const part = detailedSurveyData.parts[2]; // Part 3 직접 참조

  if (!part) {
    return <div>Part not found.</div>;
  }

  const renderQuestion = (
    question: any,
    idx: number,
    globalQuestionNumber: number,
  ) => (
    <>
      <h2 className="mb-6">
        {globalQuestionNumber}. {question.question}
      </h2>
      <RatingSelector
        value={
          (answers.find((a) => a.questionId === question.id)
            ?.answer as number) || null
        }
        onChange={(value) => addAnswer(question.id, value)}
      />
      {idx < 4 && <hr className="mt-6 border-t border-gray-300" />}
    </>
  );

  return (
    <PartPageTemplate
      part={part}
      answers={answers}
      addAnswer={addAnswer}
      introComponent={<Part3Intro />}
      questionComponent={renderQuestion}
      questionsPerPage={QUESTIONS_PER_PAGE}
      onNext={onNext}
      onBack={onBack}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  );
}
