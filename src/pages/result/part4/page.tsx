"use client";

import { useAtom } from "jotai";
import Image from "next/image";
import { Fragment } from "react";

import Female from "@/assets/images/female.svg";
import Male from "@/assets/images/male.svg";
import { Navigator } from "@/components/Navigator";
import { ReportHeader } from "@/components/ReportHeader";
import { Tag } from "@/components/Tag";
import { part1TotalPages } from "@/pages/result/part1/page";
import { part4ResultStepAtom } from "@/store/surveyStore";

interface Part4ResultPageProps {
  onNext: () => void;
  onBack: () => void;
  currentPage: number;
}

export default function Part4ResultPage({
  onNext,
  onBack,
  currentPage,
}: Part4ResultPageProps) {
  const [step, setStep] = useAtom(part4ResultStepAtom);

  const handleNext = () => {
    if (step === 5) {
      onNext();
    } else {
      setStep((prev) => prev + 1);
    }
    window.scrollTo({ top: 0 });
  };

  const handleBack = () => {
    if (step === 1) {
      onBack();
    } else {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <main className="font-pretendard flex flex-1 flex-col">
      <ReportHeader />
      {step === 1 && (
        <Fragment>
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            4. 주요 관계 지표 예측
          </h1>
          <div className="flex-3" />
          <p className="px-10 py-5 text-center text-lg font-medium text-[#111111]">
            &quot; 서로의 리듬이 안정되면, 관계의 방향성은 자연히 드러납니다.
            &quot;
          </p>
          <div className="flex-5" />
        </Fragment>
      )}
      {step === 2 && (
        <article className="flex-1">
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            01 관계 방향성 요약
          </h1>
          <section className="mx-10 my-5 rounded-xl border border-[#9AD8CA] p-5">
            <p className="leading-snug whitespace-pre-wrap text-black">
              도현과 현서의 관계는 앞으로도 큰 불안정 없이 꾸준히 이어질
              가능성이 있습니다. 서로의 생활 리듬이 이미 조율되어 있고, 갈등이
              생겨도 감정적으로 부딪히기보다 정리하고 다시 균형을 찾는 방식이
              익숙해져 있습니다. 다만 이런 안정감 속에서는 감정 교류가
              점차 루틴의 그림자 속으로 들어갈 가능성이 있습니다. 이 커플은
              감정을 행동으로 표현하는 경향이 강해, 감정의 밀도가 옅어질 때는
              ‘이해’보다 ‘공감’이 더 필요할 수 있습니다. 앞으로의 관계는 유지의
              안정보다 감정의 순환을 만드는 방향으로 가는 것이 좋습니다. 감정을
              새롭게 표현하거나, 일상 속에서 서로의 기분을 묻는 작은 루틴을
              더하면 이 관계는 지금보다 더 따뜻하고 유연하게 성장할 수 있을
              것입니다.
            </p>
          </section>
        </article>
      )}
      {step === 3 && (
        <article className="flex-1">
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            02 주요 지표별 예측
          </h1>
          <div className="flex flex-col gap-10 px-10 py-5">
            <section className="flex flex-col gap-3 rounded-3xl border border-[#DCDCDC] p-5 text-black">
              <div className="flex items-center justify-center gap-1.5">
                <h2 className="text-lg leading-relaxed font-bold">
                  정서 안정성
                </h2>
                <Tag level="high" />
              </div>
              <p className="leading-snug">
                감정의 폭이 크지 않고, 갈등 후에도 빠르게 균형을 회복할 수 있을
                가능성이 높습니다. 다만 감정 표현이 과도하게 절제될 때는 정서적
                거리감이 생길 수 있습니다.
              </p>
            </section>
            <section className="flex flex-col gap-3 rounded-3xl border border-[#DCDCDC] p-5 text-black">
              <div className="flex items-center justify-center gap-1.5">
                <h2 className="text-lg leading-relaxed font-bold">
                  정서 안정성
                </h2>
                <Tag level="high" />
              </div>
              <p className="leading-snug">
                감정의 폭이 크지 않고, 갈등 후에도 빠르게 균형을 회복할 수 있을
                가능성이 높습니다. 다만 감정 표현이 과도하게 절제될 때는 정서적
                거리감이 생길 수 있습니다.
              </p>
            </section>
            <section className="flex flex-col gap-3 rounded-3xl border border-[#DCDCDC] p-5 text-black">
              <div className="flex items-center justify-center gap-1.5">
                <h2 className="text-lg leading-relaxed font-bold">
                  정서 안정성
                </h2>
                <Tag level="high" />
              </div>
              <p className="leading-snug">
                감정의 폭이 크지 않고, 갈등 후에도 빠르게 균형을 회복할 수 있을
                가능성이 높습니다. 다만 감정 표현이 과도하게 절제될 때는 정서적
                거리감이 생길 수 있습니다.
              </p>
            </section>
            <section className="flex flex-col gap-3 rounded-3xl border border-[#DCDCDC] p-5 text-black">
              <div className="flex items-center justify-center gap-1.5">
                <h2 className="text-lg leading-relaxed font-bold">
                  정서 안정성
                </h2>
                <Tag level="high" />
              </div>
              <p className="leading-snug">
                감정의 폭이 크지 않고, 갈등 후에도 빠르게 균형을 회복할 수 있을
                가능성이 높습니다. 다만 감정 표현이 과도하게 절제될 때는 정서적
                거리감이 생길 수 있습니다.
              </p>
            </section>
          </div>
        </article>
      )}
      {step === 4 && (
        <article className="flex-1">
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            03 개인의 변화
          </h1>
          <div className="flex flex-col gap-10 px-10 py-5">
            <section>
              <div className="flex items-end gap-3">
                <Image src={Male} alt="남성" width={48} />
                <p className="leading-loose font-semibold">갑돌이 님의 변화</p>
              </div>
              <div className="flex flex-col gap-5 bg-[#F8F8F8] p-5 leading-snug">
                <h2 className="text-lg font-semibold">
                  ‘강해야 한다&apos;는 무언의 압박에서 ‘흔들릴 수 있는 인간’으로
                  자신을 수용
                </h2>
                <p>
                  초기의 갑돌이는 실용적 사고, 문제 해결 중심의 대화가
                  특징이었지만, 3년 차에서는 “당신은 피곤하겠다.”, “말해줘서
                  고마워.” 같은 정서적 언어와 반응이 늘어났습니다.
                </p>
                <p>
                  특히 자신의 불안(승진 후의 허무, 진로 회의 등)을 표현하고,
                  갑순이의 공감을 수용하는 모습은 ‘약한 부분도 보여줄 수 있는
                  관계’의 힘을 체험하고 있음을 보여줍니다.
                </p>
                <p>
                  ‘강해야 한다’는 기대에서 벗어나, “흔들릴 수 있는 인간”으로서의
                  자신을 수용하기 시작했으며, 이는 사회적 관계에서도 더 깊은
                  인간관계를 가능케 하는 변화입니다.
                </p>
              </div>
            </section>
            <section>
              <div className="flex items-end justify-end gap-3">
                <p className="leading-loose font-semibold">갑순이 님의 변화</p>
                <Image src={Female} alt="여성" width={48} />
              </div>
              <div className="flex flex-col gap-5 bg-[#F8F8F8] p-5 leading-snug">
                <h2 className="text-lg font-semibold">
                  ‘강해야 한다&apos;는 무언의 압박에서 ‘흔들릴 수 있는 인간’으로
                  자신을 수용
                </h2>
                <p>
                  초기의 갑돌이는 실용적 사고, 문제 해결 중심의 대화가
                  특징이었지만, 3년 차에서는 “당신은 피곤하겠다.”, “말해줘서
                  고마워.” 같은 정서적 언어와 반응이 늘어났습니다.
                </p>
                <p>
                  특히 자신의 불안(승진 후의 허무, 진로 회의 등)을 표현하고,
                  갑순이의 공감을 수용하는 모습은 ‘약한 부분도 보여줄 수 있는
                  관계’의 힘을 체험하고 있음을 보여줍니다.
                </p>
                <p>
                  ‘강해야 한다’는 기대에서 벗어나, “흔들릴 수 있는 인간”으로서의
                  자신을 수용하기 시작했으며, 이는 사회적 관계에서도 더 깊은
                  인간관계를 가능케 하는 변화입니다.
                </p>
              </div>
            </section>
          </div>
        </article>
      )}
      {step === 5 && (
        <article className="flex-1">
          <h1 className="px-10 py-5 text-xl font-bold text-[#111111]">
            04 핵심 꽃길 포인트
          </h1>
          <section className="mx-10 my-5 flex flex-col gap-7.5 rounded-xl border border-[#9AD8CA] p-5">
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
                2. &apos;함께 쉬는 리듬&apos;을 새로 만들어 보세요.
              </h2>
              <p>
                일정한 생활 구조 안에서도 의도적으로 멈추는 시간을 계획하면
                관계의 온도가 다시 회복될 수 있습니다.
              </p>
            </div>
            <div className="flex flex-col gap-1 leading-snug text-black">
              <h2 className="font-bold">
                3. 감정을 &apos;작은 표현&apos;으로 나눠 보세요.
              </h2>
              <p>
                감사, 유머, 짧은 안부 같은 미세한 표현이 관계의 활력을
                유지시킵니다. 거창한 이벤트보다 일상의 짧은 공감이 더 오래
                남습니다.
              </p>
            </div>
          </section>
        </article>
      )}
      <Navigator
        onNext={handleNext}
        onBack={handleBack}
        canProceed={true}
        currentPage={currentPage}
        totalPages={part1TotalPages}
      />
    </main>
  );
}
