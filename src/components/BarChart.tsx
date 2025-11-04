import { cn } from "@/utils/cn";

interface BarChartProps {
  values: Array<number>;
  barColor: string;
  className?: string;
}

export function BarChart({ values, barColor, className }: BarChartProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[#DCDCDC] bg-white px-2 py-6",
        className,
      )}
    >
      <div className="relative flex flex-col gap-1">
        {Array.from({ length: 6 }, (_, i) => {
          const value = (5 - i) * 2;
          return (
            <div key={i} className="flex items-center gap-2.5">
              <span className="ml-1 w-4 text-center text-sm font-medium text-[#7E7E7E]">
                {value}
              </span>
              <div className="mx-1 h-px flex-1 bg-[#DCDCDC]" />
            </div>
          );
        })}

        <div className="absolute mt-2.5 ml-7 flex h-[145px] w-[calc(100%-1.75rem)] items-end justify-evenly xl:h-full">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col gap-1.25">
              <div
                className="w-[clamp(1rem,10vw,2.5rem)] rounded-t-[10px]"
                style={{
                  backgroundColor: barColor,
                  height: `${value * 3 * 4}px`,
                }}
              />
              <span className="flex h-5 w-full items-center justify-center text-xs font-medium text-[#7E7E7E]">
                {index + 1}Q
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
