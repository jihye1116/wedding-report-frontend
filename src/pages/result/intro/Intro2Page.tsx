import { NavigateButton } from "@/components/NavigateButton";
import { ReportCover } from "@/components/ReportCover";
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
          <p className="font-gangwon flex justify-end py-5 font-bold text-brand xl:hidden">
            우리둘 테스트
          </p>

          <ReportCover />
        </div>

        {/* 버튼은 그대로 하단 고정 느낌 (xl에서 mt-auto로 바닥으로) */}
        <div className="fixed right-0 bottom-0 left-0 flex justify-end px-10 pb-10 xl:mt-auto xl:px-120">
          <NavigateButton direction="right" onClick={onNext} color={"green"} />
        </div>
      </div>
    </div>
  );
}
