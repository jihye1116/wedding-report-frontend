import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "이용약관 | 우리둘" };

export default function Terms() {
  return (
    <LegalPage
      title="이용약관"
      body={`제1조 (목적) 이 약관은 (주)후아(이하 "회사")가 제공하는 우리둘 결혼 시뮬레이션 리포트 서비스의 이용 조건을 정합니다.

제2조 (서비스 내용) 회사는 두 이용자의 설문 응답을 바탕으로 관계 분석 리포트를 생성해 등록된 휴대전화 번호로 열람 링크를 발송합니다.

제3조 (이용 요금) 상품 가격은 판매 페이지에 표시된 금액(VAT 포함)이며, 쿠폰으로 이용하는 경우 쿠폰 조건을 따릅니다.

제4조 (환불) 취소·환불 정책 페이지의 규정을 따릅니다.

※ 본 문안은 초안이며 정식 약관으로 교체될 예정입니다.`}
    />
  );
}
