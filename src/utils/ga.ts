import { sendGAEvent } from "@next/third-parties/google";

/**
 * NEXT_PUBLIC_GA_ID가 없는 환경(로컬·프리뷰)에서는 조용히 무시한다.
 * GA 스크립트가 안 붙은 상태로 sendGAEvent를 부르면 경고만 찍히기 때문.
 */
export function track(name: string, params: Record<string, string | number> = {}) {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  sendGAEvent("event", name, params);
}
