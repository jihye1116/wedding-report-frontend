import Image from "next/image";

import ReportThumbnail from "@/assets/images/report-thumbnail.png";
import { NavigateButton } from "@/components/NavigateButton";

interface Intro2PageProps {
  onNext: () => void;
}

export default function Intro2Page({ onNext }: Intro2PageProps) {
  return (
    <main className="flex h-dvh flex-col justify-between px-10">
      <p className="font-gangwon flex justify-end py-5 text-[#7AC6B6]">
        꽃길만 걷자
      </p>
      <Image
        className="mx-auto py-5"
        src={ReportThumbnail}
        alt="Report Thumbnail"
      />
      <article className="font-gangwon text-lg leading-snug font-bold whitespace-pre-wrap text-[#111111]">
        <p className="text-[#59847B]">남성이름</p>
        <p className="text-[#59847B]">여성이름</p>
        <p className="mt-3">만든 날짜</p>
      </article>
      <div className="flex w-full py-10">
        <NavigateButton direction="right" onClick={onNext} color={"green"} />
      </div>
    </main>
  );
}
