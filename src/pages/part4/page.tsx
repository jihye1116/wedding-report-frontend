"use client";

import { TextAreaField } from "@/components/TextAreaField";
import { detailedSurveyData } from "@/data/detailedSurveyData";
import { useSurvey } from "@/hooks/useSurvey";
import { getSurveyPart } from "@/utils/surveyUtils";
import { PartPageTemplate } from "@/components/PartPageTemplate";
import Part4Intro from "./intro";

const QUESTIONS_PER_PAGE = 5;

export default function Part4Page() {
  const { answers, addAnswer } = useSurvey({
    surveyData: detailedSurveyData,
  });

  const part = detailedSurveyData.parts[3]; // Part 4 직접 참조

  if (!part) {
    return <div>Part not found.</div>;
  }

  const renderQuestion = (question: any, idx: number, startIndex: number) => (
    <>
      <h2 className="mb-6">
        {startIndex + idx + 1}. {question.question}
      </h2>
      <TextAreaField
        value={
          (answers.find((a) => a.questionId === question.id)
            ?.answer as string) || ""
        }
        onChange={(value) => addAnswer(question.id, value)}
        name=""
        placeholder=""
      />
      {idx < 4 && <hr className="mt-6 border-t border-gray-300" />}
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
    />
  );
}
