"use client";

import Image from "next/image";

import { RatingSelector } from "@/components/RatingSelector";
import type { SurveyAnswer, SurveyQuestion } from "@/types/survey";

interface RatingQuestionProps {
  question: SurveyQuestion;
  idx: number;
  globalQuestionNumber: number;
  totalQuestionsInPage: number;
  answers: SurveyAnswer[];
  addAnswer: (questionId: number, answer: number | string) => void;
}

export function RatingQuestion({
  question,
  idx,
  globalQuestionNumber,
  totalQuestionsInPage,
  answers,
  addAnswer,
}: RatingQuestionProps) {
  return (
    <>
      <h2 className="mb-6 leading-snug font-medium">
        {globalQuestionNumber}. {question.question}
      </h2>
      {question.image && (
        <div className="relative mb-6 flex aspect-square w-full justify-center">
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
}
