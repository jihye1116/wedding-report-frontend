import { ReportHeader } from "@/components/ReportHeader";
import Badge from "./Badge";
import WhenBox from "./WhenBox";

/*
  Part 2: 공감 기반 시너지 (Positive Resonance)
  - 페이지 총 4장 구성
  - 스타일은 Part1의 Page2/Page3와 톤앤매너를 맞춤
*/

interface Part2ResultPageProps {
  currentPage: number;
}

const Page1 = () => (
  <div>
    <div className="flex flex-col gap-6 px-10 py-5 font-medium text-[#111111]">
      <Badge />
      <h3 className="text-lg text-gray-600">
        :유사한 특성이 긍정적으로 작용하는 경우
      </h3>

      <p className="text-gray-600">
        두 사람이 비슷한 사고방식과 감정 스타일, 생활 리듬을 가질 때 드러나는
        영역입니다. 이 공통점은 상호 이해와 안정감을 빠르게 만들어 주며, 정서적
        친밀감과 신뢰가 견고해지도록 돕습니다.
      </p>

      <p>
        서로의 강점이 맞물릴 때, 두 사람은 함께 움직이는 추진력을 냅니다. 도현의
        계획력과 현서의 감정 감각이 만나면, 관계의 흐름이 놀라울 만큼 매끄럽게
        흘러갑니다. 예를 들어 일상 계획을 세울 때, 도현이 “이번 달엔 예산을
        이렇게 정리해보자” 하면 현서는 “좋아, 대신 주말엔 우리 둘만의 시간도
        넣자”라며 균형을 잡습니다. 한쪽이 구조를 세우고, 다른 쪽이 숨 쉴 틈을
        만드는 식이죠. 이런 리듬 덕분에 두 사람은 ‘실행력 있는 안정감’을
        유지합니다.
      </p>

      <div>
        <p className="text-lg font-semibold">✳️ 주요 특징 3가지</p>
      </div>

      <div className="flex flex-col gap-2.5 rounded-lg border border-[#9AD8CA] p-5">
        <div>
          <p className="mb-1 font-bold">1. 강점의 맞물림</p>
          <p>
            한쪽의 구조적 사고가 다른 쪽의 정서 감각과 결합할 때 추진력이
            생깁니다. 함께 움직일 때 안정적인 흐름을 체감합니다.
          </p>
        </div>
        <div>
          <p className="mb-1 font-bold">2. 공동 목표 집중</p>
          <p>
            함께 하는 일이 있을 때 관계의 에너지가 자연스럽게 조율되고, '같이
            해서 더 잘된다'는 경험이 반복됩니다.
          </p>
        </div>
        <div>
          <p className="mb-1 font-bold">3. 리듬의 합일감</p>
          <p>
            서로의 속도가 비슷하게 맞춰지며, 일상의 루틴과 휴식 템포가
            조화됩니다. 관계 내 '잘 맞는 느낌'이 강화됩니다.
          </p>
        </div>
      </div>

      <p className="text-lg font-semibold">🕰 언제, 어떻게 작용하나</p>

      <div className="flex flex-col gap-4">
        <WhenBox label="연애 초반">
          가치관과 대화 감각이 비슷하다는 점을 빠르게 발견합니다. 감정적 공감과
          실행 리듬이 자연스레 맞춰지며, "잘 맞는다"는 확신이 관계의 출발
          에너지가 됩니다.
        </WhenBox>
        <WhenBox label="결혼 초반">
          집 꾸미기, 생활 구조 설계 등에서 한쪽의 계획력과 다른 쪽의 정서 감각이
          결합합니다. 실행이 빠르고 안정감 있는 루틴이 형성됩니다.
        </WhenBox>
        <WhenBox label="결혼 중후반">
          재정·진로·가족 계획 같은 장기 목표를 세울 때 초반의 시너지가{" "}
          <span className="font-semibold">협력의 습관</span>으로 정착합니다. 이
          흐름이 유지되면 관계의 추진력이 더욱 견고해집니다.
        </WhenBox>
      </div>
    </div>
  </div>
);

const pages = [
  <Page1 key="p1" />,
  // <Page2 key="p2" />,
  // <Page3 key="p3" />,
  // <Page4 key="p4" />,
  // <Page5 key="p5" />,
];

export const part2TotalPages = pages.length;

interface Part2ResultPageProps {
  currentPage: number;
}

export default function Part2ResultPage({ currentPage }: Part2ResultPageProps) {
  const safeIndex = (() => {
    const len = pages.length;
    if (!len) return 0;
    const n = typeof currentPage === "number" ? currentPage : 0;
    // 음수/범위 초과 방지용 모듈러 처리
    return ((n % len) + len) % len;
  })();

  return (
    <div className="font-pretendard flex-1">
      <ReportHeader />
      {pages[safeIndex]}
    </div>
  );
}
