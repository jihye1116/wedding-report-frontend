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
      <h1 className="px-10 py-5 text-xl font-bold">
        Part 4. 나를 말하는 문장들(주관식)
      </h1>
      <section className="flex flex-col gap-5 px-10 py-5 leading-snug text-[#111111]">
        <p>
          마지막으로, 짧은 문장으로 당신의 생각과 감정을 표현하는 단계입니다.
        </p>
        <p>정답도, 완벽한 문장도 필요하지 않습니다.</p>
        <p>떠오르는 대로, 솔직하게 적어 주세요.</p>
        <p>
          이 파트는 당신의 말투, 감정, 가치관의 온도를 담기 위한 과정입니다.
        </p>
        <p>
          당신이 어떤 마음으로 사랑하고, 어떤 관계를 바라는지 진솔하게
          들려주시면 됩니다.
        </p>
      </section>
    </div>
  );
}
