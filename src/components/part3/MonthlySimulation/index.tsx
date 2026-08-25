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
        return `<blockquote class="border-l-4 border-brand/50 pl-2.5 text-gray-700">${inner}<\/blockquote>`;
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

  // Render conversation without block-level markdown (no blockquote/list),
  // but keep inline markdown like **bold**, *italic*, `code`, and links.
  const renderConversationInline = (src?: string) => {
    if (!src) return "";
    // collapse multiple blank lines to a single newline
    const norm = src.replace(/\r\n/g, "\n").replace(/\n{2,}/g, "\n");
    const lines = norm
      .split("\n")
      // keep literal "\\>" as ">"
      .map((l) => l.replace(/^\\>(\s?)/, ">$1"))
      // strip leading blockquote marker ">"
      .map((l) => l.replace(/^>\s?/, "").trim())
      // drop empty lines to avoid double <br /> when there are multiple blanks
      .filter((l) => l.length > 0);
    const para = lines.map((l) => renderInline(escapeHtml(l))).join("<br />");
    return `<p class=\"leading-relaxed\">${para}<\/p>`;
  };
  return (
    <article className="flex flex-col gap-5 py-5">
      <section className="flex flex-col gap-3">
        <h2 className="text-center text-lg font-semibold text-[#111111]">
          {data.month}
        </h2>
        <div className="result-gradient flex flex-col items-center justify-center rounded-[21px] px-5 py-2.5">
          <span className="text-center text-[18px] font-bold leading-snug text-[#111111]">
            {data.title}
          </span>
        </div>
      </section>

      <section className="flex flex-col gap-5 rounded-xl bg-[#F8F8F8] p-5">
        <h3 className="text-lg font-medium text-[#111111]">
          <span className="font-bold">🪴</span> 상황 요약
        </h3>
        <p className="whitespace-pre-wrap text-[16px] leading-[1.4] text-[#333333]">
          {data.situation}
        </p>
        <div className="flex gap-2.5">
          <div className="w-1 shrink-0 rounded-full bg-[#FF9080]/50"></div>
          <div className="whitespace-pre-wrap text-[16px] leading-[1.7] text-[#333333]">
            <div
              dangerouslySetInnerHTML={{
                __html: renderConversationInline(data.conversation),
              }}
            />
          </div>
        </div>
        <p className="whitespace-pre-wrap text-[16px] leading-[1.4] text-[#333333]">
          {data.analysis}
        </p>
      </section>
    </article>
  );
}
