const Badge = ({
  no = "01",
  title = "공감 기반 시너지",
}: {
  no?: string;
  title?: string;
}) => (
  <div className="flex items-center gap-2">
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#E8F5E9] text-sm font-bold text-[#1B5E20]">
      {no}
    </span>
    <p className="text-xl leading-snug font-bold whitespace-nowrap">{title}</p>
    <span className="ml-1 text-sm text-gray-500">(Positive Resonance)</span>
  </div>
);

export default Badge;
