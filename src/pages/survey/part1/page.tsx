"use client";

import { PartPageTemplate } from "@/components/PartPageTemplate";
import { RatingQuestion } from "@/components/RatingQuestion";
import { detailedSurveyData } from "@/data/detailedSurveyData";
import { useSurvey } from "@/hooks/useSurvey";

import Part1Intro from "./intro";

const QUESTIONS_PER_PAGE = 5;

interface Part1PageProps {
  onNext?: () => void;
  onBack?: () => void;
  currentPage?: number;
  onPageChange?: (page: number, isBackward?: boolean) => void;
}

export default function Part1Page({
  onNext,
  onBack,
  currentPage,
  onPageChange,
}: Part1PageProps) {
  const { answers, addAnswer } = useSurvey({
    surveyData: detailedSurveyData,
  });

  const part = detailedSurveyData.parts[0]; // Part 1 직접 참조

  if (!part) {
    return <div>Part not found.</div>;
  }

  return (
    <PartPageTemplate
      part={part}
      answers={answers}
      addAnswer={addAnswer}
      introComponent={<Part1Intro />}
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
