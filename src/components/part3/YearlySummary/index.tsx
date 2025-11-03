import { BarChart } from "@/components/BarChart";
import { YearlySummaryData } from "@/data/part3SimulationData";

interface YearlySummaryProps {
  data: YearlySummaryData;
}

export default function YearlySummary({ data }: YearlySummaryProps) {
  return (
    <article className="wrapper flex flex-col gap-10 py-5 leading-snug">
      <section className="flex flex-col gap-5">
        <h2 className="text-center text-lg font-bold text-[#111111]">
          {data.chartTitle}
        </h2>
        <section className="flex flex-col items-center justify-center gap-7.5 2xl:flex-row">
          {data.chartInterpretation && (
            <p
              className="text-center text-sm whitespace-pre-wrap text-[#7E7E7E]"
              dangerouslySetInnerHTML={{ __html: data.chartInterpretation }}
            />
          )}

          <div className="mx-auto flex w-full shrink-0 flex-col gap-2 lg:w-[360px] xl:w-[340px]">
            <BarChart
              values={
                data.quarterlyScores?.map((score) => score.score) || [
                  10, 10, 10, 10,
                ]
              }
              barColor={data.barColor}
            />
          </div>
          <div className="flex flex-1 flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
            {data.chartAnalysis.map((p, i) => (
              <p
                key={i}
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="text-center text-lg font-bold">“{data.summaryTitle}”</h2>
        {data.summaryContent.map((p, i) => (
          <p
            key={i}
            className="leading-snug font-medium whitespace-pre-wrap text-[#7E7E7E]"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </section>
      <section className="result-gradient flex flex-col gap-5 p-5">
        <h3 className="text-center leading-snug font-semibold text-[#3EA38D]">
          🧭 {data.year}년 차 부부를 위한 질문
        </h3>
        <div className="space-y-1 text-center">
          {data.questions.map((q, i) => (
            <div key={i}>• {q}</div>
          ))}
        </div>
      </section>
    </article>
  );
}
