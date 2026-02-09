"use client";

import { useAtom } from "jotai";
import Image from "next/image";
import { useMemo, useState } from "react";

import CelebrationImage from "@/assets/images/celebration.png";
import { NavigateButton } from "@/components/NavigateButton";
import { Navigator } from "@/components/Navigator";
import Part1ResultPage, { part1TotalPages } from "@/pages/result/part1/page";
import Part2ResultPage, { part2TotalPages } from "@/pages/result/part2/page";
import Part3ResultPage from "@/pages/result/part3/page";
import Part4ResultPage from "@/pages/result/part4/page";
import Part5ResultPage from "@/pages/result/part5/page";
import {
  part3ResultStepAtom,
  part4ResultStepAtom,
  reportDataAtom,
} from "@/store/surveyStore";

type ResultPartStep =
  | "part1"
  | "part2"
  | "part3"
  | "part4"
  | "part5"
  | "finish";

interface ResultViewerPageProps {
  onBackToIntro: () => void;
}

export default function ResultViewerPage({
  onBackToIntro,
}: ResultViewerPageProps) {
  const [reportData] = useAtom(reportDataAtom);
  const [part3Step, setPart3Step] = useAtom(part3ResultStepAtom);
  const [part4Step, setPart4Step] = useAtom(part4ResultStepAtom);
  const [currentStep, setCurrentStep] = useState<ResultPartStep>("part1");
  const [partPages, setPartPages] = useState({
    part1: 0,
    part2: 0,
  });

  const quotes = [
    {
      text: "행복한 결혼이란 두 영혼이 서로를 이해하고, 함께 성장하는 여정이다.",
      author: "톨스토이",
    },
    {
      text: "사랑은 완벽한 사람을 찾는 것이 아니라, 불완전함 속에서도 함께 자라나는 법을 배우는 일이다.",
      author: "앙드레 지드(André Gide)",
    },
    {
      text: "결혼은 ‘나’와 ‘너’가 사라지는 게 아니라, 두 개의 세계가 천천히 맞물리는 과정이다.",
      author: "빅터 프랭클(Viktor Frankl)",
    },
    {
      text: "좋은 관계란 충돌이 없는 것이 아니라, 충돌 속에서도 서로를 잃지 않는 것이다.",
      author: "에스더 페렐(Esther Perel)",
    },
    {
      text: "사랑은 감정의 절정이 아니라, 매일의 선택이다.",
      author: "어니스트 헤밍웨이(Ernest Hemingway)",
    },
    {
      text: "결혼은 사랑을 시험하는 제도가 아니라, 사랑이 자라나는 환경이다.",
      author: "꽃길만 걷자",
    },
    {
      text: "두 사람이 진짜로 가까워지는 순간은, 서로의 상처를 보았을 때 도망치지 않았을 때다.",
      author: "브레네 브라운(Brené Brown)",
    },
    {
      text: "결혼이란 서로를 바꾸는 일이 아니라, 함께 진화하는 일이다.",
      author: "꽃길만 걷자",
    },
    {
      text: "결혼이란 서로를 구속하는 약속이 아니라, 함께 성장하겠다는 약속이다.",
      author: "지그문트 바우만(Zygmunt Bauman)",
    },
    {
      text: "우리는 완벽한 사랑을 찾는 것이 아니라, 서로를 통해 완성되어 가는 사랑을 만든다.",
      author: "R.M. 드레이크(R.M. Drake)",
    },
  ];

  const [randomQuote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)],
  );

  const steps: ResultPartStep[] = [
    "part1",
    "part2",
    "part3",
    "part4",
    "part5",
    "finish",
  ];

  // 전체 페이지 수 계산
  const totalResultPages =
    part1TotalPages + part2TotalPages(reportData || null) + 21 + 5 + 1; // part1 + part2 + part3(21) + part4(5) + part5(1)

  // 현재 전체 페이지 번호 계산
  const getCurrentGlobalPage = () => {
    let globalPage = 0;

    if (currentStep === "part1") {
      return partPages.part1 + 1;
    }

    globalPage += part1TotalPages;

    if (currentStep === "part2") {
      return globalPage + partPages.part2 + 1;
    }

    globalPage += part2TotalPages(reportData || null);

    if (currentStep === "part3") {
      return globalPage + part3Step;
    }

    globalPage += 21;

    if (currentStep === "part4") {
      return globalPage + part4Step;
    }

    globalPage += 5;

    if (currentStep === "part5") {
      return globalPage + 1;
    }

    globalPage += 1;

    if (currentStep === "finish") {
      return totalResultPages; // finish 페이지는 총 페이지 수와 동일하게 표시
    }

    return 1;
  };

  const handlePartPageChange = (part: keyof typeof partPages, page: number) => {
    setPartPages((prev) => ({ ...prev, [part]: page }));
  };

  const handleNext = () => {
    window.scrollTo({ top: 0 });
    const currentIndex = steps.indexOf(currentStep);

    if (currentStep === "part1") {
      if (partPages.part1 < part1TotalPages - 1) {
        handlePartPageChange("part1", partPages.part1 + 1);
        return;
      }
    }

    if (currentStep === "part2") {
      if (partPages.part2 < part2TotalPages(reportData || null) - 1) {
        handlePartPageChange("part2", partPages.part2 + 1);
        return;
      }
    }

    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.indexOf(currentStep);

    if (currentStep === "part1") {
      if (partPages.part1 > 0) {
        handlePartPageChange("part1", partPages.part1 - 1);
        return;
      }
    }

    if (currentStep === "part2") {
      if (partPages.part2 > 0) {
        handlePartPageChange("part2", partPages.part2 - 1);
        return;
      }
    }

    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    } else {
      onBackToIntro();
    }
  };

  const onSwipedLeft = () => {
    if (currentStep === "part3") {
      if (part3Step === 21) {
        handleNext();
      } else {
        setPart3Step((prev) => prev + 1);
      }
      window.scrollTo({ top: 0 });
    } else if (currentStep === "part4") {
      if (part4Step === 5) {
        handleNext();
      } else {
        setPart4Step((prev) => prev + 1);
      }
      window.scrollTo({ top: 0 });
    } else if (currentStep !== "finish") {
      handleNext();
    }
  };

  const onSwipedRight = () => {
    if (currentStep === "part3") {
      if (part3Step === 1) {
        handleBack();
      } else {
        setPart3Step((prev) => prev - 1);
      }
    } else if (currentStep === "part4") {
      if (part4Step === 1) {
        handleBack();
      } else {
        setPart4Step((prev) => prev - 1);
      }
    } else {
      handleBack();
    }
  };

  if (currentStep === "part1") {
    return (
      <div className="flex h-dvh flex-col">
        <Part1ResultPage currentPage={partPages.part1} />
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          canProceed={true}
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
        />
      </div>
    );
  }

  if (currentStep === "part2") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part2ResultPage currentPage={partPages.part2} />
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          canProceed={true}
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
        />
      </div>
    );
  }

  if (currentStep === "part3") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part3ResultPage step={part3Step} />
        <Navigator
          onNext={() => {
            if (part3Step === 21) {
              handleNext();
            } else {
              setPart3Step((prev) => prev + 1);
            }
            window.scrollTo({ top: 0 });
          }}
          onBack={() => {
            if (part3Step === 1) {
              handleBack();
            } else {
              setPart3Step((prev) => prev - 1);
            }
          }}
          canProceed={true}
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
        />
      </div>
    );
  }

  if (currentStep === "part4") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part4ResultPage step={part4Step} />
        <Navigator
          onNext={() => {
            if (part4Step === 5) {
              handleNext();
            } else {
              setPart4Step((prev) => prev + 1);
            }
            window.scrollTo({ top: 0 });
          }}
          onBack={() => {
            if (part4Step === 1) {
              handleBack();
            } else {
              setPart4Step((prev) => prev - 1);
            }
          }}
          canProceed={true}
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
        />
      </div>
    );
  }

  if (currentStep === "part5") {
    return (
      <div className="flex h-dvh flex-col justify-between">
        <Part5ResultPage />
        <Navigator
          onNext={handleNext}
          onBack={handleBack}
          canProceed={true}
          currentPage={getCurrentGlobalPage() - 1}
          totalPages={totalResultPages}
          isResultPage={true}
        />
      </div>
    );
  }

  if (currentStep === "finish") {
    return (
      <div className="flex h-dvh flex-col items-center justify-center">
        <div className="flex-2" />
        <main className="wrapper flex w-full flex-col gap-10 py-5 text-center leading-snug text-[#111111]">
          <section className="flex flex-col gap-4 leading-snug">
            <p>&quot;{randomQuote.text}&quot;</p>
            <p className="text-lg">- {randomQuote.author}</p>
          </section>
          {/* ㅁㄴㅇㅁㄴㅇ
           */}

          <div className="result-gradient flex h-70 w-full items-center justify-center">
            <Image
              src={CelebrationImage}
              alt="Celebration"
              className=""
              width={185}
              height={250}
            />
          </div>
        </main>
        <div className="flex-1" />
        <footer className="wrapper flex w-full items-center justify-between p-10">
          <NavigateButton direction="left" onClick={handleBack} />
        </footer>
      </div>
    );
  }

  return null;
}
