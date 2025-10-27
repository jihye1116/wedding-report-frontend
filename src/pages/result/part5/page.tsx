import { ReportHeader } from "@/components/ReportHeader";

export default function Part5ResultPage() {
  return (
    <main className="font-pretendard">
      <ReportHeader />
      <h1 className="wrapper py-5 text-xl font-bold text-[#111111]">
        5. 종합 결론
      </h1>
      <article className="wrapper flex flex-col gap-7.5 py-5 leading-snug text-[#111111]">
        <section className="flex flex-col gap-5">
          <div className="rounded-r-full bg-[#B3E5DA] py-2.5 text-center font-bold">
            1. 걸어온 길
          </div>
          <p>
            두 분은 초기 갈등을 자기 성찰과 의사소통 방식의 변화를 통해 극복하며
            상호 이해와 협력의 기반을 다져왔습니다. 특히 재열은 감정을 솔직하게
            표현하려는 노력을 기울였고, 미선은 경청과 수용의 태도를 강화하여
            관계에 긍정적인 흐름을 만들어냈습니다.
          </p>
        </section>
        <section className="flex flex-col gap-5">
          <div className="rounded-r-full bg-linear-to-r from-[#EDFFDB] to-[#B3E5DA] py-2.5 text-center font-bold">
            2. 지속적 실천 과제
          </div>
          <p>
            두 분은 초기 갈등을 자기 성찰과 의사소통 방식의 변화를 통해 극복하며
            상호 이해와 협력의 기반을 다져왔습니다. 특히 재열은 감정을 솔직하게
            표현하려는 노력을 기울였고, 미선은 경청과 수용의 태도를 강화하여
            관계에 긍정적인 흐름을 만들어냈습니다.
          </p>
        </section>
        <section className="flex flex-col gap-5">
          <div className="rounded-r-full bg-[#B3E5DA]/60 py-2.5 text-center font-bold">
            3. 권장 실천 가이드
          </div>
          <p>
            정기적으로 함께 시간을 내어 생각과 기대를 공유하는 자리를
            마련한다면, 관계를 점검하고 상호 성장을 촉진하는 좋은 기회가 될
            것입니다.
          </p>
        </section>
        <section className="rounded-xl border border-[#9AD8CA] p-5">
          <p className="leading-relaxed whitespace-pre-wrap text-black">
            두 분의 관계는 이미 안정적인 생활 리듬을 가진 조율형 커플로
            보입니다. {"\n"}이제는 조율의 기술보다 감정의 다양성을 회복하는
            시기를 맞이할 가능성이 있습니다. {"\n"}관계의 견고함은
            &apos;균형&apos;에서 생겼지만, 지속력은 &apos;감정의 순환&apos;에서
            유지됩니다. {"\n"}작은 표현과 여유 있는 시간, 즉 감정이 머물 틈을
            자주 만들어 보세요. {"\n"}그 여백이 두 분의 관계를 한층 더 깊고
            부드럽게 만들어 줄 것입니다.
          </p>
        </section>
      </article>
    </main>
  );
}
