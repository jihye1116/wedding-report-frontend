"use client";

import { useState, useEffect } from "react";

import Intro1Page from "./intro/Intro1Page";
import Intro2Page from "./intro/Intro2Page";
import Intro3Page from "./intro/Intro3Page";
import ResultViewerPage from "./ResultViewerPage";

interface ReportIntroductionPageProps {
  resultId: string;
}

type IntroStep = "intro1" | "intro2" | "intro3" | "viewing_results";

export default function ReportIntroductionPage({
  resultId,
}: ReportIntroductionPageProps) {
  const [currentStep, setCurrentStep] = useState<IntroStep>("intro1");
  const [reportData, setReportData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/report/${resultId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReportData(data);
        console.log("Report data loaded:", data);
      } catch (err) {
        console.error("Error fetching report data:", err);
        setError(
          err instanceof Error
            ? err.message
            : "데이터를 불러오는데 실패했습니다.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
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
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
          <p className="mt-4 text-lg">데이터를 불러오는 중...</p>
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

  // 데이터가 로드되지 않은 경우
  if (!reportData) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg">데이터를 찾을 수 없습니다.</p>
      </div>
    );
  }

  // 데이터 표시 (개발용)
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="p-8">
        <h1 className="mb-4 text-2xl font-bold">MSW 테스트 - Report Data</h1>
        <div className="mb-4">
          <p>
            <strong>Result ID:</strong> {resultId}
          </p>
          <p>
            <strong>Success:</strong> {reportData.success ? "Yes" : "No"}
          </p>
          <p>
            <strong>Message:</strong> {reportData.message}
          </p>
        </div>

        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold">Personal Analyses</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded border p-4">
              <h3 className="font-semibold">Male Profile</h3>
              <p>
                <strong>Name:</strong>{" "}
                {reportData.personal_analyses?.male?.profile?.name}
              </p>
              <p>
                <strong>Sections:</strong>{" "}
                {reportData.personal_analyses?.male?.profile?.sections?.length}
                개
              </p>
            </div>
            <div className="rounded border p-4">
              <h3 className="font-semibold">Female Profile</h3>
              <p>
                <strong>Name:</strong>{" "}
                {reportData.personal_analyses?.female?.profile?.name}
              </p>
              <p>
                <strong>Sections:</strong>{" "}
                {
                  reportData.personal_analyses?.female?.profile?.sections
                    ?.length
                }
                개
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold">Scenario Flow</h2>
          <p>
            <strong>Total Stages:</strong>{" "}
            {reportData.scenario_flow?.summary?.total_stages}
          </p>
          <p>
            <strong>Conflict Count:</strong>{" "}
            {reportData.scenario_flow?.summary?.conflict_count}
          </p>
          <p>
            <strong>Excitement Count:</strong>{" "}
            {reportData.scenario_flow?.summary?.excitement_count}
          </p>
        </div>

        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold">Raw Data (JSON)</h2>
          <pre className="max-h-96 overflow-auto rounded bg-gray-100 p-4 text-sm">
            {JSON.stringify(reportData, null, 2)}
          </pre>
        </div>

        <button
          onClick={() => setCurrentStep("intro1")}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          원래 페이지로 돌아가기
        </button>
      </div>
    );
  }

  // 프로덕션에서는 기존 로직 사용
  if (currentStep === "intro1") {
    return <Intro1Page onNext={handleNext} />;
  }

  if (currentStep === "intro2") {
    return <Intro2Page onNext={handleNext} />;
  }

  if (currentStep === "intro3") {
    return <Intro3Page onNext={handleNext} onBack={handleBack} />;
  }

  if (currentStep === "viewing_results") {
    return <ResultViewerPage onBackToIntro={() => setCurrentStep("intro3")} />;
  }

  return null;
}
