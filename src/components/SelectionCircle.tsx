import { cn } from "@/utils/cn";

interface SelectionCircleProps {
  selected: boolean;
  onClick: () => void;
}

export const SelectionCircle = ({
  selected,
  onClick,
}: SelectionCircleProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 w-10 rounded-full bg-white transition-colors outline-none",
        selected
          ? "border-[1.5px] border-[#6DD4BD] shadow-[0_0_8px_rgba(109,212,189,0.5)]"
          : "border border-[#DCDCDC]",
      )}
      aria-pressed={selected}
    />
  );
};
