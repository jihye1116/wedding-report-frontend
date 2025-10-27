import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";

export default function Part2Intro() {
  return (
    <div className="wrapper mx-auto">
      <Image
        className="mx-auto py-5 lg:mt-15 lg:mb-10"
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
      />
      <h1 className="py-5 text-xl font-bold lg:mt-15">
        Part 2. 내가 보는 파트너(Partner)
      </h1>
      <section className="flex flex-col gap-5 py-5 leading-snug text-[#111111]">
        <p>이번에는 당신이 바라보는 상대방에 대해 답하는 순서입니다.</p>
        <p>“그 사람은 이런 상황에서 이렇게 행동할 것 같다.”</p>
        <p>“평소에는 이런 스타일이다.”</p>
        <p>
          이런 식으로, 당신이 느껴온{" "}
          <span className="font-medium">인상과 경험</span>을 바탕으로 편하게
          답해 주세요.
        </p>
        <p>
          정답을 맞추려 하기보다,{" "}
          <span className="font-medium">당신의 시선으로 본 그 사람</span>을 있는
          그대로 표현해 주시면 됩니다.
        </p>
        <p>그렇게 할수록 두 사람이 서로를 이해하는 그림이 더 선명해집니다.</p>
      </section>
    </div>
  );
}
