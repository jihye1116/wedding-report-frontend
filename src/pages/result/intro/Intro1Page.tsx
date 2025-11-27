import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";
import { ReportHeader } from "@/components/ReportHeader";
import { StartButton } from "@/components/StartButton";

interface Intro1PageProps {
  onNext: () => void;
}

export default function Intro1Page({ onNext }: Intro1PageProps) {
  return (
    <main className="flex h-dvh flex-col">
      <div className="hidden xl:block">
        <ReportHeader />
      </div>
      <div className="wrapper flex h-full flex-col items-center justify-center">
        <div className="hidden xl:block"></div>
        <Image
          className="mx-auto py-5 xl:mt-15"
          src={Logo}
          alt="Logo"
          height={70}
        />
        <main className="flex w-full flex-col gap-10 py-5">
          <h1 className="text-center text-2xl font-medium text-[#111111]">
            꽃길 리포트가 <br /> 완성되었습니다!
          </h1>
          <article className="font-pretendard flex flex-col gap-4 leading-snug whitespace-pre-wrap text-[#111111]">
            <p>
              이 리포트는 두 분의 관계가 앞으로 어떻게 자라고 변화해갈 수 있는지
              미리 체험해보는 여정입니다.{" "}
            </p>
            <p>
              그 과정 속에서 서로를 이해하고, 함께의 리듬을 발견하는 인사이트가
              되길 바랍니다.
            </p>
            <p>
              ※ 링크는 30일 후 만료됩니다. 보관을 원하시면 화면 캡처 또는 인쇄
              기능을 활용하여 별도 보관하시길 권장드립니다.
            </p>

            <p>이제 결과를 확인해 볼까요?</p>
          </article>
        </main>
        <div className="flex w-full justify-end py-10 xl:mt-auto">
          <StartButton
            onClick={onNext}
            text="리포트 보기"
            className="font-pretendard"
          />
        </div>
      </div>
    </main>
  );
}
