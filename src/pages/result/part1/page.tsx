import Image from "next/image";
import { useAtom } from "jotai";

import Female from "@/assets/images/female.svg";
import Graph from "@/assets/images/graph.png";
import Male from "@/assets/images/male.svg";
import { ReportHeader } from "@/components/ReportHeader";
import { SliderComponent } from "@/components/SliderComponent";
import { SummaryBox } from "@/components/SummaryBox";
import { ReportData, DetailedAnalysis } from "@/types/api";
import { reportDataAtom } from "@/store/surveyStore";

// Constants
const SLIDER_CONFIG = {
  section1: [
    {
      title: "1. 사고의 시간 초점",
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
      title: "2. 사고 초점",
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
      title: "3. 정서 반응 민감도",
      leftLabel: "반응적",
      rightLabel: "조절적",
      origin: "left" as const,
      maxValue: 30,
      indicatorColor: "#FEECDA",
      clampColor: "#76634E",
      dimensionKey: "반응적_조절적" as const,
      analysisKey: "1-3" as const,
      useConvertedScore: true,
    },
  ],
  section2: [
    {
      title: "1. 변화나 위험을 대할 때의 행동 에너지 방향",
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
      title: "2. 동기의 원천",
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
      title: "3. 자기조절과 실행 자율성",
      leftLabel: "낮음",
      rightLabel: "높음",
      origin: "left" as const,
      maxValue: 30,
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
      title: "1. 대인 관계에서의 에너지 순환 패턴",
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
      title: "2. 일상 구조화 및 실행 방식",
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
      title: "3. 감정·의사 표현 스타일",
      leftLabel: "자기표현형",
      rightLabel: "적응배려형",
      origin: "left" as const,
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
        "함께 잘 살기 위한 첫걸음,<span className="responsive-break"></span>나를
        이해하는 것부터"
      </h3>
      <div>
        <p className="text-gray-500">
          우리는 사람의 성향을 세 겹의 구조로 분석합니다. 가장 안쪽부터 순서대로
          살펴보겠습니다.
        </p>
        <ol className="mt-2.5 text-gray-500">
          <li className="flex items-start gap-1">
            <span className="shrink-0">•</span>
            <span>세상을 어떻게 인식하고 감정을 처리하는지</span>
          </li>
          <li className="flex items-start gap-1">
            <span className="shrink-0">•</span>
            <span>어떤 가치와 동기가 나를 움직이게 하는지</span>
          </li>
          <li className="flex items-start gap-1">
            <span className="shrink-0">•</span>
            <span>어떤 방식으로 일상을 살아가며 에너지를 회복하는지</span>
          </li>
        </ol>
      </div>
      <p className="text-gray-500">
        이 구조는 단지 나 자신을 파악하기 위한 것이 아닙니다. 상대를 있는 그대로
        받아들이고, 현실적인 관계의 조율점을 찾아가는 데에 꼭 필요한 정보입니다.
        <br />
        이해와 공감은 감정만으로 완성되지 않습니다. 내 안의 구조를 명확히 알 때,
        우리는 타인의 구조를 존중하며 함께할 수 있게 됩니다.{" "}
      </p>
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
      <div className="text-gray-500">
        지금부터 소개할 세 가지 성향 영역은, 함께하는 삶을 조금 더 편안하고
        유연하게 만들어줄 ‘관계의 기반’을 여는 열쇠입니다.
      </div>
      <div className="flex flex-col gap-4 2xl:flex-row 2xl:justify-center">
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
        <p className="text-sm text-gray-500">
          이 영역은{" "}
          <span className="font-bold">
            {" "}
            개인이 외부 정보를 어떻게 인식하고, 그 정보를 바탕으로 어떤 기준에
            따라 판단하며, 감정 자극에 어떻게 반응하는지를 살펴보는 영역입니다.
          </span>{" "}
          예를 들어, 어떤 사람은 현재 드러난 사실과 구체적인 정보에 주목하고, 또
          다른 사람은 눈에 보이지 않는 흐름이나 가능성을 더 민감하게 포착합니다.
          개인의 사고 구조와 의사결정 방식은 내가 무엇에 끌리고, 무엇을 꺼리며,
        </p>
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
        <p className="text-sm text-gray-500">
          모든 선택과 행동의 배경에는{" "}
          <span className="font-bold">고유한 가치 우선순위</span>가 있습니다.
          안정성과 예측 가능성이 중요한 사람도 있고, 자유와 창의적 자극이 우선인
          사람도 있습니다. 또 어떤 사람은 외적 인정보다 내적 성취에 더 동기를
          느끼기도 하죠. 이 항목을 통해 삶의 방향성과 기준, 그리고 행동의 근원을
          이해할 수 있습니다. 이는 자기결정의 명확성과 일관된 삶을 위한 중요한
          토대가 됩니다.
        </p>
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
        <p className="text-sm text-gray-500">
          누군가는 계획된 루틴 속에서 안정감을 느끼고, 누군가는 즉흥적이고
          다양한 변화에서 생기를 얻습니다. 또, 여유 시간에 혼자 정적인 시간을
          보내야 회복되는 사람도 있고, 사람들과의 활동에서 에너지를 얻는 사람도
          있습니다. 이 영역은
          <span className="font-bold">
            {" "}
            나에게 맞는 일상 구성 방식,
          </span> 그리고 <span className="font-bold">
            회복과 몰입의 조건
          </span>{" "}
          을 파악하는 데 중심이 됩니다.
        </p>
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
  defaultSummaryText: string;
}

const SliderSection = ({
  title,
  reportData,
  gender,
  genderIcon,
  genderName,
  sliderConfig,
  defaultSummaryKey,
  defaultSummaryText,
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

        <SummaryBox
          text={
            detailedAnalysis?.[defaultSummaryKey]?.characteristicDefinition ||
            defaultSummaryText
          }
        />
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
      defaultSummaryText="현재와 미래를 균형 있게 조화시키려는 성향"
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
      defaultSummaryKey="1-2"
      defaultSummaryText="상황에 따라 논리와 감정을 균형 있게 고려하는 성향"
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
      defaultSummaryKey="2-2"
      defaultSummaryText="내적 동기와 외적 동기 사이에서 균형을 이루려는 성향"
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
      defaultSummaryText="안정적이고 예측 가능한 환경에서 안전감을 느끼는 성향"
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
      defaultSummaryKey="3-2"
      defaultSummaryText="상황에 따라 유연하게 대처하고 계획과 즉흥 사이에서 균형을 이루는 성향"
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
      defaultSummaryText="내향과 외향 사이에서 균형 있게 상황에 맞춰 유연하게 대응하는 성향"
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
