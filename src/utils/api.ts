import {
  ApiErrorResponse,
  SubmitSurveyRequest,
  SubmitSurveyResponse,
} from "@/types/api";

// 환경변수에서 API URL을 가져옵니다. 없으면 기본값 사용
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

/**
 * 설문 데이터를 백엔드에 제출합니다.
 */
export async function submitSurvey(
  data: SubmitSurveyRequest,
): Promise<SubmitSurveyResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/survey/submit-individual`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // 에러 응답 처리
      const errorData: ApiErrorResponse = await response.json();
      const errorMessage =
        typeof errorData.detail === "string"
          ? errorData.detail
          : "설문 제출에 실패했습니다.";

      throw new Error(errorMessage);
    }

    const result: SubmitSurveyResponse = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("네트워크 오류가 발생했습니다.");
  }
}
