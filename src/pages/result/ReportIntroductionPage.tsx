"use client";

import { useState, useEffect } from "react";

import Intro1Page from "./intro/Intro1Page";
import Intro2Page from "./intro/Intro2Page";
import Intro3Page from "./intro/Intro3Page";
import ResultViewerPage from "./ResultViewerPage";
import { ReportData } from "@/types/api";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { getReportData } from "@/utils/api";

interface ReportIntroductionPageProps {
  resultId: string;
}

type IntroStep = "intro1" | "intro2" | "intro3" | "viewing_results";

export default function ReportIntroductionPage({
  resultId,
}: ReportIntroductionPageProps) {
  const [currentStep, setCurrentStep] = useState<IntroStep>("intro1");
  const [reportData, setReportData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReportData = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("Loading report data for resultId:", resultId);

        // 실제 API 호출
        const data = await getReportData(resultId);
        console.log("API data loaded:", data);
        setReportData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error loading report data:", err);
        setError(
          err instanceof Error
            ? err.message
            : "리포트 데이터를 불러오는데 실패했습니다.",
        );
        setLoading(false);
      }
    };

    loadReportData();
  }, [resultId]);

  const handleNext = () => {
    const steps: IntroStep[] = [
      "intro1",
      "intro2",
      "intro3",
      "viewing_results",
    ];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: IntroStep[] = [
      "intro1",
      "intro2",
      "intro3",
      "viewing_results",
    ];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  // 로딩 상태
  if (loading) {
    return (
      <div className="flex h-dvh items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center text-lg text-[#E5E5E5]">
          리포트를 불러오고 있습니다. <br />
          잠시만 기다려 주세요...
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-500">오류: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  // 기존 로직 사용 (데이터는 하위 컴포넌트에 전달)
  if (currentStep === "intro1") {
    return <Intro1Page onNext={handleNext} reportData={reportData} />;
  }

  if (currentStep === "intro2") {
    return <Intro2Page onNext={handleNext} reportData={reportData} />;
  }

  if (currentStep === "intro3") {
    return (
      <Intro3Page
        onNext={handleNext}
        onBack={handleBack}
        reportData={reportData}
      />
    );
  }

  if (currentStep === "viewing_results") {
    return (
      <ResultViewerPage
        onBackToIntro={() => setCurrentStep("intro3")}
        reportData={reportData}
      />
    );
  }

  return null;
}
