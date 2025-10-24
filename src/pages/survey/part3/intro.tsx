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
      <h1 className="px-10 py-5 text-xl font-bold">
        Part 3. 우리의 생활 리듬(연애 ↔ 결혼 상상)
      </h1>
      <section className="flex flex-col gap-5 px-10 py-5 leading-snug text-[#111111]">
        <p>이제는 함께하는 삶의 장면을 상상해 보는 시간입니다.</p>
        <p>연애 중이라면 지금의 생활 패턴과 대화 방식을,</p>
        <p>결혼을 상상한다면 함께 살게 되었을 때의 모습을 떠올려 주세요.</p>
        <p>“나는 이렇게 할 것 같다.”</p>
        <p>“이런 상황이 되면 이렇게 느낄 것 같다.”</p>
        <p>이런 식으로 현실적이면서도 자연스럽게 상상해 주시면 됩니다.</p>
        <p>
          이 단계는 두 사람의 생활 리듬과 가치관이 어떻게 어우러질지 살펴보기
          위한 과정입니다.
        </p>
      </section>
    </div>
  );
}
