import "./globals.css";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "꽃길리포트",
  description: "당신의 결혼 생활을 꽃길로 만들어줄 맞춤 리포트",
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
