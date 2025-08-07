const Page1 = () => {
  return (
    <div className="h-full">
      {/* Content */}
      <div className="h-full flex flex-col">
        <h1 className="text-display-xl font-bold mb-16">1. 개인 성향 분석</h1>
        {/* Main Content */}
        <div className="text-center leading-relaxed flex-1 flex flex-col justify-center items-center pb-28 gap-[25px] text-black/60">
          <h2 className="text-heading-lg font-medium leading-relaxed text-black">
            “ 함께 잘 살기 위한 첫걸음, 나를 이해하는 것부터 “
          </h2>

          <p>
            우리는 사람의 성향을 세 걸어 구조로 분석합니다.
            <br />
            가장 안쪽에는 내가 세상을 어떻게 인식하고 감정을 처리하는지,
            <br />
            그다음에는 어떤 가치와 동기가 나를 움직이게 하는지,
            <br />
            그리고 바깥쪽에는 내가 어떤 방식으로 일상을 살아가며 에너지를
            회복하는지가 있습니다.
          </p>
          <p>
            이 구조는 당신 나 자신을 파악하기 위한 것이 아닙니다.
            <br />
            상대를 있는 그대로 받아들이고, 원성적인 관계의 조화점을 찾아가는
            데에 꼭 필요한 정보입니다.
            <br />
            이해와 공감은 갈등함으로 완성되지 않습니다. 내 외의 구조를 명확히 알
            때,
            <br />
            우리는 타인의 구조를 존중하며 함께 할 수 있게 됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
