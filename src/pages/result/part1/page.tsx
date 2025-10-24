import { ReportHeader } from "@/components/ReportHeader";

const Page1 = () => (
  <article className="flex flex-col gap-10 px-10 py-5 font-medium text-[#111111]">
    <div className="flex items-center gap-2">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        01. 개인성향 분석
      </p>
    </div>
    <h3 className="text-lg">
      “함께 잘 살기 위한 첫걸음, 나를 이해하는 것부터”
    </h3>
    <p className="text-gray-500">
      우리는 사람의 성향을 세 겹의 구조로 분석합니다. 가장 안쪽에는 내가 세상을
      어떻게 인식하고 감정을 처리하는지, 그다음에는 어떤 가치와 동기가 나를
      움직이게 하는지, 그리고 바깥쪽에는 내가 어떤 방식으로 일상을 살아가며
      에너지를 회복하는지가 있습니다.{" "}
    </p>
    <p className="text-gray-500">
      이 구조는 단지 나 자신을 파악하기 위한 것이 아닙니다. 상대를 있는 그대로
      받아들이고, 현실적인 관계의 조율점을 찾아가는 데에 꼭 필요한 정보입니다.
      이해와 공감은 감정만으로 완성되지 않습니다. 내 안의 구조를 명확히 알 때,
      우리는 타인의 구조를 존중하며 함께할 수 있게 됩니다.{" "}
    </p>
    <p className="pt-5 text-sm text-gray-500">
      ※ 본 분석은 임상 진단이 아닌, 다양한 심리이론을 통합한 비의료적 성향 탐색
      도구입니다. 제공된 결과는 관계 이해 및 의사소통 개선을 위한 참고 정보로
      활용되며, 의학적 판단 또는 진단으로 사용되지 않습니다.
    </p>
  </article>
);

const Page2 = () => (
  <article className="flex flex-col gap-9 px-10 py-5 text-[#111111]">
    <div className="flex items-center gap-2">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        01. 개인성향 분석
      </p>
    </div>
    <div className="space-y-6">
      <div className="text-sm text-gray-500">
        지금부터 소개할 세 가지 성향 영역은, 함께하는 삶을 조금 더 편안하고
        유연하게 만들어줄 ‘관계의 기반’을 여는 열쇠입니다.
      </div>
    </div>
  </article>
);

const pages = [<Page1 key="1" />, <Page2 key="2" />];
export const part1TotalPages = pages.length;

interface Part1ResultPageProps {
  currentPage: number;
}

export default function Part1ResultPage({ currentPage }: Part1ResultPageProps) {
  return (
    <div className="font-pretendard flex-1">
      <ReportHeader />
      {pages[currentPage]}
    </div>
  );
}
