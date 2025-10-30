import { useAtom } from "jotai";

import { ReportHeader } from "@/components/ReportHeader";
import Badge from "./Badge";
import WhenBox from "./WhenBox";
import Image from "next/image";
import InteractionZone from "@/assets/images/interaction-zone.png";
import FourSection from "@/assets/images/four-section.png";
import Female from "@/assets/images/female.svg";
import Male from "@/assets/images/male.svg";
import EmpathyQuadrant from "@/components/EmpathyQuadrant";
import { ReportData } from "@/types/api";
import { reportDataAtom } from "@/store/surveyStore";
/*
  Part 2: 공감 기반 시너지 (Positive Resonance)
  - 페이지 총 4장 구성
  - 스타일은 Part1의 Page2/Page3와 톤앤매너를 맞춤
*/

// interaction_zones 데이터를 part2 형식으로 변환하는 함수
const transformInteractionZone = (zone: any) => {
  const zoneTypeMapping = {
    "공감 기반 시너지": {
      badgeText: "공감 기반 시너지",
      badgeSubtitle: "Positive Resonance",
      badgeColor: "#7BBC80",
      subtitle: ": 비슷한 특성이 긍정적으로 작용하는 경우",
      mainParagraph:
        "두 사람이 비슷한 사고방식, 감정 스타일, 삶의 가치관을 가질 때 나타나는 영역입니다. 이 공통점은 신속한 상호 이해와 안정감을 불러오며, 정서적 친밀감을 빠르게 형성합니다. 공감대가 탄탄하게 형성될수록 관계의 신뢰와 만족도가 높아지는 경향이 있습니다.",
    },
    "중첩 리스크": {
      badgeText: "중첩 리스크",
      badgeSubtitle: "Overlapping Risk",
      badgeColor: "#F4A83A",
      subtitle: ": 유사한 성향이 지나치게 겹쳐 역기능을 일으키는 경우",
      mainParagraph:
        "비슷한 성향이라도, 그것이 과도하게 겹칠 경우 갈등 요소가 됩니다. 예를 들어 두 사람이 모두 완벽주의적이거나 고집이 강한 경우, 양보나 조율이 어려워지고, 긴장이 누적될 수 있습니다. 겉으로는 유사하지만, 실질적으로는 마찰을 일으키는 '숨은 갈등'이 이 영역에서 발생합니다.",
    },
    "보완적 상호작용": {
      badgeText: "보완적 상호작용",
      badgeSubtitle: "Complementary Dynamic",
      badgeColor: "#3993D9",
      subtitle: ": 서로 다른 특성이 조화를 이루며 강점을 만드는 경우",
      mainParagraph:
        "성향이 다르지만, 서로를 보완하는 방식으로 작용할 때 이 영역이 형성됩니다. 예를 들어 한 사람이 감정을 잘 표현하고, 다른 사람이 이를 잘 수용하는 구조라면 균형 잡힌 대화가 가능해집니다. 이러한 차이는 갈등이 아니라 '시너지의 원천'이 됩니다.",
    },
    "인지적 충돌": {
      badgeText: "인지적 충돌",
      badgeSubtitle: "Cognitive Friction",
      badgeColor: "#FF827E",
      subtitle: ": 차이에서 비롯된 이해 부족과 갈등",
      mainParagraph:
        "두 사람의 성향이 너무 상이하여 서로를 받아들이기 어렵거나, 차이를 해석하는 방식이 전혀 다를 경우에 발생합니다. 이로 인해 오해, 소통 장벽, 감정적 거리감이 생기며 관계의 안정성을 해칠 수 있습니다. 다양성은 때때로 갈등의 씨앗이 되기도 하므로, 이 영역은 의식적 조율이 필요합니다.",
    },
  };

  const mapping =
    zoneTypeMapping[zone.zoneType as keyof typeof zoneTypeMapping];

  // characteristics를 features로 변환
  const features = zone.characteristics.map((char: string, index: number) => {
    const [title, description] = char.split(" — ");
    return {
      title: `${index + 1}. ${title}`,
      description: description || char,
    };
  });

  // timeline_impact를 whens로 변환 (키값에 따라 동적 라벨 생성)
  const timelineLabelMapping = {
    dating_early: "연애 초반",
    dating_mid_late: "연애 중후반",
    dating_late: "연애 후반",
    dating_late_pre_marriage: "연애 후반 - 결혼 전",
    marriage_early: "결혼 초반",
    marriage_early_mid: "결혼 초·중반",
    marriage_mid_late: "결혼 중후반",
    marriage_late: "결혼 후반",
    marriage_1_2_years: "결혼 1-2년차 초반",
    marriage_1_2_years_early: "결혼 1-2년차 초반",
    marriage_1_2_years_late: "결혼 1-2년차 후반",
    relationship_stable: "관계 안정기",
    pre_marriage: "결혼 전",
    dating_mid: "연애 중반",
    marriage_mid: "결혼 중반",
    marriage_early_mid_late: "결혼 초·중·후반",
  };

  const whens = Object.entries(zone.timeline_impact).map(
    ([key, description]) => ({
      label:
        timelineLabelMapping[key as keyof typeof timelineLabelMapping] || key,
      description: description as string,
    }),
  );

  return {
    badgeText: mapping.badgeText,
    badgeSubtitle: mapping.badgeSubtitle,
    badgeColor: mapping.badgeColor,
    subtitle: mapping.subtitle,
    description: zone.description,
    mainParagraph: mapping.mainParagraph, // 고정된 mainParagraph 사용
    features,
    whens,
  };
};

