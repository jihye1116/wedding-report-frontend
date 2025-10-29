import { ReportHeader } from "@/components/ReportHeader";
import InitialIntro from "@/components/part3/InitialIntro";
import MonthlySimulation from "@/components/part3/MonthlySimulation";
import TransitionPage from "@/components/part3/TransitionPage";
import YearlyIntro from "@/components/part3/YearlyIntro";
import YearlySummary from "@/components/part3/YearlySummary";
import { part3SimulationData } from "@/data/part3SimulationData";
import { ReportData } from "@/types/api";

interface Part3ResultPageProps {
  step: number;
  reportData?: ReportData | null;
}

export default function Part3ResultPage({
  step,
  reportData,
}: Part3ResultPageProps) {
  const stepData = part3SimulationData[step];

  const renderContent = () => {
    if (!stepData) return null;

    switch (stepData.type) {
      case "initial-intro":
        return <InitialIntro data={stepData.data} reportData={reportData} />;
      case "intro":
        return <YearlyIntro data={stepData.data} reportData={reportData} />;
      case "monthly":
        return (
          <MonthlySimulation data={stepData.data} reportData={reportData} />
        );
      case "summary":
        return <YearlySummary data={stepData.data} reportData={reportData} />;
      case "transition":
        return <TransitionPage data={stepData.data} reportData={reportData} />;
      default:
        return null;
    }
  };

  return (
    <main className="font-pretendard flex flex-1 flex-col">
      <ReportHeader />
      {renderContent()}
    </main>
  );
}
