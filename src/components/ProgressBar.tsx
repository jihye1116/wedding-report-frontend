"use client";

import { useAtomValue } from "jotai";

import { detailedSurveyData } from "@/data/detailedSurveyData";
import { currentPageAtom, currentPartAtom } from "@/store/surveyStore";
import { cn } from "@/utils/cn";

interface ProgressBarProps {
  className?: string;
}

export function ProgressBar({ className }: ProgressBarProps) {
  const currentPart = useAtomValue(currentPartAtom);
  const currentPage = useAtomValue(currentPageAtom);

  // 전체 문항 수
  const totalQuestions = detailedSurveyData.parts.reduce(
    (acc, part) => acc + part.questions.length,
    0,
  );

  // 현재까지 완료된 문항 수 계산
  let completedQuestions = 0;

  // 이전 파트들의 모든 문항
  for (let i = 0; i < currentPart - 1; i++) {
    completedQuestions += detailedSurveyData.parts[i].questions.length;
  }

  // 현재 파트에서 현재 페이지까지의 문항
  // intro 페이지(0)가 아닌 경우에만 추가
  if (currentPage > 0) {
    const currentPartData = detailedSurveyData.parts[currentPart - 1];
    let questionsPerPage = 5;
    if (currentPartData.partNumber === 3) {
      questionsPerPage = 6;
    } else if (currentPartData.partNumber === 4) {
      questionsPerPage = 4;
    }
    // 현재 페이지까지 보여진 문항 수 (intro 페이지 제외)
    completedQuestions += Math.min(
      currentPage * questionsPerPage,
      currentPartData.questions.length,
    );
  }

  const progress = completedQuestions / totalQuestions;

  return (
    <div
      className={cn(
        "relative my-5 h-4 w-full rounded-full bg-gray-100",
        className,
      )}
    >
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-linear-to-r from-[#6DD4BD]/10 to-[#6DD4BD] transition-all duration-300 ease-in-out"
        style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
      />
    </div>
  );
}
