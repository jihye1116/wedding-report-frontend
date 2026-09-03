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
      <div className="flex items-center justify-end gap-1 pb-5 font-pretendard text-sm font-medium text-[#7E7E7E]">
        <span>{maleName}</span>
        <span className="text-base font-bold">💛</span>
        <span>{femaleName}</span>
      </div>
    </header>
  );
}
