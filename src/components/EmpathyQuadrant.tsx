import React from "react";

// ===== Types =====
export interface EmpathyQuadrantProps {
  colors?: {
    q1?: string; // 공감 기반 시너지 (초록)
    q2?: string; // 보완적 상호작용 (파랑)
    q3?: string; // 중첩 리스크 (노랑/주황)
    q4?: string; // 인지적 충돌 (빨강)
  };
}

export type QuadrantData = {
  title: string;
  bullets: string[];
  bg?: string; // CSS color
};

type QuadrantProps = {
  bg: string;
  title: string;
  bullets: string[];
  align?: "left" | "right"; // 호환 유지
  pad?: string;
  text?: string;
  borderColor?: string;
  textColor?: string;
};

// ===== Default Component =====
const EmpathyQuadrant: React.FC<EmpathyQuadrantProps> = ({
  colors = {
    q1: "#7BBC80",
    q2: "#3993D9",
    q3: "#F4A83A",
    q4: "#FF827E",
  },
}) => {
  return (
    <section
      aria-label="공감-차이 결과 매트릭스"
      className="relative mx-auto my-8 w-full"
    >
      {/* 디자인 토큰 */}
      <style>{`
        :root {
          --q-green: ${colors.q1}20;   /* TL - 투명도 20% */
          --q-blue:  ${colors.q2}20;   /* TR - 투명도 20% */
          --q-orange:${colors.q3}20;   /* BL - 투명도 20% */
          --q-pink:  ${colors.q4}20;   /* BR - 투명도 20% */
          --q-border:#e6e6e6;
        }
      `}</style>

      {/* 상단/하단 축 레이블(기존 유지) */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 md:text-sm">
        긍정적 결과
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 md:text-sm">
        부정적 결과
      </div>

      {/* 내부 래퍼 (좌우 공통 패딩) */}
      <div className="relative w-full px-10">
        {/* 중앙 박스: 전체 폭 채움 */}
        <div className="relative min-w-0">
          <div className="aspect-square w-full md:aspect-auto">
            <div
              className="relative grid h-full w-full grid-cols-2 grid-rows-2 overflow-hidden border-[var(--q-border)]"
              role="group"
              aria-label="2x2 결과 영역"
            >
              <Quadrant
                bg="var(--q-green)"
                title="공감 기반 시너지"
                bullets={[
                  "안정감 형성",
                  "친밀감 증진",
                  "상호 이해",
                  "가치관 공유",
                ]}
                align="left"
                borderColor={colors.q1}
                textColor={colors.q1}
              />
              <Quadrant
                bg="var(--q-blue)"
                title="보완적 상호작용"
                bullets={[
                  "균형 창조",
                  "시너지 효과",
                  "성장 촉진",
                  "다양성 활용",
                ]}
                align="right"
                borderColor={colors.q2}
                textColor={colors.q2}
              />
              <Quadrant
                bg="var(--q-orange)"
                title="중첩 리스크"
                bullets={[
                  "긴장감 촉진",
                  "경쟁 심화",
                  "동질성 피로",
                  "발전 정체",
                ]}
                align="left"
                borderColor={colors.q3}
                textColor={colors.q3}
              />
              <Quadrant
                bg="var(--q-pink)"
                title="인지적 충돌"
                bullets={[
                  "오해와 마찰",
                  "감정적 거리감",
                  "소통 장애",
                  "갈등 증폭",
                ]}
                align="right"
                borderColor={colors.q4}
                textColor={colors.q4}
              />

              {/* 중앙 십자 구분선 */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/2 h-full w-px -translate-x-[0.5px] bg-[var(--q-border)]" />
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-[0.5px] bg-[var(--q-border)]" />
              </div>
            </div>
          </div>
        </div>

        {/* 좌우 레이블 오버레이 (공간 비점유) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 pr-1 pl-0">
            <div className="text-xs whitespace-nowrap text-gray-500 md:text-sm">
              유사성
            </div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 pr-0 pl-1 text-right">
            <div className="text-right text-xs whitespace-nowrap text-gray-500 md:text-sm">
              차이점
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpathyQuadrant;

// ===== Flexible Variant =====
export const EmpathyQuadrantFlexible: React.FC<{
  axisTop?: string;
  axisBottom?: string;
  axisLeft?: string;
  axisRight?: string;
  q1: QuadrantData;
  q2: QuadrantData;
  q3: QuadrantData;
  q4: QuadrantData;
  className?: string;
  compact?: boolean;
}> = ({
  axisTop = "긍정적 결과",
  axisBottom = "부정적 결과",
  axisLeft = "유사성",
  axisRight = "차이점",
  q1,
  q2,
  q3,
  q4,
  className = "",
  compact = false,
}) => {
  const pad = compact ? "p-3 md:p-4" : "p-4 md:p-6";
  const text = compact ? "text-[10px] md:text-xs" : "text-[10px] md:text-sm";

  return (
    <section
      aria-label="공감-차이 결과 매트릭스(커스텀)"
      className={`relative mx-auto my-8 w-full ${className}`}
    >
      <style>{`
        :root {
          --q-green: #eaf7ef;
          --q-blue:  #e9f4ff;
          --q-orange:#fff1df;
          --q-pink:  #ffe9eb;
          --q-border:#e6e6e6;
        }
      `}</style>

      {/* 상/하 축 레이블 */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-700 md:text-sm">
        {axisTop}
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-700 md:text-sm">
        {axisBottom}
      </div>

      {/* 좌우 레이블은 오버레이로, 중앙 박스는 전체 폭 채움 */}
      <div className="relative w-full px-10">
        <div className="relative min-w-0">
          <div className="aspect-square w-full md:aspect-auto">
            <div
              className="relative grid h-full w-full grid-cols-2 grid-rows-2 overflow-hidden rounded-xl"
              role="group"
              aria-label="2x2 결과 영역"
            >
              <Quadrant
                bg={q1.bg || "var(--q-green)"}
                title={q1.title}
                bullets={q1.bullets}
                align="left"
                pad={pad}
                text={text}
              />
              <Quadrant
                bg={q2.bg || "var(--q-blue)"}
                title={q2.title}
                bullets={q2.bullets}
                align="right"
                pad={pad}
                text={text}
              />
              <Quadrant
                bg={q3.bg || "var(--q-orange)"}
                title={q3.title}
                bullets={q3.bullets}
                align="left"
                pad={pad}
                text={text}
              />
              <Quadrant
                bg={q4.bg || "var(--q-pink)"}
                title={q4.title}
                bullets={q4.bullets}
                align="right"
                pad={pad}
                text={text}
              />

              {/* 중앙 십자 구분선 */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/2 h-full w-px -translate-x-[0.5px] bg-[var(--q-border)]" />
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-[0.5px] bg-[var(--q-border)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 pr-1 pl-0">
            <div className="text-xs whitespace-nowrap text-gray-700 md:text-sm">
              {axisLeft}
            </div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 pr-0 pl-1 text-right">
            <div className="text-right text-xs whitespace-nowrap text-gray-700 md:text-sm">
              {axisRight}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== Subcomponent =====
const Quadrant: React.FC<QuadrantProps> = ({
  bg,
  title,
  bullets,
  align = "left",
  pad = "p-2 md:p-6",
  text = "text-[10px] md:text-sm",
  borderColor,
  textColor,
}) => {
  void align;

  return (
    <div
      className={`relative ${pad} flex h-full w-full items-center justify-center`}
      style={{ backgroundColor: bg }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-1.5">
        <div
          className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-center text-[10px] font-medium md:text-xs"
          style={{
            borderColor: borderColor || "rgba(0,0,0,0.1)",
            color: textColor || "#374151",
          }}
        >
          {title}
        </div>
        <p
          className={`clear-both ${text} text-center leading-relaxed`}
          style={{ color: textColor || "#374151" }}
        >
          {bullets.join(" / ")}
        </p>
      </div>
    </div>
  );
};