interface PageContent {
  badgeText: string;
  badgeSubtitle: string;
  badgeColor: string;
  subtitle: string;
  description: string;
  mainParagraph: string;
  features: { title: string; description: string }[];
  whens: { label: string; description: string }[];
}

interface ResultPageProps {
  data: PageContent;
  index: number;
}

const IntroPage = () => (
  <div className="wrapper flex flex-col gap-6 py-5 font-medium text-[#111111]">
    <div className="flex items-center gap-2 xl:pt-15">
      <p className="text-lg leading-snug font-bold whitespace-nowrap">
        2. 상호작용 4영역 시뮬레이션
      </p>
    </div>

    <h3 className="pt-5 text-center text-lg xl:pt-10">
      두 사람이 함께 살아가는 “접촉면”
    </h3>

    <p className="text-gray-500">
      한 사람의 사고방식, 가치 기준, 생활 리듬은 마치 하나의 독립된 구조체처럼
      작동합니다. 하지만 커플이 되어 함께 시간을 보내고, 공간을 공유하고, 삶을
      맞물려 살아가기 시작하면 단순한 나열 이상의 일이 벌어집니다. 바로 이때
      형성되는 공간이 <span className="font-bold">Interaction Zone</span>입니다.
    </p>

    <p className="text-gray-500">
      이 분석을 통해 관계에서 일어나는 긍정적인 시너지와 주의해야 할 갈등 지점을
      미리 파악할 수 있습니다. 서로를 더 잘 이해하고, 관계를 더욱 풍요롭게
      만들어가는 실질적인 가이드가 될 것입니다.
    </p>

    <div className="relative mb-15 flex justify-center">
      <Image src={InteractionZone} alt="Interaction Zone" width={280} />

      {/* 성별 이미지들을 Interaction Zone 위에 겹치게 배치 */}
      <div className="absolute top-[120px] flex items-center gap-2">
        <Image src={Female} alt="Female" width={120} height={120} />
        <Image src={Male} alt="Male" width={120} height={120} />
      </div>
    </div>

    <p className="mt-5 text-gray-500">
      Interaction Zone은 두 사람의 성향이 실제로 ‘맞닿아 작동하는’ 영역입니다.
      서로 다른 사고방식이 교차하고, 감정이 교환되며, 생활 방식이 충돌하거나
      조화를 이루는 실질적인 접점이죠. 이곳에서는 대화의 스타일, 갈등의 처리
      방식, 가치의 차이, 일상의 습관까지 모두 영향을 주고받습니다.
    </p>

    <p className="text-gray-500">
      이 영역은 깊은 친밀감과 행복이 자라날 수 있는 핵심 공간입니다. 두 사람이
      서로를 이해하고, 감정이 안전하게 흐르며, 일상의 호흡이 자연스럽게 맞아갈
      때 이 Interaction Zone은 신뢰와 안정, 그리고 함께 살아가는 즐거움의 토대가
      됩니다. 반대로 이 영역이 충분히 조율되지 않으면 작은 차이가 쌓여 갈등의
      씨앗이 되기도 하죠.
    </p>
  </div>
);

