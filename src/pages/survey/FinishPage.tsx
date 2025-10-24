"use client";

import { useState } from "react";
import { useAtom } from "jotai";
import Image from "next/image";

import CelebrationImage from "@/assets/images/celebration.png";
import { answersAtom, introDataAtom } from "@/store/surveyStore";
import { submitSurvey } from "@/utils/api";
import { transformSurveyAnswersToApi } from "@/utils/surveyTransformer";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function FinishPage() {
  const [answers] = useAtom(answersAtom);
  const [introData] = useAtom(introDataAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [surveyResult, setSurveyResult] = useState<{
    survey_id: string;
    is_complete: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);

      // 데이터 유효성 검사
      if (!introData.name || !introData.phoneNumber || !introData.gender) {
        throw new Error("기본 정보가 누락되었습니다.");
      }

      if (!introData.partnerName || !introData.partnerPhoneNumber) {
        throw new Error("파트너 정보가 누락되었습니다.");
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
        my_answers: apiAnswers,
      };

      console.log(requestData);

      // 백엔드에 제출
      const result = await submitSurvey(requestData);

      setSurveyResult({
        survey_id: result.survey_id,
        is_complete: result.is_complete,
        message: result.message,
      });
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "제출에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <LoadingSpinner />
          <p className="text-lg text-[#111111]">설문을 제출하고 있습니다...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <main className="flex flex-col gap-6 px-10 py-5 text-center leading-snug text-[#111111]">
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
        <main className="flex flex-col gap-10 px-10 py-5 text-center leading-snug text-[#111111]">
          <h1 className="text-2xl font-bold">제출되었습니다 🌸</h1>
          <section className="flex flex-col gap-4">
            <p>
              &quot;행복한 결혼이란 두 영혼이 서로를 이해하고, 함께 성장하는
              여정이다.&quot;
            </p>
            <p className="text-lg">- 톨스토이</p>
          </section>
          <Image src={CelebrationImage} alt="Celebration" className="mx-auto" />
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-[#FF6B9D]">
              {surveyResult.message}
            </p>
            {!surveyResult.is_complete && (
              <p className="text-sm text-gray-600">
                상대방이 설문을 완료하면 자동으로 분석이 진행됩니다.
              </p>
            )}
            <p className="mt-4">
              리포트 작업이 완료되면 문자 발송 예정이며, 영업일 기준 최대 2일
              소요될 수 있습니다.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-dvh items-center justify-center">
      <main className="flex flex-col gap-10 px-10 py-5 text-center leading-snug text-[#111111]">
        <h1 className="text-2xl font-bold">설문을 완료하셨습니다! 🌸</h1>
        <section className="flex flex-col gap-4">
          <p>
            &quot;행복한 결혼이란 두 영혼이 서로를 이해하고, 함께 성장하는
            여정이다.&quot;
          </p>
          <p className="text-lg">- 톨스토이</p>
        </section>
        <Image src={CelebrationImage} alt="Celebration" className="mx-auto" />
        <div className="flex flex-col gap-4">
          <p>
            아래 버튼을 눌러 설문을 제출해주세요.
            <br />
            제출 후 리포트 작업이 완료되면 문자로 알려드립니다.
          </p>
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-[#FF6B9D] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#FF5A8C]"
          >
            설문 제출하기
          </button>
          <p className="text-sm text-gray-600">
            * 영업일 기준 최대 2일 소요될 수 있습니다.
          </p>
        </div>
      </main>
    </div>
  );
}
