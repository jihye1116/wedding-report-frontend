import Image from "next/image";

import ChevronRight from "@/assets/icons/chevron-right-sm.svg";

interface StartButtonProps {
  onClick: () => void;
  text?: string;
}

export const StartButton = ({
  onClick,
  text = "기본 정보 입력",
}: StartButtonProps) => {
  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#6DD4BD] p-2.5 pl-5 outline-black"
      onClick={onClick}
    >
      <span className="text-sm leading-tight font-medium text-white">
        {text}
      </span>
      <Image src={ChevronRight} alt="Start" width={24} height={24} />
    </button>
  );
};
