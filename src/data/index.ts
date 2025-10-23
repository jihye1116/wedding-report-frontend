// 설문 데이터 내보내기
export { detailedSurveyData } from "./detailedSurveyData";

// 타입 내보내기
export type {
  SurveyData,
  SurveyPart,
  SurveyQuestion,
  SurveyAnswer,
  SurveyResponse,
} from "../types/survey";

// 유틸리티 함수 내보내기
export {
  getSurveyPart,
  getSurveyQuestion,
  getQuestionsByPart,
  calculatePartProgress,
  isSurveyComplete,
  isPartComplete,
  exportSurveyAnswers,
} from "../utils/surveyUtils";

// 훅 내보내기
export { useSurvey } from "../hooks/useSurvey";
