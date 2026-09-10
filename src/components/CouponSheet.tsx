"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import { verifyAccessCode } from "@/utils/api";
import { secondsOnPage, track } from "@/utils/ga";
import { getCampaign } from "@/utils/utm";

export const CONTACT_URL =
  process.env.NEXT_PUBLIC_CONTACT_URL || "mailto:kkotgilservice@gmail.com";

const EVENT_CODE = process.env.NEXT_PUBLIC_EVENT_CODE || "MARRY";

// 행사 사전 설문. 한 화면 스크롤, 스텝 분리 없음.
const PRE_QUESTIONS = [
  [
    "stage",
    "지금 어떤 사이인가요?",
    ["연애 중", "결혼 준비 중", "신혼", "기혼", "기타"],
  ],
  [
    "concern",
    "리포트에서 제일 알고 싶은 건?",
    ["우리 궁합", "싸움 원인", "현실 문제 대비", "그냥 재미로"],
  ],
  [
    "talked",
    "돈·집안일 같은 얘기, 둘이 해봤어요?",
    ["충분히 했다", "대충 했다", "거의 안 해봤다"],
  ],
  [
    "tried",
    "비슷한 거 해본 적 있어요?",
    ["MBTI·궁합", "커플앱", "상담", "없음"],
  ],
  [
    "wtp",
    "이런 리포트, 얼마면 해볼 만해요?",
    ["무료라면", "1만원까지", "1~2만원", "2만원 이상"],
  ],
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
    className={
      "rounded-full border px-3 py-1.5 text-sm " +
      (selected
        ? "border-brand bg-brand-soft/50 text-[#111111]"
        : "border-gray-300 text-gray-600")
    }
  >
    {children}
  </button>
);

interface CouponSheetProps {
  open: boolean;
  onClose: () => void;
}

/**
 * 결제 대체용 쿠폰 바텀시트. 검증은 기존 인증코드 API(verifyAccessCode) 그대로.
 * 성공 시 sessionStorage.accessCode를 남기고 /survey로 보내면 인증 단계가 건너뛰어진다.
 *
 * 행사 QR(utm_campaign) 진입이면 안내 → 사전 설문 → 쿠폰 발급 순서로 열리고,
 * 코드 직접 입력은 "이미 쿠폰이 있어요"로 유지된다.
 */
