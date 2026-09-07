"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { LoadingSpinner } from "@/components/LoadingSpinner";
import ReviewPage from "@/pages/review/ReviewPage";

function Review() {
  const id = useSearchParams()?.get("id") || null;
  return <ReviewPage surveyId={id} />;
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
      <Review />
    </Suspense>
  );
}
