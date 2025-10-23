"use client";

import { NavigateButton } from "@/components/NavigateButton";

interface NavigatorProps {
  onNext: () => void;
  onBack: () => void;
}

export const Navigator = ({ onNext, onBack }: NavigatorProps) => {
  return (
    <footer className="flex w-full justify-between p-10">
      <NavigateButton direction="left" onClick={onBack} />
      <NavigateButton direction="right" onClick={onNext} />
    </footer>
  );
};
