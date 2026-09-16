import { NextResponse } from "next/server";

/**
 * 나이스페이 결제창(Client 승인) returnUrl. 결과가 form POST로 온다.
 * 브라우저를 거친 값은 믿지 않고 백엔드가 tid로 재조회·검증한 뒤 쿠폰 코드를 발급한다.
 * 본인용은 그 코드로 바로 설문 시작, 선물용은 코드가 담긴 링크를 상대 커플에게 전달.
 */
const API = process.env.NEXT_PUBLIC_API_BASE_URL;

const BTN =
  "display:inline-block;padding:12px 20px;font-size:16px;border:none;border-radius:8px;background:#FFC0C1;color:#111;text-decoration:none;cursor:pointer";
const BTN_GHOST =
  "display:inline-block;margin-top:12px;padding:10px 20px;font-size:14px;border:1px solid #ccc;border-radius:8px;background:#fff;color:#111;text-decoration:none";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

const page = (title: string, body: string) =>
  new NextResponse(
    `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head>
<body style="text-align:center;padding:48px 20px;font-family:sans-serif;color:#111;line-height:1.6">${body}
<br/><a href="/" style="${BTN_GHOST}">홈으로 돌아가기</a></body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );

const fail = (msg: string) =>
  page(
    "결제 실패",
    `<h2>결제가 완료되지 않았어요</h2><p style="color:#666">${esc(msg)}</p>
<p style="font-size:14px;color:#666">카드 승인이 났는데 이 화면이 보이면 <a href="mailto:kkotgilservice@gmail.com">kkotgilservice@gmail.com</a>으로 주문번호와 함께 알려주세요. 확인 후 처리해 드립니다.</p>`,
  );

export async function POST(request: Request) {
  const data = Object.fromEntries(await request.formData()) as Record<
    string,
    string
  >;
  const { resultCode, resultMsg, tid, orderId, amount, goodsName = "" } = data;

  if (resultCode !== "0000" || !tid) {
    return fail(resultMsg || "결제가 취소되었거나 승인되지 않았습니다.");
  }

  let code: string;
  try {
    // dev는 API가 "/flower"(same-origin 프록시)라 요청 origin 기준으로 절대 URL을 만든다
    const res = await fetch(
      new URL(`${API}/payments/nicepay/confirm`, request.url),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tid,
          orderId,
          amount: Number(amount),
          goodsName,
        }),
        cache: "no-store",
      },
    );
    const json = (await res.json().catch(() => ({}))) as {
      code?: string;
      detail?: string;
    };
    if (!res.ok || !json.code) {
      return fail(
        `${json.detail || "결제 확인에 실패했습니다."} (주문번호 ${esc(orderId)})`,
      );
    }
    code = json.code;
  } catch {
    return fail(
      `결제 확인 서버에 연결하지 못했습니다. (주문번호 ${esc(orderId)})`,
    );
  }

  const origin = new URL(request.url).origin;
  const link = `${origin}/?coupon=${code}`;
  const isGift = goodsName.includes("선물");

  if (isGift) {
    return page(
      "선물 결제 완료",
      `<h2>선물 결제가 완료되었어요 🎁</h2>
<p>아래 링크를 선물 받을 커플에게 카톡으로 보내 주세요.<br/>링크를 열면 쿠폰이 자동으로 입력돼요.</p>
<div id="link" style="margin:20px auto;padding:14px;border:2px dashed #ccc;border-radius:8px;max-width:420px;font-weight:bold;background:#f9f9f9;word-break:break-all">${esc(link)}</div>
<p style="font-size:22px;letter-spacing:6px;font-weight:bold">${esc(code)}</p>
<button onclick="navigator.clipboard.writeText('${esc(link)}').then(()=>{this.textContent='복사됨 ✓'})" style="${BTN}">링크 복사하기</button>
<p style="margin-top:20px;font-size:13px;color:#666">이 화면을 닫아도 쿠폰 코드 <b>${esc(code)}</b>만 있으면 시작할 수 있어요. 캡처해 두세요.</p>`,
    );
  }

  return page(
    "결제 완료",
    `<h2>결제가 완료되었어요</h2>
<p>쿠폰 코드가 발급됐어요. 두 사람 모두 이 코드로 각자 참여해 주세요.</p>
<p style="font-size:26px;letter-spacing:6px;font-weight:bold">${esc(code)}</p>
<a href="${esc(link)}" style="${BTN}">설문 시작하기</a>
<p style="margin-top:20px;font-size:13px;color:#666">짝꿍에게는 이 링크를 보내 주세요:<br/><span style="word-break:break-all">${esc(link)}</span></p>`,
  );
}
