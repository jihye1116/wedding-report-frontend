import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

export default function Part4Intro() {
  return (
    <div className="mx-auto max-w-2xl">
      <Image
        className="mx-auto py-5"
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
      />
      <h1 className="px-10 py-5 text-xl font-bold">Part 4. 깊이 있는 대화</h1>
      <section className="flex flex-col gap-5 px-10 py-5 leading-snug text-[#111111]">
        <p>마지막으로, 조금 더 깊이 있는 대화를 나누어 볼까요?</p>
        <p>지금까지의 질문들을 통해 떠오른 생각들을 자유롭게 표현해 주세요.</p>
        <p>이 단계는 서로를 더 깊이 이해하고 공감하기 위한 파트입니다.</p>
        <p>어떤 답이 옳거나 그르지 않습니다.</p>
        <p>솔직하게 느껴지는 대로 작성해 주시면 됩니다.</p>
      </section>
    </div>
  );
}
