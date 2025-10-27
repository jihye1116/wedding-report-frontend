"use client";

import Image from "next/image";

import { TextAreaField } from "@/components/TextAreaField";
import type { SurveyAnswer, SurveyQuestion } from "@/types/survey";

interface TextQuestionProps {
  question: SurveyQuestion;
  idx: number;
  globalQuestionNumber: number;
  totalQuestionsInPage: number;
  answers: SurveyAnswer[];
  addAnswer: (questionId: number, answer: string) => void;
}

export function TextQuestion({
  question,
  idx,
  globalQuestionNumber,
  totalQuestionsInPage,
  answers,
  addAnswer,
}: TextQuestionProps) {
  const handleTextChange = (questionId: number, value: string) => {
    addAnswer(questionId, value);
  };

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
      <TextAreaField
        value={
          (answers.find((a) => a.questionId === question.id)
            ?.answer as string) || ""
        }
        onChange={(name, value) => handleTextChange(question.id, value)}
        name={`question-${question.id}`}
      />
      {idx < totalQuestionsInPage - 1 && (
        <hr className="mt-6 border-t border-gray-300" />
      )}
    </>
  );
}
