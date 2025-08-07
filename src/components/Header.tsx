import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center mb-10">
      <div className="flex items-center">
        {/* Flower Logo */}
        <Image
          className="mr-[10px]"
          src="/logo.svg"
          alt="Flower Logo"
          width={20}
          height={20}
          priority
        />
        <span className="text-teal-500 font-hangang text-heading-lg">
          꽃길 리포트
        </span>
        <span className="h-3 w-[2px] bg-[#d9d9d9] mx-4"></span>
        <span className="text-[#7E7E7E] text-body-base">
          갑돌이 · 갑순이 님의 결과 보고서
        </span>
      </div>
    </div>
  );
}
