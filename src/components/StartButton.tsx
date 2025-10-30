import Image from "next/image";

import ChevronRight from "@/assets/icons/chevron-right-sm.svg";
import { cn } from "@/utils/cn";

interface StartButtonProps {
  onClick: () => void;
  text?: string;
  className?: string;
}

export const StartButton = ({
  onClick,
  text = "기본 정보 입력",
  className,
}: StartButtonProps) => {
  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#6DD4BD] p-2.5 pl-5 outline-black"
      onClick={onClick}
    >
      <span
        className={cn(
          "text-sm leading-tight font-medium text-white",
          className,
        )}
      >
        {text}
      </span>
      <Image src={ChevronRight} alt="Start" width={24} height={24} />
    </button>
  );
};
