"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import LandingPage from "@/pages/landing/LandingPage";
import ReportIntroductionPage from "@/pages/result/ReportIntroductionPage";
import { track } from "@/utils/ga";

// `/?id=`는 이미 문자로 발송된 리포트 링크라 그대로 유지한다. id가 없으면 랜딩.
// `/?coupon=`은 결제 후 발급된 코드(본인용·선물 링크). 랜딩에서 쿠폰 시트를 바로 띄운다.
function Home() {
  const params = useSearchParams();
  const resultId = params?.get("id") || null;
  const coupon = params?.get("coupon") || undefined;

  useEffect(() => {
    if (resultId) track("report_view");
  }, [resultId]);

  if (resultId) return <ReportIntroductionPage resultId={resultId} />;
  return <LandingPage initialCoupon={coupon} />;
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
