import React, { useLayoutEffect, useRef, useState } from "react";

type Origin = "center" | "left";
type ZeroBias = "left" | "right";

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
  zeroBias?: ZeroBias; // 값=0일 때 진행방향(기본: "right")
  // near-zero(±threshold) 구간에서 최소 시각적 거리 보정
  nearZeroThreshold?: number; // 기본: 3 (center/-max~+max 스케일에서 사용)
  nearZeroMinDistancePct?: number; // 기본: 6 (% of half track, 0~50)
}

/**
 * v4.4
 * - 방향 반대로 붙이기: 오른쪽 진행(→)이면 인디케이터의 '왼쪽 면'이 기준선에 닿도록, 왼쪽 진행(←)이면 '오른쪽 면'이 닿도록.
 * - 0값 방향 zeroBias로 제어(기본 "right").
 * - 작은 값(예: 1)에서 반갈림 방지: 트랙 실측 기반으로 트림 폭을 min(OUTER/2, 실제 채움폭)으로 제한.
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
  zeroBias = "right",
  nearZeroThreshold = 3,
  nearZeroMinDistancePct = 6,
}) => {
  // ===== 디자인 상수 =====
  const TRACK_H = 40; // px
  const BORDER_W = 4; // px
  const INDICATOR_OUTER = TRACK_H;
  const INDICATOR_INNER = INDICATOR_OUTER - BORDER_W * 2;

  // ===== 측정 =====
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [trackW, setTrackW] = useState<number>(0);

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const update = () => setTrackW(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ===== 유틸 =====
  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(n, max));

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

    // near-zero(±nearZeroThreshold) 구간 보정: 시각적으로 너무 어색한 중앙 부근을 최소 거리만큼 띄워서 표시
    // 0은 보정하지 않음. 0.5 미만은 0으로 스냅, 0.5~threshold만 보정
    const isNearZero =
      Math.abs(signed) >= 0.5 && Math.abs(signed) <= nearZeroThreshold;
    const biasDir =
      Math.abs(signed) < 0.5
        ? zeroBias === "right"
          ? 1
          : -1
        : Math.sign(signed) || (zeroBias === "right" ? 1 : -1);
    const minDistanceRatio = Math.max(
      0,
      Math.min(1, nearZeroMinDistancePct / 50),
    ); // distancePct는 0~50 범위(절반 트랙)
    const boostedSigned = biasDir * (minDistanceRatio * maxValue);
    // 라운딩 기준(0.5 미만은 0으로 스냅) + near-zero 보정
    const layoutSigned = isNearZero
      ? boostedSigned
      : Math.abs(signed) < 0.5
        ? 0
        : signed;

    // 위치 비율(0~1): -max -> 0, 0 -> 0.5, +max -> 1
    ratio = maxValue === 0 ? 0.5 : (layoutSigned + maxValue) / (2 * maxValue);

    // 중앙에서 인디케이터까지 거리(0~1)
    const distanceRatio =
      maxValue === 0 ? 0 : Math.abs(layoutSigned) / maxValue;
    // 트랙 폭 기준 0~50%
    const distancePct = Math.max(
      distanceRatio * 50,
      isNearZero ? nearZeroMinDistancePct : 0,
    );

    // 중앙 → 인디케이터 방향으로만 채움
    fillLeft = layoutSigned >= 0 ? "50%" : `calc(50% - ${distancePct}%)`;
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

  // ===== 위치 CSS/방향 =====
  const posPct = ratio * 100;

  // 진행 방향 판단
  // center: 음수=왼쪽, 양수=오른쪽, 0은 zeroBias
  // left  : 0→+값(오른쪽), 0은 zeroBias
  const goesRight =
    origin === "center"
      ? (Math.abs(ariaNow) < 0.5 ? zeroBias === "right" : ariaNow > 0)
        ? true
        : ariaNow < 0
          ? false
          : zeroBias === "right"
      : ariaNow > 0
        ? true
        : ariaNow < 0
          ? false
          : zeroBias === "right";

  // 0일 때(center) 완전 중앙 정렬
  const isZeroCenter = origin === "center" && Math.abs(ariaNow) < 0.5;

  // 인디케이터를 채움 내부에 붙이되, 진행 방향의 '반대쪽 면'이 기준선에 닿도록
  // - goesRight=true  => 인디케이터 '왼쪽 면'이 pos에 닿음 => left = pos% - OUTER
  // - goesRight=false => 인디케이터 '오른쪽 면'이 pos에 닿음 => left = pos%

  const ATTACH_OFFSET_PX = 2; // 진행 방향 쪽으로 살짝 더 붙여 보이게 하는 오프셋

  const indicatorLeftCss: string | number = isZeroCenter
    ? trackW > 0
      ? clamp(
          trackW / 2 - INDICATOR_OUTER / 2,
          0,
          Math.max(0, trackW - INDICATOR_OUTER),
        )
      : `clamp(0px, calc(50% - ${INDICATOR_OUTER / 2}px), calc(100% - ${INDICATOR_OUTER}px))`
    : goesRight
      ? `clamp(0px, calc(${posPct.toFixed(
          4,
        )}% - ${INDICATOR_OUTER - ATTACH_OFFSET_PX}px), calc(100% - ${INDICATOR_OUTER}px))`
      : `clamp(0px, calc(${posPct.toFixed(4)}% - ${ATTACH_OFFSET_PX}px), calc(100% - ${INDICATOR_OUTER}px))`;
  const indicatorTransformCss = undefined;

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
          ref={trackRef}
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

          {/* 채움 트림(인디케이터가 보이도록 막대를 일부 덜 채워 보이게 처리) */}
          {trackW > 0 &&
            (() => {
              const posPx = (posPct / 100) * trackW;
              const fillPx = (fillWidthPct / 100) * trackW;
              // 작은 값에서 채움이 완전히 사라지지 않도록 최소 가시 폭을 남김
              const MIN_VISIBLE_FILL_PX = 3;
              const trimW = Math.min(
                INDICATOR_OUTER / 2,
                Math.max(0, fillPx - MIN_VISIBLE_FILL_PX),
              );
              const leftPx = goesRight
                ? Math.max(0, Math.min(trackW - trimW, posPx - trimW)) // → 진행: 기준선 왼쪽으로 trim
                : Math.max(0, Math.min(trackW - trimW, posPx)); // ← 진행: 기준선 오른쪽으로 trim
              return (
                <div
                  className="absolute top-0"
                  style={{
                    left: leftPx,
                    width: trimW,
                    height: TRACK_H,
                    backgroundColor: surfaceColor,
                    pointerEvents: "none",
                    zIndex: 1, // 채움 위, 인디케이터 아래
                  }}
                  aria-hidden
                />
              );
            })()}

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
              left: indicatorLeftCss,
              transform: indicatorTransformCss,
              width: INDICATOR_OUTER,
              height: INDICATOR_OUTER,
              zIndex: 2,
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
              {origin === "center"
                ? Math.round(Math.abs(clamp(ariaNow, ariaMin, ariaMax)))
                : Math.round(clamp(ariaNow, ariaMin, ariaMax))}
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
      <p className="leading-relaxed">{description}</p>

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
