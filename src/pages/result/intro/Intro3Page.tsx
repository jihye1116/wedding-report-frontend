import Image from "next/image";
import { Navigator } from "@/components/Navigator";
import Logo from "@/assets/icons/logo.svg";

interface Intro3PageProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Intro3Page({ onNext, onBack }: Intro3PageProps) {
  const tocItems = [
    { id: "01", title: "개인성향 분석" },
    { id: "02", title: "연애 유형" },
    { id: "03", title: "36개월 신혼 생활 시뮬레이션" },
    { id: "04", title: "주요 관계 지표 예측" },
    { id: "05", title: "종합 결론" },
  ];

  return (
    <main className="font-pretendard flex h-dvh flex-col justify-between">
      <div className="px-10">
        <div className="flex gap-2 pt-5">
          <Image src={Logo} alt="Logo" width={20} height={20} />
          <p className="font-gangwon font-bold text-[#7AC6B6]">꽃길 리포트</p>
        </div>
        <p className="pb-5 text-sm font-medium text-gray-500">
          갑돌이 · 갑순이 님의 결과 보고서
        </p>
      </div>
      <article className="flex flex-col gap-9 px-10 text-[#111111]">
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
                <span className="mr-[20px] text-[#4BB7A0]">{item.id}</span>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </article>
      <div className="flex w-full py-10">
        <Navigator
          onNext={onNext}
          onBack={onBack}
          canProceed={true}
        />
      </div>
    </main>
  );
}
