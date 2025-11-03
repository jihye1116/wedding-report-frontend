import { MonthlySimulationData } from "@/data/part3SimulationData";

interface MonthlySimulationProps {
  data: MonthlySimulationData;
}

export default function MonthlySimulation({ data }: MonthlySimulationProps) {
  const escapeHtml = (s: string) =>
    s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

  const renderInline = (html: string) => {
    // links
    html = html.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline">$1<\/a>',
    );
    // bold **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1<\/strong>");
    // italic *text*
    html = html.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1<\/em>");
    // inline code `code`
    html = html.replace(
      /`([^`]+)`/g,
      '<code class="px-1 py-0.5 rounded bg-gray-100">$1<\/code>',
    );
    return html;
  };

  const renderMarkdownBasic = (src?: string) => {
    if (!src) return "";
    const norm = src.replace(/\r\n/g, "\n");
    const blocks = norm.split(/\n\n+/);
    const htmlBlocks = blocks.map((block) => {
      const lines = block.split("\n");
      // blockquote
      if (lines.every((l) => /^>\s?/.test(l))) {
        const inner = lines
          .map((l) => l.replace(/^>\s?/, "").trim())
          .map((l) => renderInline(escapeHtml(l)))
          .join("<br />");
        return `<blockquote class="border-l-4 border-[#6DD4BD]/50 pl-2.5 text-gray-700">${inner}<\/blockquote>`;
      }
      // unordered list
      if (lines.every((l) => /^[-*]\s+/.test(l))) {
        const items = lines
          .map((l) => l.replace(/^[-*]\s+/, ""))
          .map((l) => `<li>${renderInline(escapeHtml(l))}<\/li>`)
          .join("");
        return `<ul class="list-disc pl-5 space-y-1">${items}<\/ul>`;
      }
      // paragraph with line breaks
      // Support escaped blockquote marker: a line starting with "\>" should render as
      // a literal ">" and NOT be treated as a blockquote.
      const para = lines
        .map((l) => l.replace(/^\\>(\s?)/, ">$1"))
        .map((l) => renderInline(escapeHtml(l)))
        .join("<br />");
      return `<p class="leading-relaxed">${para}<\/p>`;
    });
    return htmlBlocks.join("\n");
  };
  return (
    <article className="wrapper flex flex-col gap-7.5 py-5 leading-snug">
      <section className="flex flex-col gap-5">
        <h2 className="px-10 pt-5 text-center text-lg font-bold text-[#111111] xl:pt-10">
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
      <section className="flex flex-col gap-5">
        <div className="rounded-xl bg-[#F8F8F8] p-5">
          <div className="">
            <div className="border-l-4 border-[#6DD4BD]/50 pl-2.5">
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{
                  __html: renderMarkdownBasic(data.conversation),
                }}
              />
            </div>
          </div>
        </div>
        <p className="leading-relaxed whitespace-pre-wrap">{data.analysis}</p>
      </section>
    </article>
  );
}
