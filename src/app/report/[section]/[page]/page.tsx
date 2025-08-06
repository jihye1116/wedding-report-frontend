// src/app/report/[section]/[page]/page.tsx
import Link from "next/link";
import ReportLayout from "@/components/ReportLayout";
import { componentMap } from "@/reportMap";

interface Props {
  params: Promise<{ section: string; page: string }>;
}

export default async function ReportPage({ params }: Props) {
  const { section, page } = await params;
  const sec = Number(section);
  const pg = Number(page);
  const key = `${sec}-${pg}`;

  if (!componentMap[key]) {
    return <p className="p-8 text-red-600">존재하지 않는 페이지입니다.</p>;
  }

  const Content = componentMap[key];

  // 이전/다음 페이지 계산
  const PAGES_PER_SECTION = 6;
  const prevSec = pg === 1 ? Math.max(sec - 1, 1) : sec;
  const prevPg = pg === 1 ? PAGES_PER_SECTION : pg - 1;
  const nextSec = pg === PAGES_PER_SECTION ? Math.min(sec + 1, 6) : sec;
  const nextPg = pg === PAGES_PER_SECTION ? 1 : pg + 1;

  return (
    <ReportLayout section={sec} page={pg}>
      <Content />

      <div className="flex justify-between mt-12">
        <Link
          href={`/report/${prevSec}/${prevPg}`}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← 섹션 {prevSec}·페이지 {prevPg}
        </Link>
        <Link
          href={`/report/${nextSec}/${nextPg}`}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          섹션 {nextSec}·페이지 {nextPg} →
        </Link>
      </div>
    </ReportLayout>
  );
}

export async function generateStaticParams() {
  return Object.keys(componentMap).map((key) => {
    const [section, page] = key.split("-");
    return { section, page };
  });
}
