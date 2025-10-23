import {
  SurveyData,
  SurveyPart,
  SurveyQuestion,
  SurveyAnswer,
} from "../types/survey";

/**
 * 설문 데이터에서 특정 파트를 가져오는 함수
 */
export const getSurveyPart = (
  surveyData: SurveyData,
  partNumber: number,
): SurveyPart | undefined => {
  return surveyData.parts.find((part) => part.partNumber === partNumber);
};

/**
 * 설문 데이터에서 특정 질문을 가져오는 함수
 */
export const getSurveyQuestion = (
  surveyData: SurveyData,
  questionId: number,
): SurveyQuestion | undefined => {
  for (const part of surveyData.parts) {
    const question = part.questions.find((q) => q.id === questionId);
    if (question) return question;
  }
  return undefined;
};

/**
 * 특정 파트의 질문들을 가져오는 함수
 */
export const getQuestionsByPart = (
  surveyData: SurveyData,
  partNumber: number,
): SurveyQuestion[] => {
  const part = getSurveyPart(surveyData, partNumber);
  return part ? part.questions : [];
};

/**
 * 특정 파트의 진행률을 계산하는 함수
 */
export const calculatePartProgress = (
  part: SurveyPart,
  answers: SurveyAnswer[],
): number => {
  const answeredInPart = answers.filter((answer) =>
    part.questions.some((q) => q.id === answer.questionId),
  ).length;
  return Math.round((answeredInPart / part.totalQuestions) * 100);
};

/**
 * 설문 완료 여부를 확인하는 함수
 */
export const isSurveyComplete = (
  surveyData: SurveyData,
  answers: SurveyAnswer[],
): boolean => {
  return answers.length === surveyData.totalQuestions;
};

/**
 * 특정 파트 완료 여부를 확인하는 함수
 */
export const isPartComplete = (
  part: SurveyPart,
  answers: SurveyAnswer[],
): boolean => {
  const answeredInPart = answers.filter((answer) =>
    part.questions.some((q) => q.id === answer.questionId),
  ).length;
  return answeredInPart === part.totalQuestions;
};

/**
 * 설문 답변을 JSON 형태로 내보내는 함수
 */
export const exportSurveyAnswers = (answers: SurveyAnswer[]): string => {
  return JSON.stringify(answers, null, 2);
};
