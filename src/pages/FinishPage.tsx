import Image from "next/image";

import CelebrationImage from "@/assets/images/celebration.png";

export const FinishPage = () => {
  return (
    <div className="flex h-dvh items-center justify-center">
      <main className="flex flex-col gap-10 px-10 py-5 text-center leading-snug text-[#111111]">
        <h1 className="text-2xl font-bold">제출되었습니다 🌸</h1>
        <section className="flex flex-col gap-4">
          <p>
            &quot;행복한 결혼이란 두 영혼이 서로를 이해하고, 함께 성장하는
            여정이다.&quot;
          </p>
          <p className="text-lg">- 톨스토이</p>
        </section>
        <Image src={CelebrationImage} alt="Celebration" className="mx-auto" />
        <p>
          리포트 작업이 완료되면 문자 발송 예정이며, 영업일 기준 최대 2일 소요될
          수 있습니다.
        </p>
      </main>
    </div>
  );
};
