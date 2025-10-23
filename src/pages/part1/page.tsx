"use client";

import { RatingSelector } from "@/components/RatingSelector";
import { detailedSurveyData } from "@/data/detailedSurveyData";
import { useSurvey } from "@/hooks/useSurvey";
import { getSurveyPart } from "@/utils/surveyUtils";
import { PartPageTemplate } from "@/components/PartPageTemplate";
import Part1Intro from "./intro";

const QUESTIONS_PER_PAGE = 5;

export default function Part1Page() {
  const { answers, addAnswer } = useSurvey({
    surveyData: detailedSurveyData,
  });

  const part = detailedSurveyData.parts[0]; // Part 1 직접 참조

  if (!part) {
    return <div>Part not found.</div>;
  }

  const renderQuestion = (question: any, idx: number, startIndex: number) => (
    <>
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
      {idx < 4 && <hr className="mt-6 border-t border-gray-300" />}
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
    />
  );
}
