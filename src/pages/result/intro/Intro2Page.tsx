import { useAtom } from "jotai";
import Image from "next/image";

import { NavigateButton } from "@/components/NavigateButton";
import { ReportHeader } from "@/components/ReportHeader";
import { reportDataAtom } from "@/store/surveyStore";

interface Intro2PageProps {
  onNext: () => void;
}

export default function Intro2Page({ onNext }: Intro2PageProps) {
  const [reportData] = useAtom(reportDataAtom);

  const maleName = reportData?.metadata?.male_name || "갑돌이";
  const femaleName = reportData?.metadata?.female_name || "갑순이";

  const rawDate = reportData?.metadata?.generated_at;
  let formattedDate = "만든 날짜";
  if (rawDate) {
    try {
      const dateObj = new Date(rawDate);
      if (!isNaN(dateObj.getTime())) {
        const y = dateObj.getFullYear();
        const m = String(dateObj.getMonth() + 1).padStart(2, "0");
        const d = String(dateObj.getDate()).padStart(2, "0");
        formattedDate = `${y}.${m}.${d}`;
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="relative h-dvh">
      <div className="absolute top-0 right-0 left-0 z-10 hidden xl:block">
        <ReportHeader />
      </div>

      {/* xl에서만 상단 패딩 유지 + 위아래 공간 벌어짐 방지 */}
      <div className="wrapper flex h-full flex-col justify-between xl:justify-start xl:pt-20">
        {/* 남는 영역을 차지하고, xl에서 수직 가운데 정렬 */}
        <div className="flex-1 xl:flex xl:items-center">
          <p className="font-gangwon flex justify-end py-5 font-bold text-brand xl:hidden">
            우리둘 테스트
          </p>

          {/* 표지 (바깥 레이아웃에서 중앙 정렬) */}
          <div className="mx-auto xl:w-full">
            <div className="mt-15 w-full">
              <div className="font-gangwon font-bold text-brand">
                {/* '신혼생활' | '시뮬레이션' 두 기둥 */}
                <div className="flex gap-1">
                  <VerticalText text="신혼생활" className="" />
                  <VerticalText text="시뮬레이션 스토리북" gap="gap-1" className="" />

                  <VerticalText
                    text="우리둘테스트"
                    className="font-gangwon ml-5 text-3xl leading-snug font-extrabold text-[#111111]"
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-15 h-25 w-full rounded-sm result-gradient">
              <Image
                src="/images/cover_image.png"
                alt="식장 사진"
                width={224}
                height={229}
                className="absolute right-0 bottom-0 z-10"
                priority
              />
            </div>

            <article className="font-gangwon mt-3 text-[18px] leading-snug font-bold whitespace-pre-wrap text-[#111111]">
              <p className="text-brand">{maleName}</p>
              <p className="text-brand">{femaleName}</p>
              <p className="mt-3 text-[#3F3F3F]">{formattedDate}</p>
            </article>
          </div>
        </div>

        {/* 버튼은 그대로 하단 고정 느낌 (xl에서 mt-auto로 바닥으로) */}
        <div className="fixed right-0 bottom-0 left-0 flex justify-end px-10 pb-10 xl:mt-auto xl:px-120">
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
  <div className={`flex flex-col items-center text-center leading-[1.4] ${gap} ${className}`}>
    {text.split("").map((ch, i) =>
      ch === " " ? (
        <span key={i} className="h-4 block" />
      ) : (
        <span key={i} className="block">
          {ch}
        </span>
      )
    )}
  </div>
);
