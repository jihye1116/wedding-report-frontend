import Image from "next/image";
import { useAtom } from "jotai";

import Female from "@/assets/images/female.svg";
import Graph from "@/assets/images/graph.png";
import Male from "@/assets/images/male.svg";
import { ReportHeader } from "@/components/ReportHeader";
import { SliderComponent } from "@/components/SliderComponent";
import { SummaryBox } from "@/components/SummaryBox";
import { ReportData } from "@/types/api";
import { reportDataAtom } from "@/store/surveyStore";

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
            <span className="flex-shrink-0">•</span>
            <span>세상을 어떻게 인식하고 감정을 처리하는지</span>
          </li>
          <li className="flex items-start gap-1">
            <span className="flex-shrink-0">•</span>
            <span>어떤 가치와 동기가 나를 움직이게 하는지</span>
          </li>
          <li className="flex items-start gap-1">
            <span className="flex-shrink-0">•</span>
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

const Page3 = ({ reportData }: { reportData?: ReportData | null }) => {
  const femaleName = reportData?.metadata?.female_name || "갑순이";

  // scaled_score를 슬라이더 값으로 변환 (-30 ~ +30 -> 0 ~ 30)
  const convertScaledScore = (scaledScore: number) => {
    return Math.round((scaledScore + 30) / 2); // -30~+30을 0~30으로 변환
  };

  return (
    <article className="wrapper flex-1 bg-white text-gray-900">
      <div className="flex items-center xl:pt-15 xl:pb-2">
        <p className="text-xl leading-snug font-bold whitespace-nowrap">
          01 정보처리 및 의사결정 방식
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        {/* Header with user info */}
        <div className="flex items-end justify-end gap-3">
          <span className="font-medium">{femaleName} 님</span>
          <Image src={Female} alt="female" width={40} height={40} />
        </div>

        {/* Slider Sections */}
        <div className="space-y-10">
          {/* Section 1: 사고의 시간 초점 */}
          <SliderComponent
            title="1. 사고의 시간 초점"
            leftLabel="현재지향형"
            rightLabel="미래지향형"
            value={convertScaledScore(
              reportData?.personal_analyses?.female?.score_analysis
                ?.현재지향_미래지향?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#E2F2FD"
            clampColor="#6EA3C7"
            description="현재 드러난 사실과 미래에 일어날 가능성 모두에 관심을 가지는 성향을 갖고 있습니다. 구체적인 데이터와 전체적인 패턴을 모두 고려하며, 상황을 해석할 때 '지금 무엇이 중요한가?'와 '앞으로 어떻게 변할 수 있을까?'라는 질문을 자연스럽게 떠올립니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 2: 사고 초점 */}
          <SliderComponent
            title="2. 사고 초점"
            leftLabel="논리·객관중심"
            rightLabel="감정·인간중심"
            value={convertScaledScore(
              reportData?.personal_analyses?.female?.score_analysis
                ?.논리중심_감정중심?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#DAFEE0"
            clampColor="#22c55e"
            description="논리와 감정을 모두 고려해 상황에 맞게 유연하게 판단하는 성향을 갖고 있습니다. 현재 사실과 미래 가능성 어느 쪽에도 치우치지 않고 균형 있게 상황을 바라보며, 구체적 데이터와 패턴, 의미를 모두 함께 고려합니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 3: 정서 반응 민감도 */}
          <SliderComponent
            origin="left"
            title="3. 정서 반응 민감도"
            leftLabel="반응적"
            rightLabel="조절적"
            value={convertScaledScore(
              reportData?.personal_analyses?.female?.score_analysis
                ?.반응적_조절적?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#FEECDA"
            clampColor="#76634E"
            description="감정을 잘 조절하며 침착하게 대응하는 성향을 갖고 있습니다. 현재 드러난 사실에 주목하여 신속하고 명확하게 상황을 파악하며, 논리적으로 문제에 접근하는 능력이 뛰어납니다."
          />
        </div>

        {/* Summary Box */}
        <SummaryBox
          text={
            reportData?.personal_analyses?.female?.detailed_analysis?.["1-1"]
              ?.characteristicDefinition ||
            "현재와 미래를 균형 있게 조화시키려는 성향"
          }
        />
      </div>
    </article>
  );
};

const Page4 = ({ reportData }: { reportData?: ReportData | null }) => {
  const maleName = reportData?.metadata?.male_name || "갑돌이";

  // scaled_score를 슬라이더 값으로 변환 (-30 ~ +30 -> 0 ~ 30)
  const convertScaledScore = (scaledScore: number) => {
    return Math.round((scaledScore + 30) / 2); // -30~+30을 0~30으로 변환
  };

  return (
    <article className="wrapper flex-1 bg-white text-gray-900">
      <div className="flex items-center xl:pt-15 xl:pb-2">
        <p className="text-xl leading-snug font-bold whitespace-nowrap">
          01 정보처리 및 의사결정 방식
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        {/* Header with user info */}
        <div className="flex items-end justify-end gap-3">
          <span className="font-medium">{maleName} 님</span>
          <Image src={Male} alt="male" width={40} height={40} />
        </div>

        {/* Slider Sections */}
        <div className="space-y-10">
          {/* Section 1: 사고의 시간 초점 */}
          <SliderComponent
            title="1. 사고의 시간 초점"
            leftLabel="현재지향형"
            rightLabel="미래지향형"
            value={convertScaledScore(
              reportData?.personal_analyses?.male?.score_analysis
                ?.현재지향_미래지향?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#E2F2FD"
            clampColor="#6EA3C7"
            description="현재 드러난 사실과 미래에 일어날 가능성 모두에 관심을 가지는 성향을 갖고 있습니다. 구체적인 데이터와 전체적인 패턴을 모두 고려하며, 상황을 해석할 때 '지금 무엇이 중요한가?'와 '앞으로 어떻게 변할 수 있을까?'라는 질문을 자연스럽게 떠올립니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 2: 사고 초점 */}
          <SliderComponent
            title="2. 사고 초점"
            leftLabel="논리·객관중심"
            rightLabel="감정·인간중심"
            value={convertScaledScore(
              reportData?.personal_analyses?.male?.score_analysis
                ?.논리중심_감정중심?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#DAFEE0"
            clampColor="#22c55e"
            description="논리와 감정을 모두 고려해 상황에 맞게 유연하게 판단하는 성향을 갖고 있습니다. 현재 사실과 미래 가능성 어느 쪽에도 치우치지 않고 균형 있게 상황을 바라보며, 구체적 데이터와 패턴, 의미를 모두 함께 고려합니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 3: 정서 반응 민감도 */}
          <SliderComponent
            origin="left"
            title="3. 정서 반응 민감도"
            leftLabel="반응적"
            rightLabel="조절적"
            value={convertScaledScore(
              reportData?.personal_analyses?.male?.score_analysis?.반응적_조절적
                ?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#FEECDA"
            clampColor="#76634E"
            description="감정을 잘 조절하며 침착하게 대응하는 성향을 갖고 있습니다. 현재 드러난 사실에 주목하여 신속하고 명확하게 상황을 파악하며, 논리적으로 문제에 접근하는 능력이 뛰어납니다."
          />
        </div>

        {/* Summary Box */}
        <SummaryBox
          text={
            reportData?.personal_analyses?.male?.detailed_analysis?.["1-2"]
              ?.characteristicDefinition ||
            "상황에 따라 논리와 감정을 균형 있게 고려하는 성향"
          }
        />
      </div>
    </article>
  );
};

const Page5 = ({ reportData }: { reportData?: ReportData | null }) => {
  const femaleName = reportData?.metadata?.female_name || "갑순이";

  // scaled_score를 슬라이더 값으로 변환 (-30 ~ +30 -> 0 ~ 30)
  const convertScaledScore = (scaledScore: number) => {
    return Math.round((scaledScore + 30) / 2); // -30~+30을 0~30으로 변환
  };

  return (
    <article className="wrapper flex-1 bg-white text-gray-900">
      <div className="flex items-center xl:pt-15 xl:pb-2">
        <p className="text-xl leading-snug font-bold whitespace-nowrap">
          02 동기 구조 및 자기조절
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        {/* Header with user info */}
        <div className="flex items-end justify-end gap-3">
          <span className="font-medium">{femaleName} 님</span>
          <Image src={Female} alt="female" width={40} height={40} />
        </div>

        {/* Slider Sections */}
        <div className="space-y-10">
          {/* Section 1: 변화나 위험을 대할 때의 행동 에너지 방향 */}
          <SliderComponent
            title="1. 변화나 위험을 대할 때의 행동 에너지 방향"
            leftLabel="안전지향"
            rightLabel="도전지향"
            value={convertScaledScore(
              reportData?.personal_analyses?.female?.score_analysis
                ?.안정지향_도전지향?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#FDE2E2"
            clampColor="#D68787"
            description="안정과 도전 사이에서 균형을 이루는 성향을 갖고 있습니다. 상황에 따라 신중하게 판단하며, 위험을 회피하기보다는 도전과 가능성에 반응하며 움직이는 성향이 있습니다. 변화가 예고될 때 위축되기보다는, 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 2: 동기의 원천 */}
          <SliderComponent
            title="2. 동기의 원천"
            leftLabel="외적동기"
            rightLabel="내적동기"
            value={convertScaledScore(
              reportData?.personal_analyses?.female?.score_analysis
                ?.외적동기_내적동기?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#EEE3FF"
            clampColor="#8E6CC2"
            description="내면에서 비롯된 직관, 영감, 의미 추구가 강한 동기 요인이 됩니다. 타인의 인정이나 기대보다는 내면의 방향성을 따르고자 하는 힘이 강하며, 주체적으로 움직이면서도 주변의 기대나 기준을 완전히 무시하지 않는 유연한 태도를 지닙니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 3: 자기조절과 실행 자율성 */}
          <SliderComponent
            title="3. 자기조절과 실행 자율성"
            leftLabel="낮음"
            rightLabel="높음"
            value={convertScaledScore(
              reportData?.personal_analyses?.female?.score_analysis
                ?.반응적_조절적?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#FEFBDA"
            clampColor="#C2BD91"
            description="자신이 설정한 목표를 스스로 계획하고 실천할 수 있는 실행 자율성이 높은 편입니다. 단지 아이디어나 의도를 갖는 데 그치지 않고, 그것을 구체적인 행동으로 전환하고 유지하는 능력을 가지고 있습니다. 스스로 동기를 조절하고 방향을 정하며, 일정한 흐름으로 목표를 끝까지 추진할 수 있는 심리적 자기관리력이 강점입니다."
          />
        </div>

        {/* Summary Box */}
        <SummaryBox
          text={
            reportData?.personal_analyses?.female?.detailed_analysis?.["2-2"]
              ?.characteristicDefinition ||
            "내적 동기와 외적 동기 사이에서 균형을 이루려는 성향"
          }
        />
      </div>
    </article>
  );
};

const Page6 = ({ reportData }: { reportData?: ReportData | null }) => {
  const maleName = reportData?.metadata?.male_name || "갑돌이";

  // scaled_score를 슬라이더 값으로 변환 (-30 ~ +30 -> 0 ~ 30)
  const convertScaledScore = (scaledScore: number) => {
    return Math.round((scaledScore + 30) / 2); // -30~+30을 0~30으로 변환
  };

  return (
    <article className="wrapper flex-1 bg-white text-gray-900">
      <div className="flex items-center xl:pt-15 xl:pb-2">
        <p className="text-xl leading-snug font-bold whitespace-nowrap">
          02 동기 구조 및 자기조절
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        {/* Header with user info */}
        <div className="flex items-end justify-end gap-3">
          <span className="font-medium">{maleName} 님</span>
          <Image src={Male} alt="male" width={40} height={40} />
        </div>

        {/* Slider Sections */}
        <div className="space-y-10">
          {/* Section 1: 변화나 위험을 대할 때의 행동 에너지 방향 */}
          <SliderComponent
            title="1. 변화나 위험을 대할 때의 행동 에너지 방향"
            leftLabel="안전지향"
            rightLabel="도전지향"
            value={convertScaledScore(
              reportData?.personal_analyses?.male?.score_analysis
                ?.안정지향_도전지향?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#FDE2E2"
            clampColor="#D68787"
            description="안정과 도전 사이에서 균형을 이루는 성향을 갖고 있습니다. 상황에 따라 신중하게 판단하며, 위험을 회피하기보다는 도전과 가능성에 반응하며 움직이는 성향이 있습니다. 변화가 예고될 때 위축되기보다는, 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 2: 동기의 원천 */}
          <SliderComponent
            title="2. 동기의 원천"
            leftLabel="외적동기"
            rightLabel="내적동기"
            value={convertScaledScore(
              reportData?.personal_analyses?.male?.score_analysis
                ?.외적동기_내적동기?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#EEE3FF"
            clampColor="#8E6CC2"
            description="내면에서 비롯된 직관, 영감, 의미 추구가 강한 동기 요인이 됩니다. 타인의 인정이나 기대보다는 내면의 방향성을 따르고자 하는 힘이 강하며, 주체적으로 움직이면서도 주변의 기대나 기준을 완전히 무시하지 않는 유연한 태도를 지닙니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 3: 자기조절과 실행 자율성 */}
          <SliderComponent
            title="3. 자기조절과 실행 자율성"
            leftLabel="낮음"
            rightLabel="높음"
            value={convertScaledScore(
              reportData?.personal_analyses?.male?.score_analysis?.반응적_조절적
                ?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#FEFBDA"
            clampColor="#C2BD91"
            description="자신이 설정한 목표를 스스로 계획하고 실천할 수 있는 실행 자율성이 높은 편입니다. 단지 아이디어나 의도를 갖는 데 그치지 않고, 그것을 구체적인 행동으로 전환하고 유지하는 능력을 가지고 있습니다. 스스로 동기를 조절하고 방향을 정하며, 일정한 흐름으로 목표를 끝까지 추진할 수 있는 심리적 자기관리력이 강점입니다."
          />
        </div>

        {/* Summary Box */}
        <SummaryBox
          text={
            reportData?.personal_analyses?.male?.detailed_analysis?.["2-1"]
              ?.characteristicDefinition ||
            "안정적이고 예측 가능한 환경에서 안전감을 느끼는 성향"
          }
        />
      </div>
    </article>
  );
};

const Page7 = ({ reportData }: { reportData?: ReportData | null }) => {
  const femaleName = reportData?.metadata?.female_name || "갑순이";

  // scaled_score를 슬라이더 값으로 변환 (-30 ~ +30 -> 0 ~ 30)
  const convertScaledScore = (scaledScore: number) => {
    return Math.round((scaledScore + 30) / 2); // -30~+30을 0~30으로 변환
  };

  return (
    <article className="wrapper flex-1 bg-white text-gray-900">
      <div className="flex items-center xl:pt-15 xl:pb-2">
        <p className="text-xl leading-snug font-bold whitespace-nowrap">
          03 외현적 행동 및 생활방식
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        {/* Header with user info */}
        <div className="flex items-end justify-end gap-3">
          <span className="font-medium">{femaleName} 님</span>
          <Image src={Female} alt="female" width={40} height={40} />
        </div>

        {/* Slider Sections */}
        <div className="space-y-10">
          {/* Section 1: 대인 관계에서의 에너지 순환 패턴 */}
          <SliderComponent
            title="1. 대인 관계에서의 에너지 순환 패턴"
            leftLabel="내향형"
            rightLabel="외향형"
            value={convertScaledScore(
              reportData?.personal_analyses?.female?.score_analysis?.내향_외향
                ?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#E2FAFD"
            clampColor="#94DEE8"
            description="내향과 외향 사이에서 균형을 이루는 성향을 갖고 있습니다. 상황에 따라 혼자만의 시간을 즐기기도 하고, 다른 사람들과의 상호작용에서 에너지를 얻기도 합니다. 조용한 환경에서 깊이 생각하는 것을 좋아하면서도, 필요할 때는 활발하게 소통하는 능력을 가지고 있습니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 2: 일상 구조화 및 실행 방식 */}
          <SliderComponent
            title="2. 일상 구조화 및 실행 방식"
            leftLabel="유연형"
            rightLabel="계획형"
            value={convertScaledScore(
              reportData?.personal_analyses?.female?.score_analysis?.유연_계획
                ?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#E2FDF0"
            clampColor="#97CCB2"
            description="유연함과 계획성 사이에서 균형을 이루는 성향을 갖고 있습니다. 상황에 따라 미리 계획을 세우기도 하고, 그때그때 유연하게 대응하기도 합니다. 구조화된 일상을 선호하면서도 예상치 못한 변화에 적응할 수 있는 능력을 가지고 있습니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 3: 감정·의사 표현 스타일 */}
          <SliderComponent
            origin="left"
            title="3. 감정·의사 표현 스타일"
            leftLabel="자기표현형"
            rightLabel="적응배려형"
            value={convertScaledScore(
              reportData?.personal_analyses?.female?.score_analysis
                ?.자기표현_적응배려?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#E2E2FD"
            clampColor="#8A8ACD"
            description="상대를 배려하되 필요시 의견을 표현하는 스타일을 갖고 있습니다. 조화롭게 관계를 유지하면서도 자신의 생각과 감정을 적절히 전달할 수 있는 능력을 가지고 있습니다. 상대방의 입장을 고려하면서도 진정성 있는 소통을 추구합니다."
          />
        </div>

        {/* Summary Box */}
        <SummaryBox
          text={
            reportData?.personal_analyses?.female?.detailed_analysis?.["3-2"]
              ?.characteristicDefinition ||
            "상황에 따라 유연하게 대처하고 계획과 즉흥 사이에서 균형을 이루는 성향"
          }
        />
      </div>
    </article>
  );
};

const Page8 = ({ reportData }: { reportData?: ReportData | null }) => {
  const maleName = reportData?.metadata?.male_name || "갑돌이";

  // scaled_score를 슬라이더 값으로 변환 (-30 ~ +30 -> 0 ~ 30)
  const convertScaledScore = (scaledScore: number) => {
    return Math.round((scaledScore + 30) / 2); // -30~+30을 0~30으로 변환
  };

  return (
    <article className="wrapper flex-1 bg-white text-gray-900">
      <div className="flex items-center xl:pt-15 xl:pb-2">
        <p className="text-xl leading-snug font-bold whitespace-nowrap">
          03 외현적 행동 및 생활방식
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        {/* Header with user info */}
        <div className="flex items-end justify-end gap-3">
          <span className="font-medium">{maleName} 님</span>
          <Image src={Male} alt="male" width={40} height={40} />
        </div>

        {/* Slider Sections */}
        <div className="space-y-10">
          {/* Section 1: 대인 관계에서의 에너지 순환 패턴 */}
          <SliderComponent
            title="1. 대인 관계에서의 에너지 순환 패턴"
            leftLabel="내향형"
            rightLabel="외향형"
            value={convertScaledScore(
              reportData?.personal_analyses?.male?.score_analysis?.내향_외향
                ?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#E2FAFD"
            clampColor="#94DEE8"
            description="내향과 외향 사이에서 균형을 이루는 성향을 갖고 있습니다. 상황에 따라 혼자만의 시간을 즐기기도 하고, 다른 사람들과의 상호작용에서 에너지를 얻기도 합니다. 조용한 환경에서 깊이 생각하는 것을 좋아하면서도, 필요할 때는 활발하게 소통하는 능력을 가지고 있습니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 2: 일상 구조화 및 실행 방식 */}
          <SliderComponent
            title="2. 일상 구조화 및 실행 방식"
            leftLabel="유연형"
            rightLabel="계획형"
            value={convertScaledScore(
              reportData?.personal_analyses?.male?.score_analysis?.유연_계획
                ?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#E2FDF0"
            clampColor="#97CCB2"
            description="유연함과 계획성 사이에서 균형을 이루는 성향을 갖고 있습니다. 상황에 따라 미리 계획을 세우기도 하고, 그때그때 유연하게 대응하기도 합니다. 구조화된 일상을 선호하면서도 예상치 못한 변화에 적응할 수 있는 능력을 가지고 있습니다."
          />
          <hr className="mt-6 border-t border-gray-300" />

          {/* Section 3: 감정·의사 표현 스타일 */}
          <SliderComponent
            origin="left"
            title="3. 감정·의사 표현 스타일"
            leftLabel="자기표현형"
            rightLabel="적응배려형"
            value={convertScaledScore(
              reportData?.personal_analyses?.male?.score_analysis
                ?.자기표현_적응배려?.scaled_score || 0,
            )}
            maxValue={30}
            indicatorColor="#E2E2FD"
            clampColor="#8A8ACD"
            description="상대를 배려하되 필요시 의견을 표현하는 스타일을 갖고 있습니다. 조화롭게 관계를 유지하면서도 자신의 생각과 감정을 적절히 전달할 수 있는 능력을 가지고 있습니다. 상대방의 입장을 고려하면서도 진정성 있는 소통을 추구합니다."
          />
        </div>

        {/* Summary Box */}
        <SummaryBox
          text={
            reportData?.personal_analyses?.male?.detailed_analysis?.["3-1"]
              ?.characteristicDefinition ||
            "내향과 외향 사이에서 균형 있게 상황에 맞춰 유연하게 대응하는 성향"
          }
        />
      </div>
    </article>
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
