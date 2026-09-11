import React from "react";

import { SelectionCircle } from "./SelectionCircle";

interface RatingSelectorProps {
  value: number | null;
  onChange: (value: number) => void;
  labels?: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  showLabels?: boolean;
  /** 스크린리더용 문항 텍스트. 없으면 버튼이 "n점 라벨"로만 읽힌다. */
  ariaLabel?: string;
}

export const RatingSelector: React.FC<RatingSelectorProps> = ({
  value,
  onChange,
  labels = {
    1: "전혀 아니다",
    2: "아니다",
    3: "보통이다",
    4: "그렇다",
    5: "매우 그렇다",
  },
  showLabels = true,
  ariaLabel,
}) => {
  const handleRatingClick = (rating: number) => {
    onChange(rating);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* 점수 선택 버튼들 */}
      <div
        role="group"
        aria-label={ariaLabel}
        className="flex w-full items-center justify-between px-2.5"
      >
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="flex flex-col items-center space-y-2">
            <span aria-hidden className="text-xs font-medium text-gray-600">
              {rating}
            </span>
            <SelectionCircle
              selected={value === rating}
              onClick={() => handleRatingClick(rating)}
              ariaLabel={`${rating}점 ${labels[rating as 1 | 2 | 3 | 4 | 5]}`}
            />
          </div>
        ))}
      </div>

      {/* 라벨 표시 */}
      {showLabels && (
        <div className="flex w-full justify-between text-xs text-gray-500">
          <span className="text-left">{labels[1]}</span>
          <span className="text-right">{labels[5]}</span>
        </div>
      )}
    </div>
  );
};

export default RatingSelector;
