import Image from "next/image";

import ChevronLeft from "@/assets/icons/chevron-left-sm.svg";
import ChevronRight from "@/assets/icons/chevron-right-sm.svg";
import { cn } from "@/utils/cn";

interface NavigateButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  color?: "gray" | "green";
}

export const NavigateButton = ({
  direction,
  color,
  onClick,
}: NavigateButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-full p-2.5 outline-black",
        (color ?? direction === "left")
          ? "outline- bg-[#6DD4BD]"
          : "bg-[#DCDCDC]",
      )}
    >
      <Image
        src={direction === "left" ? ChevronLeft : ChevronRight}
        alt={`Navigate ${direction === "left" ? "back" : "forward"}`}
        width={24}
        height={24}
      />
    </button>
  );
};
