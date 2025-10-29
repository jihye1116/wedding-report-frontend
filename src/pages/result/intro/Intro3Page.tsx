import { Navigator } from "@/components/Navigator";
import { ReportHeader } from "@/components/ReportHeader";
import { ReportData } from "@/types/api";

interface Intro3PageProps {
  onNext: () => void;
  onBack: () => void;
  reportData?: ReportData | null;
}

export default function Intro3Page({
  onNext,
  onBack,
  reportData,
}: Intro3PageProps) {
  const tocItems = [
    { id: "01", title: "개인 성향 분석" },
    { id: "02", title: "연애 유형" },
    { id: "03", title: "36개월 신혼 생활 시뮬레이션" },
    { id: "04", title: "주요 관계 지표 예측" },
    { id: "05", title: "종합 결론" },
  ];

  return (
    <main className="font-pretendard flex h-dvh flex-col justify-between">
      <ReportHeader />
      <article className="wrapper flex flex-col gap-9 text-[#111111]">
        <div className="flex items-center gap-2">
          <p className="font-gangwon text-3xl leading-snug font-bold whitespace-nowrap">
            목차
          </p>
          <hr className="ml-4 h-0.5 flex-1 border-t border-[#9AD8CA]" />
        </div>
        <div className="flex flex-col gap-5 py-15">
          {tocItems.map((item) => (
            <div key={item.id}>
              <p className="flex items-center leading-snug font-medium whitespace-nowrap">
                <span className="mr-5 text-[#4BB7A0]">{item.id}</span>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </article>
      <Navigator onNext={onNext} onBack={onBack} canProceed={true} />
    </main>
  );
}
