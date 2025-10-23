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
        "rounded-full bg-white outline-black transition-colors",
        selected
          ? "border-[1.5px] border-[#6DD4BD] shadow-[0_0_8px_rgba(109,212,189,0.5)]"
          : "border border-[#DCDCDC]",
        size === "sm" ? "h-6 w-6" : "h-10 w-10",
      )}
      aria-pressed={selected}
    />
  );
};
