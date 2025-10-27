"use client";

import { PartPageTemplate } from "@/components/PartPageTemplate";
import { TextQuestion } from "@/components/TextQuestion";
import { detailedSurveyData } from "@/data/detailedSurveyData";
import { useSurvey } from "@/hooks/useSurvey";
import type { SurveyQuestion } from "@/types/survey";

import Part4Intro from "./intro";

const QUESTIONS_PER_PAGE = 4;

interface Part4PageProps {
  onNext?: () => void;
  onBack?: () => void;
  currentPage?: number;
  onPageChange?: (page: number, isBackward?: boolean) => void;
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

  // 주관식 답변 검증: 모든 문항이 답변되었고, 빈 문자열이 아닌지 확인
  const validateTextAnswers = (
    questions: SurveyQuestion[],
    currentAnswers: typeof answers,
  ) => {
    return questions.every((question) => {
      const answer = currentAnswers.find((a) => a.questionId === question.id);
      // 답변이 존재하고, 문자열이며, 공백이 아닌 내용이 있어야 함
      return (
        answer &&
        typeof answer.answer === "string" &&
        answer.answer.trim().length > 0
      );
    });
  };

  return (
    <PartPageTemplate
      part={part}
      answers={answers}
      addAnswer={addAnswer}
      introComponent={<Part4Intro />}
      questionComponent={(
        question,
        idx,
        globalQuestionNumber,
        totalQuestionsInPage,
      ) => (
        <TextQuestion
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
      customValidation={validateTextAnswers}
    />
  );
}
