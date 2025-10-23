import { useRouter } from "next/navigation";
import { detailedSurveyData } from "@/data/detailedSurveyData";

export const usePartTransition = () => {
  const router = useRouter();

  const goToNextPart = (currentPartNumber: number) => {
    const nextPartNumber = currentPartNumber + 1;
    console.log("goToNextPart called", {
      currentPartNumber,
      nextPartNumber,
      totalParts: detailedSurveyData.parts.length,
    });
    if (nextPartNumber <= detailedSurveyData.parts.length) {
      console.log("Navigating to:", `/part${nextPartNumber}`);
      router.push(`/part${nextPartNumber}`);
    } else {
      // 모든 파트 완료 시 결과 페이지로 이동
      console.log("All parts completed, navigating to result");
      router.push("/result");
    }
  };

  const goToPreviousPart = (currentPartNumber: number) => {
    const prevPartNumber = currentPartNumber - 1;
    if (prevPartNumber >= 1) {
      router.push(`/part${prevPartNumber}`);
    } else {
      // 첫 번째 파트 이전은 메인 페이지로
      router.push("/");
    }
  };

  return {
    goToNextPart,
    goToPreviousPart,
  };
};
