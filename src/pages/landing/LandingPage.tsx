"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Logo from "@/assets/icons/logo.svg";
import { CONTACT_URL, CouponSheet } from "@/components/CouponSheet";
import { SiteFooter } from "@/components/SiteFooter";
import { secondsOnPage, track, useSectionTracking } from "@/utils/ga";

export const PRICE = 19000;
export const PRODUCT_NAME = "커플 결혼시뮬레이션 - 우리둘 테스트";

// 이미지는 아임웹 상품 페이지 캡처에서 크롭한 것. 원본 export 받으면 교체.
const IMG = "/images/landing";

// ponytail: 랜딩 후기는 하드코딩. /review 공개동의 데이터 API 생기면 교체.
const REVIEWS = [
  {
    name: "김○○",
    rating: 5,
    text: "성격 테스트인 줄 알았는데 1년 뒤 싸우는 장면이 나와서 소름.",
  },
  {
    name: "박○○",
    rating: 5,
    text: "40페이지가 진짜 다 읽힘. 남자친구가 더 좋아했어요.",
  },
  {
    name: "이○○",
    rating: 4,
    text: "상견례 전에 해보길 잘했다. 얘기 꺼내기 편해짐.",
  },
];

const FAQ = [
  [
    "혼자 해도 되나요?",
    "두 분이 각자 설문해야 리포트가 나와요. 한 분만 완료하면 리포트가 만들어지지 않아요.",
  ],
  [
    "결과는 언제 오나요?",
    "두 분 모두 설문을 마친 시점부터 최대 1시간 안에 등록한 번호로 문자를 보내드려요.",
  ],
  [
    "상대가 안 하면요?",
    "두 분 다 마쳐야 리포트가 나와요. 상대에게 설문 링크를 다시 보내 주세요. 안 되면 문의 주시면 도와드릴게요.",
  ],
  [
    "환불되나요?",
    "설문을 시작하기 전까지는 전액 환불돼요. 리포트가 발송된 뒤에는 환불이 어려워요.",
  ],
  [
    "개인정보는요?",
    "이름·전화번호는 리포트 발송에만 쓰고, 처리방침에 따라 보관·파기해요.",
  ],
] as const;

const PREVIEWS = [
  ["Step1. 개인성향 분석", "report-step1.webp", 1500, 1566],
  ["Step2. 상호작용분석", "report-step2.webp", 1314, 1680],
  ["Step3. 36개월 신혼생활 시뮬레이션", "report-step3.webp", 1500, 1509],
] as const;

// 리포트 캡처 확대 보기. 배경 탭/ESC로 닫힘.
const Lightbox = ({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (src && !el.open) el.showModal();
    if (!src && el.open) el.close();
  }, [src]);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={onClose}
      className="m-auto max-h-none max-w-none bg-transparent p-4 backdrop:bg-black/80"
    >
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="max-h-[90dvh] max-w-[90vw]" />
      )}
    </dialog>
  );
};

const Divider = () => <div className="mx-auto my-8 h-6 w-px bg-gray-300" />;

const Cta = ({ from, onClick }: { from: string; onClick: () => void }) => (
  <button
    type="button"
    onClick={() => {
      track("landing_cta_click", { section: from, seconds: secondsOnPage() });
      onClick();
    }}
    className="bg-brand w-full rounded-lg py-3 text-sm font-medium text-white"
  >
    쿠폰으로 시작하기
  </button>
);

