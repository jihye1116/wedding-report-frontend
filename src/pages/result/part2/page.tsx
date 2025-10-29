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
/*
  Part 2: 공감 기반 시너지 (Positive Resonance)
  - 페이지 총 4장 구성
  - 스타일은 Part1의 Page2/Page3와 톤앤매너를 맞춤
*/

const part2Data = [
  {
    badgeText: "공감 기반 시너지",
    badgeSubtitle: "Positive Resonance",
    badgeColor: "#7BBC80",
    subtitle: ": 비슷한 특성이 긍정적으로 작용하는 경우",
    description:
      "두 사람이 비슷한 사고방식과 감정 스타일, 생활 리듬을 가질 때 드러나는 영역입니다. 이 공통점은 상호 이해와 안정감을 빠르게 만들어 주며, 정서적 친밀감과 신뢰가 견고해지도록 돕습니다.",
    mainParagraph:
      "서로의 강점이 맞물릴 때, 두 사람은 함께 움직이는 추진력을 냅니다. 도현의 계획력과 현서의 감정 감각이 만나면, 관계의 흐름이 놀라울 만큼 매끄럽게 흘러갑니다. 예를 들어 일상 계획을 세울 때, 도현이 “이번 달엔 예산을 이렇게 정리해보자” 하면 현서는 “좋아, 대신 주말엔 우리 둘만의 시간도 넣자”라며 균형을 잡습니다. 한쪽이 구조를 세우고, 다른 쪽이 숨 쉴 틈을 만드는 식이죠. 이런 리듬 덕분에 두 사람은 ‘실행력 있는 안정감’을 유지합니다.",
    features: [
      {
        title: "1. 강점의 맞물림",
        description:
          "한쪽의 구조적 사고가 다른 쪽의 정서 감각과 결합할 때 추진력이 생깁니다. 함께 움직일 때 안정적인 흐름을 체감합니다.",
      },
      {
        title: "2. 공동 목표 집중",
        description:
          "함께 하는 일이 있을 때 관계의 에너지가 자연스럽게 조율되고, '같이 해서 더 잘된다'는 경험이 반복됩니다.",
      },
      {
        title: "3. 리듬의 합일감",
        description:
          "서로의 속도가 비슷하게 맞춰지며, 일상의 루틴과 휴식 템포가 조화됩니다. 관계 내 '잘 맞는 느낌'이 강화됩니다.",
      },
    ],
    whens: [
      {
        label: "연애 초반",
        description:
          '가치관과 대화 감각이 비슷하다는 점을 빠르게 발견합니다. 감정적 공감과 실행 리듬이 자연스레 맞춰지며, "잘 맞는다"는 확신이 관계의 출발 에너지가 됩니다.',
      },
      {
        label: "결혼 초반",
        description:
          "집 꾸미기, 생활 구조 설계 등에서 한쪽의 계획력과 다른 쪽의 정서 감각이 결합합니다. 실행이 빠르고 안정감 있는 루틴이 형성됩니다.",
      },
      {
        label: "결혼 중후반",
        description:
          '재정·진로·가족 계획 같은 장기 목표를 세울 때 초반의 시너지가 <span class="font-semibold">협력의 습관</span>으로 정착합니다. 이 흐름이 유지되면 관계의 추진력이 더욱 견고해집니다.',
      },
    ],
  },
  {
    badgeText: "중첩 리스크",
    badgeSubtitle: "Overlapping Risk",
    badgeColor: "#F4A83A",
    subtitle: ": 유사한 성향이 지나치게 겹쳐 역기능을 일으키는 경우",
    description:
      "비슷한 성향이라도, 그것이 과도하게 겹칠 경우 갈등 요소가 됩니다. 예를 들어 두 사람이 모두 완벽주의적이거나 고집이 강한 경우, 양보나 조율이 어려워지고, 긴장이 누적될 수 있습니다. 겉으로는 유사하지만, 실질적으로는 마찰을 일으키는 '숨은 갈등'이 이 영역에서 발생합니다.",
    mainParagraph:
      "두 사람 모두 안정적인 환경을 선호합니다.\n 예측 가능한 일정을 좋아하고, 갈등보다 평화를 택합니다. 그래서 가끔은 불편한 이야기를 ‘나중에 하자’며 미루게 됩니다.\n이런 공통점은 일시적인 평온을 만들지만, 작은 감정이 쌓이면 ‘조용한 거리감’으로 번질 수 있습니다. 둘 다 먼저 말하지 않으려 하기 때문입니다.\n예를 들어, 현서가 서운함을 느껴도 “괜히 분위기 깨지 말자”라 하고, 도현 역시 “지금 말해봤자 피곤하게만 하겠지”라며 뒤로 미룹니다.",
    features: [
      {
        title: "안정 지향의 중첩",
        description: "둘 다 예측 가능한 일상과 평화를 선호함.",
      },
      {
        title: "감정 표현의 지연",
        description: '불편함을 느껴도 “괜찮아"로 덮는 경향',
      },
      {
        title: "조용한 거리감",
        description: "말하지 않아도 알겠지 하는 기대가 오히려 오해로 전환됨.",
      },
    ],
    whens: [
      {
        label: "연애 중후반",
        description:
          "서운한 감정을 표현하지 않고 ‘좋은 분위기 유지’에 집중할 때.",
      },
      {
        label: "결혼 1-2년 차 초반",
        description: "익숙함 속에서 대화량이 줄고, 피로·일상 루틴이 쌓일 때.",
      },
      {
        label: "관계 안정기",
        description:
          "“싸우지도 않는데 왜 어색하지?” 같은 ‘감정의 정체기’로 나타날 수 있음.",
      },
    ],
  },
  {
    badgeText: "보완적 상호작용",
    badgeSubtitle: "Complementary Dynamic",
    badgeColor: "#3993D9",
    subtitle: ": 서로 다른 특성이 조화를 이루며 강점을 만드는 경우",
    description:
      "성향이 다르지만, 서로를 보완하는 방식으로 작용할 때 이 영역이 형성됩니다. 예를 들어 한 사람이 감정을 잘 표현하고, 다른 사람이 이를 잘 수용하는 구조라면 균형 잡힌 대화가 가능해집니다. 이러한 차이는 갈등이 아니라 ‘시너지의 원천’이 됩니다.",
    mainParagraph:
      "도현은 계획적이고 구조를 중시하는 사람, 현서는 즉흥적이고 감정의 흐름에 민감한 사람입니다.\n하루를 계획하는 방식부터 다릅니다. 도현은 일정을 미리 세워두면 마음이 편하고, 현서는 그날의 기분에 따라 움직일 때 집중이 잘됩니다.\n예전엔 이런 차이가 종종 다툼으로 이어졌지만, 지금은 서로의 방식이 관계의 균형을 잡아주는 장치로 작용합니다.\n도현은 현서를 통해 ‘멈추는 법’을 배우고, 현서는 도현을 통해 ‘끝까지 밀어붙이는 힘’을 배웁니다. 그래서 함께 움직일 때, 한쪽은 속도를 만들고 다른 한쪽은 방향을 지켜주는 구조가 완성됩니다.",
    features: [
      {
        title: "리듬의 보완",
        description:
          "도현은 일을 빠르게 처리하고 싶어 하지만, 현서는 감정의 흐름을 존중합니다.\u2028서로의 속도를 조율하면서 “언제 멈추고 언제 밀어야 하는지”를 함께 감으로 익혀 갑니다.",
      },
      {
        title: "역할의 자연스러운 분화",
        description:
          "도현은 실행과 계획을, 현서는 분위기와 관계의 온도를 관리합니다. 예를 들어, 주말 일정이나 가족 모임을 정할 때 도현이 구조를 짜면, 현서는 그 안에 ‘여유 시간’을 만들어 균형을 잡습니다.",
      },
      {
        title: "차이의 활용",
        description:
          "도현이 결단을 주저할 땐 현서가 감정적으로 밀어주고, 현서가 감정에 휩쓸릴 땐 도현이 현실적인 기준으로 단단히 붙잡아 줍니다. 이런 방식이 반복되며 관계는 점점 안정적인 ‘2인 리듬’으로 변해갑니다.",
      },
    ],
    whens: [
      {
        label: "연애 후반",
        description:
          "일정이나 약속을 정할 때 리듬 차이가 드러나지만, 갈등보다는 호기심으로 받아들이는 경우가 많습니다. 도현은 현서의 즉흥성이 새롭고, 현서는 도현의 체계성이 든든하게 느껴집니다.",
      },
      {
        label: "결혼 1-2년 차",
        description:
          "생활 리듬이 본격적으로 충돌하는 시기지만, 집안일이나 예산 계획을 함께 하며 “서로의 방식이 다르면 오히려 일이 잘 된다”는 경험을 하게 됩니다.",
      },
      {
        label: "결혼 중후반",
        description:
          "이미 역할이 안정되어, 한쪽이 빠르면 다른 쪽이 속도를 늦추고, 한쪽이 흔들릴 땐 다른 쪽이 기준을 잡습니다. 다만 익숙함이 깊어질수록 “항상 네가 계획하고 내가 맞춰야 한다”는 피로감으로 변할 우려가 있습니다.",
      },
    ],
  },
  {
    badgeText: "인지적 충돌",
    badgeSubtitle: "Cognitive Friction",
    badgeColor: "#FF827E",
    subtitle: ": 차이에서 비롯된 이해 부족과 갈등",
    description:
      "두 사람의 성향이 너무 상이하여 서로를 받아들이기 어렵거나, 차이를 해석하는 방식이 전혀 다를 경우에 발생합니다. 이로 인해 오해, 소통 장벽, 감정적 거리감이 생기며 관계의 안정성을 해칠 수 있습니다. 다양성은 때때로 갈등의 씨앗이 되기도 하므로, 이 영역은 의식적 조율이 필요합니다.",
    mainParagraph:
      "현서는 미래의 가능성과 감정의 의미를 중시하며 다양한 선택지를 고려하는 사람, 도현은 현실적 조건과 구체적 실행 계획에 집중하는 사람입니다.\n결정을 앞두면, 현서는 “조금 더 나은 방법이 있지 않을까?”를 고민하고, 도현은 “지금 가능한 답부터 정하자”고 판단합니다. 이 차이는 단순한 성향의 차이가 아니라 사고방식의 깊이와 속도 차이로, 관계가 성장하는 과정에서 자주 마찰을 일으킬 수 있습니다.\n특히 감정이 예민하거나 피로가 쌓인 시기에는\u2028 “왜 이렇게 느려?” “왜 이렇게 성급해?” 같은 오해로 번질 우려가 있습니다. 그러나 이 엇갈림을 조율하는 경험을 반복할수록, 두 사람은 서로의 사고 구조를 이해하고 ‘결정의 속도 분리’를 배워갑니다.",
    features: [
      {
        title: "사고의 초점이 다름",
        description:
          "도현은 일을 빠르게 처리하고 싶어 하지만, 현서는 감정의 흐름을 존중합니다.\u2028서로의 속도를 조율하면서 “언제 멈추고 언제 밀어야 하는지”를 함께 감으로 익혀 갑니다.",
      },
      {
        title: "의사결정의 엇박",
        description:
          "한쪽이 충분히 고민하려는 사이, 다른 한쪽은 이미 결론을 내리고 싶어 하며 긴장이 생깁니다.",
      },
      {
        title: "조율의 학습 단계",
        description:
          "반복된 대화를 통해 ‘서로의 속도’를 인정하고, 감정보다 결정 구조를 조정하는 기술이 생길 수 있습니다.",
      },
    ],
    whens: [
      {
        label: "연애 후반 - 결혼 전",
        description:
          "결혼 시점·진로·가족관 등 장기적 주제를 논의하며 사고방식의 간극이 처음 드러날 수 있습니다. 감정이 깊어질수록 현실 논의가 불편하게 느껴질 가능성이 있습니다.",
      },
      {
        label: "결혼 초·중반",
        description:
          "재정, 주거, 가족 의사결정 등 실질적 선택을 다루며 ‘속도의 불일치’가 두드러집니다. 한쪽이 조급하면 대화가 막힐 수 있으므로, “방향만 정하고 세부는 나중에”처럼 대화의 단계를 분리하는 방식이 도움이 됩니다.",
      },
      {
        label: "결혼 후반",
        description:
          "서로의 판단 패턴을 예측하게 되지만, 여전히 가치관의 간극이 피로를 유발할 수 있습니다. 서로의 사고방식을 완전히 바꾸기보단, 결정의 리듬을 나누는 습관을 유지하는 것이 필요합니다.",
      },
    ],
  },
];

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

        <p className="mt-5 text-gray-500">
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

      <p className="text-gray-500">{data.description}</p>

      <p>{data.mainParagraph}</p>

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

const pages = [
  <IntroPage key="intro" />,
  ...part2Data.map((data, index) => (
    <ResultPage key={`p${index + 1}`} data={data} index={index + 1} />
  )),
];

export const part2TotalPages = pages.length;

interface Part2ResultPageProps {
  currentPage: number;
  reportData?: ReportData | null;
}

export default function Part2ResultPage({
  currentPage,
  reportData,
}: Part2ResultPageProps) {
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
