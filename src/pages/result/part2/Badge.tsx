const Badge = ({
  no = "01",
  title = "공감 기반 시너지",
  color = "#7BBC80",
}: {
  no?: string;
  title?: string;
  color?: string;
}) => (
  <div className="flex items-center gap-2">
    <span
      className="inline-flex h-12 w-12 items-center justify-center rounded-lg font-bold text-white"
      style={{ backgroundColor: color }}
    >
      {no}
    </span>
    <div className="flex flex-col items-center">
      <p className="text-lg leading-snug font-bold whitespace-nowrap">
        {title}
        <br />
        (Positive Resonance)
      </p>
    </div>
  </div>
);

export default Badge;
