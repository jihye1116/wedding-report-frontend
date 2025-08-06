// 간단히 재사용 가능한 레이아웃만 분리
import { ReactNode } from "react";

interface Props {
  section: number;
  page: number;
  children: ReactNode;
}

export default function ReportLayout({ section, page, children }: Props) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* 메인 콘텐츠 */}
      <main className="flex-1 p-8">
        {/* <h1 className="text-2xl font-bold mb-6">
          섹션 {section} · 페이지 {page}
        </h1> */}
        {children}
      </main>

      {/* 사이드바 네비 */}
      <aside className="w-16 bg-teal-400 flex flex-col items-center py-8">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className={`w-8 h-8 mb-2 rounded flex items-center justify-center text-sm ${
              idx + 1 === page
                ? "bg-white text-teal-400 font-bold"
                : "bg-white bg-opacity-20 text-white"
            }`}
          >
            {idx + 1}
          </div>
        ))}
      </aside>
    </div>
  );
}
