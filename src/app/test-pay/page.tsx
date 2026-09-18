"use client";

/**
 * 실결제 연동 점검용 100원 결제. 랜딩에 링크 없음 — URL 직접 입력.
 * 백엔드는 goodsName "결제 테스트"면 100원으로 승인만 하고 쿠폰은 발급하지 않는다. 결제 후 관리자에서 취소할 것.
 */
export default function TestPayPage() {
  const pay = () => {
    if (!window.AUTHNICE) {
      alert("결제 모듈을 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }
    window.AUTHNICE.requestPay({
      clientId:
        process.env.NEXT_PUBLIC_NICEPAY_CLIENT_ID ??
        "R2_09bdb9d60a5f4a4d9b0eb53cf2fac598",
      method: "card",
      orderId: "test_" + Date.now(),
      amount: 100,
      goodsName: "결제 테스트",
      mallReserved: "결제 테스트",
      returnUrl: window.location.origin + "/api/nicepay-return",
      fnError: (result) => alert(result.errorMsg || "결제 중 오류가 발생했습니다."),
    });
  };

  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4">
      <p className="text-sm text-gray-500">결제 연동 테스트 · 100원</p>
      <button
        onClick={pay}
        className="rounded-lg bg-[#FFC0C1] px-6 py-3 text-base font-bold"
      >
        100원 결제하기
      </button>
    </div>
  );
}
