"use client";

import { PartPageTemplate } from "@/components/PartPageTemplate";
import { RatingQuestion } from "@/components/RatingQuestion";
import { detailedSurveyData } from "@/data/detailedSurveyData";
import { useSurvey } from "@/hooks/useSurvey";

import Part2Intro from "./intro";

const QUESTIONS_PER_PAGE = 5;

interface Part2PageProps {
  onNext?: () => void;
  onBack?: () => void;
  currentPage?: number;
  onPageChange?: (page: number, isBackward?: boolean) => void;
}

export default function Part2Page({
  onNext,
  onBack,
  currentPage,
  onPageChange,
}: Part2PageProps) {
  const { answers, addAnswer } = useSurvey({
    surveyData: detailedSurveyData,
  });

  const part = detailedSurveyData.parts[1]; // Part 2 직접 참조

  if (!part) {
    return <div>Part not found.</div>;
  }

  return (
    <PartPageTemplate
      part={part}
      answers={answers}
      addAnswer={addAnswer}
      introComponent={<Part2Intro />}
      questionComponent={(
        question,
        idx,
        globalQuestionNumber,
        totalQuestionsInPage,
      ) => (
        <RatingQuestion
          question={question}
          idx={idx}
          globalQuestionNumber={globalQuestionNumber}
          totalQuestionsInPage={totalQuestionsInPage}
          answers={answers}
          addAnswer={addAnswer}
        />
      )}
      questionsPerPage={QUESTIONS_PER_PAGE}
      onNext={onNext}
      onBack={onBack}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  );
}
