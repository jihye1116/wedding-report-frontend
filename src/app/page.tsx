import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content Area */}
      <div className="flex-1 p-8 pr-0">
        {/* Header */}
        <div className="flex items-center mb-12">
          <div className="flex items-center">
            {/* Flower Logo */}
            <Image
              className=""
              src="/logo.svg"
              alt="Flower Logo"
              width={20}
              height={20}
              priority
            />
            <span className="text-teal-500 font-black text-lg font-pretendard">
              꽃잎 리포트
            </span>
            <span className="text-gray-400 mx-3">|</span>
            <span className="text-gray-600">
              감들이 · 감순이 님의 결과 보고서
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-16">
            1. 개인 성향 분석
          </h1>

          {/* Quote Section */}
          <div className="text-center mb-12">
            <h2 className="text-xl font-medium text-gray-700 mb-8 leading-relaxed">
              " 함께 잘 살기 위한 첫걸음, 나를 이해하는 것부터 "
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-center">
              우리는 사람의 성향을 세 걸어 구조로 분석합니다.
            </p>

            <p>
              가장 안쪽에는 내가 세상을 어떻게 인식하고 감정을 처리하는지,
              <br />
              그다음에는 어떤 가치와 동기가 나를 움직이게 하는지,
              <br />
              그리고 바깥쪽에는 내가 어떤 방식으로 일상을 살아가며 에너지를
              회복하는지가 있습니다.
            </p>

            <p className="text-center">
              이 구조는 당신 나 자신을 파악하기 위한 것이 아닙니다.
            </p>

            <p>
              상대를 있는 그대로 받아들이고, 원성적인 관계의 조화점을 찾아가는
              데에 꼭 필요한 정보입니다.
              <br />
              이해와 공감은 갈등함으로 완성되지 않습니다. 내 외의 구조를 명확히
              알 때,
              <br />
              우리는 타인의 구조를 존중하며 함께 할 수 있게 됩니다.
            </p>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-16 bg-teal-400 flex flex-col items-center justify-start pt-8">
        <div className="text-white font-bold text-2xl mb-2">1</div>
        <div className="text-white text-sm writing-mode-vertical-rl transform rotate-180 opacity-80">
          개인 성향 분석
        </div>

        {/* Page Numbers */}
        <div className="mt-auto mb-8 space-y-4">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
            <span className="text-white text-sm">2</span>
          </div>
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
            <span className="text-white text-sm">3</span>
          </div>
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
            <span className="text-white text-sm">4</span>
          </div>
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
            <span className="text-white text-sm">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
