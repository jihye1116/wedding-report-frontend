"use client";

import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";

import CelebrationImage from "@/assets/images/celebration.png";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { answersAtom, introDataAtom } from "@/store/surveyStore";
import { submitSurvey } from "@/utils/api";
import { transformSurveyAnswersToApi } from "@/utils/surveyTransformer";

export default function FinishPage() {
  const [answers] = useAtom(answersAtom);
  const [introData] = useAtom(introDataAtom);
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [surveyResult, setSurveyResult] = useState<{
    survey_id: string;
    is_complete: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async () => {
    try {
      setError(null);

      // 데이터 유효성 검사
      if (!introData.name || !introData.phoneNumber || !introData.gender) {
        throw new Error("기본 정보가 누락되었습니다.");
      }

      if (!introData.partnerName || !introData.partnerPhoneNumber) {
        throw new Error("파트너 정보가 누락되었습니다.");
      }

      if (!introData.relationshipDuration) {
        throw new Error("연애 기간 정보가 누락되었습니다.");
      }

      if (answers.length === 0) {
        throw new Error("설문 답변이 없습니다.");
      }

      // 답변 데이터를 API 형식으로 변환
      const apiAnswers = transformSurveyAnswersToApi(answers);

      // API 요청 데이터 구성
      const requestData = {
        my_name: introData.name,
        my_phone: introData.phoneNumber,
        my_gender: introData.gender,
        partner_name: introData.partnerName,
        partner_phone: introData.partnerPhoneNumber,
        relationship_duration: introData.relationshipDuration,
        event_promotion_agree: introData.event_promotion_agree,
        my_answers: apiAnswers,
      };
      console.log(requestData);

      // 백엔드에 제출 (응답을 기다리지 않음 - fire and forget)
      submitSurvey(requestData).catch((err) => {
        // 에러는 콘솔에만 로그하고 사용자에게는 영향 없음
        console.error("설문 제출 중 에러:", err);
      });

      // 응답을 기다리지 않고 바로 완료 화면 표시
      setSurveyResult({
        survey_id: "pending",
        is_complete: false,
        message: "설문이 제출되었습니다.",
      });
      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "제출에 실패했습니다.");
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isSubmitting) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center text-lg text-[#E5E5E5]">
          답변을 제출하고 있습니다. <br />
          잠시만 기다려 주세요...
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <main className="wrapper flex flex-col gap-6 py-5 text-center leading-snug text-[#111111]">
          <h1 className="text-2xl font-bold text-red-600">제출 실패</h1>
          <p className="text-lg">{error}</p>
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-[#FF6B9D] px-6 py-3 font-semibold text-white hover:bg-[#FF5A8C]"
          >
            다시 시도하기
          </button>
        </main>
      </div>
    );
  }

  if (isSubmitted && surveyResult) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <main className="wrapper flex w-full flex-col gap-10 py-5 text-center leading-snug text-[#111111]">
          <h1 className="text-2xl font-bold">제출되었습니다 🌸</h1>

          <div className="result-gradient flex h-70 w-full items-center justify-center">
            <Image
              src={CelebrationImage}
              alt="Celebration"
              className=""
              width={185}
              height={250}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="mt-4">
              리포트 작업이 완료되면 문자 발송 예정이며, 영업일 기준 최대 2일
              소요될 수 있습니다.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return null;
}
