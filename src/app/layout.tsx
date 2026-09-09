import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Providers } from "@/components/Providers";

// 도메인 확정 전. NEXT_PUBLIC_SITE_URL만 바꾸면 전체가 따라간다.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description =
  "두 사람이 함께 걷는 길을 미리 살펴보는 결혼 시뮬레이션 리포트";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "우리둘 테스트",
  description,
  openGraph: {
    title: "우리둘 테스트",
    description,
    url: "/",
    siteName: "꽃-길",
    locale: "ko_KR",
    type: "website",
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
        </Providers>
        <Analytics />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
