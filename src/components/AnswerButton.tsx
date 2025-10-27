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
  const blueColor = "#E2F1F5";
  const greenColor = "#CEEBCC";

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 outline-none focus:border-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:outline-none active:outline-none",
        selected
          ? color === "blue"
            ? `border-2 border-[${blueColor}] -m-px shadow-[0_0_8px_rgba(219,238,242,0.8)]`
            : `border-2 border-[${greenColor}] -m-px shadow-[0_0_8px_rgba(206,235,204,0.8)]`
          : "border border-[#DCDCDC]",
      )}
      style={{
        outline: "none",
        border: selected
          ? color === "blue"
            ? `2px solid ${blueColor}`
            : `2px solid ${greenColor}`
          : "1px solid #DCDCDC",
        boxShadow: selected
          ? color === "blue"
            ? "0 0 8px rgba(219,238,242,0.8)"
            : "0 0 8px rgba(206,235,204,0.8)"
          : "none",
      }}
    >
      <div
        className="rounded px-2 py-1"
        style={{
          backgroundColor: color === "blue" ? blueColor : greenColor,
        }}
      >
        <span className="leading-snug font-bold text-[#111111]">{label}</span>
      </div>
      <span className="text-sm leading-snug text-[#111111]">{text}</span>
    </button>
  );
};