const ResultPage = ({ data, index }: ResultPageProps) => (
  <div>
    {/* 상단 추가 UI - 첫 번째 데이터 페이지에만 */}
    {index === 1 && (
      <div className="wrapper pt-5">
        <div className="flex items-center gap-2 xl:pt-15">
          <p className="text-lg leading-snug font-bold whitespace-nowrap">
            2. 상호작용 4영역 시뮬레이션
          </p>
        </div>

        <p className="mt-5 mb-13 text-gray-500">
          이 Interaction Zone은 크게 다음의 네 가지 유형으로 나뉘어 이해할 수
          있습니다. 이 네 가지 Interaction Zone은 각각 긍정적 잠재력과 리스크를
          동시에 품고 있습니다. 중요한 것은 자신과 상대의 성향을 정확히
          이해하고, 어떤 영역에서 어떻게 조율해 나갈지를 인식하는 것입니다.
        </p>

        <EmpathyQuadrant />
      </div>
    )}

    <div className="wrapper flex flex-col gap-6 py-5 font-medium text-[#111111]">
      <Badge
        title={data.badgeText}
        subtitle={data.badgeSubtitle}
        color={data.badgeColor}
        no={`0${index}`}
      />
      <h3 className="text-gray-500">{data.subtitle}</h3>

      <p className="text-gray-500">{data.mainParagraph}</p>
      <p>{data.description}</p>
      <div>
        <p className="text-lg font-semibold">✳️ 주요 특징 3가지</p>
      </div>
      <div className="flex flex-col gap-2.5 rounded-xl border border-[#9AD8CA] p-5">
        {data.features.map((feature, index) => (
          <div key={index}>
            <p className="mb-1 font-bold">{feature.title}</p>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <p className="text-lg font-semibold">🕰 언제, 어떻게 작용하나</p>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {data.whens.map((when, index) => (
          <WhenBox key={index} label={when.label}>
            <span dangerouslySetInnerHTML={{ __html: when.description }} />
          </WhenBox>
        ))}
      </div>
    </div>
  </div>
);

// pages는 reportData에 따라 동적으로 생성됩니다

interface Part2ResultPageProps {
  currentPage: number;
}

export default function Part2ResultPage({ currentPage }: Part2ResultPageProps) {
  const [reportData] = useAtom(reportDataAtom);
  // reportData가 없으면 로딩 상태 표시
  if (!reportData) {
    return (
      <div className="font-pretendard flex-1">
        <ReportHeader />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
            <p className="text-gray-600">데이터를 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  const interactionZones = reportData.interaction_zones || [];

  // pages를 동적으로 생성
  const pages = [
    <IntroPage key="intro" />,
    ...interactionZones.map((zone, index) => {
      const transformedData = transformInteractionZone(zone);
      return (
        <ResultPage
          key={`p${index + 1}`}
          data={transformedData}
          index={index + 1}
        />
      );
    }),
  ];

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

export const part2TotalPages = (reportData: ReportData | null) => {
  if (!reportData) return 1; // 기본적으로 intro 페이지만
  const interactionZones = reportData.interaction_zones || [];
  return interactionZones.length + 1; // intro 페이지 + interaction zones
};
