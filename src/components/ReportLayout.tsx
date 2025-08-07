import Image from "next/image";
import { ReactNode } from "react";
import Header from "./Header";

interface Props {
  section: number;
  page: number;
  children: ReactNode;
}

export default function ReportLayout({ section, page, children }: Props) {
  return (
    <div className="min-h-screen flex">
      {/* 메인 콘텐츠 */}

      <main className="flex-1 p-8 flex flex-col">
        <Header />
        {/* <h1 className="text-2xl font-bold mb-6">
          섹션 {section} · 페이지 {page}
        </h1> */}
        <div className="flex-1">{children}</div>
      </main>

      {/* 사이드바 네비 */}

      <aside className="w-[24px] flex flex-col relative h-screen justify-center ">
        <div className="relative">
          {[
            { num: 1, text: "개인 성향 분석" },
            { num: 2, text: "상호 작용 4역역" },
            { num: 3, text: "초기 결혼 시뮬레이션" },
            { num: 4, text: "관계 지표 예측" },
            { num: 5, text: "종합 결론" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`h-[113px] flex flex-col items-center gap-[9px] relative text-white ${
                item.num === section ? "bg-[#9AD8CA]" : "bg-[#E1E1E1]"
              } ${idx < 4 ? "border-b border-white" : ""} ${
                idx === 0 ? "rounded-tl-[3px]" : ""
              }`}
            >
              <div className="font-bold mt-3.5 text-heading-md">{item.num}</div>

              {/* 세로 텍스트 */}
              <div className="flex flex-col items-center text-display-xl ">
                {item.text.split("").map((char, charIdx) => (
                  <span key={charIdx} className="block text-caption-sm">
                    {char}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* 현재 섹션 꼬리 - 사이드바 밖으로 */}
          <div
            className="absolute right-[17px] w-[23px] h-[17px]"
            style={{
              top: `${(section - 1) * 113 + 23}px`,
            }}
          >
            <Image src="/triangle-polygon.svg" alt="" fill />
          </div>
        </div>
      </aside>
    </div>
  );
}
