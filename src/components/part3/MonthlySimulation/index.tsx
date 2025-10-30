import { MonthlySimulationData } from "@/data/part3SimulationData";

interface MonthlySimulationProps {
  data: MonthlySimulationData;
}

export default function MonthlySimulation({ data }: MonthlySimulationProps) {
  return (
    <article className="wrapper flex flex-col gap-7.5 py-5 leading-snug">
      <section className="flex flex-col gap-5">
        <h2 className="px-10 py-5 text-center text-lg font-bold text-[#111111]">
          {data.month}
        </h2>
        <div className="result-gradient flex flex-col items-center gap-2.5 rounded-[20px] px-2.5 py-5">
          <span className="text-center leading-snug font-medium text-[#111111]">
            {data.title}
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h3 className="text-lg text-[#111111]">🪴 상황 요약</h3>
        <p className="whitespace-pre-wrap">{data.situation}</p>
      </section>
      <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
        <div className="border-l-4 border-[#6DD4BD]/50 pl-2.5">
          <p className="leading-relaxed whitespace-pre-wrap">
            {data.conversation}
          </p>
        </div>
        <p className="leading-relaxed font-semibold whitespace-pre-wrap">
          {data.analysis}
        </p>
      </section>
    </article>
  );
}
