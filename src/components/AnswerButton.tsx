import { cn } from "@/utils/cn";

interface AnswerButtonProps {
  label: string;
  text: string;
  color: "green" | "blue";
  selected: boolean;
  onClick?: () => void;
}

export const AnswerButton = ({
  label,
  text,
  color,
  selected,
  onClick,
}: AnswerButtonProps) => {
  // blue = 여성/기본(코랄), green = 남성(민트)
  const accent = color === "blue" ? "--color-brand" : "--color-brand-sub";
  const badge =
    color === "blue" ? "--color-brand-soft" : "--color-brand-sub-soft";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-fit items-center gap-3 rounded-xl bg-white px-4 py-2.5 outline-none focus:border-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:outline-none active:outline-none",
        selected && "-m-px",
      )}
      style={{
        outline: "none",
        border: selected ? `2px solid var(${accent})` : "1px solid #DCDCDC",
        boxShadow: selected
          ? `0 0 8px color-mix(in oklab, var(${accent}) 50%, transparent)`
          : "none",
      }}
    >
      <div
        className="rounded px-2 py-1"
        style={{ backgroundColor: `var(${badge})` }}
      >
        <span className="leading-snug font-bold text-[#111111]">{label}</span>
      </div>
      <span className="text-sm leading-snug text-[#111111]">{text}</span>
    </button>
  );
};
