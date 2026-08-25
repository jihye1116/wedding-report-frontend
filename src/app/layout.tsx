import "./globals.css";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "우리둘 테스트",
  description: "두 사람이 함께 걷는 길을 미리 살펴보는 결혼 시뮬레이션 리포트",
};

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
      </body>
    </html>
  );
}
