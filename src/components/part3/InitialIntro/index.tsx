import { Fragment } from "react/jsx-runtime";

import { InitialIntroData } from "@/data/part3SimulationData";

interface InitialIntroProps {
  data: InitialIntroData;
}

export default function InitialIntro({ data }: InitialIntroProps) {
  return (
    <Fragment>
      <h1 className="wrapper py-5 text-xl font-bold text-[#111111] xl:pt-15">
        {data.title}
      </h1>
      <article className="wrapper flex flex-col gap-5 py-5 leading-snug text-[#7E7E7E] xl:pt-10">
        {data.paragraphs.map((p, i) => {
          if (i === 2) {
            return (
              <Fragment key={i}>
                <p dangerouslySetInnerHTML={{ __html: p }} />
                <ul className="list-disc space-y-1 pl-5">
                  {data.listItems.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </Fragment>
            );
          }
          return <p key={i} dangerouslySetInnerHTML={{ __html: p }} />;
        })}
      </article>
    </Fragment>
  );
}
