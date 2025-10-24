"use client";

import Image from "next/image";

import { PartPageTemplate } from "@/components/PartPageTemplate";
import { RatingSelector } from "@/components/RatingSelector";
import { detailedSurveyData } from "@/data/detailedSurveyData";
import { useSurvey } from "@/hooks/useSurvey";
import type { SurveyQuestion } from "@/types/survey";

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

  const renderQuestion = (
    question: SurveyQuestion,
    idx: number,
    globalQuestionNumber: number,
    totalQuestionsInPage: number,
  ) => (
    <>
      {/* 실제 ID: {question.id} */}
      <h2 className="mb-6 leading-snug font-medium">
        {globalQuestionNumber}. {question.question}
      </h2>
      {question.image && (
        <div className="relative mb-6 flex h-64 w-full justify-center">
          <Image
            src={question.image}
            alt={`Question ${globalQuestionNumber} illustration`}
            className="object-contain"
            fill
          />
        </div>
      )}
      <RatingSelector
        value={
          (answers.find((a) => a.questionId === question.id)
            ?.answer as number) || null
        }
        onChange={(value) => addAnswer(question.id, value)}
      />
      {idx < totalQuestionsInPage - 1 && (
        <hr className="mt-6 border-t border-gray-300" />
      )}
    </>
  );

  return (
    <PartPageTemplate
      part={part}
      answers={answers}
      addAnswer={addAnswer}
      introComponent={<Part1Intro />}
      questionComponent={renderQuestion}
      questionsPerPage={QUESTIONS_PER_PAGE}
      onNext={onNext}
      onBack={onBack}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />
  );
}
