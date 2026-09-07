"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import LandingPage from "@/pages/landing/LandingPage";
import ReportIntroductionPage from "@/pages/result/ReportIntroductionPage";
import { track } from "@/utils/ga";

// `/?id=`는 이미 문자로 발송된 리포트 링크라 그대로 유지한다. id가 없으면 랜딩.
function Home() {
  const resultId = useSearchParams()?.get("id") || null;

  useEffect(() => {
    if (resultId) track("report_view");
  }, [resultId]);

  if (resultId) return <ReportIntroductionPage resultId={resultId} />;
  return <LandingPage />;
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex h-dvh items-center justify-center">
          <LoadingSpinner />
        </div>
      }
    >
      <Home />
    </Suspense>
  );
}
