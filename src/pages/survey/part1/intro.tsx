import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

export default function Part1Intro() {
  return (
    <div className="wrapper mx-auto">
      <Image
        className="mx-auto py-5 xl:mt-15 xl:mb-10 xl:w-[382px]"
        src={Logo}
        alt="Logo"
        height={70}
      />

      <section className="mt-5 flex flex-col gap-4 py-5">
        <div className="rounded-2xl border-2 border-[#6DD4BD] bg-white p-5">
          <h2 className="mb-5 text-xl font-bold text-[#111111]">
            1. 내가 보는 나
            <span className="text-base font-medium">(48문항)</span>
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-[#111111]">
            평소 나를 움직이게 하는 생각, 감정, 행동의 순간들을 떠올려보세요.
          </p>
          <p className="flex items-start gap-1 text-sm leading-relaxed text-[#111111]">
            <span>👉</span>
            <span>솔직하게 느껴지는 대로 선택해 주시는 것이 정답입니다!</span>
          </p>
        </div>

        <div className="rounded-2xl border border-[#AAAAAA] bg-white p-5">
          <h2 className="text-lg font-bold text-[#AAAAAA]">
            2. 내가 보는 파트너
            <span className="text-base font-medium">(48문항)</span>
          </h2>
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
            <span className="text-base font-medium">(주관식 6문항)</span>
          </h2>
        </div>
      </section>
    </div>
  );
}