export default function LandingPage() {
  const [couponOpen, setCouponOpen] = useState(false);
  const [zoom, setZoom] = useState<string | null>(null);
  // 랜딩은 실제 라우트가 "/"라 page_view는 GA4 자동 수집에 맡긴다.
  useSectionTracking("landing_section_view");
  const openCoupon = () => setCouponOpen(true);

  // 데스크탑에선 560px 고정. .landing .wrapper 패딩 오버라이드는 globals.css
  return (
    <div className="landing mx-auto max-w-[560px] pb-20 text-[#111111]">
      <header className="wrapper flex items-center justify-between py-4">
        <Image src={Logo} alt="우리둘" height={36} />
        <a href={CONTACT_URL} className="text-sm text-gray-500">
          문의
        </a>
      </header>

      {/* ① HERO */}
      <section className="wrapper" data-ga-section="hero">
        <Image
          src={`${IMG}/hero.webp`}
          alt='나만그래? "우리 자기는 다 좋은데…"'
          width={1080}
          height={1266}
          priority
          className="w-full rounded-xl"
        />
        <div className="mt-4">
          <Cta from="hero" onClick={openCoupon} />
        </div>
      </section>

      {/* ② 작가 한마디 */}
      <section className="wrapper py-10 text-center text-sm leading-relaxed">
        <p>
          하... 진짜 답답해서 제가 <b>직접 만들었습니다.</b>
        </p>
        <p>
          이름하여 <b className="text-brand">[꽃길리포트].</b>
        </p>
        <Divider />
        <p>복잡한 건 질색이라,</p>
        <p>
          딱 <b>3단계 구성</b>으로 만들었어요.
        </p>
      </section>

      {/* ③ 3단계 */}
      <section className="wrapper" data-ga-section="steps">
        <Image
          src={`${IMG}/steps.webp`}
          alt="STEP1 사전설문 120문항 · STEP2 발송대기 · STEP3 리포트 열람 모바일 40페이지"
          width={1112}
          height={2197}
          className="w-full rounded-xl"
        />
      </section>

      {/* ④ 준비물 */}
      <section className="wrapper py-10 text-center text-sm leading-relaxed">
        <p>
          준비물? 그냥 <b>나랑 짝꿍,</b>
        </p>
        <p>
          그리고 <b>핸드폰만</b> 있으면 끝!
        </p>
        <Image
          src={`${IMG}/couple.webp`}
          alt="카페에서 함께 핸드폰을 보는 커플"
          width={1500}
          height={1500}
          className="my-6 w-full rounded-xl"
        />
        <p>
          <b>문항이 120개</b>라 조금 많다고
        </p>
        <p>생각할 수 있는데, 막상 해보면 시간 순삭입니다.</p>
      </section>

      {/* ⑤ 반전 */}
      <section
        className="wrapper text-center text-sm leading-relaxed"
        data-ga-section="demo"
      >
        <Divider />
        <p>
          <b>성격 테스트</b>인 줄 알았는데 정신 차리고 읽어보니
        </p>
        <p>
          <b>1년 뒤 밥 차려먹는 걸로</b>
        </p>
        <p>
          <b>싸우고 있는 모습</b>을 보여주더라고요?
        </p>
        {/* gif 16MB짜리라 mp4로. 원본은 imweb CDN에 그대로 있음 */}
        <video
          src={`${IMG}/survey-demo.mp4`}
          poster={`${IMG}/survey-demo-poster.jpg`}
          autoPlay
          loop
          muted
          playsInline
          aria-label="리포트 설문조사를 작성하는 화면"
          className="mx-auto my-6 w-3/5 rounded-xl"
        />
        <p className="text-xs text-gray-400">리포트 설문조사</p>
        <div className="mt-8">
          <p>
            아니, 리포트가 무슨 <b>전공 서적급</b>이에요.
          </p>
          <p>
            <b>40페이지</b>나 되다니..^^
          </p>
        </div>
        <Divider />
        <p>잠깐! 길기만 하면 다가 아니죠.</p>
        <p>
          뭐가 좋은 지 딱 <b>3개만 요약</b>해서 보여드림.
        </p>
      </section>

      {/* ⑥ 강점 3개 */}
      <section className="wrapper mt-6">
        <Image
          src={`${IMG}/points.webp`}
          alt="강점1 관계 분석에 특화된 심리테스트로 시작 · 강점2 성격 차이부터 현실 문제까지 생생한 시뮬레이션 · 강점3 갈등은 줄이고 연결은 끈끈하게 만드는 꽃길 로드맵"
          width={1278}
          height={1644}
          className="w-full rounded-xl"
        />
      </section>

      {/* ⑦ 리포트 미리보기 */}
      <section
        className="wrapper py-10 text-center text-sm leading-relaxed"
        data-ga-section="preview"
      >
        <p>이렇게 알찬 구성의 리포트..</p>
        <p>안 하고 그냥 갈 수 있어요?</p>
        {PREVIEWS.map(([label, file, w, h], i) => (
          <div key={file}>
            <p className={`${i ? "mt-6" : "mt-8"} text-xs text-gray-500`}>
              {label}
            </p>
            <button
              type="button"
              onClick={() => setZoom(`${IMG}/${file}`)}
              className="mt-2 w-full"
            >
              <Image
                src={`${IMG}/${file}`}
                alt={`리포트 ${label} 미리보기`}
                width={w}
                height={h}
                className="w-full rounded-xl"
              />
            </button>
          </div>
        ))}
        <p className="mt-3 text-[11px] text-gray-400">
          캡처를 누르면 크게 볼 수 있어요
        </p>
        <p className="mt-4 text-xs text-gray-400">
          + 4장 주요 관계 지표 예측 · 5장 종합 결론
        </p>
      </section>

      {/* ⑧ 후기 */}
      <section className="py-10" data-ga-section="reviews">
        <div className="wrapper mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">먼저 해본 커플들은요</h2>
          <Image
            src={`${IMG}/review-character.png`}
            alt=""
            width={400}
            height={400}
            className="h-20 w-20"
          />
        </div>
        <div className="wrapper flex snap-x gap-3 overflow-x-auto pb-2">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="w-64 shrink-0 snap-start rounded-xl border border-[#FFC0C1] p-4 text-sm"
            >
              <p className="text-brand">
                {"★".repeat(r.rating)}
                <span className="text-gray-300">
                  {"★".repeat(5 - r.rating)}
                </span>
              </p>
              <p className="mt-2 leading-relaxed">{r.text}</p>
              <p className="mt-2 text-xs text-gray-500">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⑨ 구매 카드 */}
      <section className="wrapper" data-ga-section="product">
        <div className="rounded-xl border border-gray-200 p-5">
          <span className="rounded bg-[#FF4D4D] px-1.5 py-0.5 text-[10px] font-bold text-white">
            SALE
          </span>
          <h2 className="mt-2 text-lg font-bold">{PRODUCT_NAME}</h2>
          <p className="mt-1 text-sm text-gray-600">
            2인 1세트 · 모바일 40페이지 · 재열람 무제한
          </p>
          <p className="mt-3 text-2xl font-bold">
            {PRICE.toLocaleString()}원
            <span className="ml-1 text-xs font-normal text-gray-500">
              VAT 포함
            </span>
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Cta from="product" onClick={openCoupon} />
            <button
              type="button"
              disabled
              className="w-full rounded-lg border border-gray-300 py-3 text-sm text-gray-400"
            >
              카드 결제하기 (준비 중)
            </button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-gray-500">
            카드 결제는 준비 중이에요. 쿠폰 문의는{" "}
            <a href={CONTACT_URL} className="underline">
              여기로
            </a>
            !
            <br />
            설문 시작 전에는 전액 환불됩니다. 설문 응답을 시작하면 디지털콘텐츠
            제공이 개시되어 청약철회가 제한됩니다.{" "}
            <Link href="/refund" className="underline">
              취소·환불 정책
            </Link>
          </p>
        </div>
      </section>

      {/* ⑩ FAQ */}
      <section className="wrapper py-10" data-ga-section="faq">
        <h2 className="mb-2 text-lg font-bold">자주 묻는 질문</h2>
        {FAQ.map(([q, a]) => (
          <details key={q} className="border-b border-gray-200 py-3 text-sm">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 leading-relaxed text-gray-600">{a}</p>
          </details>
        ))}
      </section>

      {/* ⑪ 푸터 */}
      <SiteFooter />

      {/* 하단 고정 바 (아임웹 "총 상품금액 / 구매하기" 바 대체) */}
      <div className="fixed inset-x-0 bottom-0 border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-10 py-3">
          <p className="text-sm">
            <span className="text-gray-500">총 상품금액 </span>
            <b className="text-base">{PRICE.toLocaleString()}원</b>
          </p>
          <div className="w-40 sm:w-64">
            <Cta from="sticky" onClick={openCoupon} />
          </div>
        </div>
      </div>

      <CouponSheet open={couponOpen} onClose={() => setCouponOpen(false)} />
      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </div>
  );
}
