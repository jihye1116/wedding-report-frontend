import { detailedSurveyData } from "@/data/detailedSurveyData";
import { SurveyAnswer } from "@/types/survey";
import { cn } from "@/utils/cn";

interface ProgressBarProps {
  className?: string;
  answers: SurveyAnswer[];
}

export function ProgressBar({ className, answers }: ProgressBarProps) {
  const progress =
    answers.length /
    detailedSurveyData.parts.reduce(
      (acc, part) => acc + part.questions.length,
      0,
    );
  return (
    <div
      className={cn(
        "relative my-5 h-4 w-full rounded-full bg-gray-100",
        className,
      )}
    >
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-linear-to-r from-[#6DD4BD]/10 to-[#6DD4BD] transition-all duration-300 ease-in-out"
        style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
      />
    </div>
  );
}
