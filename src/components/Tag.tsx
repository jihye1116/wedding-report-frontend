import { cn } from "@/utils/cn";

interface TagProps {
  level: "low" | "medium" | "high";
}

export const Tag = ({ level }: TagProps) => {
  const levelText =
    level === "low" ? "낮음" : level === "medium" ? "중간" : "높음";
  const color =
    level === "low"
      ? "bg-[#DCDCDC]"
      : level === "medium"
        ? "bg-[#CEEBCC]"
        : "bg-[#B9EBF5]";

  return (
    <div className={cn("rounded-full px-2.5 py-1 leading-snug", color)}>
      <span className="font-bold text-white">{levelText}</span>
    </div>
  );
};
