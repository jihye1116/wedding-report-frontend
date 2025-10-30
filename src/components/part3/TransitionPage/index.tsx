import { Fragment } from "react/jsx-runtime";
import { TransitionData } from "@/data/part3SimulationData";

interface TransitionPageProps {
  data: TransitionData;
}

export default function TransitionPage({ data }: TransitionPageProps) {
  return (
    <Fragment>
      <h1 className="wrapper py-5 text-xl font-bold text-[#111111] xl:pt-15">
        3. 36개월 신혼생활 시뮬레이션
      </h1>
      <div className="flex-5" />
      <section className="wrapper flex flex-col gap-7.5 py-5">
        <span className="text-center text-lg leading-snug font-medium">
          “ {data.title} “
        </span>
        <span className="text-center leading-snug text-[#7E7E7E]">
          {data.subtitle}
        </span>
      </section>
      <div className="flex-9" />
    </Fragment>
  );
}
