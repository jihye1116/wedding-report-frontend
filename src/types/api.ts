// API 관련 타입 정의

export interface ApiAnswer {
  question_id: string;
  question_text: string;
  answer: string | number;
  section: string;
  dimension: string;
  part: string;
}

export interface SubmitSurveyRequest {
  my_name: string;
  my_phone: string;
  my_gender: string;
  partner_name: string;
  partner_phone: string;
  my_answers: ApiAnswer[];
}

export interface SubmitSurveyResponse {
  success: boolean;
  survey_id: string;
  is_complete: boolean;
  message: string;
  waiting_for?: "male" | "female";
  analysis?: Record<string, unknown>; // 분석 결과 (is_complete가 true일 때)
}

export interface ApiErrorResponse {
  detail:
    | string
    | Array<{
        loc: string[];
        msg: string;
        type: string;
      }>;
}
