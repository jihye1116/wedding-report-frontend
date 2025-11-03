import { useAtom } from "jotai";
import Image from "next/image";

import Female from "@/assets/images/female.svg";
import Graph from "@/assets/images/graph.png";
import Male from "@/assets/images/male.svg";
import { ReportHeader } from "@/components/ReportHeader";
import { SliderComponent } from "@/components/SliderComponent";
import { SummaryBox } from "@/components/SummaryBox";
import { reportDataAtom } from "@/store/surveyStore";
import { DetailedAnalysis, ReportData } from "@/types/api";

// Constants

const SLIDER_CONFIG = {
  section1: [
    {
      title: "1-1. 정보 인식 방식",
      leftLabel: "현재지향형",
      rightLabel: "미래지향형",
      origin: "center" as const,
      maxValue: 30,
      indicatorColor: "#E2F2FD",
      clampColor: "#6EA3C7",
      dimensionKey: "현재지향_미래지향" as const,
      analysisKey: "1-1" as const,
    },
    {
      title: "1-2. 의사 결정 기준",
      leftLabel: "논리·객관중심",
      rightLabel: "감정·인간중심",
      origin: "center" as const,
      maxValue: 30,
      indicatorColor: "#DAFEE0",
      clampColor: "#22c55e",
      dimensionKey: "논리중심_감정중심" as const,
      analysisKey: "1-2" as const,
    },
    {
      title: "1-3. 정서 반응 민감도",
      leftLabel: "둔감형",
      rightLabel: "민감형",
      origin: "left" as const,
      maxValue: 100,
      indicatorColor: "#FEECDA",
      clampColor: "#76634E",
      dimensionKey: "반응적_조절적" as const,
      analysisKey: "1-3" as const,
      useConvertedScore: true,
    },
  ],
  section2: [
    {
      title: "2-1. 동기 방향",
      leftLabel: "안전지향",
      rightLabel: "도전지향",
      origin: "center" as const,
      maxValue: 30,
      indicatorColor: "#FDE2E2",
      clampColor: "#D68787",
      dimensionKey: "안정지향_도전지향" as const,
      analysisKey: "2-1" as const,
    },
    {
      title: "2-2. 동기 유발 원천",
      leftLabel: "외적동기",
      rightLabel: "내적동기",
      origin: "center" as const,
      maxValue: 30,
      indicatorColor: "#EEE3FF",
      clampColor: "#8E6CC2",
      dimensionKey: "외적동기_내적동기" as const,
      analysisKey: "2-2" as const,
    },
    {
      title: "2-3. 목표 실행 자율성",
      leftLabel: "낮음",
      rightLabel: "높음",
      origin: "left" as const,
      maxValue: 100,
      indicatorColor: "#FEFBDA",
      clampColor: "#C2BD91",
      dimensionKey: "반응적_조절적" as const,
      analysisKey: "2-3" as const,
      useConvertedScore: true,
      fallbackAnalysisKey: "1-3" as const,
    },
  ],
  section3: [
    {
      title: "3-1. 에너지 방향",
      leftLabel: "내향형",
      rightLabel: "외향형",
      origin: "center" as const,
      maxValue: 30,
      indicatorColor: "#E2FAFD",
      clampColor: "#94DEE8",
      dimensionKey: "내향_외향" as const,
      analysisKey: "3-1" as const,
    },
    {
      title: "3-2. 실행방식 선호도",
      leftLabel: "유연형",
      rightLabel: "계획형",
      origin: "center" as const,
      maxValue: 30,
      indicatorColor: "#E2FDF0",
      clampColor: "#97CCB2",
      dimensionKey: "유연_계획" as const,
      analysisKey: "3-2" as const,
    },
    {
      title: "3-3. 의사표현 성향",
      leftLabel: "자기표현형",
      rightLabel: "적응배려형",
      origin: "center" as const,
      maxValue: 30,
      indicatorColor: "#E2E2FD",
      clampColor: "#8A8ACD",
      dimensionKey: "자기표현_적응배려" as const,
      analysisKey: "3-3" as const,
    },
  ],
};

// Utility Functions
const convertScaledScore = (scaledScore: number): number => {
  return Math.round((scaledScore + 30) / 2); // -30~+30을 0~30으로 변환
};

const getDescriptionText = (analysis: DetailedAnalysis | undefined): string => {
  if (!analysis) return "";
  return `${analysis.informationPerceptionMethod || ""} ${
    analysis.informationPerceptionMethodReason || ""
  } ${analysis.partnerPerception || ""}`.trim();
};

