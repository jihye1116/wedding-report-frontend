const WhenBox = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="result-gradient rounded-xl bg-[#F8FAFC] p-4">
    <p className="mb-1 text-center font-semibold">{label}</p>
    <p className="text-sm leading-relaxed text-gray-600">{children}</p>
  </div>
);

export default WhenBox;
