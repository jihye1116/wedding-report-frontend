import {
  ApiErrorResponse,
  SubmitSurveyRequest,
  SubmitSurveyResponse,
  ReportData,
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

/**
 * 설문 결과 리포트를 가져옵니다.
 */
export async function getReportData(surveyId: string): Promise<ReportData> {
  try {
    // 환경변수 또는 하드코딩된 URL 사용
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://d2bcc927f405.ngrok-free.app";
    const url = `${baseUrl}/survey/admin/surveys/${surveyId}`;
    // console.log("API 호출 URL:", url);
    // console.log("Survey ID:", surveyId);
    // console.log("Base URL:", baseUrl);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "true", // ngrok 브라우저 경고 스킵
      },
      // Content-Type 헤더 제거 - GET 요청에서는 불필요하고 CORS preflight를 유발함
    });

    // console.log("API 응답 상태:", response.status, response.statusText);
    // console.log("API 응답 헤더:", response.headers.get("content-type"));
    // console.log("응답 URL:", response.url);
    // console.log("리다이렉트 여부:", response.redirected);

    if (!response.ok) {
      // 응답이 HTML인지 확인
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("text/html")) {
        const htmlText = await response.text();
        console.error("HTML 응답 받음:", htmlText.substring(0, 200));
        throw new Error(
          `서버가 HTML을 반환했습니다 (${response.status}). API 엔드포인트를 확인해주세요.`,
        );
      }

      // JSON 에러 응답 처리
      try {
        const errorData: ApiErrorResponse = await response.json();
        const errorMessage =
          typeof errorData.detail === "string"
            ? errorData.detail
            : "리포트 데이터를 불러오는데 실패했습니다.";

        throw new Error(errorMessage);
      } catch (jsonError) {
        throw new Error(
          `API 호출 실패 (${response.status}): ${response.statusText}`,
        );
      }
    }

    // 응답이 JSON인지 확인
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textResponse = await response.text();
      console.error("JSON이 아닌 응답:", textResponse.substring(0, 200));
      throw new Error("서버가 JSON이 아닌 응답을 반환했습니다.");
    }

    const result: any = await response.json();
    // console.log("API response:", result);

    // API 응답 구조 확인 및 데이터 추출
    if (result.survey && result.survey.analysisResult) {
      // console.log("survey.analysisResult 구조:", result.survey.analysisResult);

      // createdAt을 metadata.generated_at으로 매핑
      const analysisResult = result.survey.analysisResult;
      if (result.createdAt && analysisResult.metadata) {
        analysisResult.metadata.generated_at = result.createdAt;
      }

      return analysisResult as ReportData;
    }

    return result as ReportData;
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);

    if (error instanceof TypeError && error.message.includes("fetch")) {
      console.error("네트워크 연결 실패 - 서버가 실행 중인지 확인하세요");
      throw new Error(
        "서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.",
      );
    }

    if (error instanceof Error) {
      console.error("에러 메시지:", error.message);
      throw error;
    }

    console.error("알 수 없는 에러:", error);
    throw new Error("네트워크 오류가 발생했습니다.");
  }
}
