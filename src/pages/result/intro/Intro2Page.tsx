import Image from "next/image";

import ReportThumbnail from "@/assets/images/report-thumbnail.png";
import { NavigateButton } from "@/components/NavigateButton";
import Couple from "@/assets/images/couple.png";

interface Intro2PageProps {
  onNext: () => void;
}

export default function Intro2Page({ onNext }: Intro2PageProps) {
  return (
    <div className="flex h-dvh flex-col justify-between">
      <div className="wrapper">
        <p className="font-gangwon flex justify-end py-5 font-bold text-[#7AC6B6]">
          꽃길만 걷자
        </p>

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

      <div className="flex w-full justify-end p-10 xl:mt-auto">
        <NavigateButton direction="right" onClick={onNext} color={"green"} />
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
