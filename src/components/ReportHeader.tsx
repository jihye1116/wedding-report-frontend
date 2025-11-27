import { useAtom } from "jotai";
import Image from "next/image";

import Logo from "@/assets/icons/logo.svg";
import { reportDataAtom } from "@/store/surveyStore";

export function ReportHeader() {
  const [reportData] = useAtom(reportDataAtom);
  const maleName = reportData?.metadata?.male_name || "갑돌이";
  const femaleName = reportData?.metadata?.female_name || "갑순이";

  return (
    <header className="wrapper">
      <div className="flex gap-2 pt-5 pb-1">
        <Image src={Logo} alt="Logo" height={25} />
      </div>
      <p className="font-pretendard pb-5 text-sm font-medium text-[#7E7E7E]">
        {maleName} · {femaleName} 님의 결과 보고서
      </p>
    </header>
  );
}
