import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

export default function Part4Intro() {
  return (
    <div className="wrapper mx-auto">
      <Image
        className="mx-auto w-[70px] py-5 xl:mt-15 xl:mb-10 xl:w-[100px]"
        src={Logo}
        alt="Logo"
        width={70}
        height={70}
      />

      <section className="mt-5 flex flex-col gap-4 py-5">
        <div className="rounded-2xl border border-[#AAAAAA] bg-white p-5">
          <h2 className="text-lg font-bold text-[#AAAAAA]">
            1. 내가 보는 나
            <span className="text-base font-medium">(45문항)</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-[#AAAAAA] bg-white p-5">
          <h2 className="text-lg font-bold text-[#AAAAAA]">
            2. 내가 보는 파트너
            <span className="text-base font-medium">(45문항)</span>
          </h2>
        </div>

        <div className="rounded-2xl border border-[#AAAAAA] bg-white p-5">
          <h2 className="text-lg font-bold text-[#AAAAAA]">
            3. 일상 생활 리듬
            <span className="text-base font-medium">(18문항)</span>
          </h2>
        </div>

        <div className="rounded-2xl border-2 border-[#6DD4BD] bg-white p-5">
          <h2 className="mb-5 text-xl font-bold text-[#111111]">
            4. 삶의 가치관
            <span className="text-base font-medium">(주관식 12문항)</span>
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-[#111111]">
            거의 다 왔어요!
          </p>
          <p className="flex items-start gap-1 text-sm leading-relaxed text-[#111111]">
            <span>
              마지막으로 삶과 결혼에 대한 당신의 생각과 가치관을 표현해 주세요.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