const getScoreValue = (
  reportData: ReportData | null | undefined,
  gender: "male" | "female",
  dimensionKey: string,
  useConvertedScore: boolean = false,
): number => {
  const score =
    reportData?.personal_analyses?.[gender]?.score_analysis?.[dimensionKey]
      ?.scaled_score || 0;
  return useConvertedScore ? convertScaledScore(score) : score;
};

const Page1 = () => (
  <article className="wrapper flex flex-1 flex-col font-medium text-[#111111]">
    <div className="flex items-center py-5 xl:py-10">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        1. 개인 성향 분석
      </p>
    </div>

    <div className="flex flex-1 flex-col gap-10 py-5 xl:py-10">
      <h3 className="text-center text-lg">
        “ 함께 잘 살기 위한 첫걸음,<span className="responsive-break"></span>
        나를 이해하는 것부터 ”
      </h3>
      <div className="flex flex-col gap-4">
        <p className="text-gray-500">
          두 사람의 관계는 각자가 세상을 바라보는 방식, 결정을 내리는 기준,
          그리고 에너지를 주고받는 리듬이 만나면서 만들어집니다.
        </p>

        <p className="text-gray-500">
          성향 분석은 바로 이런 ‘나의 작동 구조’를 객관적으로 들여다보는
          출발점입니다.
        </p>
        <p className="text-gray-500">
          흥미로운 점은, 내가 인식하는 나와 상대가 경험하는 내가 다를 수 있다는
          것입니다.
        </p>
        <p className="text-gray-500">
          내가 &quot;논리적&quot;이라고 생각하는 부분이 상대에게는
          &quot;감정적으로 차가운 태도&quot;로 느껴질 수도 있죠.
        </p>
        <p className="text-gray-500">
          두 사람의 성향이 어떻게 다르고, 서로가 서로를 어떻게 바라보는지
          지금부터 살펴볼까요?
        </p>
      </div>
    </div>
    <p className="py-5 text-sm text-gray-400 xl:py-10">
      ※ 본 분석은 임상 진단이 아닌, 다양한 심리이론을 통합한 비의료적 성향 탐색
      도구입니다. 제공된 결과는 관계 이해 및 의사소통 개선을 위한 참고 정보로
      활용되며, 의학적 판단 또는 진단으로 사용되지 않습니다.
    </p>
  </article>
);

