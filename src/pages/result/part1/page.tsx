import Image from "next/image";

import Female from "@/assets/images/female.svg";
import Graph from "@/assets/images/graph.png";
import Male from "@/assets/images/male.svg";
import { ReportHeader } from "@/components/ReportHeader";
import { SliderComponent } from "@/components/SliderComponent";
import { SummaryBox } from "@/components/SummaryBox";

const Page1 = () => (
  <article className="wrapper flex flex-1 flex-col font-medium text-[#111111]">
    <div className="flex items-center py-5 xl:py-10">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        1. 개인성향 분석
      </p>
    </div>

    <div className="flex flex-1 flex-col gap-10 py-5 xl:py-10">
      <h3 className="text-center text-lg">
        "함께 잘 살기 위한 첫걸음, 나를 이해하는 것부터"
      </h3>
      <p className="text-center text-gray-500">
        우리는 사람의 성향을 세 겹의 구조로 분석합니다. 가장 안쪽에는 내가
        세상을 어떻게 인식하고 감정을 처리하는지, 그다음에는 어떤 가치와 동기가
        나를 움직이게 하는지, 그리고 바깥쪽에는 내가 어떤 방식으로 일상을
        살아가며 에너지를 회복하는지가 있습니다.{" "}
      </p>
      <p className="text-center text-gray-500">
        이 구조는 단지 나 자신을 파악하기 위한 것이 아닙니다. 상대를 있는 그대로
        받아들이고, 현실적인 관계의 조율점을 찾아가는 데에 꼭 필요한 정보입니다.
        이해와 공감은 감정만으로 완성되지 않습니다. 내 안의 구조를 명확히 알 때,
        우리는 타인의 구조를 존중하며 함께할 수 있게 됩니다.{" "}
      </p>
    </div>
    <p className="py-5 text-center text-sm text-gray-400 xl:py-10">
      ※ 본 분석은 임상 진단이 아닌, 다양한 심리이론을 통합한 비의료적 성향 탐색
      도구입니다. 제공된 결과는 관계 이해 및 의사소통 개선을 위한 참고 정보로
      활용되며, 의학적 판단 또는 진단으로 사용되지 않습니다.
    </p>
  </article>
);

