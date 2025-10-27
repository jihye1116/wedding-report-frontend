import { useState } from "react";

import { SurveyPart } from "@/types/survey";

interface UsePartNavigationProps {
  part: SurveyPart;
  questionsPerPage?: number;
  onNext?: () => void;
  onBack?: () => void;
  currentPage?: number;
  onPageChange?: (page: number, isBackward?: boolean) => void;
}

export const usePartNavigation = ({
  part,
  questionsPerPage = 5,
  onNext,
  onBack,
  currentPage: externalCurrentPage,
  onPageChange,
}: UsePartNavigationProps) => {
  const [internalCurrentPage, setInternalCurrentPage] = useState(0);

  // 외부에서 전달받은 currentPage가 있으면 사용, 없으면 내부 상태 사용
  const currentPage =
    externalCurrentPage !== undefined
      ? externalCurrentPage
      : internalCurrentPage;

  // isIntroPage와 currentQuestions는 PartPageTemplate에서 계산

  // 파트의 전체 페이지 수 (이미 정의된 totalPages 사용)
  const totalPages = part.totalPages;

  const handleNext = () => {
    // console.log("handleNext called", {
    //   currentPage,
    //   totalPages,
    //   partNumber: part.partNumber,
    // });
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      if (onPageChange) {
        onPageChange(newPage, false);
      } else {
        setInternalCurrentPage(newPage);
      }
    } else {
      // 현재 파트의 마지막 페이지에서 다음 파트로 이동
      console.log("Moving to next part:", part.partNumber + 1);
      if (onNext) {
        onNext();
      }
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      if (onPageChange) {
        onPageChange(newPage, true);
      } else {
        setInternalCurrentPage(newPage);
      }
    } else {
      // 현재 파트의 첫 페이지에서 이전 파트로 이동
      console.log("Moving to previous part:", part.partNumber - 1);
      if (onBack) {
        onBack();
      }
    }
  };

  return {
    currentPage,
    totalPages,
    handleNext,
    handleBack,
  };
};
