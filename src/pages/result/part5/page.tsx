import { useAtom } from "jotai";

import { ReportHeader } from "@/components/ReportHeader";
import { reportDataAtom } from "@/store/surveyStore";

type Part5ResultPageProps = object;

export default function Part5ResultPage({}: Part5ResultPageProps) {
  const [reportData] = useAtom(reportDataAtom);
  const comprehensiveData =
    reportData?.relationship_prediction?.comprehensive_conclusion;

  return (
    <main className="font-pretendard">
      <ReportHeader />
      <h1 className="wrapper py-5 text-xl font-bold text-[#111111] xl:pt-15">
        5. 종합 결론
      </h1>
      <article className="wrapper flex flex-col gap-7.5 py-5 leading-snug text-[#111111]">
        <section className="flex flex-col gap-5">
          <div className="rounded-r-full bg-[#EDFFDB]/60 py-2.5 text-center font-bold">
            1. 걸어온 길
          </div>
          <p className="whitespace-pre-wrap">
            {comprehensiveData?.walked_path || "데이터를 불러오는 중입니다..."}
          </p>
        </section>
        <section className="flex flex-col gap-5">
          <div className="rounded-r-full bg-linear-to-r from-[#EDFFDB]/60 to-[#B3E5DA]/60 py-2.5 text-center font-bold">
            2. 지속적 실천 과제
          </div>
          <p className="whitespace-pre-wrap">
            {comprehensiveData?.continuous_practice ||
              "데이터를 불러오는 중입니다..."}
          </p>
        </section>
        <section className="flex flex-col gap-5">
          <div className="rounded-r-full bg-[#B3E5DA]/60 py-2.5 text-center font-bold">
            3. 권장 실천 가이드
          </div>
          <p className="whitespace-pre-wrap">
            {comprehensiveData?.recommended_guide ||
              "데이터를 불러오는 중입니다..."}
          </p>
        </section>
        <section className="rounded-xl border border-[#9AD8CA] p-5">
          <p className="leading-relaxed whitespace-pre-wrap text-black">
            {comprehensiveData?.summary || "데이터를 불러오는 중입니다..."}
          </p>
        </section>
      </article>
    </main>
  );
}
