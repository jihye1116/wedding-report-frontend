"use client";

import { useEffect } from "react";
import Image from "next/image";

import { PartPageTemplate } from "@/components/PartPageTemplate";
import { TextAreaField } from "@/components/TextAreaField";
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

  // 주관식 답변 변경 핸들러
  const handleTextChange = (questionId: number, value: string) => {
    console.log(`[Part4] Question ${questionId} 답변:`, value);
    addAnswer(questionId, value);
  };

  // 현재 저장된 모든 Part4 답변 출력 함수
  const logAllPart4Answers = () => {
    const part4Answers = answers.filter((answer) => {
      const question = part.questions.find((q) => q.id === answer.questionId);
      return question !== undefined;
    });
    console.log("=== Part4 전체 답변 ===");
    part4Answers.forEach((answer) => {
      const question = part.questions.find((q) => q.id === answer.questionId);
      console.log(`Q${answer.questionId}: ${question?.question}`);
      console.log(`A: ${answer.answer}`);
      console.log("---");
    });
    return part4Answers;
  };

  // Part4 답변이 변경될 때마다 전체 답변 출력
  useEffect(() => {
    const part4QuestionIds = part.questions.map((q) => q.id);
    const part4Answers = answers.filter((answer) =>
      part4QuestionIds.includes(answer.questionId),
    );

    if (part4Answers.length > 0) {
      console.log("📝 Part4 답변 업데이트됨:");
      logAllPart4Answers();
    }
  }, [answers, part.questions]);

  // 전역에서 호출 가능하도록 window 객체에 함수 추가
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).logPart4Answers = logAllPart4Answers;
      console.log(
        "💡 브라우저 콘솔에서 window.logPart4Answers() 를 호출하여 Part4 답변을 확인할 수 있습니다.",
      );
    }
  }, [answers, part.questions]);

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

  const renderQuestion = (
    question: SurveyQuestion,
    idx: number,
    globalQuestionNumber: number,
  ) => (
    <>
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
      <TextAreaField
        value={
          (answers.find((a) => a.questionId === question.id)
            ?.answer as string) || ""
        }
        onChange={(name, value) => handleTextChange(question.id, value)}
        name={`question-${question.id}`}
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
      customValidation={validateTextAnswers}
    />
  );
}
