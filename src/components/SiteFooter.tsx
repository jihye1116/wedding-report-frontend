import Link from "next/link";

// PG 심사용 사업자 정보. 전 페이지 공통.
// ponytail: 통신판매업신고번호는 신고 완료 후 추가.
export const SiteFooter = () => (
  <footer className="wrapper py-8 text-[11px] leading-relaxed text-gray-500">
    <p className="font-medium text-gray-700">꽃-길</p>
    <p className="mt-2">
      상호명: 꽃-길 &nbsp; 대표자: 김수지 &nbsp; 사업자등록번호: 141-13-02880
    </p>
    <p>
      사업장주소: 부산광역시 동래구 반송로 352, 2층 202-34D호 (명장동)
    </p>
    <p>
      연락처: 0507-1478-3654 &nbsp; 이메일: hooaahmarketing@gmail.com
    </p>
    <p>개인정보관리책임자: 김수지 &nbsp; 호스팅 제공자: 꽃-길</p>
    <p className="mt-3 flex gap-3">
      <Link href="/terms" className="underline">
        이용약관
      </Link>
      <Link href="/privacy" className="underline">
        개인정보처리방침
      </Link>
      <Link href="/refund" className="underline">
        취소·환불 정책
      </Link>
    </p>
    <p className="mt-2">Copyright ⓒ 2026 꽃-길 All rights reserved.</p>
  </footer>
);
