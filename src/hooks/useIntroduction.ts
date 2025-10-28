import { useAtom } from "jotai";
import { useEffect } from "react";

import { introDataAtom, introStepAtom } from "@/store/surveyStore";

export const useIntroduction = () => {
  const [step, setStep] = useAtom(introStepAtom);
  const [introData, setIntroData] = useAtom(introDataAtom);

  // 세션 스토리지에 introData 저장
  useEffect(() => {
    if (
      introData.name ||
      introData.partnerName ||
      introData.phoneNumber ||
      introData.partnerPhoneNumber
    ) {
      sessionStorage.setItem("intro-data", JSON.stringify(introData));
    }
  }, [introData]);

  // 세션 스토리지에 step 저장
  useEffect(() => {
    if (step > 0) {
      sessionStorage.setItem("intro-step", JSON.stringify(step));
    }
  }, [step]);

  // 세션 스토리지에서 introData 복원 (초기화 시에만)
  useEffect(() => {
    const savedIntroData = sessionStorage.getItem("intro-data");
    if (savedIntroData && !introData.name && !introData.partnerName) {
      try {
        const parsedIntroData = JSON.parse(savedIntroData);
        // 초기 로딩 시에만 복원하기 위해 setTimeout 사용
        setTimeout(() => {
          setIntroData(parsedIntroData);
        }, 0);
      } catch (error) {
        console.error("Failed to parse saved intro data:", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 세션 스토리지에서 step 복원 (초기화 시에만)
  useEffect(() => {
    const savedStep = sessionStorage.getItem("intro-step");
    if (savedStep && step === 0) {
      try {
        const parsedStep = JSON.parse(savedStep);
        // 초기 로딩 시에만 복원하기 위해 setTimeout 사용
        setTimeout(() => {
          setStep(parsedStep);
        }, 0);
      } catch (error) {
        console.error("Failed to parse saved intro step:", error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    step,
    setStep,
    introData,
    setIntroData,
  };
};
