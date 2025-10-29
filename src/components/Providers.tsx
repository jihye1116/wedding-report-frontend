"use client";

import { Provider } from "jotai";
import { ReactNode, useEffect } from "react";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development"
    ) {
      import("../mocks/browser").then(({ worker }) => {
        worker.start();
      });
    }
  }, []);

  return <Provider>{children}</Provider>;
}
