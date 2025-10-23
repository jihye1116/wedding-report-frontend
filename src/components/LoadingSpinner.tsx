interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const LoadingSpinner = ({
  size = 80,
  color = "#6DD4BD",
  strokeWidth = 8,
}: LoadingSpinnerProps) => {
  return (
    <div className="inline-block" role="status" aria-label="로딩 중">
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        className="animate-spin"
      >
        {/* 배경 원 (회색) */}
        <circle
          cx="40"
          cy="40"
          r="32"
          fill="none"
          stroke="#E5E5E5"
          strokeWidth={strokeWidth}
        />
        {/* 회전하는 원 (민트색) */}
        <circle
          cx="40"
          cy="40"
          r="32"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray="50.24 150.72"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
