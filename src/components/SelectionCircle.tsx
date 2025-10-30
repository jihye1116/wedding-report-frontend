import { cn } from "@/utils/cn";

interface SelectionCircleProps {
  selected: boolean;
  onClick: () => void;
  size?: "sm" | "md";
}

export const SelectionCircle = ({
  selected,
  onClick,
  size = "md",
}: SelectionCircleProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full transition-colors outline-none",
        selected
          ? "border-[1.5px] border-[#6DD4BD] shadow-[0_0_8px_rgba(109,212,189,0.5),inset_0_0_0_30px_rgba(109,212,189,0.25)]"
          : "border border-[#DCDCDC]",
        size === "sm" ? "h-6 w-6" : "h-10 w-10",
        "focus-visible:ring-2 focus-visible:ring-[#6DD4BD]/60 focus-visible:ring-offset-2",
      )}
      aria-pressed={selected}
    />
  );
};
