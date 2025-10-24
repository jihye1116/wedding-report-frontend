import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";

export function ReportHeader() {
  return (
    <div className="px-10">
      <div className="flex gap-2 pt-5">
        <Image src={Logo} alt="Logo" width={20} height={20} />
        <p className="font-gangwon font-bold text-[#7AC6B6]">꽃길 리포트</p>
      </div>
      <p className="pb-5 text-sm font-medium text-gray-500">
        갑돌이 · 갑순이 님의 결과 보고서
      </p>
    </div>
  );
}
