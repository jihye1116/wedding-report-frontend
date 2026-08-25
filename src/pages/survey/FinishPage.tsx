"use client";

import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";

import Logo from "@/assets/icons/logo.svg";
import PalmPathImage from "@/assets/images/palmpath.png";
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

      // 답변 데이터를 ID 순서로 정렬한 후 API 형식으로 변환
      const sortedAnswers = [...answers].sort(
        (a, b) => a.questionId - b.questionId,
      );
      const apiAnswers = transformSurveyAnswersToApi(sortedAnswers);

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
      <div className="flex h-dvh flex-col">
        <Image
          className="mx-auto py-5 xl:mt-15 xl:mb-10 xl:w-[382px]"
          src={Logo}
          alt="Logo"
          height={70}
        />

        <main className="wrapper flex w-full flex-1 flex-col items-center justify-center gap-8 py-5 text-center leading-snug text-[#111111]">
          <div>
            <h1 className="text-2xl font-medium">제출 완료 🌸</h1>
            <p className="mt-4 text-base font-medium">
              설문이 성공적으로 제출되었습니다.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 text-left text-sm">
            <p className="flex items-start gap-2">
              <span>✉️</span>
              <span>
                리포트 작업이 완료되면 등록하신
                <br className="xl:hidden" />
                휴대전화 번호로 문자를 보내드립니다.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span>🕐</span>
              <span>
                두 분 모두 설문을 완료하신 시점으로부터
                <br className="xl:hidden" />
                최대 1시간 이내에 리포트가 발송됩니다.
              </span>
            </p>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://apps.apple.com/kr/app/palmpath/id6740755393",
                "_blank",
              )
            }
            className="mt-4 flex w-full items-center justify-between gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white xl:max-w-[500px]"
          >
            <span className="text-left">
              기다리는 동안 심심하다면
              <br />
              손금 궁합 보러가기 &gt;&gt;
            </span>
            <Image src={PalmPathImage} alt="손금" width={70} height={70} />
          </button>
          <div className="h-[100px]"></div>
        </main>
      </div>
    );
  }

  return null;
}