const Page2 = () => (
  <article className="wrapper flex flex-1 flex-col gap-9 py-5 text-[#111111]">
    <div className="flex items-center gap-2 xl:pt-15">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        01. 개인 성향 분석
      </p>
    </div>

    <div className="mt-2 space-y-6">
      <div>
        <p className="text-gray-500">
          우리는 사람의 성향을 세 겹의 구조로 탐구합니다.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-4 2xl:flex-row 2xl:justify-center">
        <div className="flex justify-center gap-2.5">
          <Image src={Female} alt="female" width={100} height={100} />
          <Image src={Male} alt="male" width={100} height={100} />
        </div>
        <Image
          src={Graph}
          alt="graph"
          className="mx-auto px-3 xl:mx-0"
          quality={100}
          width={250}
          height={116}
        />
      </div>
    </div>

    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      {/*  */}
      <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4">
        <div>
          <p className="text-lg font-semibold">정보처리 및 의사결정 방식</p>
          <p className="text-gray-500">Perception Core</p>
        </div>
        <p className="text-center">
          나는 세상을 어떻게 바라보고, 어떤 기준과 방식으로 판단하고 반응하는가?
        </p>
        <div className="space-y-3 text-gray-500">
          <p>
            이 영역은 사람이 세상을 어떻게 보고 판단하는지를 살펴보는
            부분입니다.
          </p>
          <p>
            즉, 외부의 정보를 어떤 식으로 받아들이고, 그걸 바탕으로 어떤 기준에
            따라 판단하며, 감정이 자극될 때 어떻게 반응하는지를 함께 봅니다.
          </p>
          <p>
            예를 들어, 어떤 사람은 지금 눈앞에 드러난 사실과 구체적인 정보에
            집중하는 반면, 다른 사람은 보이지 않는 흐름이나 가능성을 더 빠르게
            감지하기도 합니다.
          </p>
          <p>
            이런 사고방식과 판단의 차이는, “나는 어떤 상황에서 끌리고, 어떤
            상황에서 불편함을 느끼는가”를 이해하는 중요한 단서가 됩니다.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4">
        <div>
          <p className="text-lg font-semibold">동기 구조 및 자기조절</p>
          <p className="text-gray-500">Motivational Layer</p>
        </div>
        <p className="text-center">
          나는 무엇을 중요하게 여기며, <br /> 어떤 동기로 움직이는가?
        </p>
        <div className="space-y-3 text-gray-500">
          <p>
            모든 선택과 행동 뒤에는 각자만의 가치 기준과 동기가 있습니다. 어떤
            사람은 안정과 예측 가능성을 중요하게 여기고, 또 어떤 사람은 자유와
            새로운 자극 속에서 에너지를 얻습니다.
          </p>
          <p>
            누군가는 타인의 인정이 원동력이 되지만, 다른 누군가는 스스로의
            성취감에서 힘을 얻기도 합니다.
          </p>
          <p>
            이 항목은 각자가 무엇을 우선순위로 두고, 어떤 이유로 움직이는가를
            이해하는 영역입니다.
          </p>
          <p>
            이 동기 구조는 단순히 개인의 선택 방식에 그치지 않고, 관계 속에서
            어떻게 기대하고 반응하는가에도 깊이 연결됩니다.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col gap-3 rounded-xl bg-gray-100 p-4">
        <div>
          <p className="text-lg font-semibold">외현적 행동 및 생활양식</p>
          <p className="text-gray-500">Living Rhythm</p>
        </div>
        <p className="text-center">
          나는 어떤 리듬으로 살아가며, <br />
          어디서 에너지를 얻는가?
        </p>
        <div className="space-y-3 text-gray-500">
          <p>
            에너지의 방향과 행동 리듬에는 뚜렷한 개인적 패턴이 있습니다. 활동과
            교류 속에서 활력을 얻는 사람도 있고, 고요한 시간 속에서 집중력을
            회복하는 사람도 있습니다.
          </p>
          <p>
            또 계획된 구조를 선호하는 이가 있는가 하면, 상황에 따라 즉흥적으로
            흐름을 바꾸는 이도 있습니다.
          </p>
          <p>
            이러한 리듬과 실행 방식은 일상의 속도와 소통의 간격으로 이어집니다.
          </p>
          <p>
            함께 살아갈 때는 이 차이를 읽어내는 감각이, 관계의 편안함을 결정짓는
            요소가 됩니다.
          </p>
        </div>
      </div>
    </div>
  </article>
);

// Reusable Slider Section Component
type SliderConfigType = {
  title: string;
  leftLabel: string;
  rightLabel: string;
  origin: "left" | "center";
  maxValue: number;
  indicatorColor: string;
  clampColor: string;
  dimensionKey: string;
  analysisKey: string;
  useConvertedScore?: boolean;
  fallbackAnalysisKey?: string;
};

interface SliderSectionProps {
  title: string;
  reportData: ReportData | null | undefined;
  gender: "male" | "female";
  genderIcon: string;
  genderName: string;
  sliderConfig: SliderConfigType[];
  defaultSummaryKey: string;
  characteristicDefinition?: string;
}

const SliderSection = ({
  title,
  reportData,
  gender,
  genderIcon,
  genderName,
  sliderConfig,
  defaultSummaryKey,
  characteristicDefinition,
}: SliderSectionProps) => {
  const personalAnalysis = reportData?.personal_analyses?.[gender];
  const detailedAnalysis = personalAnalysis?.detailed_analysis;

  return (
    <article className="wrapper flex-1 bg-white text-gray-900">
      <div className="flex items-center xl:pt-15 xl:pb-2">
        <p className="text-xl leading-snug font-bold whitespace-nowrap">
          {title}
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        <div className="flex items-end justify-end gap-3">
          <span className="font-medium">{genderName} 님</span>
          <Image src={genderIcon} alt={gender} width={40} height={40} />
        </div>

        <div className="space-y-10">
          {sliderConfig.map((config, index) => {
            const analysis = detailedAnalysis?.[config.analysisKey];
            const fallbackAnalysis =
              config.fallbackAnalysisKey &&
              detailedAnalysis?.[config.fallbackAnalysisKey];

            return (
              <div key={config.analysisKey}>
                <SliderComponent
                  title={config.title}
                  leftLabel={config.leftLabel}
                  rightLabel={config.rightLabel}
                  origin={config.origin}
                  value={getScoreValue(
                    reportData,
                    gender,
                    config.dimensionKey,
                    config.useConvertedScore,
                  )}
                  maxValue={config.maxValue}
                  indicatorColor={config.indicatorColor}
                  clampColor={config.clampColor}
                  description={
                    getDescriptionText(analysis) ||
                    (fallbackAnalysis
                      ? getDescriptionText(fallbackAnalysis)
                      : "")
                  }
                />
                {index < sliderConfig.length - 1 && (
                  <hr className="mt-6 border-t border-gray-300" />
                )}
              </div>
            );
          })}
        </div>

        {(() => {
          const pa = personalAnalysis;
          const summaryText = defaultSummaryKey.startsWith("1")
            ? pa?.thinking_judgment_summary
            : defaultSummaryKey.startsWith("2")
              ? pa?.motivation_energy_summary
              : pa?.behavior_expression_summary;

          return (
            <SummaryBox
              text={
                summaryText ||
                detailedAnalysis?.[defaultSummaryKey]
                  ?.characteristicDefinition ||
                characteristicDefinition ||
                ""
              }
            />
          );
        })()}
      </div>
    </article>
  );
};

