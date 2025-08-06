// src/app/report/layout.tsx
import { ReactNode } from "react";

export const metadata = {
  title: "Report",
};

export default function ReportLayoutSegment({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
