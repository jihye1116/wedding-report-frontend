import Image from "next/image";

const Page2 = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        {/* 제목 */}
        <h1 className="text-display-xl font-bold">1. 개인 성향 분석</h1>
        <p className="">
          지금부터 소개할 세 가지 성향 영역은,
          <br />
          함께하는 삶을 조금 더 편안하고 유연하게 만들어줄 '관계의 기반'을 여는
          열쇠입니다.
        </p>

        {/* 메인 다이어그램 */}
        <div className="relative h-[143px] w-full mt-[51px] mb-[38px]">
          <Image
            src="/images/personality-analysis-chart.webp"
            alt="main-diagram"
            fill
          />
        </div>

        {/* 3개 카드 섹션 */}
        <div className="grid grid-cols-3 gap-[11px] h-[377px]">
          {/* Perception Core 카드 */}
          <div className="bg-[#F7F7F7] rounded-lg p-[14px]">
            <h3 className="text-heading-lg font-bold ">
              정보처리 및 의사결정 방식
            </h3>
            <p className="text-heading-md text-[#979797]">Perception Core</p>
            <p className="text-center justify-center h-[110px] flex items-center px-[4px]">
              나는 세상을 어떻게 바라보고, <br />
              어떤 기준과 방식으로 판단하고 받아들이는가?
            </p>
            <p className="  leading-relaxed">
              이 영역은 개인이 외부 정보를 어떻게 수집하고 이해하며, 그 정보들로
              어 떤 기준에 따라 판단하며, 결정 지금 에 어떻게 반응하는지를
              살펴보는 영역입니다. 예를 들어, 어떤 사람 은 현재 드러나 사실과
              구체적인 정 보에 주목하고, 또 다른 사람은 눈 에 보이지 않는
              흐름이나 가능성을 더 민감하게 포착합니다. 개인의 사고 구조와
              의사결정 방식 은 내가 누구에 클립고, 무엇을 깨 리며, 어떤 때
              안정감을 느끼는지에 대한 중요한 단서를 제공합니다.
            </p>
          </div>

          {/* Motivational Layer 카드 */}
          <div className="bg-[#F7F7F7] rounded-lg p-[14px]">
            <h3 className="text-heading-lg font-bold ">
              동기 구조 및 자기조절
            </h3>
            <p className="text-heading-md text-[#979797]">Motivational Layer</p>
            <p className="text-center justify-center h-[110px] flex items-center px-[4px]">
              나는 무엇을 중요하게 여기며,
              <br /> 어떤 동기로 움직이는가?
            </p>
            <p className="  leading-relaxed">
              모든 선택과 행동의 배경에는 그유 한 가치 체계와 에너지 있습니다.
              무 엇과 어떤 가능성이 마음을 사로드 있고, 자유와 창의적 거극이
              우선인 사람도 있습니다. 또 어떤 사람은 외적 인정보다 내적 성취에
              더 동기 를 느끼기도 하죠. 이 항목을 통 해 삶의 방향성과 가족,
              그리고 핵 동의 근원을 아해할 수 있습니다. 이는 자기경쟁의 명명성과
              일반린 삶을 위한 중요한 토대가 됩니다.
            </p>
          </div>

          {/* Living Rhythm 카드 */}
          <div className="bg-[#F7F7F7] rounded-lg p-[14px]">
            <h3 className="text-heading-lg font-bold ">
              외현적 행동 및 생활양식
            </h3>
            <p className="text-heading-md text-[#979797]">Living Rhythm</p>
            <p className="text-center justify-center h-[110px] flex items-center px-[4px]">
              나는 어떤 리듬으로 살아가며,
              <br /> 어디서 에너지를 얻는가?
            </p>
            <p className="  leading-relaxed">
              누군가는 계획된 루틴 속에서 안정 감을 느끼고, 누군가는 즉흥성이고
              다양한 변화에서 생기를 얻습니다. 또, 여유 시간에 혼자 정적인 시간
              을 보내야 회복되는 사람도 있고, 사람들과의 활동에서 에너지를 얻 는
              사람도 있습니다. 이 영역은 나에게 맞는 일상 구성 방 식, 그리고
              회복과 롤업의 조건을 파 악하는 데 중심이 됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* 하단 안내 텍스트 */}
      <div className="text-[9px] mt-auto">
        <p>
          ※ 본 분석은 임상 자료이 아닌, 다양한 심리이론을 통합한 비의료적 성향
          탐색 도구입니다.
        </p>
        <p>
          제3절은 질과는 관계 이해 및 의사소통 개선을 위한 참고 정보로 활용되며,
          의학적 판단 또는 진단으로 사용되지 않습니다.
        </p>
      </div>
    </div>
  );
};

export default Page2;