export const CouponSheet = ({ open, onClose }: CouponSheetProps) => {
  const router = useRouter();
  const ref = useRef<HTMLDialogElement>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [fails, setFails] = useState(0);
  const [loading, setLoading] = useState(false);
  const [campaign, setCampaign] = useState<string | null>(null);
  const [step, setStep] = useState<"intro" | "pre" | "issued" | "code">("code");
  const [pre, setPre] = useState<Record<string, string>>({});
  const [agree, setAgree] = useState(false);

  // 행사 진입이면 안내 화면부터. sessionStorage를 읽으므로 마운트 후에.
  useEffect(() => {
    const c = getCampaign();
    setCampaign(c);
    if (c) setStep("intro");
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) {
      el.showModal();
      track("page_view", {
        page_location: window.location.origin + "/landing/coupon",
        page_title: "/landing/coupon",
      });
    }
    if (!open && el.open) el.close();
  }, [open]);

  const goSurvey = async (usedCode: string) => {
    setError(null);
    setLoading(true);
    track("coupon_submit", { campaign: campaign ?? "" });
    try {
      const { success, message } = await verifyAccessCode(usedCode);
      if (!success) throw new Error(message || "유효하지 않은 쿠폰이에요");
      sessionStorage.setItem("accessCode", usedCode);
      track("coupon_success", { seconds: secondsOnPage() });
      toast.success("쿠폰이 확인됐어요");
      router.push("/survey");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "잠시 후 다시 시도해 주세요";
      setError(msg);
      setFails((n) => n + 1);
      track("coupon_invalid", { reason: msg });
    } finally {
      setLoading(false);
    }
  };

  // 사전 설문 응답은 GA4로 바로(이탈자 확보) + 본 설문 제출 바디용으로 세션에 저장.
  const submitPre = () => {
    const payload = {
      pre_survey: { ...pre, campaign: campaign ?? "" },
      interview_agree: agree,
    };
    sessionStorage.setItem("event-pre-survey", JSON.stringify(payload));
    track("event_survey_submit", {
      ...pre,
      campaign: campaign ?? "",
      interview_agree: String(agree),
    });
    setStep("issued");
  };

  const preDone = PRE_QUESTIONS.every(([key]) => pre[key]);
  const canSubmitCode = code.length >= 5 && !loading;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-0 mt-auto max-h-[90dvh] w-full max-w-none overflow-y-auto rounded-t-2xl bg-white p-0 backdrop:bg-black/40 sm:mx-auto sm:max-w-[500px]"
    >
      <div className="flex flex-col items-center gap-4 px-5 pt-3 pb-8 text-[#111111]">
        <div className="h-1 w-10 rounded-full bg-gray-300" />

        {step === "intro" && (
          <>
            <div className="text-center">
              <h2 className="text-xl font-bold">🎟 오늘은 무료예요</h2>
              <p className="mt-2 text-sm text-gray-600">
                대구광역시 가족정책과 행사 참여자 전용
                <br />
                질문 5개, 40초면 쿠폰을 받아요
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStep("pre")}
              className="bg-brand w-full rounded-lg py-3 text-sm font-medium text-white"
            >
              쿠폰 받으러 가기
            </button>
            <button
              type="button"
              onClick={() => setStep("code")}
              className="text-sm text-gray-500 underline"
            >
              이미 쿠폰이 있어요
            </button>
          </>
        )}

        {step === "pre" && (
          <>
            <div className="text-center">
              <h2 className="text-xl font-bold">거의 다 왔어요</h2>
              <p className="mt-2 text-sm text-gray-600">
                5개만 고르면 쿠폰이 나와요
              </p>
            </div>
            <div className="flex w-full flex-col gap-6">
              {PRE_QUESTIONS.map(([key, label, options]) => (
                <section key={key} className="flex flex-col gap-2">
                  <h3 className="text-sm font-bold">{label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {options.map((option) => (
                      <Chip
                        key={option}
                        selected={pre[key] === option}
                        onClick={() => setPre((p) => ({ ...p, [key]: option }))}
                      >
                        {option}
                      </Chip>
                    ))}
                  </div>
                </section>
              ))}
              <label className="flex items-start gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="accent-brand mt-0.5"
                />
                <span>
                  인터뷰(10분)에 참여할 수 있어요
                  <span className="mt-1 block text-xs text-gray-500">
                    동의 시 설문에 입력한 연락처로, 인터뷰를 위한 전화를 드릴 수
                    있어요.
                  </span>
                </span>
              </label>
            </div>
            <button
              type="button"
              onClick={submitPre}
              disabled={!preDone}
              className="bg-brand w-full rounded-lg py-3 text-sm font-medium text-white disabled:bg-gray-300"
            >
              쿠폰 받기
            </button>
          </>
        )}

        {step === "issued" && (
          <>
            <div className="text-center">
              <h2 className="text-xl font-bold">쿠폰이 발급되었습니다!</h2>
              <p className="mt-2 text-sm text-gray-600">
                코드는 다음 페이지에 자동으로 입력됩니다
              </p>
            </div>
            <p className="w-full rounded-xl border border-dashed border-gray-300 py-3 text-center text-lg font-bold tracking-[6px]">
              {EVENT_CODE}
            </p>
            <p className="text-brand text-center text-sm font-medium">
              남, 여 두 사람 모두가 각각 참여해 주셔야 리포트가 나와요
            </p>
            {error && <p className="text-sm text-[#FF6666]">⚠ {error}</p>}
            <button
              type="button"
              onClick={() => goSurvey(EVENT_CODE)}
              disabled={loading}
              className="bg-brand w-full rounded-lg py-3 text-sm font-medium text-white disabled:bg-gray-300"
            >
              {loading ? "확인 중..." : "바로 시작하기"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-gray-500 underline"
            >
              캡처해 두고 나중에 하기
            </button>
          </>
        )}

        {step === "code" && (
          <>
            <div className="text-center">
              <h2 className="text-xl font-bold">쿠폰 번호를 입력해 주세요</h2>
              <p className="mt-2 text-sm text-gray-600">
                행사장·카톡으로 받으신 번호예요
              </p>
            </div>
            <input
              autoFocus
              value={code}
              maxLength={8}
              autoCapitalize="characters"
              autoComplete="off"
              placeholder="코드 입력"
              onChange={(e) => {
                setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""));
                setError(null);
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && canSubmitCode && goSurvey(code)
              }
              className={`h-12 w-full rounded-xl border px-3 text-center text-base tracking-[8px] outline-none ${
                error
                  ? "border-[#FF6666] text-[#FF6666]"
                  : "border-gray-300 focus:border-black"
              }`}
            />
            {error && <p className="text-sm text-[#FF6666]">⚠ {error}</p>}
            <button
              type="button"
              onClick={() => goSurvey(code)}
              disabled={!canSubmitCode}
              className="bg-brand w-full rounded-lg py-3 text-sm font-medium text-white disabled:bg-gray-300"
            >
              {loading ? "확인 중..." : "확인"}
            </button>
            {fails >= 3 ? (
              <a href={CONTACT_URL} className="text-brand text-sm underline">
                계속 안 되나요? 문의하기
              </a>
            ) : (
              <a href={CONTACT_URL} className="text-sm text-gray-500 underline">
                쿠폰이 없으신가요? 문의하기
              </a>
            )}
          </>
        )}
      </div>
    </dialog>
  );
};
