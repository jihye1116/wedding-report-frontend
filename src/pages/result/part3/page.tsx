import { useAtom } from "jotai";

import { ReportHeader } from "@/components/ReportHeader";
import InitialIntro from "@/components/part3/InitialIntro";
import MonthlySimulation from "@/components/part3/MonthlySimulation";
import TransitionPage from "@/components/part3/TransitionPage";
import YearlyIntro from "@/components/part3/YearlyIntro";
import YearlySummary from "@/components/part3/YearlySummary";
import { ReportData } from "@/types/api";
import { reportDataAtom } from "@/store/surveyStore";

// scenario_flow 데이터를 기반으로 시뮬레이션 데이터를 생성하는 함수
const generateSimulationData = (reportData: ReportData | null) => {
  if (!reportData?.scenario_flow) {
    throw new Error(
      "리포트 데이터가 없습니다. API에서 데이터를 불러오는 중입니다.",
    );
  }

  const scenarioFlow = reportData.scenario_flow;
  const stages = scenarioFlow.stages;
  const summary = scenarioFlow.summary;

  // 기존 플로우 구조를 유지하면서 데이터만 동적으로 생성
  const simulationData: { [step: number]: any } = {
    1: {
      type: "initial-intro",
      data: {
        title: "3. 36개월 신혼생활 시뮬레이션",
        paragraphs: [
          "※ 본 시뮬레이션 리포트는 실제 커플의 다양한 설문과 대화 데이터를 기반으로 한 성향 예측 도구이며, 진단이나 처방을 목적으로 하지 않습니다. 관계 이해와 소통의 참고 자료로 활용하시되, 심층적인 상담이나 치료가 필요한 경우에는 전문가의 도움을 권장합니다.",
          "<b>결혼 초반 3년은 관계의 정착 여부와 질적 방향성을 결정짓는 핵심 구간</b>입니다.<br />통계적으로도 한국의 부부 이혼은 결혼 후 1~4년 사이에 가장 빈번하게 발생하며,<br />그중 1년차~3년차 이혼율이 전체 이혼의 약 30% 이상을 차지하고 있습니다.",
          "<b>그 이유는 단순한 &quot;성격 차이&quot; 이상의 문제—</b>즉, 아래와 같은 요인들로 나누어 볼 수 있습니다.",
          "그러므로 결혼 초기 3년은 단순히 함께 살아가는 적응기가 아닙니다.<br /><b>서로의 모습을 더 깊이 알아가며, 두 사람만의 새로운 관계 방식을 만들어가는 과정</b>입니다.",
          "이 시뮬레이션 리포트는 결혼 생활 3년간 겪게 되는 주요 변화들을 미리 살펴볼 수 있도록 구성되어 있습니다.",
        ],
        listItems: [
          "정서 표현 방식의 충돌",
          "역할에 대한 기대의 불일치",
          "가족·금전·생활 습관에 대한 기준 차이",
        ],
      },
    },
    2: {
      type: "intro",
      data: {
        year: 1,
        description:
          "결혼 1년 차는 기대와 설렘이 공존하는 시기입니다. 서로에 대한 애정, '함께 산다'는 새로움 자체가 기쁨과 충만함을 안겨주지만, 일상의 궤도 안에서는 <span className=\"font-bold\">조용한 균열과 미세한 충돌</span>이 서서히 드러나기 시작합니다.",
        subheading: "대표적인 갈등 지점은 다음과 같습니다:",
        points: [
          "집안일 분담 방식",
          "여가와 휴식의 패턴 차이",
          "감정 표현 방식과 언어의 온도차",
          "의사결정에서의 우선순위 불일치",
        ],
        analysis: [
          "이러한 차이들은 단순한 성격 차이를 넘어서, <b>\'각자가 살아온 환경과 관계 경험에서 비롯된 \'기준의 차이\'</b>로 해석될 수 있습니다. 따라서 이 시기의 핵심 과제는, 그 차이를 없애거나 맞추는 것이 아니라 <b>관찰하고 조율하는 \'공동 리듬\'을 어떻게 형성하느냐</b>에 달려 있습니다.",
          "즉, 결혼 1년 차는 연애 관계에서 <b>\'생활 공동체\'로의 전환</b>이 이루어지는 시기로, 서로가 단지 감정의 대상이 아니라, <b>협력적 구조를 함께 만들어가는 파트너</b>로 자리 잡아가는 초기 단계입니다.",
          "이 시기의 경험이 건설적일 경우, 부부는 이후 갈등 상황에서도 <b>감정을 설명하고 반응하는 자기만의 대화법과 협상 방식</b>을 갖게 되며, 이는 관계의 안정성과 회복탄력성에 결정적 기반이 됩니다.",
        ],
      },
    },
  };

  // 1년차 월별 시뮬레이션 데이터 생성 (3개월씩 그룹화)
  let stepIndex = 3;
  for (let i = 0; i < 4; i++) {
    // 1년차는 0~3번째 스테이지만 사용 (1~12M)
    const stage = stages[i];
    if (stage) {
      const period = stage.period;
      const title = stage.title.replace("### ", "");

      // period를 Month 형식으로 변환 (1~3M -> Month 1~3, 4~6M -> Month 4~6 등)
      const monthMatch = period.match(/(\d+)~(\d+)M/);
      let monthDisplay;
      if (monthMatch) {
        const startMonth = parseInt(monthMatch[1]);
        const endMonth = parseInt(monthMatch[2]);
        // 1년차는 1~12M이므로 그대로 사용
        monthDisplay = `Month ${startMonth}~${endMonth}`;
      } else {
        monthDisplay = period.replace(/(\d+)~(\d+)M/, "Month $1~$2");
      }

      // 대화 데이터 생성
      const dialogue = stage.dialogue || "";

      simulationData[stepIndex] = {
        type: "monthly",
        data: {
          month: monthDisplay,
          title: title,
          situation: stage.introduction,
          conversation: dialogue,
          analysis: stage.analysis,
        },
      };
      stepIndex++;
    }
  }

  // 연도별 요약 데이터 생성
  const conflictStages = stages.filter((stage) => stage.outcome === "conflict");
  const excitementStages = stages.filter(
    (stage) => stage.outcome === "excitement",
  );

  // 1년차 요약 데이터 생성 - yearly_indicators 사용
  const year1Indicator = reportData?.yearly_indicators?.find(
    (ind: any) => ind.year === 1,
  );

  simulationData[7] = {
    type: "summary",
    data: {
      year: 1,
      chartTitle: year1Indicator?.indicator_name || "긴장도",
      barColor: "#B3D4F5",
      quarterlyScores: year1Indicator?.quarterly_scores || [
        { quarter: "Q1", score: 7.2 },
        { quarter: "Q2", score: 7.2 },
        { quarter: "Q3", score: 6.2 },
        { quarter: "Q4", score: 4.2 },
      ],
      chartAnalysis: [
        year1Indicator?.graph_interpretation ||
          "1년 차에는 서로에 대한 이해와 기대 사이에서 작은 마찰이 일어납니다.",
        "결혼 생활에서 긴장이 생기는 것은 누구나 겪는 자연스러운 흐름입니다. <b>긴장의 파형</b>을 함께 이해하고 넘어서는 경험은 관계를 더욱 견고하게 만듭니다.",
      ],
      summaryTitle: year1Indicator?.title || "서로에게 리듬을 맞춰가는 첫 1년",
      summaryContent: [
        year1Indicator?.description ||
          "결혼 초기에는 대화가 자연스럽고, 감정의 결도 비슷하게 맞아떨어진다는 느낌을 받기 쉽습니다.",
        '같은 공간에 있는데 엇갈리는 감정, 같은 주제를 두고 다른 속도로 반응하는 상황이 반복되면서 <b>"이상하게 어긋난다"</b>는 느낌이 생길 수 있습니다.',
      ],
      questions: year1Indicator?.questions || [
        "• 우리는 요즘 무엇에 가장 많은 에너지를 쓰고 있는가?",
        "• 서로의 불안과 피로를 같은 방향에서 보고 있는가?",
        "• '우리의 결정 방식'에 대해 동의하고 있는가?",
        "• 요즘 나는, 이 사람과 어떤 주제를 가장 자주 이야기하고 있는가?",
      ],
    },
  };

  simulationData[8] = {
    type: "transition",
    data: {
      title: "첫 해를 지나온 두 사람에게는 무엇이 가장 소중할까요?",
      subtitle: "말하지 않으면 알 수 없고, 듣지 않으면 다가갈 수 없습니다.",
    },
  };

  // 2년차 인트로
  simulationData[9] = {
    type: "intro",
    data: {
      year: 2,
      description:
        "결혼 1년 차는 감정적 연결과 기대감이 중심에 있었던 시기였습니다. 서로의 다름을 이해하는 연습이 막 시작되었고, <b>갈등은 주로 말하기 애매한 감정의 층위에서 서서히 축적</b> 되었습니다. 특히 <b>생활 공간을 공유하면서 생겨나는 사소하지만 반복적인 판단 차이</b>는, '이걸 꼭 말해야 하나' 싶은 순간들 속에 쌓이면서 관계의 지형을 조금씩 바꾸기 시작합니다.",
      subheading: "이 시기의 부부는 다음과 같은 질문에 직면하게 됩니다:",
      points: [
        "우리 가계 기준은 어디에 맞춰야 하지?",
        "가족이 우리 삶에 개입할 수 있는 선은 어디까지인가?",
        "서로의 일과 커리어를 어느 수준으로 존중하고 양보해야 할까?",
        "주말, 휴식, 돈, 결정 방식까지... 이 모든 걸 누가 중심을 잡아야 하지?",
      ],
      analysis: [
        "이러한 문제는 감정만으로 해결되지 않습니다. 2년 차에 요구되는 것은 감정에 반응하는 방식이 아니라, <b>현실을 설계하고 합의하는 태도</b>입니다. 또한 이 시기의 특징 중 하나는, 이견이 생겼을 때 바로 대화로 풀지 못하고 비교, 오해, 침묵으로 이어지기 쉽다는 점입니다. 외부로부터의 압박(부모의 요청, 주택 시장의 변화, 출산 또는 커리어 압력 등)이 심화되면서 <b>관계 내부의 구조가 얼마나 안정적인가</b>가 시험대에 오릅니다.",
        "즉, 결혼은 이제 정서적 유대만으로 유지되지 않습니다. <b>현실적 선택을 함께 설계할 수 있는 합의의 힘, 판단의 기준, 조율의 기술</b>이 필요해지는 시기입니다.",
      ],
    },
  };

  // 2년차 월별 데이터 (13~24개월) - 5~8번째 스테이지 사용
  let year2StepIndex = 10;
  for (let i = 4; i < 8; i++) {
    const stage = stages[i];
    const period = stage.period;
    const title = stage.title.replace("### ", "");

    // period를 Month 형식으로 변환 (13~15M -> Month 1~3, 16~18M -> Month 4~6 등)
    const monthMatch = period.match(/(\d+)~(\d+)M/);
    let monthDisplay;
    if (monthMatch) {
      const startMonth = parseInt(monthMatch[1]);
      const endMonth = parseInt(monthMatch[2]);
      // 12를 넘어가는 경우 나머지 연산 사용하여 2년차 월 표시
      // 13~15M -> Month 1~3, 16~18M -> Month 4~6, 19~21M -> Month 7~9, 22~24M -> Month 10~12
      const displayStart = ((startMonth - 1) % 12) + 1;
      const displayEnd = ((endMonth - 1) % 12) + 1;
      monthDisplay = `Month ${displayStart}~${displayEnd}`;
    } else {
      monthDisplay = period.replace(/(\d+)~(\d+)M/, "Month $1~$2");
    }

    const dialogue = stage.dialogue || "";

    simulationData[year2StepIndex] = {
      type: "monthly",
      data: {
        month: monthDisplay,
        title: title,
        situation: stage.introduction,
        conversation: dialogue,
        analysis: stage.analysis,
      },
    };
    year2StepIndex++;
  }

  // 2년차 요약 - yearly_indicators 사용
  const year2Indicator = reportData?.yearly_indicators?.find(
    (ind: any) => ind.year === 2,
  );

  simulationData[14] = {
    type: "summary",
    data: {
      year: 2,
      chartTitle: year2Indicator?.indicator_name || "정서 연결도",
      barColor: "#67E4C8",
      quarterlyScores: year2Indicator?.quarterly_scores || [
        { quarter: "Q1", score: 7.8 },
        { quarter: "Q2", score: 6.7 },
        { quarter: "Q3", score: 8.3 },
        { quarter: "Q4", score: 7.6 },
      ],
      chartAnalysis: [
        year2Indicator?.graph_interpretation ||
          "2년 차가 되면 반복되는 갈등과 현실적 압박을 통과하며, 서로의 불안·상처·한계를 더 자주 접하게 됩니다.",
        '갈등과 압박을 회피하지 않고 대화하고 회복한 경험들이 쌓이면서, 정서 연결은 점차 수직적으로 깊어지기 시작합니다. 이 시기를 <b>"관계의 전환점"</b>이라 부를 수 있습니다.',
      ],
      summaryTitle: year2Indicator?.title || "정체성의 균형을 찾아가는 2년차",
      summaryContent: [
        year2Indicator?.description ||
          "결혼 첫해가 서로의 차이를 발견하고 조율하는 시간이었다면, 두 번째 해에는 조금 더 깊은 질문이 찾아옵니다.",
        "둘 다 말하지 않는 것이 배려라고 생각한 적이 있었습니다. 속삭이는 논리적으로 &quot;이해된다&quot;며 감정을 억눌렀고, 슥삭이는 &quot;괜찮다&quot;는 말을 액면 그대로 받아들였습니다. 하지만 침묵은 평화가 아니라 시한폭탄이었습니다.",
      ],
      questions: year2Indicator?.questions || [
        "• 2년 동안 내가 가장 많이 양보한 부분은 무엇이고, 그것이 지속 가능한가?",
        "• 나는 상대방의 성공을 진심으로 응원하고 있는가, 아니면 조건부로 지지하고 있는가?",
        "• 만약 지금 상황이 5년, 10년 계속된다면 우리는 행복할까?",
        "• 우리가 함께 내린 결정 중에 다시 재검토해야 할 것들은 무엇인가?",
      ],
    },
  };

  // 2년차 전환
  simulationData[15] = {
    type: "transition",
    data: {
      title: "미래의 기반을 다지는 결혼 3년차",
      subtitle: "두 사람이 함께 쌓아온 신뢰가 앞으로의 행복의 기초가 됩니다.",
    },
  };

  // 3년차 인트로
  simulationData[16] = {
    type: "intro",
    data: {
      year: 3,
      description:
        "결혼 2년 차까지는 주로 <b>현실적 의사결정의 충돌과 조율 미숙</b>에서 오는 긴장이 반복되는 시기였습니다. 커리어, 가족, 주거, 재정 등 중요한 삶의 기준들이 '내 방식'과 '상대 방식'으로 맞부딪히며, 감정의 피로도가 높아지고 갈등의 패턴도 고착화되는 경향이 나타납니다.",
      subheading:
        "그러나 3년 차에 들어서면서, 이 반복되는 갈등을 다루는 방식에 질적 변화의 가능성이 열리기 시작합니다:",
      points: [
        "감정이 쌓이던 시기에서 <b> → 감정을 '말할 수 있는' 시기</b>로",
        "일방적 양보의 피로에서 <b> → 공동 결정의 프레임</b>으로",
        "오해와 방어의 패턴에서 <b> → 존중과 해석의 노력</b>으로",
      ],
      analysis: [
        "3년 차는 감정적 거리두기나 권태가 찾아올 수 있는 시기이지만, 동시에, 그동안 축적된 갈등과 관계 경험을 바탕으로 <b>더 나은 팀워크로의 전환 가능성</b>이 생기는 첫 출발점이기도 합니다. 이 시기에는 다음과 같은 능력이 중요해집니다:",
        "만약 이 시기의 감정과 의견이 안전하게 공유될 수 있는 관계적 기초가 형성되어 있다면, 부부는 단순한 생활 운영을 넘어서 <b>심리적 협력자이자 인생 동반자로서의 관계</b>로 나아갈 수 있습니다.",
        "3년 차는 갈등을 다루는 방식의 진화가 일어나는 시기입니다. 만약 이 시기의 감정과 의견을 안전하게 나눌 수 있는 관계적 기초가 있다면, 두 사람은 함께 해서 더 든든하고 행복한 길을 동반자가 되어가는 방향으로 충분히 나아갈 수 있습니다.",
      ],
    },
  };

  // 3년차 월별 데이터 (25~36개월) - 9~12번째 스테이지 사용
  let year3StepIndex = 17;
  for (let i = 8; i < stages.length; i++) {
    const stage = stages[i];
    const period = stage.period;
    const title = stage.title.replace("### ", "");

    // period를 Month 형식으로 변환 (25~27M -> Month 1~3, 28~30M -> Month 4~6 등)
    const monthMatch = period.match(/(\d+)~(\d+)M/);
    let monthDisplay;
    if (monthMatch) {
      const startMonth = parseInt(monthMatch[1]);
      const endMonth = parseInt(monthMatch[2]);
      // 12를 넘어가는 경우 나머지 연산 사용하여 3년차 월 표시
      // 25~27M -> Month 1~3, 28~30M -> Month 4~6, 31~33M -> Month 7~9, 34~36M -> Month 10~12
      const displayStart = ((startMonth - 1) % 12) + 1;
      const displayEnd = ((endMonth - 1) % 12) + 1;
      monthDisplay = `Month ${displayStart}~${displayEnd}`;
    } else {
      monthDisplay = period.replace(/(\d+)~(\d+)M/, "Month $1~$2");
    }

    const dialogue = stage.dialogue || "";

    simulationData[year3StepIndex] = {
      type: "monthly",
      data: {
        month: monthDisplay,
        title: title,
        situation: stage.introduction,
        conversation: dialogue,
        analysis: stage.analysis,
      },
    };
    year3StepIndex++;
  }

  // 3년차 요약 - yearly_indicators 사용
  const year3Indicator = reportData?.yearly_indicators?.find(
    (ind: any) => ind.year === 3,
  );

  simulationData[21] = {
    type: "summary",
    data: {
      year: 3,
      chartTitle: year3Indicator?.indicator_name || "관계 회복 탄력성",
      barColor: "#FFC0C1",
      quarterlyScores: year3Indicator?.quarterly_scores || [
        { quarter: "Q1", score: 7.9 },
        { quarter: "Q2", score: 7.8 },
        { quarter: "Q3", score: 9.1 },
        { quarter: "Q4", score: 8.7 },
      ],
      chartAnalysis: [
        year3Indicator?.graph_interpretation ||
          "3년 차에 접어들면서, 두 사람은 싸움이 아니라 '회복의 방식'에 주목하기 시작합니다.",
        "관계 회복 탄력성은 갈등이나 위기 이후, 관계가 얼마나 빠르고 건강하게 회복되는지를 나타내는 지표입니다. 감정의 골을 다루고 상호 이해를 회복하는 과정에서 나타나는 심리적·정서적 회복 능력을 의미합니다.",
      ],
      summaryTitle:
        year3Indicator?.title || "평생 관계를 지탱할 힘을 만드는 3년차",
      summaryContent: [
        year3Indicator?.description ||
          "결혼 3년차는 삶이 가장 바쁘고 무거운 과제가 몰려드는 시기입니다.",
        "3년차는 부부가 진정한 독립성과 주도권을 확립한 전환점이었습니다.\n주거라는 큰 결정을 앞두고, 두 사람은 더 이상 서로에게만 부딪히는 데 그치지 않고 외부 압력(양가 부모님의 상반된 조언)과 내부 갈등(햇살/감성 vs 역세권/편의)을 동시에 마주했습니다.",
      ],
      questions: year3Indicator?.questions || [
        "• 최근 내린 중요한 결정들을 돌아볼 때, 우리 둘 다 납득하고 있나요?",
        "• 우리의 가치관과 목표가 여전히 일치하고 있나요?",
        "• 앞으로 비슷한 상황이 오면 어떻게 대처하고 싶나요?",
        "• 부부로서의 친밀한 시간도 충분히 갖고 있나요?",
      ],
    },
  };

  return simulationData;
};

interface Part3ResultPageProps {
  step: number;
}

export default function Part3ResultPage({ step }: Part3ResultPageProps) {
  const [reportData] = useAtom(reportDataAtom);
  // reportData가 없으면 로딩 상태 표시
  if (!reportData) {
    return (
      <main className="font-pretendard flex flex-1 flex-col">
        <ReportHeader />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
            <p className="text-gray-600">데이터를 불러오는 중...</p>
          </div>
        </div>
      </main>
    );
  }

  // 동적으로 생성된 시뮬레이션 데이터 사용
  const simulationData = generateSimulationData(reportData);
  const stepData = simulationData[step];

  const renderContent = () => {
    if (!stepData) return null;

    switch (stepData.type) {
      case "initial-intro":
        return <InitialIntro data={stepData.data} />;
      case "intro":
        return <YearlyIntro data={stepData.data} />;
      case "monthly":
        return <MonthlySimulation data={stepData.data} />;
      case "summary":
        return <YearlySummary data={stepData.data} />;
      case "transition":
        return <TransitionPage data={stepData.data} />;
      default:
        return null;
    }
  };

  return (
    <main className="font-pretendard flex flex-1 flex-col">
      <ReportHeader />
      {renderContent()}
    </main>
  );
}
