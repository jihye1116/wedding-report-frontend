import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

export default function Part2Intro() {
  return (
    <div className="mx-auto max-w-2xl">
      <Image
        className="mx-auto py-5"
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
      />
      <h1 className="px-10 py-5 text-xl font-bold">
        Part 2. 파트너 이해하기(Partner)
      </h1>
      <section className="flex flex-col gap-5 px-10 py-5 leading-snug text-[#111111]">
        <p>이제는 파트너를 이해하는 시간입니다.</p>
        <p>
          파트너의 평소 모습, 선택의 기준, 마음이 움직이는 순간들을 떠올려
          주세요.
        </p>
        <p>
          이 단계는 파트너의 생각, 감정, 행동의 패턴을 이해하기 위한 파트입니다.
        </p>
        <p>어떤 답이 옳거나 그르지 않습니다.</p>
        <p>솔직하게 느껴지는 대로 선택해 주시면 됩니다.</p>
      </section>
    </div>
  );
}
