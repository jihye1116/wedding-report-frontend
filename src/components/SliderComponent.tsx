import React from "react";

type Origin = "center" | "left";

interface SliderComponentProps {
  title: string;
  leftLabel: string;
  rightLabel: string;
  value?: number;
  maxValue: number;
  indicatorColor: string; // 채움 배경색
  clampColor: string; // 인디케이터 내부색
  description?: string;
  scale?: number[];
  surfaceColor?: string; // 인디케이터 border와 동일해야 함
  origin?: Origin; // "center" | "left" (기본: "center")
  showCenterLine?: boolean; // 강제로 중앙선 노출/비노출 제어(기본: origin에 따라 자동)
}

/**
 * v4.0
 * - origin="center": 양극 경향형 (-max~+max), 중앙 기준으로 채움
 * - origin="left"  : 단일 경향형 (0~max), 0 기준으로 채움
 * - 인디케이터 border=surfaceColor
 * - 인디케이터는 트랙 밖으로 나가지 않음
 * - 텍스트 색 자동 대비
 */
export const SliderComponent: React.FC<SliderComponentProps> = ({
  title,
  leftLabel,
  rightLabel,
  value = 0,
  maxValue,
  indicatorColor,
  clampColor,
  description,
  surfaceColor = "#FFFFFF",
  origin = "center",
  showCenterLine,
  scale,
}) => {
  // ===== 디자인 상수 =====
  const TRACK_H = 40; // px
  const BORDER_W = 4; // px
  const INDICATOR_OUTER = TRACK_H;
  const INDICATOR_INNER = INDICATOR_OUTER - BORDER_W * 2;
  const INDICATOR_RADIUS = INDICATOR_OUTER / 2; // 추가: 반지름

  // ===== 유틸 =====
  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(n, max));

  const hexToRgb = (hex: string) => {
    const m = hex.replace("#", "");
    const v =
      m.length === 3
        ? m.split("").map((c) => parseInt(c + c, 16))
        : [
            parseInt(m.slice(0, 2), 16),
            parseInt(m.slice(2, 4), 16),
            parseInt(m.slice(4, 6), 16),
          ];
    return { r: v[0] ?? 255, g: v[1] ?? 255, b: v[2] ?? 255 };
  };

  const textColor = "white";

  // ===== 값/비율 계산 =====
  let ratio = 0; // 0~1, 인디케이터 위치 비율(좌->우)
  let fillLeft = "0%";
  let fillWidthPct = 0;
  let ariaMin = 0;
  let ariaMax = maxValue;
  let ariaNow = value;

  if (origin === "center") {
    // 값 범위: -maxValue ~ +maxValue
    const signed = clamp(value, -maxValue, maxValue);
    ariaMin = -maxValue;
    ariaMax = maxValue;
    ariaNow = signed;

    // 위치 비율(0~1): -max -> 0, 0 -> 0.5, +max -> 1
    ratio = maxValue === 0 ? 0.5 : (signed + maxValue) / (2 * maxValue);

    // 중앙에서 인디케이터까지 거리(0~1)
    const distanceRatio = maxValue === 0 ? 0 : Math.abs(signed) / maxValue;
    // 트랙 폭 기준 0~50%
    const distancePct = distanceRatio * 50;

    // 중앙 → 인디케이터 방향으로만 채움
    fillLeft = signed >= 0 ? "50%" : `calc(50% - ${distancePct}%)`;
    fillWidthPct = distancePct;
  } else {
    // origin === "left" : 0 ~ maxValue
    const uni = clamp(value, 0, maxValue);
    ariaMin = 0;
    ariaMax = maxValue;
    ariaNow = uni;

    ratio = maxValue === 0 ? 0 : uni / maxValue;

    // 0 → 인디케이터 방향으로 채움
    fillLeft = "0%";
    fillWidthPct = ratio * 100;
  }

  // 인디케이터 위치: 좌측 모서리 기준, 트랙 너비 - 외경 범위 안
  const indicatorCenter = `clamp(${INDICATOR_RADIUS}px, calc(${(ratio * 100).toFixed(4)}%), calc(100% - ${INDICATOR_RADIUS}px))`;

  // 중앙선 노출 여부(기본: center에서만 표시)
  const showMidLine = showCenterLine ?? origin === "center";

  // 기본 스케일 자동 생성 (사용자가 넘기면 그대로 사용)
  const autoScale =
    origin === "center"
      ? [
          maxValue,
          Math.round(maxValue / 2),
          0,
          Math.round(maxValue / 2),
          maxValue,
        ]
      : [
          0,
          Math.round(maxValue * 0.25),
          Math.round(maxValue * 0.5),
          Math.round(maxValue * 0.75),
          maxValue,
        ];
  const scaleToRender = scale ?? autoScale;

  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <h3 className="text-base font-semibold tracking-tight text-gray-900 sm:text-lg">
        {title}
      </h3>

      <div className="flex flex-col gap-3">
        {/* Labels */}
        <div className="flex items-center justify-between text-sm">
          <span className="truncate">{leftLabel}</span>
          <span className="truncate">{rightLabel}</span>
        </div>

        {/* Track */}

        <div
          className="relative overflow-hidden rounded-full ring-1 ring-gray-200 select-none"
          style={{ height: TRACK_H, backgroundColor: surfaceColor }}
        >
          {/* 채움 */}
          <div
            className="absolute inset-y-0"
            style={{
              left: fillLeft,
              width: `${fillWidthPct}%`,
              backgroundColor: indicatorColor,
            }}
            aria-hidden
          />

          {/* 중앙 기준선 (center 타입에서만 기본 노출) */}
          {showMidLine && (
            <div
              className="absolute top-0 left-1/2 h-full w-px bg-gray-200"
              aria-hidden
            />
          )}

          {/* 인디케이터 */}
          <div
            className="absolute top-0"
            style={{
              left: indicatorCenter, // 중심 좌표
              transform: "translateX(-50%)", // 중심 정렬
              width: INDICATOR_OUTER,
              height: INDICATOR_OUTER,
              // (선택) 서브픽셀 깜빡임 줄이기
              // willChange: "left, transform",
            }}
            aria-hidden
          >
            <div
              className="flex items-center justify-center rounded-full text-sm font-bold"
              style={{
                width: INDICATOR_INNER,
                height: INDICATOR_INNER,
                backgroundColor: clampColor,
                border: `${BORDER_W}px solid ${indicatorColor}`,
                boxSizing: "content-box",
                color: textColor,
              }}
            >
              {clamp(ariaNow, ariaMin, ariaMax)}
            </div>
          </div>
        </div>

        {/* Scale */}
        <div className="flex justify-between text-xs text-gray-400">
          {scaleToRender.map((num, i) => (
            <span key={i}>
              {num === 0 && origin === "center" ? "중립" : num}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>

      {/* ARIA */}
      <div
        role="slider"
        aria-valuemin={ariaMin}
        aria-valuemax={ariaMax}
        aria-valuenow={clamp(ariaNow, ariaMin, ariaMax)}
        aria-label={title}
        className="sr-only"
      />
    </div>
  );
};

export default SliderComponent;
