import { sendGAEvent } from "@next/third-parties/google";
import { useEffect, useRef } from "react";

/**
 * NEXT_PUBLIC_GA_ID가 없는 환경(로컬·프리뷰)에서는 조용히 무시한다.
 * GA 스크립트가 안 붙은 상태로 sendGAEvent를 부르면 경고만 찍히기 때문.
 */
export function track(
  name: string,
  params: Record<string, string | number> = {},
) {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  sendGAEvent("event", name, params);
}

const pageStart = Date.now();

/** 진입 후 경과 초. 전환까지 얼마나 읽었는지를 이벤트에 같이 실어 보낸다. */
export const secondsOnPage = () => Math.round((Date.now() - pageStart) / 1000);

/**
 * 라우트가 "/" 하나뿐인 SPA라 GA4 자동 page_view는 첫 진입 1회만 잡힌다.
 * 스텝이 바뀔 때마다 가상 경로로 page_view를 보내야 GA4 기본 리포트
 * (페이지 및 화면 / 경로 탐색)에서 이탈 지점이 그대로 보인다.
 * path가 null이면(로딩 중 등) 보내지 않는다.
 */
export function useScreen(path: string | null) {
  useEffect(() => {
    if (!path) return;
    // 실제 라우트와 같은 경로면 GA4 향상된 측정이 이미 보냈다. 두 번 세지 않는다.
    if (path === window.location.pathname) return;
    track("page_view", {
      page_location: window.location.origin + path,
      page_title: path,
    });
  }, [path]);
}

/**
 * data-ga-section이 붙은 요소가 처음 화면에 들어올 때 1회씩 이벤트를 보낸다.
 * 섹션별 도달 수 / page_view 수 = 랜딩 체류율, seconds로 거기까지 걸린 시간.
 * GA4 기본 scroll 이벤트는 90% 지점 1회뿐이라 이탈 지점을 못 잡는다.
 */
export function useSectionTracking(name: string) {
  useEffect(() => {
    const seen = new Set<string>();
    // threshold 0 — 뷰포트보다 긴 섹션도 상단이 걸리는 순간 도달로 친다.
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const section = (entry.target as HTMLElement).dataset.gaSection;
        if (!section || seen.has(section)) continue;
        seen.add(section);
        io.unobserve(entry.target);
        track(name, { section, seconds: secondsOnPage() });
      }
    });
    document
      .querySelectorAll("[data-ga-section]")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [name]);
}

/**
 * 리포트처럼 장이 많은 화면의 진행률. 같은 지점은 되돌아와도 한 번만 보낸다.
 * 장마다 page_view를 쏘면 세션당 페이지뷰·이탈률·평균 참여 시간이 전부
 * 리포트 독자 쪽으로 왜곡되므로, 경로 대신 이벤트 파라미터로 깊이를 남긴다.
 */
export function useProgress(
  name: string,
  step: string | null,
  page: number,
  total: number,
) {
  const seen = useRef(new Set<string>());
  useEffect(() => {
    if (!step || total <= 0) return;
    const key = `${step}/${page}`;
    if (seen.current.has(key)) return;
    seen.current.add(key);
    track(name, {
      step,
      page,
      percent: Math.round((page / total) * 100),
      seconds: secondsOnPage(),
    });
  }, [name, step, page, total]);
}
