import { useAtom } from "jotai";
import Image from "next/image";
import { Fragment } from "react";

import Female from "@/assets/images/female.svg";
import Male from "@/assets/images/male.svg";
import { ReportHeader } from "@/components/ReportHeader";
import { Tag } from "@/components/Tag";
import { reportDataAtom } from "@/store/surveyStore";

interface Part4ResultPageProps {
  step: number;
}

export default function Part4ResultPage({ step }: Part4ResultPageProps) {
  const [reportData] = useAtom(reportDataAtom);
  const maleName = reportData?.metadata?.male_name || "갑돌이";
  const femaleName = reportData?.metadata?.female_name || "갑순이";
  const relationshipPrediction = reportData?.relationship_prediction;
  const indicatorPredictions =
    relationshipPrediction?.indicator_predictions ?? [];
  const personalChanges = relationshipPrediction?.personal_changes ?? [];
  const flowerPathPoints = relationshipPrediction?.flower_path_points ?? [];

  return (
    <main className="font-pretendard flex flex-1 flex-col">
      <ReportHeader />
      {step === 1 && (
        <Fragment>
          <h1 className="wrapper py-5 text-xl font-bold text-[#111111] xl:pt-15">
            4. 주요 관계 지표 예측
          </h1>
          <div className="flex-3" />
          <p className="wrapper py-5 text-center text-lg font-medium text-[#111111]">
            관계는 서로를 따라 성장하고, <br />
            오늘의 이해가 내일의 신뢰로 이어집니다.
          </p>
          <div className="flex-5" />
        </Fragment>
      )}
      {step === 2 && (
        <article className="wrapper flex-1">
          <h1 className="py-5 text-xl font-bold text-[#111111] xl:pt-15">
            01 관계 방향성 요약
          </h1>
          <section className="my-5 rounded-xl border border-[#9AD8CA] p-5 xl:mt-10">
            <p className="leading-snug whitespace-pre-wrap text-black">
              {relationshipPrediction?.relationship_direction ??
                "관계 방향성 데이터를 불러오지 못했습니다."}
            </p>
          </section>
        </article>
      )}
      {step === 3 && (
        <article className="flex-1">
          <h1 className="wrapper py-5 text-xl font-bold text-[#111111] xl:pt-15">
            02 주요 지표별 예측
          </h1>

          <div className="wrapper grid grid-cols-1 gap-10 py-5 md:gap-5 xl:mt-5 xl:grid-cols-4 2xl:gap-[2%]">
            {indicatorPredictions.length > 0 ? (
              indicatorPredictions.map((indicator, index) => {
                const getTagLevel = (level: string) => {
                  switch (level) {
                    case "높음":
                      return "high";
                    case "중간":
                      return "medium";
                    case "낮음":
                      return "low";
                    default:
                      return "medium";
                  }
                };

                return (
                  <section
                    key={index}
                    className="flex flex-col gap-3 rounded-3xl border border-[#DCDCDC] p-5 text-black"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <h2 className="text-lg leading-relaxed font-bold">
                        {indicator.indicator}
                      </h2>
                      <Tag level={getTagLevel(indicator.level)} />
                    </div>
                    <p className="leading-snug">{indicator.description}</p>
                  </section>
                );
              })
            ) : (
              <p className="text-black">
                지표 예측 데이터를 불러오지 못했습니다.
              </p>
            )}
          </div>
        </article>
      )}
      {step === 4 && (
        <article className="flex-1">
          <h1 className="wrapper py-5 text-xl font-bold text-[#111111] xl:pt-15">
            03 개인의 변화
          </h1>
          <div className="wrapper flex flex-col gap-10 py-5 xl:mt-5">
            {personalChanges.length > 0 ? (
              personalChanges
                .slice()
                .sort((a, b) => {
                  const aMale = a.name === maleName;
                  const bMale = b.name === maleName;
                  // 여성 우선: 남성이면 1, 여성이면 0으로 정렬
                  return Number(aMale) - Number(bMale);
                })
                .map((change, index) => {
                  const isMale = change.name === maleName;
                  return (
                    <section key={index}>
                      <div
                        className={`flex items-end gap-3 ${isMale ? "justify-end" : ""}`}
                      >
                        {isMale ? (
                          <>
                            <p className="leading-loose font-semibold">
                              {change.name} 님의 변화
                            </p>
                            <Image src={Male} alt="남성" width={48} />
                          </>
                        ) : (
                          <>
                            <Image
                              src={Female}
                              alt="여성"
                              width={48}
                              className="rotate-y-180"
                            />
                            <p className="leading-loose font-semibold">
                              {change.name} 님의 변화
                            </p>
                          </>
                        )}
                      </div>
                      <div className="flex flex-col gap-5 bg-[#F8F8F8] p-5 leading-snug">
                        <h2 className="text-lg font-semibold">
                          {change.title}
                        </h2>
                        <p className="whitespace-pre-wrap">
                          {change.description}
                        </p>
                      </div>
                    </section>
                  );
                })
            ) : (
              <p className="text-black">
                개인의 변화 데이터를 불러오지 못했습니다.
              </p>
            )}
          </div>
        </article>
      )}
      {step === 5 && (
        <article className="wrapper">
          <h1 className="py-5 text-xl font-bold text-[#111111] xl:pt-15">
            04 핵심 꽃길 포인트
          </h1>
          <section className="my-5 flex flex-col gap-7.5 rounded-xl border border-[#9AD8CA] p-5 xl:mt-10">
            {flowerPathPoints.length > 0 ? (
              flowerPathPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 leading-snug text-black"
                >
                  <h2 className="font-bold">
                    {index + 1}. {point.point}
                  </h2>
                  <p>{point.description}</p>
                </div>
              ))
            ) : (
              <p className="text-black">
                핵심 꽃길 포인트 데이터를 불러오지 못했습니다.
              </p>
            )}
          </section>
        </article>
      )}
    </main>
  );
}
