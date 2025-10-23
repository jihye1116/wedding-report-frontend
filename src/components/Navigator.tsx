"use client";

import { NavigateButton } from "@/components/NavigateButton";

interface NavigatorProps {
  onNext: () => void;
  onBack: () => void;
  currentPage?: number;
  totalPages?: number;
}

export const Navigator = ({
  onNext,
  onBack,
  currentPage,
  totalPages,
}: NavigatorProps) => {
  return (
    <footer className="flex w-full items-center justify-between p-10">
      <NavigateButton direction="left" onClick={onBack} />
      {currentPage && totalPages && (
        <span className="text-black">
          {currentPage} / {totalPages}
        </span>
      )}
      <NavigateButton direction="right" onClick={onNext} />
    </footer>
  );
};
