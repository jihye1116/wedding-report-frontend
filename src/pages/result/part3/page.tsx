import { ReportHeader } from "@/components/ReportHeader";
import InitialIntro from "@/components/part3/InitialIntro";
import MonthlySimulation from "@/components/part3/MonthlySimulation";
import TransitionPage from "@/components/part3/TransitionPage";
import YearlyIntro from "@/components/part3/YearlyIntro";
import YearlySummary from "@/components/part3/YearlySummary";
import { part3SimulationData } from "@/data/part3SimulationData";

interface Part3ResultPageProps {
  step: number;
}

export default function Part3ResultPage({ step }: Part3ResultPageProps) {
  const stepData = part3SimulationData[step];

  const renderContent = () => {
    if (!stepData) return null;

    switch (stepData.type) {
      case "initial-intro":
        return <InitialIntro data={stepData.data} />;
      case "intro":
        return <YearlyIntro data={stepData.data} />;
      case "monthly":
        return <MonthlySimulation data={stepData.data} />;
      case "summary":
        return <YearlySummary data={stepData.data} />;
      case "transition":
        return <TransitionPage data={stepData.data} />;
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