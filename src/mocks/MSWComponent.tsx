"use client";

import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("./browser");
      }
    }
  }, []);

  return null;
};
