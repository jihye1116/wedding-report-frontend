import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "개인정보처리방침 | 우리둘" };

export default function Privacy() {
  return (
    <LegalPage
      title="개인정보처리방침"
      body={`1. 수집 항목: 이름, 휴대전화 번호, 성별, 연애 기간, 설문 응답, (선택) 후기 및 만족도 응답

2. 수집 목적: 리포트 생성 및 발송, 고객 문의 대응, (동의 시) 이벤트·프로모션 안내

3. 보유 기간: 리포트 발송 후 1년, 또는 이용자 삭제 요청 시 즉시 파기

4. 개인정보관리책임자: 민진하 (hooaahmarketing@gmail.com, 0507-1478-3654)

※ 본 문안은 초안이며 정식 방침으로 교체될 예정입니다.`}
    />
  );
}
