import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";

import { answersAtom } from "@/store/surveyStore";
import { SurveyAnswer, SurveyData, SurveyQuestion } from "@/types/survey";
import {
  calculatePartProgress,
  getSurveyPart,
  getSurveyQuestion,
  isPartComplete,
  isSurveyComplete,
} from "@/utils/surveyUtils";

interface UseSurveyProps {
  surveyData: SurveyData;
}

interface UseSurveyReturn {
  // 현재 상태
  currentQuestionId: number;
  currentQuestion: SurveyQuestion | undefined;
  currentPart: number;

  // 답변 관리
  answers: SurveyAnswer[];
  addAnswer: (questionId: number, answer: string | number) => void;
  updateAnswer: (questionId: number, answer: string | number) => void;
  removeAnswer: (questionId: number) => void;
  getAnswer: (questionId: number) => string | number | undefined;

  // 진행률
  partProgress: number;

  // 완료 상태
  isComplete: boolean;
  isPartComplete: boolean;

  // 네비게이션
  goToQuestion: (questionId: number) => void;
  goToPart: (partNumber: number) => void;

  // 유틸리티
  resetSurvey: () => void;
  exportAnswers: () => string;
}

export const useSurvey = ({ surveyData }: UseSurveyProps): UseSurveyReturn => {
  const [answers, setAnswers] = useAtom(answersAtom);
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);

  // 현재 질문 정보
  const currentQuestion = getSurveyQuestion(surveyData, currentQuestionId);

  // 현재 파트 정보
  const currentPart =
    surveyData.parts.find((part) =>
      part.questions.some((q) => q.id === currentQuestionId),
    )?.partNumber || 1;

  // 진행률 계산
  const partProgress = calculatePartProgress(
    getSurveyPart(surveyData, currentPart)!,
    answers,
  );

  // 완료 상태
  const isComplete = isSurveyComplete(surveyData, answers);
  const isCurrentPartComplete = isPartComplete(
    getSurveyPart(surveyData, currentPart)!,
    answers,
  );

  // 답변 추가
  const addAnswer = useCallback(
    (questionId: number, answer: string | number) => {
      setAnswers((prev: SurveyAnswer[]) => {
        const existingIndex = prev.findIndex(
          (a: SurveyAnswer) => a.questionId === questionId,
        );
        if (existingIndex >= 0) {
          // 이미 답변이 있으면 업데이트
          const updated = [...prev];
          updated[existingIndex] = { questionId, answer };
          return updated;
        } else {
          // 새로운 답변 추가
          return [...prev, { questionId, answer }];
        }
      });
    },
    [setAnswers],
  );

  // 답변 업데이트
  const updateAnswer = useCallback(
    (questionId: number, answer: string | number) => {
      addAnswer(questionId, answer);
    },
    [addAnswer],
  );

  // 답변 제거
  const removeAnswer = useCallback(
    (questionId: number) => {
      setAnswers((prev: SurveyAnswer[]) =>
        prev.filter((a: SurveyAnswer) => a.questionId !== questionId),
      );
    },
    [setAnswers],
  );

  // 답변 가져오기
  const getAnswer = useCallback(
    (questionId: number) => {
      const answer = answers.find(
        (a: SurveyAnswer) => a.questionId === questionId,
      );
      return answer?.answer;
    },
    [answers],
  );

  // 특정 질문으로 이동
  const goToQuestion = useCallback((questionId: number) => {
    setCurrentQuestionId(questionId);
  }, []);

  // 특정 파트로 이동
  const goToPart = useCallback(
    (partNumber: number) => {
      const part = getSurveyPart(surveyData, partNumber);
      if (part && part.questions.length > 0) {
        setCurrentQuestionId(part.questions[0].id);
      }
    },
    [surveyData],
  );

  // 설문 초기화
  const resetSurvey = useCallback(() => {
    setAnswers([]);
    setCurrentQuestionId(1);
  }, [setAnswers]);

  // 답변 내보내기
  const exportAnswers = useCallback(() => {
    return JSON.stringify(answers, null, 2);
  }, [answers]);

  // 세션 스토리지에 답변 저장 (탭 닫으면 자동 삭제)
  useEffect(() => {
    if (answers.length > 0) {
      sessionStorage.setItem("survey-answers", JSON.stringify(answers));
    }
  }, [answers]);

  // 세션 스토리지에서 답변 복원 (초기화 시에만)
  useEffect(() => {
    const savedAnswers = sessionStorage.getItem("survey-answers");
    if (savedAnswers && answers.length === 0) {
      try {
        const parsedAnswers = JSON.parse(savedAnswers);
        // 초기 로딩 시에만 복원하기 위해 setTimeout 사용
        setTimeout(() => {
          setAnswers(parsedAnswers);
        }, 0);
      } catch (error) {
        console.error("Failed to parse saved answers:", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    currentQuestionId,
    currentQuestion,
    currentPart,
    answers,
    addAnswer,
    updateAnswer,
    removeAnswer,
    getAnswer,
    partProgress,
    isComplete,
    isPartComplete: isCurrentPartComplete,
    goToQuestion,
    goToPart,
    resetSurvey,
    exportAnswers,
  };
};
