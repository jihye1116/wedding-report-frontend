// 행사 QR(?utm_campaign=0912) 진입 여부. 설문·리포트로 넘어가도 유지되게 세션에 남긴다.
const KEY = "utm_campaign";

export function getCampaign(): string | null {
  if (typeof window === "undefined") return null;
  const fromUrl = new URLSearchParams(window.location.search).get(
    "utm_campaign",
  );
  if (fromUrl) sessionStorage.setItem(KEY, fromUrl);
  return fromUrl || sessionStorage.getItem(KEY);
}
