import { useState } from "react";
import { SurveyPart } from "@/types/survey";
import { usePartTransition } from "./usePartTransition";

interface UsePartNavigationProps {
  part: SurveyPart;
  questionsPerPage?: number;
  onNext?: () => void;
  onBack?: () => void;
}

export const usePartNavigation = ({
  part,
  questionsPerPage = 5,
  onNext,
  onBack,
}: UsePartNavigationProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const { goToNextPart, goToPreviousPart } = usePartTransition();

  const isIntroPage = currentPage === 0;
  const questionPageIndex = currentPage - 1; // 소개 페이지(0) 다음부터 문항 시작
  const startIndex = questionPageIndex * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const currentQuestions = isIntroPage
    ? []
    : part.questions.slice(startIndex, endIndex);

  // 파트의 전체 페이지 수 (이미 정의된 totalPages 사용)
  const totalPages = part.totalPages;

  const handleNext = () => {
    console.log("handleNext called", {
      currentPage,
      totalPages,
      partNumber: part.partNumber,
    });
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      // 현재 파트의 마지막 페이지에서 다음 파트로 이동
      console.log("Moving to next part:", part.partNumber + 1);
      if (onNext) {
        onNext();
      } else {
        goToNextPart(part.partNumber);
      }
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else {
      // 현재 파트의 첫 페이지에서 이전 파트로 이동
      console.log("Moving to previous part:", part.partNumber - 1);
      if (onBack) {
        onBack();
      } else {
        goToPreviousPart(part.partNumber);
      }
    }
  };

  return {
    currentPage,
    totalPages,
    isIntroPage,
    currentQuestions,
    startIndex,
    handleNext,
    handleBack,
  };
};