const Page3 = ({ reportData }: { reportData?: ReportData | null }) => {
  const femaleName = reportData?.metadata?.female_name || "갑순이";

  return (
    <SliderSection
      title="01 정보처리 및 의사결정 방식"
      reportData={reportData}
      gender="female"
      genderIcon={Female}
      genderName={femaleName}
      sliderConfig={SLIDER_CONFIG.section1}
      defaultSummaryKey="1-1"
    />
  );
};

const Page4 = ({ reportData }: { reportData?: ReportData | null }) => {
  const maleName = reportData?.metadata?.male_name || "갑돌이";

  return (
    <SliderSection
      title="01 정보처리 및 의사결정 방식"
      reportData={reportData}
      gender="male"
      genderIcon={Male}
      genderName={maleName}
      sliderConfig={SLIDER_CONFIG.section1}
      defaultSummaryKey="1-1"
    />
  );
};

const Page5 = ({ reportData }: { reportData?: ReportData | null }) => {
  const femaleName = reportData?.metadata?.female_name || "갑순이";

  return (
    <SliderSection
      title="02 동기 구조 및 자기조절"
      reportData={reportData}
      gender="female"
      genderIcon={Female}
      genderName={femaleName}
      sliderConfig={SLIDER_CONFIG.section2}
      defaultSummaryKey="2-1"
    />
  );
};

const Page6 = ({ reportData }: { reportData?: ReportData | null }) => {
  const maleName = reportData?.metadata?.male_name || "갑돌이";

  return (
    <SliderSection
      title="02 동기 구조 및 자기조절"
      reportData={reportData}
      gender="male"
      genderIcon={Male}
      genderName={maleName}
      sliderConfig={SLIDER_CONFIG.section2}
      defaultSummaryKey="2-1"
    />
  );
};

const Page7 = ({ reportData }: { reportData?: ReportData | null }) => {
  const femaleName = reportData?.metadata?.female_name || "갑순이";

  return (
    <SliderSection
      title="03 외현적 행동 및 생활방식"
      reportData={reportData}
      gender="female"
      genderIcon={Female}
      genderName={femaleName}
      sliderConfig={SLIDER_CONFIG.section3}
      defaultSummaryKey="3-1"
    />
  );
};

const Page8 = ({ reportData }: { reportData?: ReportData | null }) => {
  const maleName = reportData?.metadata?.male_name || "갑돌이";

  return (
    <SliderSection
      title="03 외현적 행동 및 생활방식"
      reportData={reportData}
      gender="male"
      genderIcon={Male}
      genderName={maleName}
      sliderConfig={SLIDER_CONFIG.section3}
      defaultSummaryKey="3-1"
    />
  );
};

const createPages = (reportData?: ReportData | null) => [
  <Page1 key="1" />,
  <Page2 key="2" />,
  <Page3 key="3" reportData={reportData} />,
  <Page4 key="4" reportData={reportData} />,
  <Page5 key="5" reportData={reportData} />,
  <Page6 key="6" reportData={reportData} />,
  <Page7 key="7" reportData={reportData} />,
  <Page8 key="8" reportData={reportData} />,
];
export const part1TotalPages = 8; // Page1부터 Page8까지 총 8페이지

interface Part1ResultPageProps {
  currentPage: number;
}

export default function Part1ResultPage({ currentPage }: Part1ResultPageProps) {
  const [reportData] = useAtom(reportDataAtom);
  const pages = createPages(reportData);

  return (
    <div className="font-pretendard flex flex-1 flex-col">
      <ReportHeader />
      {pages[currentPage]}
    </div>
  );
}
