import { cn } from "@/utils/cn";

interface BarChartProps {
  values: Array<number>;
  barColor: string;
  /** 눈금 최댓값. 생략 시 값 범위로 0~10 / 0~100 스케일을 자동 판별한다. */
  max?: number;
  className?: string;
}

export function BarChart({
  values,
  barColor,
  max,
  className,
}: BarChartProps) {
  // 백엔드가 지표마다 0~10 또는 0~100으로 내려줘서 값 범위로 스케일을 판단한다
  const scaleMax = max ?? (Math.max(...values, 0) > 10 ? 100 : 10);

  return (
    <div
      className={cn(
        "flex flex-col rounded-3xl border border-[#DCDCDC] bg-white px-2 py-6",
        className,
      )}
    >
      {/* 눈금 6줄이 높이를 만들고, 막대는 첫/마지막 눈금선 사이(각 줄 높이의 절반씩 안쪽)에 겹쳐 그린다 */}
      <div className="relative flex min-h-[145px] flex-1 flex-col justify-between">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="flex h-5 items-center gap-2.5">
            <span className="ml-1 w-4 text-center text-sm font-medium text-[#7E7E7E]">
              {(5 - i) * 2}
            </span>
            <div className="mx-1 h-px flex-1 bg-[#DCDCDC]" />
          </div>
        ))}

        <div className="absolute top-2.5 right-1 bottom-2.5 left-8.5 flex items-end justify-evenly">
          {values.map((value, index) => (
            <div
              key={index}
              className="w-[clamp(1rem,10vw,2.5rem)] rounded-t-[10px]"
              style={{
                backgroundColor: barColor,
                height: `${Math.min(100, Math.max(0, (value / scaleMax) * 100))}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 막대와 동일한 padding/justify/width라 중심이 정확히 맞는다 */}
      <div className="mt-1.5 flex justify-evenly pr-1 pl-8.5">
        {values.map((_, index) => (
          <span
            key={index}
            className="w-[clamp(1rem,10vw,2.5rem)] text-center text-xs font-medium text-[#7E7E7E]"
          >
            {index + 1}Q
          </span>
        ))}
      </div>
    </div>
  );
}
