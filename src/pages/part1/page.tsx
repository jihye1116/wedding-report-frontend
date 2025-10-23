"use client";

import { RatingSelector } from "@/components/RatingSelector";
import { detailedSurveyData } from "@/data/detailedSurveyData";
import { useSurvey } from "@/hooks/useSurvey";
import { getSurveyPart } from "@/utils/surveyUtils";
import { useState } from "react";
import { Navigator } from "@/components/Navigator";
import { ProgressBar } from "@/components/ProgressBar";

const QUESTIONS_PER_PAGE = 5;

export default function Part1Page() {
  const { currentPart, answers, addAnswer } = useSurvey({
    surveyData: detailedSurveyData,
  });
  const [currentPage, setCurrentPage] = useState(0);

  const part = getSurveyPart(detailedSurveyData, currentPart);

  if (!part) {
    return <div>Part not found.</div>;
  }

  const totalPages = Math.ceil(part.questions.length / QUESTIONS_PER_PAGE);
  const startIndex = currentPage * QUESTIONS_PER_PAGE;
  const endIndex = startIndex + QUESTIONS_PER_PAGE;
  const currentQuestions = part.questions.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    // part-1 intro
    <div className="px-10">
      <ProgressBar answers={answers} />

      <div className="flex flex-col gap-8.5 py-5">
        {currentQuestions.map((question, idx) => (
          <div key={question.id}>
            <h2 className="mb-6">
              {startIndex + idx + 1}. {question.question}
            </h2>
            <RatingSelector
              value={
                (answers.find((a) => a.questionId === question.id)
                  ?.answer as number) || null
              }
              onChange={(value) => addAnswer(question.id, value)}
            />
            {idx < currentQuestions.length - 1 && (
              <hr className="mt-6 border-t border-gray-300" />
            )}
          </div>
        ))}
      </div>
      <Navigator
        onNext={handleNext}
        onBack={handleBack}
        currentPage={currentPage + 1}
        totalPages={totalPages}
      />
    </div>
  );
}
