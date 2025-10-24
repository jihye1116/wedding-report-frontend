import { ReportHeader } from "@/components/ReportHeader";

export default function Part1ResultPage() {
  return (
    <div className="font-pretendard">
      <ReportHeader />
      <article className="flex flex-col gap-9 px-10 py-5 text-[#111111]">
        <div className="flex items-center gap-2">
          <p className="text-3xl leading-snug font-bold whitespace-nowrap">
            <span className="mr-4 text-[#4BB7A0]">01</span>개인성향 분석
          </p>
          <hr className="ml-4 h-0.5 flex-1 border-t border-[#9AD8CA]" />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">갑돌이님의 성향</h2>
            <div className="mt-2 rounded-lg border bg-gray-50 p-4">
              <p>분석 내용이 여기에 들어갑니다...</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">갑순이님의 성향</h2>
            <div className="mt-2 rounded-lg border bg-gray-50 p-4">
              <p>분석 내용이 여기에 들어갑니다...</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
