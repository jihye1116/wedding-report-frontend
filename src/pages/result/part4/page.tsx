import Image from "next/image";
import { Fragment } from "react";
import { useAtom } from "jotai";

import Female from "@/assets/images/female.svg";
import Male from "@/assets/images/male.svg";
import { ReportHeader } from "@/components/ReportHeader";
import { Tag } from "@/components/Tag";
import { ReportData } from "@/types/api";
import { reportDataAtom } from "@/store/surveyStore";

interface Part4ResultPageProps {
  step: number;
}

export default function Part4ResultPage({ step }: Part4ResultPageProps) {
  const [reportData] = useAtom(reportDataAtom);
  const maleName = reportData?.metadata?.male_name || "갑돌이";
  const femaleName = reportData?.metadata?.female_name || "갑순이";

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
            &quot; 서로의 리듬이 안정되면, 관계의 방향성은 자연히 드러납니다.
            &quot;
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
              {reportData?.relationship_prediction?.relationship_direction ||
                `${maleName}과 ${femaleName}의 관계는 앞으로도 큰 불안정 없이 꾸준히 이어질 가능성이 있습니다. 서로의 생활 리듬이 이미 조율되어 있고, 갈등이 생겨도 감정적으로 부딪히기보다 정리하고 다시 균형을 찾는 방식이 익숙해져 있습니다.`}
            </p>
          </section>
        </article>
      )}
      {step === 3 && (
        <article className="flex-1">
          <h1 className="wrapper py-5 text-xl font-bold text-[#111111] xl:pt-15">
            02 주요 지표별 예측
          </h1>

          <div className="wrapper grid grid-cols-1 gap-10 py-5 xl:mt-5 xl:grid-cols-4">
            {reportData?.relationship_prediction?.indicator_predictions?.map(
              (indicator, index) => {
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
              },
            ) || (
              // 기본값 (데이터가 없을 때)
              <>
                <section className="flex flex-col gap-3 rounded-3xl border border-[#DCDCDC] p-5 text-black">
                  <div className="flex items-center justify-center gap-1.5">
                    <h2 className="text-lg leading-relaxed font-bold">
                      정서 안정성
                    </h2>
                    <Tag level="high" />
                  </div>
                  <p className="leading-snug">
                    감정의 폭이 크지 않고, 갈등 후에도 빠르게 균형을 회복할 수
                    있을 가능성이 높습니다. 다만 감정 표현이 과도하게 절제될
                    때는 정서적 거리감이 생길 수 있습니다.
                  </p>
                </section>
                <section className="flex flex-col gap-3 rounded-3xl border border-[#DCDCDC] p-5 text-black">
                  <div className="flex items-center justify-center gap-1.5">
                    <h2 className="text-lg leading-relaxed font-bold">
                      소통 리듬
                    </h2>
                    <Tag level="medium" />
                  </div>
                  <p className="leading-snug">
                    서로 배려하고 적응하려는 성향이 강해서 대화가 크게 어긋나지
                    않습니다. 하지만 둘 다 감정을 직접적으로 표현하는 스타일이
                    아니기 때문에 오해가 생길 때는 말을 아끼거나 속마음을 숨길
                    수 있습니다.
                  </p>
                </section>
                <section className="flex flex-col gap-3 rounded-3xl border border-[#DCDCDC] p-5 text-black">
                  <div className="flex items-center justify-center gap-1.5">
                    <h2 className="text-lg leading-relaxed font-bold">
                      갈등 회복력
                    </h2>
                    <Tag level="high" />
                  </div>
                  <p className="leading-snug">
                    갈등이 생겨도 서로 맞춰주려는 태도와 조절 능력이 좋아 금방
                    화해할 수 있습니다. 감정에 휩쓸리지 않고, 문제를 차분히
                    해결하려고 할 가능성이 높습니다.
                  </p>
                </section>
                <section className="flex flex-col gap-3 rounded-3xl border border-[#DCDCDC] p-5 text-black">
                  <div className="flex items-center justify-center gap-1.5">
                    <h2 className="text-lg leading-relaxed font-bold">
                      역할 조율도
                    </h2>
                    <Tag level="medium" />
                  </div>
                  <p className="leading-snug">
                    두 사람 모두 다른 사람을 배려하는 점이 높아 역할을 나누는 데
                    심한 갈등은 적겠지만, 서로 양보하다가 할 일을 미루거나,
                    솔직한 의견을 말하지 못해 답답함을 느낄 수 있습니다.
                  </p>
                </section>
              </>
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
            {reportData?.relationship_prediction?.personal_changes
              ?.slice()
              .sort((a, b) => {
                const aMale = a.name === maleName || a.name === "곤뇽독";
                const bMale = b.name === maleName || b.name === "곤뇽독";
                // 여성 우선: 남성이면 1, 여성이면 0으로 정렬
                return Number(aMale) - Number(bMale);
              })
              .map((change, index) => {
                const isMale =
                  change.name === maleName || change.name === "곤뇽독";
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
                      <h2 className="text-lg font-semibold">{change.title}</h2>
                      <p className="whitespace-pre-wrap">
                        {change.description}
                      </p>
                    </div>
                  </section>
                );
              }) || (
              // 기본값 (데이터가 없을 때)
              <>
                <section>
                  <div className="flex items-end justify-end gap-3">
                    <p className="leading-loose font-semibold">
                      {femaleName} 님의 변화
                    </p>
                    <Image src={Female} alt="여성" width={48} />
                  </div>
                  <div className="flex flex-col gap-5 bg-[#F8F8F8] p-5 leading-snug">
                    <h2 className="text-lg font-semibold">
                      '강해야 한다'는 무언의 압박에서 '흔들릴 수 있는 인간'으로
                      자신을 수용
                    </h2>
                    <p>
                      초기의 {femaleName}은 실용적 사고, 문제 해결 중심의 대화가
                      특징이었지만, 3년 차에서는 "당신은 피곤하겠다.", "말해줘서
                      고마워." 같은 정서적 언어와 반응이 늘어났습니다.
                    </p>
                    <p>
                      특히 자신의 불안(승진 후의 허무, 진로 회의 등)을 표현하고,
                      {maleName}의 공감을 수용하는 모습은 '약한 부분도 보여줄 수
                      있는 관계'의 힘을 체험하고 있음을 보여줍니다.
                    </p>
                    <p>
                      '강해야 한다'는 기대에서 벗어나, "흔들릴 수 있는
                      인간"으로서의 자신을 수용하기 시작했으며, 이는 사회적
                      관계에서도 더 깊은 인간관계를 가능케 하는 변화입니다.
                    </p>
                  </div>
                </section>
                <section>
                  <div className="flex items-end gap-3">
                    <Image src={Male} alt="남성" width={48} />
                    <p className="leading-loose font-semibold">
                      {maleName} 님의 변화
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 bg-[#F8F8F8] p-5 leading-snug">
                    <h2 className="text-lg font-semibold">
                      '강해야 한다'는 무언의 압박에서 '흔들릴 수 있는 인간'으로
                      자신을 수용
                    </h2>
                    <p>
                      초기의 {maleName}은 실용적 사고, 문제 해결 중심의 대화가
                      특징이었지만, 3년 차에서는 "당신은 피곤하겠다.", "말해줘서
                      고마워." 같은 정서적 언어와 반응이 늘어났습니다.
                    </p>
                    <p>
                      특히 자신의 불안(승진 후의 허무, 진로 회의 등)을 표현하고,
                      {femaleName}의 공감을 수용하는 모습은 '약한 부분도 보여줄
                      수 있는 관계'의 힘을 체험하고 있음을 보여줍니다.
                    </p>
                    <p>
                      '강해야 한다'는 기대에서 벗어나, "흔들릴 수 있는
                      인간"으로서의 자신을 수용하기 시작했으며, 이는 사회적
                      관계에서도 더 깊은 인간관계를 가능케 하는 변화입니다.
                    </p>
                  </div>
                </section>
              </>
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
            {reportData?.relationship_prediction?.flower_path_points?.map(
              (point, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 leading-snug text-black"
                >
                  <h2 className="font-bold">
                    {index + 1}. {point.point}
                  </h2>
                  <p>{point.description}</p>
                </div>
              ),
            ) || (
              // 기본값 (데이터가 없을 때)
              <>
                <div className="flex flex-col gap-1 leading-snug text-black">
                  <h2 className="font-bold">
                    1. 감정의 여백을 의식적으로 만들어 보세요.
                  </h2>
                  <p>
                    대화가 실용 중심으로 흐르기 쉬운 커플입니다. 감정 없는
                    대화보다는, 목적 없는 대화를 한 번 더 시도하는 것이 관계의
                    숨통을 틔워줄 수 있습니다.
                  </p>
                </div>
                <div className="flex flex-col gap-1 leading-snug text-black">
                  <h2 className="font-bold">
                    2. '함께 쉬는 리듬'을 새로 만들어 보세요.
                  </h2>
                  <p>
                    일정한 생활 구조 안에서도 의도적으로 멈추는 시간을 계획하면
                    관계의 온도가 다시 회복될 수 있습니다.
                  </p>
                </div>
                <div className="flex flex-col gap-1 leading-snug text-black">
                  <h2 className="font-bold">
                    3. 감정을 '작은 표현'으로 나눠 보세요.
                  </h2>
                  <p>
                    감사, 유머, 짧은 안부 같은 미세한 표현이 관계의 활력을
                    유지시킵니다. 거창한 이벤트보다 일상의 짧은 공감이 더 오래
                    남습니다.
                  </p>
                </div>
              </>
            )}
          </section>
        </article>
      )}
    </main>
  );
}