const Page2 = () => (
  <article className="wrapper flex flex-1 flex-col gap-9 py-5 text-[#111111]">
    <div className="flex items-center gap-2">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        01. 개인성향 분석
      </p>
    </div>

    <div className="mt-8 space-y-6">
      <div className="text-sm text-gray-500">
        지금부터 소개할 세 가지 성향 영역은, 함께하는 삶을 조금 더 편안하고
        유연하게 만들어줄 ‘관계의 기반’을 여는 열쇠입니다.
      </div>
      <div className="flex flex-col gap-4 xl:flex-row xl:justify-center">
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

const Page3 = () => (
  <article className="wrapper flex-1 bg-white text-gray-900">
    <div className="flex items-center xl:py-2">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        01 정보처리 및 의사결정 방식
      </p>
    </div>
    <div className="mt-5 flex flex-col gap-8">
      {/* Header with user info */}
      <div className="flex items-end justify-end gap-3">
        <span className="font-medium">갑순이 님</span>
        <Image src={Female} alt="female" width={40} height={40} />
      </div>

      {/* Slider Sections */}
      <div className="space-y-10">
        {/* Section 1: 변화나 위험을 대할 때의 행동 에너지 방향 */}
        <SliderComponent
          title="1. 사고의 시간 초점"
          leftLabel="현재지향형"
          rightLabel="미래지향형"
          value={20}
          maxValue={30}
          indicatorColor="#E2F2FD"
          clampColor="#6EA3C7"
          description="갑순이는 위험을 회피하기보다는, 도전과 가능성에 반응하며 움직이는 성향이 강합니다. 변화가 예고될 때 위축되기보다는, 오히려 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다. 새로운 아이디어나 낯선 경험을 두려워하지 않으며, 일상의 반복보다 미지의 가능성에 호기심을 느끼는 경향이 있습니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 2: 사고 초점 */}
        <SliderComponent
          title="2. 사고 초점"
          leftLabel="논리·객관중심"
          rightLabel="감정·인간중심"
          value={5}
          maxValue={30}
          indicatorColor="#DAFEE0"
          clampColor="#22c55e"
          description="갑순이는 타인의 인정이나 기대가 동기의 한 요소가 되기도 하지만, 그에 못지않게 내면에서 비롯된 직관, 영감, 의미 추구 역시 강한 동기 요인이 됩니다. 다시 말해, 외부로부터 평가받고자 하는 욕구와, 내면의 방향성을 따르고자 하는 힘 사이에서 균형을 이루고 있습니다. 이로 인해 갑순이님은 주체적으로 움직이면서도 주변의 기대나 기준을 완전히 무시하지 않는 유연한 태도를 지닙니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 3: 자기조절과 실행 자율성 */}
        <SliderComponent
          origin="left"
          title="3. 정서 반응 민감도"
          leftLabel="반응적"
          rightLabel="조절적"
          value={75}
          maxValue={100}
          indicatorColor="#FEECDA"
          clampColor="#76634E"
          scale={[0, 25, 50, 75, 100]}
          description="갑순이는 자신이 설정한 목표를 스스로 계획하고 실천할 수 있는 실행 자율성이 높은 편입니다. 단지 아이디어나 의도를 갖는 데 그치지 않고, 그것을 구체적인 행동으로 전환하고 유지하는 능력을 가지고 있습니다. 스스로 동기를 조절하고 방향을 정하며, 일정한 흐름으로 목표를 끝까지 추진할 수 있는 심리적 자기관리력이 강점입니다."
        />
      </div>

      {/* Summary Box */}
      <SummaryBox text="변화에 빠르게 반응하는 직관적 문제 해결 자" />
    </div>
  </article>
);

const Page4 = () => (
  <article className="wrapper flex-1 bg-white text-gray-900">
    <div className="flex items-center xl:py-2">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        01 정보처리 및 의사결정 방식
      </p>
    </div>
    <div className="mt-5 flex flex-col gap-8">
      {/* Header with user info */}
      <div className="flex items-end justify-end gap-3">
        <span className="font-medium">갑돌이 님</span>
        <Image src={Male} alt="male" width={40} height={40} />
      </div>

      {/* Slider Sections */}
      <div className="space-y-10">
        {/* Section 1: 변화나 위험을 대할 때의 행동 에너지 방향 */}
        <SliderComponent
          title="1. 사고의 시간 초점"
          leftLabel="현재지향형"
          rightLabel="미래지향형"
          value={20}
          maxValue={30}
          indicatorColor="#E2F2FD"
          clampColor="#6EA3C7"
          description="갑돌이는 위험을 회피하기보다는, 도전과 가능성에 반응하며 움직이는 성향이 강합니다. 변화가 예고될 때 위축되기보다는, 오히려 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다. 새로운 아이디어나 낯선 경험을 두려워하지 않으며, 일상의 반복보다 미지의 가능성에 호기심을 느끼는 경향이 있습니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 2: 사고 초점 */}
        <SliderComponent
          title="2. 사고 초점"
          leftLabel="논리·객관중심"
          rightLabel="감정·인간중심"
          value={5}
          maxValue={30}
          indicatorColor="#DAFEE0"
          clampColor="#22c55e"
          description="갑돌이는 타인의 인정이나 기대가 동기의 한 요소가 되기도 하지만, 그에 못지않게 내면에서 비롯된 직관, 영감, 의미 추구 역시 강한 동기 요인이 됩니다. 다시 말해, 외부로부터 평가받고자 하는 욕구와, 내면의 방향성을 따르고자 하는 힘 사이에서 균형을 이루고 있습니다. 이로 인해 갑돌이님은 주체적으로 움직이면서도 주변의 기대나 기준을 완전히 무시하지 않는 유연한 태도를 지닙니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 3: 자기조절과 실행 자율성 */}
        <SliderComponent
          origin="left"
          title="3. 정서 반응 민감도"
          leftLabel="반응적"
          rightLabel="조절적"
          value={75}
          maxValue={100}
          indicatorColor="#FEECDA"
          clampColor="#76634E"
          scale={[0, 25, 50, 75, 100]}
          description="갑돌이는 자신이 설정한 목표를 스스로 계획하고 실천할 수 있는 실행 자율성이 높은 편입니다. 단지 아이디어나 의도를 갖는 데 그치지 않고, 그것을 구체적인 행동으로 전환하고 유지하는 능력을 가지고 있습니다. 스스로 동기를 조절하고 방향을 정하며, 일정한 흐름으로 목표를 끝까지 추진할 수 있는 심리적 자기관리력이 강점입니다."
        />
      </div>

      {/* Summary Box */}
      <SummaryBox text="균형잡힌 동기 구조를 가진 리더십형" />
    </div>
  </article>
);

const Page5 = () => (
  <article className="wrapper flex-1 bg-white text-gray-900">
    <div className="flex items-center xl:py-2">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        02 동기 구조 및 자기조절
      </p>
    </div>
    <div className="mt-5 flex flex-col gap-8">
      {/* Header with user info */}
      <div className="flex items-end justify-end gap-3">
        <span className="font-medium">갑순이 님</span>
        <Image src={Female} alt="female" width={40} height={40} />
      </div>

      {/* Slider Sections */}
      <div className="space-y-10">
        {/* Section 1: 변화나 위험을 대할 때의 행동 에너지 방향 */}
        <SliderComponent
          title="1. 변화나 위험을 대할 때의 행동 에너지 방향"
          leftLabel="안전지향"
          rightLabel="도전지향"
          value={20}
          maxValue={30}
          indicatorColor="#FDE2E2"
          clampColor="#D68787"
          description="갑순이는 위험을 회피하기보다는, 도전과 가능성에 반응하며 움직이는 성향이 강합니다. 변화가 예고될 때 위축되기보다는, 오히려 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다. 새로운 아이디어나 낯선 경험을 두려워하지 않으며, 일상의 반복보다 미지의 가능성에 호기심을 느끼는 경향이 있습니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 2: 동기의 원천 */}
        <SliderComponent
          title="2. 동기의 원천"
          leftLabel="외적동기"
          rightLabel="내적동기"
          value={15}
          maxValue={30}
          indicatorColor="#EEE3FF"
          clampColor="#8E6CC2"
          description="갑순이는 타인의 인정이나 기대가 동기의 한 요소가 되기도 하지만, 그에 못지않게 내면에서 비롯된 직관, 영감, 의미 추구 역시 강한 동기 요인이 됩니다. 다시 말해, 외부로부터 평가받고자 하는 욕구와, 내면의 방향성을 따르고자 하는 힘 사이에서 균형을 이루고 있습니다. 이로 인해 갑순이님은 주체적으로 움직이면서도 주변의 기대나 기준을 완전히 무시하지 않는 유연한 태도를 지닙니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 3: 자기조절과 실행 자율성 */}
        <SliderComponent
          title="3. 자기조절과 실행 자율성"
          leftLabel="낮음"
          rightLabel="높음"
          value={20}
          maxValue={30}
          indicatorColor="#FEFBDA"
          clampColor="#C2BD91"
          description="갑순이는 위험을 회피하기보다는, 도전과 가능성에 반응하며 움직이는 성향이 강합니다. 변화가 예고될 때 위축되기보다는, 오히려 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다. 새로운 아이디어나 낯선 경험을 두려워하지 않으며, 일상의 반복보다 미지의 가능성에 호기심을 느끼는 경향이 있습니다."
        />
      </div>

      {/* Summary Box */}
      <SummaryBox text="목표 지향적 실행력의 소유자" />
    </div>
  </article>
);

const Page6 = () => (
  <article className="wrapper flex-1 bg-white text-gray-900">
    <div className="flex items-center xl:py-2">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        02 동기 구조 및 자기조절
      </p>
    </div>
    <div className="mt-5 flex flex-col gap-8">
      {/* Header with user info */}
      <div className="flex items-end justify-end gap-3">
        <span className="font-medium">갑돌이 님</span>
        <Image src={Male} alt="male" width={40} height={40} />
      </div>

      {/* Slider Sections */}
      <div className="space-y-10">
        {/* Section 1: 변화나 위험을 대할 때의 행동 에너지 방향 */}
        <SliderComponent
          title="1. 변화나 위험을 대할 때의 행동 에너지 방향"
          leftLabel="안전지향"
          rightLabel="도전지향"
          value={20}
          maxValue={30}
          indicatorColor="#FDE2E2"
          clampColor="#D68787"
          description="갑돌이는 위험을 회피하기보다는, 도전과 가능성에 반응하며 움직이는 성향이 강합니다. 변화가 예고될 때 위축되기보다는, 오히려 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다. 새로운 아이디어나 낯선 경험을 두려워하지 않으며, 일상의 반복보다 미지의 가능성에 호기심을 느끼는 경향이 있습니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 2: 동기의 원천 */}
        <SliderComponent
          title="2. 동기의 원천"
          leftLabel="외적동기"
          rightLabel="내적동기"
          value={15}
          maxValue={30}
          indicatorColor="#EEE3FF"
          clampColor="#8E6CC2"
          description="갑돌이는 타인의 인정이나 기대가 동기의 한 요소가 되기도 하지만, 그에 못지않게 내면에서 비롯된 직관, 영감, 의미 추구 역시 강한 동기 요인이 됩니다. 다시 말해, 외부로부터 평가받고자 하는 욕구와, 내면의 방향성을 따르고자 하는 힘 사이에서 균형을 이루고 있습니다. 이로 인해 갑돌이님은 주체적으로 움직이면서도 주변의 기대나 기준을 완전히 무시하지 않는 유연한 태도를 지닙니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 3: 자기조절과 실행 자율성 */}
        <SliderComponent
          title="3. 자기조절과 실행 자율성"
          leftLabel="낮음"
          rightLabel="높음"
          value={20}
          maxValue={30}
          indicatorColor="#FEFBDA"
          clampColor="#C2BD91"
          description="갑돌이는 위험을 회피하기보다는, 도전과 가능성에 반응하며 움직이는 성향이 강합니다. 변화가 예고될 때 위축되기보다는, 오히려 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다. 새로운 아이디어나 낯선 경험을 두려워하지 않으며, 일상의 반복보다 미지의 가능성에 호기심을 느끼는 경향이 있습니다."
        />
      </div>

      {/* Summary Box */}
      <SummaryBox text="신중한 관계 형성의 전문가" />
    </div>
  </article>
);

const Page7 = () => (
  <article className="wrapper flex-1 bg-white text-gray-900">
    <div className="flex items-center xl:py-2">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        03 외현적 행동 및 생활방식
      </p>
    </div>
    <div className="mt-5 flex flex-col gap-8">
      {/* Header with user info */}
      <div className="flex items-end justify-end gap-3">
        <span className="font-medium">갑순이 님</span>
        <Image src={Female} alt="female" width={40} height={40} />
      </div>

      {/* Slider Sections */}
      <div className="space-y-10">
        {/* Section 1: 대인 관계에서의 에너지 순환 패턴 */}
        <SliderComponent
          title="1. 대인 관계에서의 에너지 순환 패턴"
          leftLabel="내향형"
          rightLabel="외향형"
          value={20}
          maxValue={30}
          indicatorColor="#E2FAFD"
          clampColor="#94DEE8"
          description="갑순이는 위험을 회피하기보다는, 도전과 가능성에 반응하며 움직이는 성향이 강합니다. 변화가 예고될 때 위축되기보다는, 오히려 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다. 새로운 아이디어나 낯선 경험을 두려워하지 않으며, 일상의 반복보다 미지의 가능성에 호기심을 느끼는 경향이 있습니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 2: 일상 구조화 및 실행 방식 */}
        <SliderComponent
          title="2. 일상 구조화 및 실행 방식"
          leftLabel="유연형"
          rightLabel="계획형"
          value={5}
          maxValue={30}
          indicatorColor="#E2FDF0"
          clampColor="#97CCB2"
          description="갑순이는 타인의 인정이나 기대가 동기의 한 요소가 되기도 하지만, 그에 못지않게 내면에서 비롯된 직관, 영감, 의미 추구 역시 강한 동기 요인이 됩니다. 다시 말해, 외부로부터 평가받고자 하는 욕구와, 내면의 방향성을 따르고자 하는 힘 사이에서 균형을 이루고 있습니다. 이로 인해 갑순이님은 주체적으로 움직이면서도 주변의 기대나 기준을 완전히 무시하지 않는 유연한 태도를 지닙니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 3: 정서 반응 민감도 */}
        <SliderComponent
          origin="left"
          title="3. 감정·의사 표현 스타일"
          leftLabel="자기표현형"
          rightLabel="적응배려형"
          value={75}
          maxValue={100}
          indicatorColor="#E2E2FD"
          clampColor="#8A8ACD"
          scale={[0, 25, 50, 75, 100]}
          description="갑순이는 자신이 설정한 목표를 스스로 계획하고 실천할 수 있는 실행 자율성이 높은 편입니다. 단지 아이디어나 의도를 갖는 데 그치지 않고, 그것을 구체적인 행동으로 전환하고 유지하는 능력을 가지고 있습니다. 스스로 동기를 조절하고 방향을 정하며, 일정한 흐름으로 목표를 끝까지 추진할 수 있는 심리적 자기관리력이 강점입니다."
        />
      </div>

      {/* Summary Box */}
      <SummaryBox text="유연한 일상 관리의 달인" />
    </div>
  </article>
);

const Page8 = () => (
  <article className="wrapper flex-1 bg-white text-gray-900">
    <div className="flex items-center xl:py-2">
      <p className="text-xl leading-snug font-bold whitespace-nowrap">
        03 외현적 행동 및 생활방식
      </p>
    </div>
    <div className="mt-5 flex flex-col gap-8">
      {/* Header with user info */}
      <div className="flex items-end justify-end gap-3">
        <span className="font-medium">갑돌이 님</span>
        <Image src={Male} alt="male" width={40} height={40} />
      </div>

      {/* Slider Sections */}
      <div className="space-y-10">
        {/* Section 1: 대인 관계에서의 에너지 순환 패턴 */}
        <SliderComponent
          title="1. 대인 관계에서의 에너지 순환 패턴"
          leftLabel="내향형"
          rightLabel="외향형"
          value={20}
          maxValue={30}
          indicatorColor="#E2FAFD"
          clampColor="#94DEE8"
          description="갑돌이는 위험을 회피하기보다는, 도전과 가능성에 반응하며 움직이는 성향이 강합니다. 변화가 예고될 때 위축되기보다는, 오히려 그 안에서 기회와 의미를 탐색하고 실행으로 옮기려는 동기를 갖고 있습니다. 새로운 아이디어나 낯선 경험을 두려워하지 않으며, 일상의 반복보다 미지의 가능성에 호기심을 느끼는 경향이 있습니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 2: 동기의 원천 */}
        <SliderComponent
          title="2. 일상 구조화 및 실행 방식"
          leftLabel="유연형"
          rightLabel="계획형"
          value={5}
          maxValue={30}
          indicatorColor="#E2FDF0"
          clampColor="#97CCB2"
          description="갑순이는 타인의 인정이나 기대가 동기의 한 요소가 되기도 하지만, 그에 못지않게 내면에서 비롯된 직관, 영감, 의미 추구 역시 강한 동기 요인이 됩니다. 다시 말해, 외부로부터 평가받고자 하는 욕구와, 내면의 방향성을 따르고자 하는 힘 사이에서 균형을 이루고 있습니다. 이로 인해 갑순이님은 주체적으로 움직이면서도 주변의 기대나 기준을 완전히 무시하지 않는 유연한 태도를 지닙니다."
        />
        <hr className="mt-6 border-t border-gray-300" />

        {/* Section 3: 정서 반응 민감도 */}
        <SliderComponent
          origin="left"
          title="3. 감정·의사 표현 스타일"
          leftLabel="자기표현형"
          rightLabel="적응배려형"
          value={75}
          maxValue={100}
          indicatorColor="#E2E2FD"
          clampColor="#8A8ACD"
          scale={[0, 25, 50, 75, 100]}
          description="갑돌이는 자신이 설정한 목표를 스스로 계획하고 실천할 수 있는 실행 자율성이 높은 편입니다. 단지 아이디어나 의도를 갖는 데 그치지 않고, 그것을 구체적인 행동으로 전환하고 유지하는 능력을 가지고 있습니다. 스스로 동기를 조절하고 방향을 정하며, 일정한 흐름으로 목표를 끝까지 추진할 수 있는 심리적 자기관리력이 강점입니다."
        />
      </div>

      {/* Summary Box */}
      <SummaryBox text="균형잡힌 소통의 전문가" />
    </div>
  </article>
);

const pages = [
  <Page1 key="1" />,
  <Page2 key="2" />,
  <Page3 key="3" />,
  <Page4 key="4" />,
  <Page5 key="5" />,
  <Page6 key="6" />,
  <Page7 key="7" />,
  <Page8 key="8" />,
];
export const part1TotalPages = pages.length;

interface Part1ResultPageProps {
  currentPage: number;
}

export default function Part1ResultPage({ currentPage }: Part1ResultPageProps) {
  return (
    <div className="font-pretendard flex flex-1 flex-col">
      <ReportHeader />
      {pages[currentPage]}
    </div>
  );
}
