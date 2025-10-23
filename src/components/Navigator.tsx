"use client";

import { NavigateButton } from "@/components/NavigateButton";
import { detailedSurveyData } from "@/data/detailedSurveyData";

interface NavigatorProps {
  onNext?: () => void;
  onBack?: () => void;
  currentPage?: number;
  totalPages?: number;
  partNumber?: number;
  canProceed?: boolean;
}

export const Navigator = ({
  onNext,
  onBack,
  currentPage,
  totalPages,
  partNumber,
  canProceed = true,
}: NavigatorProps) => {
  // 전체 파트의 총 페이지 수 계산 (IntroductionPage 포함)
  const totalAllPages =
    1 +
    detailedSurveyData.parts.reduce((sum, part) => sum + part.totalPages, 0);

  // 현재 파트까지의 누적 페이지 수 계산 (IntroductionPage 포함)
  const currentPartIndex = (partNumber || 1) - 1;
  const pagesBeforeCurrentPart =
    1 +
    detailedSurveyData.parts
      .slice(0, currentPartIndex)
      .reduce((sum, part) => sum + part.totalPages, 0);

  // 전체 페이지 번호 (IntroductionPage + 현재 파트의 페이지 + 이전 파트들의 누적 페이지)
  const globalCurrentPage = pagesBeforeCurrentPart + (currentPage || 1);

  return (
    <footer className="flex w-full items-center justify-between p-10">
      <NavigateButton direction="left" onClick={onBack || (() => {})} />
      {currentPage && totalPages && (
        <span className="text-black">
          {globalCurrentPage} / {totalAllPages}
        </span>
      )}
      <NavigateButton
        direction="right"
        onClick={onNext || (() => {})}
        color={canProceed ? "green" : "gray"}
      />
    </footer>
  );
};
