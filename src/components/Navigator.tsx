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
  isResultPage?: boolean;
}

export const Navigator = ({
  onNext,
  onBack,
  currentPage,
  totalPages,
  partNumber,
  canProceed = true,
  isResultPage = false,
}: NavigatorProps) => {
  // 전체 페이지 수 계산
  const totalAllPages = isResultPage
    ? totalPages || 0
    : detailedSurveyData.parts.reduce((sum, part) => sum + part.totalPages, 0);

  // 현재 파트까지의 누적 페이지 수 계산 (설문 페이지일 경우)
  const currentPartIndex = (partNumber || 1) - 1;
  const pagesBeforeCurrentPart = isResultPage
    ? 0
    : detailedSurveyData.parts
        .slice(0, currentPartIndex)
        .reduce((sum, part) => sum + part.totalPages, 0);

  // 전체 페이지 번호
  const globalCurrentPage = isResultPage
    ? (currentPage || 0) + 1
    : pagesBeforeCurrentPart + (currentPage || 0) + 1;

  return (
    <div className="h-26 w-full shrink-0">
      <footer className="wrapper fixed bottom-0 left-0 z-50 flex w-full items-center justify-between bg-white pt-5 pb-10">
        <NavigateButton direction="left" onClick={onBack || (() => {})} />
        {currentPage !== undefined && totalPages !== undefined && (
          <span className="text-black">
            {globalCurrentPage} / {totalAllPages}
          </span>
        )}
        <NavigateButton
          direction="right"
          onClick={(canProceed && onNext) || (() => {})}
          color={canProceed ? "green" : "gray"}
        />
      </footer>
    </div>
  );
};
