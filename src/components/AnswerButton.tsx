import { cn } from "@/utils/cn";

interface AnswerButtonProps {
  label: string;
  text: string;
  color: "green" | "blue";
  selected: boolean;
}

export const AnswerButton = ({
  label,
  text,
  color,
  selected,
}: AnswerButtonProps) => {
  const blueColor = "#DBEEF2";
  const greenColor = "#CEEBCC";
  const blueShadow = "rgba(219,238,242,0.8)";
  const greenShadow = "rgba(206,235,204,0.8)";

  return (
    <button
      className={cn(
        "flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 outline-none",
        selected
          ? color === "blue"
            ? `border-2 border-[${blueColor}] shadow-[0_0_8px_${blueShadow}]`
            : `border-2 border-[${greenColor}] shadow-[0_0_8px_${greenShadow}]`
          : "border border-[#DCDCDC]",
      )}
    >
      <div
        className={cn(
          "rounded px-2 py-1",
          color === "blue" ? `bg-[${blueColor}]` : `bg-[${greenColor}]`,
        )}
      >
        <span className="leading-snug font-bold text-[#111111]">{label}</span>
      </div>
      <span className="text-sm leading-snug text-[#111111]">{text}</span>
    </button>
  );
};
