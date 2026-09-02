import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "우리둘 테스트",
  description: "두 사람이 함께 걷는 길을 미리 살펴보는 결혼 시뮬레이션 리포트",
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
