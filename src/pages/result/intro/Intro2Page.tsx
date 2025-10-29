import Image from "next/image";

import { NavigateButton } from "@/components/NavigateButton";
import Couple from "@/assets/images/couple.png";
import { ReportHeader } from "@/components/ReportHeader";

interface Intro2PageProps {
  onNext: () => void;
}

export default function Intro2Page({ onNext }: Intro2PageProps) {
  return (
    <div className="relative h-dvh">
      <div className="absolute top-0 right-0 left-0 z-10 hidden xl:block">
        <ReportHeader />
      </div>

      {/* xl에서만 상단 패딩 유지 + 위아래 공간 벌어짐 방지 */}
      <div className="wrapper flex h-full flex-col justify-between xl:justify-start xl:pt-20">
        {/* 남는 영역을 차지하고, xl에서 수직 가운데 정렬 */}
        <div className="flex-1 xl:flex xl:items-center">
          <p className="font-gangwon flex justify-end py-5 font-bold text-[#7AC6B6] xl:hidden">
            꽃길만 걷자
          </p>

          {/* 표지 (바깥 레이아웃에서 중앙 정렬) */}
          <div className="mx-auto h-full xl:h-auto xl:w-full">
            <div className="mt-15 w-full">
              <div className="font-gangwon font-bold text-emerald-700">
                {/* '신혼생활' | '시뮬레이션' 두 기둥 */}
                <div className="flex gap-1">
                  <VerticalText text="신혼생활" className="" />
                  <VerticalText text="시뮬레이션 스토리북" className="" />

                  <VerticalText
                    text="꽃길리포트"
                    className="font-gangwon ml-5 text-3xl leading-snug font-extrabold text-[#111111]"
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-15">
              <div className="result-gradient h-25 w-full rounded-sm" />
              <Image
                src={Couple}
                alt="커플 일러스트"
                width={167}
                height={214}
                className="absolute right-0 bottom-0"
                priority
              />
            </div>

            <article className="font-gangwon mt-3 text-lg leading-snug font-bold whitespace-pre-wrap text-[#111111]">
              <p className="text-[#59847B]">남성이름</p>
              <p className="text-[#59847B]">여성이름</p>
              <p className="mt-3">만든 날짜</p>
            </article>
          </div>
        </div>

        {/* 버튼은 그대로 하단 고정 느낌 (xl에서 mt-auto로 바닥으로) */}
        <div className="mt-20 flex w-full justify-end pb-10 xl:mt-auto">
          <NavigateButton direction="right" onClick={onNext} color={"green"} />
        </div>
      </div>
    </div>
  );
}

const VerticalText = ({
  text,
  className = "",
  gap = "",
}: {
  text: string;
  className?: string;
  gap?: string;
}) => (
  <div className={`flex flex-col items-center ${gap} ${className}`}>
    {text.split("").map((ch, i) => (
      <span key={i} className="block">
        {ch}
      </span>
    ))}
  </div>
);
