import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";
import { StartButton } from "@/components/StartButton";

interface Intro1PageProps {
  onNext: () => void;
}

export default function Intro1Page({ onNext }: Intro1PageProps) {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <Image
        className="mx-auto py-5"
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
      />
      <main className="wrapper flex flex-col gap-10 py-5">
        <h1 className="text-center text-2xl font-medium text-[#111111]">
          꽃길 리포트가 <br /> 완성되었습니다!
        </h1>
        <article className="flex flex-col gap-4 leading-snug whitespace-pre-wrap text-[#111111]">
          <p>리포트가 완성되었습니다. </p>
          <p>
            [신혼생활 시뮬레이션 스토리북]프로젝트에 참여해주셔서
            감사합니다.{" "}
          </p>
          <p>접속하신 링크는 추후 삭제될 예정이니, </p>
          <p>아래 &apos;다운받기&apos; 버튼을 눌러 결과를 확인해보세요. </p>
          <p>그럼, 확인해 볼까요?</p>
        </article>
      </main>
      <div className="flex w-full justify-end p-10">
        <StartButton onClick={onNext} text="리포트 보기" />
      </div>
    </div>
  );
}
