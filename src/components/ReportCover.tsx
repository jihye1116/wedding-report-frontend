import { useAtom } from "jotai";
import Image from "next/image";

import { reportDataAtom } from "@/store/surveyStore";

export function ReportCover() {
  const [reportData] = useAtom(reportDataAtom);

  const maleName = reportData?.metadata?.male_name || "갑돌이";
  const femaleName = reportData?.metadata?.female_name || "갑순이";

  const rawDate = reportData?.metadata?.generated_at;
  let formattedDate = "만든 날짜";
  if (rawDate) {
    const dateObj = new Date(rawDate);
    if (!isNaN(dateObj.getTime())) {
      const y = dateObj.getFullYear();
      const m = String(dateObj.getMonth() + 1).padStart(2, "0");
      const d = String(dateObj.getDate()).padStart(2, "0");
      formattedDate = `${y}.${m}.${d}`;
    }
  }

  return (
    <div className="mx-auto xl:w-full">
      <div className="mt-15 w-full">
        <div className="font-gangwon font-bold text-brand">
          {/* '신혼생활' | '시뮬레이션' 두 기둥 */}
          <div className="flex gap-1">
            <VerticalText text="신혼생활" />
            <VerticalText text="시뮬레이션 스토리북" gap="gap-1" />
            <VerticalText
              text="우리둘테스트"
              className="font-gangwon ml-5 text-3xl leading-snug font-extrabold text-[#111111]"
            />
          </div>
        </div>
      </div>

      <div className="result-gradient relative mt-15 h-25 w-full rounded-sm">
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
  <div
    className={`flex flex-col items-center text-center leading-[1.4] ${gap} ${className}`}
  >
    {text.split("").map((ch, i) =>
      ch === " " ? (
        <span key={i} className="block h-4" />
      ) : (
        <span key={i} className="block">
          {ch}
        </span>
      ),
    )}
  </div>
);
