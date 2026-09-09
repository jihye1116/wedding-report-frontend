"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import { verifyAccessCode } from "@/utils/api";
import { secondsOnPage, track } from "@/utils/ga";

export const CONTACT_URL =
  process.env.NEXT_PUBLIC_CONTACT_URL || "tel:0507-1478-3654";

interface CouponSheetProps {
  open: boolean;
  onClose: () => void;
}

/**
 * 결제 대체용 쿠폰 입력 바텀시트. 검증은 기존 인증코드 API(verifyAccessCode) 그대로.
 * 성공 시 sessionStorage.accessCode를 남기고 /survey로 보내면 인증 단계가 건너뛰어진다.
 */
export const CouponSheet = ({ open, onClose }: CouponSheetProps) => {
  const router = useRouter();
  const ref = useRef<HTMLDialogElement>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [fails, setFails] = useState(0);
  const [loading, setLoading] = useState(false);

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

  const canSubmit = code.length >= 5 && !loading;

  const submit = async () => {
    if (!canSubmit) return;
    setError(null);
    setLoading(true);
    track("coupon_submit");
    try {
      const { success, message } = await verifyAccessCode(code);
      if (!success) throw new Error(message || "유효하지 않은 쿠폰이에요");
      sessionStorage.setItem("accessCode", code);
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

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-0 mt-auto w-full max-w-none rounded-t-2xl bg-white p-0 backdrop:bg-black/40 sm:mx-auto sm:max-w-[500px]"
    >
      <div className="flex flex-col items-center gap-4 px-5 pt-3 pb-8 text-[#111111]">
        <div className="h-1 w-10 rounded-full bg-gray-300" />
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
          onKeyDown={(e) => e.key === "Enter" && submit()}
          className={`h-12 w-full rounded-xl border px-3 text-center text-base tracking-[8px] outline-none ${
            error
              ? "border-[#FF6666] text-[#FF6666]"
              : "border-gray-300 focus:border-black"
          }`}
        />
        {error && <p className="text-sm text-[#FF6666]">⚠ {error}</p>}
        <button
          type="button"
          onClick={submit}
          disabled={!canSubmit}
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
      </div>
    </dialog>
  );
};
