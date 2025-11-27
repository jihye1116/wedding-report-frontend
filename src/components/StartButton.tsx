import Image from "next/image";

import ChevronRight from "@/assets/icons/chevron-right-sm.svg";
import { cn } from "@/utils/cn";

interface StartButtonProps {
  onClick: () => void;
  text?: string;
  className?: string;
  disabled?: boolean;
}

export const StartButton = ({
  onClick,
  text = "설문 시작하기",
  className,
  disabled = false,
}: StartButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-lg bg-[#6DD4BD] p-2.5 pl-5 outline-black",
        disabled && "cursor-not-allowed bg-gray-300",
      )}
      onClick={onClick}
      disabled={disabled}
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
