import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

export default function Part2Intro() {
  return (
    <div className="wrapper mx-auto">
      <Image
        className="mx-auto py-5 xl:mt-15 xl:mb-10 xl:w-[382px]"
        src={Logo}
        alt="Logo"
        height={70}
      />

      <section className="mt-5 flex flex-col gap-4 py-5">
        <div className="rounded-2xl border border-[#AAAAAA] bg-white p-5">
          <h2 className="text-lg font-bold text-[#AAAAAA]">
            1. 내가 보는 나
            <span className="text-base font-medium">(45문항)</span>
          </h2>
        </div>

        <div className="rounded-2xl border-2 border-[#6DD4BD] bg-white p-5">
          <h2 className="mb-5 text-xl font-bold text-[#111111]">
            2. 내가 보는 파트너
            <span className="text-base font-medium">(45문항)</span>
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-[#111111]">
            이번에는 당신이 바라본 파트너의 모습에 대해 답해주세요.
          </p>
          <p className="flex items-start gap-1 text-sm leading-relaxed text-[#111111]">
            <span>
              &apos;이 사람은 이럴 때 이렇게 행동할 거야&apos; 라고 생각하는
              그대로 편안하게 선택하시면 됩니다.
            </span>
          </p>
        </div>

        <div className="rounded-2xl border border-[#AAAAAA] bg-white p-5">
          <h2 className="text-lg font-bold text-[#AAAAAA]">
            3. 일상 생활 리듬
            <span className="text-base font-medium">(18문항)</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-[#AAAAAA] bg-white p-5">
          <h2 className="text-lg font-bold text-[#AAAAAA]">
            4. 삶의 가치관
            <span className="text-base font-medium">(주관식 12문항)</span>
          </h2>
        </div>
      </section>
    </div>
  );
}
