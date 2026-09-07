import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "취소·환불 정책 | 우리둘" };

export default function Refund() {
  return (
    <LegalPage
      title="취소·환불 정책"
      body={`1. 설문을 시작하기 전: 전액 환불

2. 한 분이라도 설문을 완료한 뒤: 리포트 생성이 시작되므로 환불이 어렵습니다.

3. 리포트 발송 후: 환불 불가. 단, 서비스 오류로 리포트를 열람할 수 없는 경우 전액 환불합니다.

4. 환불 문의: 0507-1478-3654 / hooaahmarketing@gmail.com

※ 본 문안은 초안이며 정식 정책으로 교체될 예정입니다.`}
    />
  );
}
