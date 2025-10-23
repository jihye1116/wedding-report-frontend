"use client";

import { PartPageTemplate } from "@/components/PartPageTemplate";
import { TextAreaField } from "@/components/TextAreaField";
import { detailedSurveyData } from "@/data/detailedSurveyData";
import { useSurvey } from "@/hooks/useSurvey";
import Part4Intro from "./intro";

const QUESTIONS_PER_PAGE = 4;

interface Part4PageProps {
  onNext?: () => void;
  onBack?: () => void;
  currentPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Part4Page({
  onNext,
  onBack,
  currentPage,
  onPageChange,
}: Part4PageProps) {
  const { answers, addAnswer } = useSurvey({
    surveyData: detailedSurveyData,
  });

  const part = detailedSurveyData.parts[3]; // Part 4 직접 참조

  if (!part) {
    return <div>Part not found.</div>;
  }

  const renderQuestion = (
    question: any,
    idx: number,
    globalQuestionNumber: number,
  ) => (
    <>
      <h2 className="mb-6 leading-snug font-medium">
        {globalQuestionNumber}. {question.question}
      </h2>
      {question.image && (
        <div className="mb-6 flex justify-center">
          <img
            src={question.image}
            alt={`Question ${globalQuestionNumber} illustration`}
            className="h-auto max-h-64 max-w-full object-contain"
          />
        </div>
      )}
      <TextAreaField
        value={
          (answers.find((a) => a.questionId === question.id)
            ?.answer as string) || ""
        }
        onChange={(value) => addAnswer(question.id, value)}
        name=""
        placeholder=""
      />
      {idx < 3 && <hr className="mt-6 border-t border-gray-300" />}
    </>
  );

  return (
    <PartPageTemplate
      part={part}
      answers={answers}
      addAnswer={addAnswer}
      introComponent={<Part4Intro />}
      questionComponent={renderQuestion}
      questionsPerPage={QUESTIONS_PER_PAGE}
      onNext={onNext}
      onBack={onBack}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  );
}
