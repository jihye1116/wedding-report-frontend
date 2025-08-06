import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center mb-12">
      <div className="flex items-center">
        {/* Flower Logo */}
        <Image
          className=""
          src="/logo.svg"
          alt="Flower Logo"
          width={20}
          height={20}
          priority
        />
        <span className="text-teal-500 text-lg font-hangang">꽃길 리포트</span>
        <span className="text-gray-400 mx-3">|</span>
        <span className="text-gray-600">감들이 · 감순이 님의 결과 보고서</span>
      </div>
    </div>
  );
}
