import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";

// ponytail: 약관 문안은 경영지원 전달본으로 교체. PG 심사용 링크 200 응답만 먼저 확보.
export const LegalPage = ({ title, body }: { title: string; body: string }) => (
  <>
    <main className="wrapper py-10 text-[#111111]">
      <Link href="/" className="text-sm text-gray-500">
        ← 우리둘
      </Link>
      <h1 className="mt-4 text-xl font-bold">{title}</h1>
      <p className="mt-6 text-sm leading-relaxed whitespace-pre-wrap text-gray-700">
        {body}
      </p>
    </main>
    <SiteFooter />
  </>
);
