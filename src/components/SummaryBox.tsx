interface SummaryBoxProps {
  text: string;
}

export const SummaryBox = ({ text }: SummaryBoxProps) => {
  return (
    <div className="result-gradient mt-4 w-full rounded-xl p-6">
      <p className="text-center text-lg font-medium text-gray-800">“{text}”</p>
    </div>
  );
};
