"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Logo from "@/assets/icons/logo.svg";
import { RatingSelector } from "@/components/RatingSelector";
import { SelectionCircle } from "@/components/SelectionCircle";
import { TextAreaField } from "@/components/TextAreaField";
import { submitReview } from "@/utils/api";
import { cn } from "@/utils/cn";
import { track, useScreen } from "@/utils/ga";

const PARTS = [
  ["part1", "개인 성향"],
  ["part2", "상호작용 4영역"],
  ["part3", "36개월 시뮬레이션"],
  ["part4", "관계 지표"],
  ["part5", "종합 결론"],
] as const;

const SOURCES = [
  ["instagram", "인스타"],
  ["blog", "블로그"],
  ["friend", "지인"],
  ["event", "행사장"],
  ["etc", "기타"],
] as const;

const Chip = ({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={selected}
    className={cn(
      "rounded-full border px-3 py-1.5 text-sm",
      selected
        ? "border-brand bg-brand-soft/50 text-[#111111]"
        : "border-gray-300 text-gray-600",
    )}
  >
    {children}
  </button>
);

export default function ReviewPage({ surveyId }: { surveyId: string | null }) {
  const router = useRouter();
  const [rating, setRating] = useState<number | null>(null);
  const [nps, setNps] = useState<number | null>(null);
  const [parts, setParts] = useState<string[]>([]);
  const [comment, setComment] = useState("");
  const [consent, setConsent] = useState(false);
  const [source, setSource] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useScreen(done ? "/review/done" : "/review");

  // id 없으면 랜딩으로. 이미 제출한 id면 완료 화면.
  useEffect(() => {
    if (!surveyId) {
      router.replace("/");
      return;
    }
    try {
      if (localStorage.getItem(`reviewed_${surveyId}`)) setDone(true);
    } catch {
      // storage 차단 환경
    }
  }, [surveyId, router]);

  const canSubmit =
    rating !== null &&
    nps !== null &&
    parts.length > 0 &&
    comment.trim().length > 0 &&
    !loading;

  const submit = async () => {
    if (!canSubmit || !surveyId) return;
    setLoading(true);
    try {
      await submitReview({
        survey_id: surveyId,
        rating: rating!,
        nps: nps!,
        best_parts: parts,
        comment: comment.trim().slice(0, 200),
        public_consent: consent,
        source,
      });
      track("review_submit", {
        rating: rating!,
        nps: nps!,
        source: source ?? "",
      });
      finish();
    } catch (e) {
      if ((e as { status?: number }).status === 409) {
        finish();
        return;
      }
      toast.error(
        e instanceof Error ? e.message : "잠시 후 다시 시도해 주세요",
      );
    } finally {
      setLoading(false);
    }
  };

  const finish = () => {
    try {
      localStorage.setItem(`reviewed_${surveyId}`, "1");
    } catch {
      // storage 차단 환경
    }
    setDone(true);
  };

  const share = async () => {
    track("review_share_click");
    const url = window.location.origin;
    try {
      if (navigator.share) {
        await navigator.share({ title: "우리둘 테스트", url });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("링크를 복사했어요");
      }
    } catch {
      // 사용자가 공유 취소
    }
  };

  if (!surveyId) return null;

  if (done) {
    return (
      <div className="flex h-dvh flex-col">
        <Image className="mx-auto py-5" src={Logo} alt="Logo" height={70} />
        <main className="wrapper flex flex-1 flex-col items-center justify-center gap-6 text-center text-[#111111]">
          <div>
            <h1 className="text-2xl font-medium">고마워요 🌸</h1>
            <p className="mt-3 text-sm leading-relaxed">
              소중한 의견 덕분에 더 좋아질 거예요
            </p>
          </div>
          <button
            type="button"
            onClick={share}
            className="bg-brand w-full rounded-lg py-3 text-sm font-medium text-white"
          >
            우리둘 다른 커플에게 알리기
          </button>
          <Link
            href={`/?id=${surveyId}`}
            className="text-sm text-gray-500 underline"
          >
            리포트 다시 보기
          </Link>
          <div className="h-[100px]" />
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col text-[#111111]">
      <Image className="mx-auto py-5" src={Logo} alt="Logo" height={70} />
      <main className="wrapper flex flex-col gap-8 pb-10">
        <div className="text-center">
          <h1 className="text-xl font-bold">리포트, 어땠어요?</h1>
          <p className="mt-2 text-sm text-gray-600">
            1분이면 끝나요 🎁
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">Q1. 리포트 전체 만족도</h2>
          <RatingSelector
            value={rating}
            onChange={setRating}
            labels={{ 1: "별로예요", 2: "", 3: "", 4: "", 5: "최고예요" }}
          />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">
            Q2. 친구·연인에게 추천할 의향은요? (0~10)
          </h2>
          <div className="flex flex-wrap justify-between gap-y-2">
            {Array.from({ length: 11 }, (_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-xs text-gray-600">{i}</span>
                <SelectionCircle
                  size="sm"
                  selected={nps === i}
                  onClick={() => setNps(i)}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">
            Q3. 가장 좋았던 파트 (여러 개 가능)
          </h2>
          <div className="flex flex-wrap gap-2">
            {PARTS.map(([id, label]) => (
              <Chip
                key={id}
                selected={parts.includes(id)}
                onClick={() =>
                  setParts((p) =>
                    p.includes(id) ? p.filter((x) => x !== id) : [...p, id],
                  )
                }
              >
                {label}
              </Chip>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">Q4. 한 줄 후기</h2>
          <TextAreaField
            name="comment"
            value={comment}
            onChange={(_, v) => setComment(v.slice(0, 200))}
            placeholder="솔직하게 적어주세요 (200자)"
            rows={3}
          />
          <label className="flex items-start gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="accent-brand mt-0.5"
            />
            후기를 닉네임(이름 첫 글자+○○)으로 우리둘 소개 페이지에 실어도
            괜찮아요
          </label>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">
            Q5. 우리둘을 어떻게 알게 됐나요?{" "}
            <span className="font-normal text-gray-400">(선택)</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {SOURCES.map(([id, label]) => (
              <Chip
                key={id}
                selected={source === id}
                onClick={() => setSource(source === id ? null : id)}
              >
                {label}
              </Chip>
            ))}
          </div>
        </section>

        <button
          type="button"
          onClick={submit}
          disabled={!canSubmit}
          className="bg-brand w-full rounded-lg py-3 text-sm font-medium text-white disabled:bg-gray-300"
        >
          {loading ? "제출 중..." : "제출하기"}
        </button>
      </main>
    </div>
  );
}
