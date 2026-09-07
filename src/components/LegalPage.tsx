import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";

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
