import Link from "next/link";

// PG 심사용 사업자 정보. 아임웹 푸터 문안 그대로.
export const SiteFooter = () => (
  <footer className="wrapper py-8 text-[11px] leading-relaxed text-gray-500">
    <p className="font-medium text-gray-700">꽃-길</p>
    <p className="mt-2">
      (주)후아 | 대표자 : 민진하 | 소재지 : 경상북도 영덕군 영해면 예주길 99-1
    </p>
    <p>
      사업자 등록번호 : 289-86-02172 | 통신판매신고번호 : 2025-경북영덕-0036
    </p>
    <p>개인정보관리책임자 : 민진하 | 호스팅제공자 : (주)아임웹</p>
    <p>문의 0507-1478-3654</p>
    <p className="mt-2">
      상호명: (주)후아 &nbsp; 대표자: 민진하 &nbsp; 사업장주소: 경북 영덕군
      영해면 예주길 99-1 (괴시리) (주)후아 &nbsp; 연락처: 010-2731-3650 &nbsp;
      사업자등록번호: 289-86-02172
    </p>
    <p className="mt-2">
      통신판매업신고번호: 2025-경북영덕-0036 &nbsp; 대표자 이메일:
      hooaahmarketing@gmail.com &nbsp; 호스팅 제공자: (주)아임웹
    </p>
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
