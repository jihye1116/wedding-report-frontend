import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

export default function Part1Intro() {
  return (
    <div className="wrapper mx-auto">
      <Image
        className="mx-auto py-5 xl:mt-15 xl:mb-10"
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
      />
      <h1 className="py-5 text-xl font-bold xl:mt-15">
        Part 1. 나를 이해하기(Self)
      </h1>
      <section className="flex flex-col gap-5 py-5 leading-snug text-[#111111]">
        <p>지금부터는 나 자신을 살펴보는 시간입니다.</p>
        <p>
          평소의 나, 내가 선택할 때의 기준, 마음이 움직이는 순간들을 떠올려
          주세요.
        </p>
        <p>
          이 단계는 당신의 생각, 감정, 행동의 패턴을 이해하기 위한 파트입니다.
        </p>
        <p>어떤 답이 옳거나 그르지 않습니다.</p>
        <p>솔직하게 느껴지는 대로 선택해 주시면 됩니다.</p>
      </section>
    </div>
  );
}
