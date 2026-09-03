import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

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

/**
 * 라우트가 "/" 하나뿐인 SPA라 GA4 자동 page_view는 첫 진입 1회만 잡힌다.
 * 스텝이 바뀔 때마다 가상 경로로 page_view를 보내야 GA4 기본 리포트
 * (페이지 및 화면 / 경로 탐색)에서 이탈 지점이 그대로 보인다.
 * path가 null이면(로딩 중 등) 보내지 않는다.
 */
export function useScreen(path: string | null) {
  useEffect(() => {
    if (!path) return;
    track("page_view", {
      page_location: window.location.origin + path,
      page_title: path,
    });
  }, [path]);
}
