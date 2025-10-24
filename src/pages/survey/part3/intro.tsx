import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

export default function Part3Intro() {
  return (
    <div className="mx-auto max-w-2xl">
      <Image
        className="mx-auto py-5"
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
      />
      <h1 className="px-10 py-5 text-xl font-bold">Part 3. 관계와 생활</h1>
      <section className="flex flex-col gap-5 px-10 py-5 leading-snug text-[#111111]">
        <p>이제는 실제 생활에서의 모습을 살펴보는 시간입니다.</p>
        <p>연애와 결혼 생활에서 마주하게 될 다양한 상황들을 떠올려 주세요.</p>
        <p>
          이 단계는 서로의 생활 방식과 가치관의 차이를 이해하기 위한 파트입니다.
        </p>
        <p>어떤 답이 옳거나 그르지 않습니다.</p>
        <p>솔직하게 느껴지는 대로 선택해 주시면 됩니다.</p>
      </section>
    </div>
  );
}
