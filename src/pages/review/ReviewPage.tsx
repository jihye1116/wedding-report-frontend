"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Logo from "@/assets/icons/logo.svg";
import { TextAreaField } from "@/components/TextAreaField";
import { submitReview } from "@/utils/api";
import { cn } from "@/utils/cn";
import { track, useScreen } from "@/utils/ga";
import { getCampaign } from "@/utils/utm";

const SOURCES = [
  ["instagram", "인스타"],
  ["blog", "블로그"],
  ["friend", "지인"],
  ["event", "행사장"],
  ["etc", "기타"],
] as const;

const Stars = ({
  value,
  onChange,
  low,
  high,
}: {
  value: number | null;
  onChange: (v: number) => void;
  low: string;
  high: string;
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`${n}점`}
          aria-pressed={value === n}
          className={cn(
            "text-3xl leading-none transition-colors",
            value !== null && n <= value ? "text-[#FFB400]" : "text-gray-300",
          )}
        >
          ★
        </button>
      ))}
    </div>
    <div className="flex justify-between text-xs text-gray-500">
      <span>{low}</span>
      <span>{high}</span>
    </div>
  </div>
);

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
  const [purchase, setPurchase] = useState<number | null>(null);
  const [good, setGood] = useState("");
  const [bad, setBad] = useState("");
  const [consent, setConsent] = useState(false);
  const [source, setSource] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useScreen(done ? "/review/done" : "/review");

  // id 없으면 랜딩으로. 같은 id로 여러 번 남길 수 있게 제출 이력은 막지 않는다.
  useEffect(() => {
    if (!surveyId) router.replace("/");
  }, [surveyId, router]);

  // 행사 유입이면 유입경로 기본값 행사장. 문자 링크로 새 세션이면 utm이 없어 안 잡힌다.
  useEffect(() => {
    if (getCampaign()) setSource("event");
  }, []);

  const canSubmit =
    rating !== null &&
    nps !== null &&
    purchase !== null &&
    good.trim().length > 0 &&
    bad.trim().length > 0 &&
    !loading;

  const submit = async () => {
    if (!canSubmit || !surveyId) return;
    setLoading(true);
    try {
      await submitReview({
        survey_id: surveyId,
        rating: rating!,
        nps: nps!,
        purchase_intent: purchase!,
        comment: good.trim().slice(0, 200),
        bad_comment: bad.trim().slice(0, 200),
        public_consent: consent,
        source,
      });
      track("review_submit", {
        rating: rating!,
        nps: nps!,
        purchase_intent: purchase!,
        source: source ?? "",
      });
      setDone(true);
    } catch (e) {
      toast.error(
        e instanceof Error ? e.message : "잠시 후 다시 시도해 주세요",
      );
    } finally {
      setLoading(false);
    }
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
          <p className="mt-2 text-sm text-gray-600">1분이면 끝나요 🎁</p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">Q1. 리포트 만족도</h2>
          <Stars
            value={rating}
            onChange={setRating}
            low="별로예요"
            high="최고예요"
          />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">Q2. 주위에 추천하고 싶은 정도</h2>
          <Stars
            value={nps}
            onChange={setNps}
            low="추천 안 해요"
            high="꼭 추천해요"
          />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">
            Q3. 돈 내고도 해볼 만한 정도 (19,000원)
          </h2>
          <Stars
            value={purchase}
            onChange={setPurchase}
            low="안 살 것 같아요"
            high="살 것 같아요"
          />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">Q4. 가장 좋았던 점 한 줄</h2>
          <TextAreaField
            name="good"
            value={good}
            onChange={(_, v) => setGood(v.slice(0, 200))}
            placeholder="예: 36개월 시뮬레이션이 소름 돋았어요"
            rows={2}
          />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-bold">Q5. 별로였던 점 한 줄</h2>
          <TextAreaField
            name="bad"
            value={bad}
            onChange={(_, v) => setBad(v.slice(0, 200))}
            placeholder="솔직하게 적어주세요. 고치는 데 씁니다"
            rows={2}
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
            Q6. 우리둘을 어떻게 알게 됐나요?{" "}
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
