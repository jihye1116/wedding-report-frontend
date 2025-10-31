import { Fragment } from "react/jsx-runtime";

import { YearlyIntroData } from "@/data/part3SimulationData";

interface YearlyIntroProps {
  data: YearlyIntroData;
}

export default function YearlyIntro({ data }: YearlyIntroProps) {
  return (
    <Fragment>
      <h1 className="wrapper py-5 text-xl font-bold text-[#111111] xl:pt-15">
        [{data.year}년차 시뮬레이션]
      </h1>
      <article className="wrapper flex flex-col gap-7.5 py-5 leading-snug text-[#7E7E7E]">
        <div className="flex flex-col items-center gap-2.5">
          <div className="rounded-full bg-[#B3E5DA] px-10 py-2.5 font-bold text-white">
            {data.year}년 차
          </div>
          <p
            className="border-t border-[#B3E5DA] py-5"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
        {data.subheading && <p>{data.subheading}</p>}
        <ul className="list-disc space-y-1 pl-5">
          {data.points.map((point, index) => (
            <li
              key={index}
              className="font-pretendard"
              dangerouslySetInnerHTML={{ __html: point }}
            />
          ))}
        </ul>
        {data.analysis.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </article>
    </Fragment>
  );
}
