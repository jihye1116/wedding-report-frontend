import React from "react";

/**
 * 2x2 공감-차이 결과 매트릭스 (모바일: 정사각 / XL 이상: 자연 비율)
 * - TailwindCSS 필요
 * - 반응형 및 접근성 고려
 * - 텍스트는 위치와 무관하게 항상 중앙 정렬
 * - 그리드/십자선/축 레이블은 래퍼 패딩(px-10 ≈ 40px)의 영향을 동일하게 받음
 */

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
  // align은 더 이상 사용하지 않지만 기존 호환을 위해 남김
  align?: "left" | "right";
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
      className="relative mx-auto my-8 w-full max-w-5xl"
    >
      {/* 디자인 토큰 + 반응형 정사각 비율 */}
      <style>{`
        :root {
          --q-green: ${colors.q1}20;   /* TL - 투명도 20% */
          --q-blue:  ${colors.q2}20;   /* TR - 투명도 20% */
          --q-orange:${colors.q3}20;   /* BL - 투명도 20% */
          --q-pink:  ${colors.q4}20;   /* BR - 투명도 20% */
          --q-border:#e6e6e6;
        }
        /* 모바일/태블릿: 각 셀 정사각, XL 이상: 자연 비율 */
        .q-cell { aspect-ratio: 1 / 1; }
        @media (min-width: 1280px) { /* xl */
          .q-cell { aspect-ratio: auto; }
        }
      `}</style>

      {/* 상단/하단 축 레이블 (래퍼 안에서 패딩과 함께 이동) */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-700 md:text-sm">
        긍정적 결과
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-700 md:text-sm">
        부정적 결과
      </div>

      {/* 내부 래퍼: 좌우 40px 여백 고정 */}
      <div className="relative px-11 xl:px-15">
        {/* 좌/우 축 레이블 (항상 내부로) */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 text-xs text-gray-700 md:text-sm">
          유사성
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 text-xs text-gray-700 md:text-sm">
          차이점
        </div>

        {/* 그리드 */}
        <div
          className="relative grid grid-cols-2 grid-rows-2 overflow-hidden border-[var(--q-border)]"
          role="group"
          aria-label="2x2 결과 영역"
        >
          <Quadrant
            bg="var(--q-green)"
            title="공감 기반 시너지"
            bullets={["안정감 형성", "친밀감 증진", "상호 이해", "가치관 공유"]}
            align="left"
            borderColor={colors.q1}
            textColor={colors.q1}
          />
          <Quadrant
            bg="var(--q-blue)"
            title="보완적 상호작용"
            bullets={["균형 창조", "시너지 효과", "성장 촉진", "다양성 활용"]}
            align="right"
            borderColor={colors.q2}
            textColor={colors.q2}
          />
          <Quadrant
            bg="var(--q-orange)"
            title="중첩 리스크"
            bullets={["긴장감 촉진", "경쟁 심화", "동질성 피로", "발전 정체"]}
            align="left"
            borderColor={colors.q3}
            textColor={colors.q3}
          />
          <Quadrant
            bg="var(--q-pink)"
            title="인지적 충돌"
            bullets={["오해와 마찰", "감정적 거리감", "소통 장애", "갈등 증폭"]}
            align="right"
            borderColor={colors.q4}
            textColor={colors.q4}
          />

          {/* 중앙 십자 구분선(시각적 가이드) - 그리드 내부에 배치하여 오버플로우 차단 */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-full w-px bg-[var(--q-border)]" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-[var(--q-border)]" />
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
  q1: QuadrantData; // 좌상단
  q2: QuadrantData; // 우상단
  q3: QuadrantData; // 좌하단
  q4: QuadrantData; // 우하단
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
      className={`relative mx-auto my-8 w-full max-w-5xl ${className}`}
    >
      <style>{`
        :root {
          --q-green: #eaf7ef;   /* TL 기본 */
          --q-blue:  #e9f4ff;   /* TR 기본 */
          --q-orange:#fff1df;   /* BL 기본 */
          --q-pink:  #ffe9eb;   /* BR 기본 */
          --q-border:#e6e6e6;
        }
        .q-cell { aspect-ratio: 1 / 1; }
        @media (min-width: 1280px) { /* xl */
          .q-cell { aspect-ratio: auto; }
        }
      `}</style>

      {/* 상/하 축 레이블 */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-700 md:text-sm">
        {axisTop}
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-700 md:text-sm">
        {axisBottom}
      </div>

      {/* 내부 래퍼 */}
      <div className="relative px-10">
        {/* 좌/우 축 레이블 */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 text-xs text-gray-700 md:text-sm">
          {axisLeft}
        </div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 text-xs text-gray-700 md:text-sm">
          {axisRight}
        </div>

        <div
          className="relative grid grid-cols-2 grid-rows-2 overflow-hidden rounded-xl"
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

          {/* 중앙 십자 구분선(시각적 가이드) */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-full w-px bg-[var(--q-border)]" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-[var(--q-border)]" />
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
  // align은 유지하되 현재는 중앙 정렬만 사용
  align = "left",
  pad = "p-2 md:p-6",
  text = "text-[10px] md:text-sm",
  borderColor,
  textColor,
}) => {
  // align 미사용, 호환 목적만 유지
  void align;

  return (
    <div
      className={`q-cell relative ${pad} flex h-full w-full items-center justify-center`}
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
