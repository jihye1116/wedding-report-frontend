import { SurveyData } from "../types/survey";

export const detailedSurveyData: SurveyData = {
  parts: [
    {
      partNumber: 1,
      title: "PART 1. User A: 본인에 대한 인식 (Self)",
      description: "나의 성향과 행동 패턴에 대한 48개 문항입니다.",
      totalQuestions: 48,
      totalPages: 8,
      questions: [
        // 현재중심 ↔ 미래지향
        {
          id: 1,
          question:
            "나는 불확실한 미래를 위해 현재를 희생하기보다, 지금 이 순간의 행복을 누리는 것이 더 현명하다고 생각한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 2,
          question:
            "나는 미리 계획을 짜두는 것보다, 그때그때 상황과 기분에 따라 즉흥적으로 행동하는 것이 더 편하다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 3,
          question:
            "나는 ‘지금 중요한 일’보다 ‘앞으로 도움이 될 일’을 우선순위에 두는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 4,
          question:
            "나는 오늘 내가 하는 일들이 5년 뒤, 10년 뒤의 내 모습에 어떤 영향을 줄지 자주 떠올린다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 논리·객관 ↔ 감정·인간
        {
          id: 5,
          question: "나는 상황을 판단할 때 감정보다 구조와 원리를 먼저 본다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "논리·객관 ↔ 감정·인간",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 6,
          question:
            "나는 다른 사람의 감정보다 사실관계를 우선으로 이해하려 한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "논리·객관 ↔ 감정·인간",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 7,
          question:
            "문제를 해결할 때, 논리적인 정답보다 사람의 마음을 다치지 않게 하는 것이 더 중요하다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "논리·객관 ↔ 감정·인간",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 8,
          question:
            "나는 일이 아무리 잘 되어도, 그 과정에서 사람들과 사이가 나빠진다면 실패한 것이라고 본다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "논리·객관 ↔ 감정·인간",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 반응적 ↔ 조절적
        {
          id: 9,
          question:
            "나는 이것저것 복잡하게 따지기보다, 딱 들 때의 느낌과 직감을 믿고 행동하는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 10,
          question:
            "나는 감정이 생기면 한동안 그 감정이 머릿속에서 쉽게 사라지지 않는다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 11,
          question:
            "나는 화가 나거나 급한 일이 생겨도, 바로 움직이지 않고 잠시 멈춰 생각한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 12,
          question:
            "나는 스트레스가 생겨도 감정보다 상황 해결에 먼저 집중하려 한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 안정지향 ↔ 도전지향
        {
          id: 13,
          question: "나는 변화가 생기면 흥미롭기보다 불편함을 먼저 느낀다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 14,
          question:
            "나는 큰 성과를 위해 위험을 감수하기보다, 적더라도 확실한 결과를 얻는 쪽을 택하겠다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 15,
          question:
            "불확실한 일이라도 흥미가 생기면 도전해보고 싶다는 생각이 든다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 16,
          question: "새로운 환경에 적응하는 과정을 즐기는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 외적동기 ↔ 내적동기
        {
          id: 17,
          question:
            "나는 일의 의미보다, 결과로 주어지는 현실적인 보상(돈, 스펙)이 더 중요하다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 18,
          question:
            "나는 혼자 만족하는 것보다, 남들이 인정해주는 결과가 진짜 가치 있다고 본다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 19,
          question:
            "일을 할 때 외부 평가보다 내가 스스로 세운 목표 달성을 더 중요하게 본다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 20,
          question: "결과보다 내가 의미 있다고 느끼는 과정을 더 중시한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 자율성 (낮음 ↔ 높음)
        {
          id: 21,
          question:
            "나는 '알아서 해'라는 막연한 자유보다, '무엇을 해야 할지' 명확히 정해주는 상황이 더 편하다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "자율성 (낮음 ↔ 높음)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 22,
          question:
            "나는 혼자 판단해서 끝내기보다, 중간중간 확인을 받고 피드백을 듣는 것을 선호한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "자율성 (낮음 ↔ 높음)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 23,
          question: "누가 시켜서가 아니라 스스로 필요하다고 느껴야 움직인다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "자율성 (낮음 ↔ 높음)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 24,
          question: "계획을 세울 때 주변의 의견보다 내 판단을 우선한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "자율성 (낮음 ↔ 높음)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 내향 ↔ 외향
        {
          id: 25,
          question:
            "아무리 친하고 좋아하는 사람들과 놀더라도, 일정 시간이 지나면 집에 가서 쉬고 싶다는 생각이 강하게 든다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "내향 ↔ 외향",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 26,
          question:
            "나에게 진정한 휴식이란, 사람들을 만나러 나가는 게 아니라 집에서 온전히 혼자만의 시간을 보내는 것이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "내향 ↔ 외향",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 27,
          question: "주말에는 혼자 있기보다 사람을 만나며 시간을 보내고 싶다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "내향 ↔ 외향",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 28,
          question:
            "사람들과의 만남은 나에게 피로감을 주기보다 오히려 삶의 활력을 불어넣어 준다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "내향 ↔ 외향",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 유연 ↔ 계획
        {
          id: 29,
          question:
            "미리 결정을 해버리면, 나중에 더 좋은 선택지가 생겼을 때 바꾸기 힘들까 봐 망설여진다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "유연 ↔ 계획",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 30,
          question:
            "나는 미리 정한 일정보다 그날의 흐름에 따라 움직이는 걸 더 편하게 느낀다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "유연 ↔ 계획",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 31,
          question:
            "나는 선택을 미룰 수 있는 상황에서도 미리 결정을 내려두는 걸 좋아하는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "유연 ↔ 계획",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 32,
          question:
            "나는 하루를 시작할 때, 대략적으로라도 오늘 무엇을 할지 머릿속에 정리가 되어 있어야 마음이 편하다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "유연 ↔ 계획",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 자기표현 ↔ 적응배려
        {
          id: 33,
          question: "감정이 생기면 그때그때 솔직하게 드러내는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "자기표현 ↔ 적응배려",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 34,
          question:
            "나는 남에게 맞추느라 에너지를 쓰기보다, 내 감정과 생각에 더 집중하는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "자기표현 ↔ 적응배려",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 35,
          question: "불편한 일이 있어도 분위기를 깨지 않으려 참는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "자기표현 ↔ 적응배려",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 36,
          question:
            "갈등을 만들기보다는 상황에 맞춰 원만하게 넘어가는 것을 택한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "자기표현 ↔ 적응배려",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 정서 안정성 (침체적 ↔ 안정적)
        {
          id: 37,
          question: "감정이 가라앉는 날이 종종 있고, 그럴 때는 집중이 어렵다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 38,
          question:
            "나는 기분 나쁜 일이 생기면, 그 감정에 깊게 빠져서 헤어나오기 힘들 때가 많다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 39,
          question:
            "하루 동안의 기분 변화가 크지 않고, 전반적으로 차분한 마음 상태를 유지한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 40,
          question:
            "나는 기분 나쁜 일이 생겨도, 마음에 오래 담아두지 않고 금방 털어내는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 신뢰 경향 (경계적 ↔ 수용적)
        {
          id: 41,
          question: "사람을 처음 만날 때 쉽게 믿기보다는 시간을 두고 본다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 42,
          question:
            "나는 아무리 가까운 사이라도, 내 모든 것을 다 보여주지는 않는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 43,
          question:
            "나는 다른 사람의 말을 들을 때, 거짓인지 의심하기보다 일단 사실이라고 믿는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 44,
          question:
            "나는 기본적으로 대부분의 사람이 선한 의도를 가졌다고 믿는다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 불안·완벽주의 (불안·통제형 ↔ 여유·수용형)
        {
          id: 45,
          question:
            "나는 내 실수 자체보다, 그 실수로 인해 남들이 나를 '부족한 사람'으로 볼까 봐 더 두렵다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 46,
          question:
            "나는 무언가를 시작할 때, '반드시 완벽하게 해내야 한다'는 압박감 때문에 숨이 막힐 때가 있다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 47,
          question:
            "나는 디테일에 집착해서 시간을 끄는 것보다, 부족하더라도 일단 매듭을 짓고 끝내는 것을 선호한다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 48,
          question:
            "계획대로 되지 않더라도 '그럴 수 있지' 하고 대수롭지 않게 넘기는 편이다.",
          category: "User A: 본인에 대한 인식 (Self)",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
      ],
    },
    {
      partNumber: 2,
      title: "PART 2. User A: 파트너(B) 관찰",
      description: "파트너(B)에 대해 내가 관찰한 모습 48개 문항입니다.",
      totalQuestions: 48,
      totalPages: 8,
      questions: [
        // 현재중심 ↔ 미래지향 (View)
        {
          id: 49,
          question:
            "파트너가 보기에 나는 불확실한 미래를 위해 현재를 희생하기보다, 지금 이 순간의 행복을 누리는 것이 더 현명하다고 생각한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "현재중심 ↔ 미래지향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 50,
          question:
            "파트너가 보기에 나는 미리 계획을 짜두는 것보다, 그때그때 상황과 기분에 따라 즉흥적으로 행동하는 것이 더 편하다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "현재중심 ↔ 미래지향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 51,
          question:
            "파트너가 보기에 나는 ‘지금 중요한 일’보다 ‘앞으로 도움이 될 일’을 우선순위에 두는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "현재중심 ↔ 미래지향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 52,
          question:
            "파트너가 보기에 나는 오늘 내가 하는 일들이 5년 뒤, 10년 뒤의 내 모습에 어떤 영향을 줄지 자주 떠올린다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "현재중심 ↔ 미래지향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 논리·객관 ↔ 감정·인간 (View)
        {
          id: 53,
          question:
            "파트너가 보기에 나는 상황을 판단할 때 감정보다 구조와 원리를 먼저 본다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "논리·객관 ↔ 감정·인간 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 54,
          question:
            "파트너가 보기에 나는 다른 사람의 감정보다 사실관계를 우선으로 이해하려 한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "논리·객관 ↔ 감정·인간 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 55,
          question:
            "파트너가 보기에 나는 문제를 해결할 때, 논리적인 정답보다 사람의 마음을 다치지 않게 하는 것이 더 중요하다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "논리·객관 ↔ 감정·인간 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 56,
          question:
            "파트너가 보기에 나는 일이 아무리 잘 되어도, 그 과정에서 사람들과 사이가 나빠진다면 실패한 것이라고 본다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "논리·객관 ↔ 감정·인간 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 반응적 ↔ 조절적 (View)
        {
          id: 57,
          question:
            "파트너가 보기에 나는 이것저것 복잡하게 따지기보다, 딱 들 때의 느낌과 직감을 믿고 행동하는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "반응적 ↔ 조절적 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 58,
          question:
            "파트너가 보기에 나는 감정이 생기면 한동안 그 감정이 머릿속에서 쉽게 사라지지 않는다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "반응적 ↔ 조절적 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 59,
          question:
            "파트너가 보기에 나는 화가 나거나 급한 일이 생겨도, 바로 움직이지 않고 잠시 멈춰 생각한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "반응적 ↔ 조절적 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 60,
          question:
            "파트너가 보기에 나는 스트레스가 생겨도 감정보다 상황 해결에 먼저 집중하려 한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "반응적 ↔ 조절적 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 안정지향 ↔ 도전지향 (View)
        {
          id: 61,
          question:
            "파트너가 보기에 나는 변화가 생기면 흥미롭기보다 불편함을 먼저 느낀다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "안정지향 ↔ 도전지향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 62,
          question:
            "파트너가 보기에 나는 큰 성과를 위해 위험을 감수하기보다, 적더라도 확실한 결과를 얻는 쪽을 택하겠다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "안정지향 ↔ 도전지향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 63,
          question:
            "파트너가 보기에 불확실한 일이라도 흥미가 생기면 도전해보고 싶다는 생각이 든다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "안정지향 ↔ 도전지향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 64,
          question:
            "파트너가 보기에 새로운 환경에 적응하는 과정을 즐기는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "안정지향 ↔ 도전지향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 외적동기 ↔ 내적동기 (View)
        {
          id: 65,
          question:
            "파트너가 보기에 나는 일의 의미보다, 결과로 주어지는 현실적인 보상이 더 중요하다",
          category: "User A: 파트너(B) 관찰",
          subCategory: "외적동기 ↔ 내적동기 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 66,
          question:
            "파트너가 보기에 나는 혼자 만족하는 것보다, 남들이 인정해주는 결과가 진짜 가치 있다고 본다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "외적동기 ↔ 내적동기 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 67,
          question:
            "파트너가 보기에 일을 할 때 외부 평가보다 내가 스스로 세운 목표 달성을 더 중요하게 본다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "외적동기 ↔ 내적동기 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 68,
          question:
            "파트너가 보기에 결과보다 내가 의미 있다고 느끼는 과정을 더 중시한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "외적동기 ↔ 내적동기 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 자율성 (낮음 ↔ 높음) (View)
        {
          id: 69,
          question:
            "파트너가 보기에 나는 '알아서 해'라는 막연한 자유보다, '무엇을 해야 할지' 명확히 정해주는 상황이 더 편하다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "자율성 (낮음 ↔ 높음) (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 70,
          question:
            "파트너가 보기에 나는 혼자 판단해서 끝내기보다, 중간중간 확인을 받고 피드백을 듣는 것을 선호한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "자율성 (낮음 ↔ 높음) (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 71,
          question:
            "파트너가 보기에 누가 시켜서가 아니라 스스로 필요하다고 느껴야 움직인다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "자율성 (낮음 ↔ 높음) (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 72,
          question:
            "파트너가 보기에 계획을 세울 때 주변의 의견보다 내 판단을 우선한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "자율성 (낮음 ↔ 높음) (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 내향 ↔ 외향 (View)
        {
          id: 73,
          question:
            "파트너가 보기에 아무리 친하고 좋아하는 사람들과 놀더라도, 일정 시간이 지나면 집에 가서 쉬고 싶다는 생각이 강하게 든다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "내향 ↔ 외향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 74,
          question:
            "파트너가 보기에 나에게 진정한 휴식이란, 사람들을 만나러 나가는 게 아니라 집에서 온전히 혼자만의 시간을 보내는 것이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "내향 ↔ 외향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 75,
          question:
            "파트너가 보기에 주말에는 혼자 있기보다 사람을 만나며 시간을 보내고 싶다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "내향 ↔ 외향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 76,
          question:
            "파트너가 보기에 사람들과의 만남은 나에게 피로감을 주기보다 오히려 삶의 활력을 불어넣어 준다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "내향 ↔ 외향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 유연 ↔ 계획 (View)
        {
          id: 77,
          question:
            "파트너가 보기에 미리 결정을 해버리면, 나중에 더 좋은 선택지가 생겼을 때 바꾸기 힘들까 봐 망설여진다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "유연 ↔ 계획 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 78,
          question:
            "파트너가 보기에 나는 미리 정한 일정보다 그날의 흐름에 따라 움직이는 걸 더 편하게 느낀다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "유연 ↔ 계획 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 79,
          question:
            "파트너가 보기에 나는 선택을 미룰 수 있는 상황에서도 미리 결정을 내려두는 걸 좋아하는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "유연 ↔ 계획 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 80,
          question:
            "파트너가 보기에 나는 하루를 시작할 때, 대략적으로라도 오늘 무엇을 할지 머릿속에 정리가 되어 있어야 마음이 편하다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "유연 ↔ 계획 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 자기표현 ↔ 적응배려 (View)
        {
          id: 81,
          question:
            "파트너가 보기에 감정이 생기면 그때그때 솔직하게 드러내는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "자기표현 ↔ 적응배려 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 82,
          question:
            "파트너가 보기에 나는 남에게 맞추느라 에너지를 쓰기보다, 내 감정과 생각에 더 집중하는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "자기표현 ↔ 적응배려 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 83,
          question:
            "파트너가 보기에 불편한 일이 있어도 분위기를 깨지 않으려 참는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "자기표현 ↔ 적응배려 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 84,
          question:
            "파트너가 보기에 갈등을 만들기보다는 상황에 맞춰 원만하게 넘어가는 것을 택한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "자기표현 ↔ 적응배려 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 정서 안정성 (침체적 ↔ 안정적) (View)
        {
          id: 85,
          question:
            "파트너가 보기에 감정이 가라앉는 날이 종종 있고, 그럴 때는 집중이 어렵다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "정서 안정성 (침체적 ↔ 안정적) (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 86,
          question:
            "파트너가 보기에 나는 나는 기분 나쁜 일이 생겨면, 그 감정에 깊게 빠져서 헤어나오기 힘들때가 많다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "정서 안정성 (침체적 ↔ 안정적) (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 87,
          question:
            "파트너가 보기에 하루 동안의 기분 변화가 크지 않고, 전반적으로 차분한 마음 상태를 유지한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "정서 안정성 (침체적 ↔ 안정적) (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 88,
          question:
            "파트너가 보기에 나는 기분 나쁜 일이 생겨도, 마음에 오래 담아두지 않고 금방 털어내는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "정서 안정성 (침체적 ↔ 안정적) (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 신뢰 경향 (경계적 ↔ 수용적) (View)
        {
          id: 89,
          question:
            "파트너가 보기에 사람을 처음 만날 때 쉽게 믿기보다는 시간을 두고 본다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적) (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 90,
          question:
            "파트너가 보기에 나는 아무리 가까운 사이라도, 내 모든 것을 다 보여주지는 않는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적) (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 91,
          question:
            "파트너가 보기에 나는 다른 사람의 말을 들을 때, 거짓인지 의심하기보다 일단 사실이라고 믿는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적) (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 92,
          question:
            "파트너가 보기에 나는 기본적으로 대부분의 사람이 선한 의도를 가졌다고 믿는다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적) (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)
        {
          id: 93,
          question:
            "파트너가 보기에 나는 내 실수 자체보다, 그 실수로 인해 남들이 나를 '부족한 사람'으로 볼까 봐 더 두렵다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 94,
          question:
            "파트너가 보기에 나는 무언가를 시작할 때, '반드시 완벽하게 해내야 한다'는 압박감 때문에 숨이 막힐 때가 있다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 95,
          question:
            "파트너가 보기에 나는 디테일에 집착해서 시간을 끄는 것보다, 부족하더라도 일단 매듭을 짓고 끝내는 것을 선호한다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 96,
          question:
            "파트너가 보기에 나는 계획대로 되지 않더라도 '그럴 수 있지' 하고 대수롭지 않게 넘기는 편이다.",
          category: "User A: 파트너(B) 관찰",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
      ],
    },
    {
      partNumber: 3,
      title: "PART 3. User B: 본인에 대한 인식 (Self)",
      description: "나의 성향과 행동 패턴에 대한 48개 문항입니다.",
      totalQuestions: 48,
      totalPages: 8,
      questions: [
        // 현재중심 ↔ 미래지향
        {
          id: 97,
          question:
            "나는 불확실한 미래를 위해 현재를 희생하기보다, 지금 이 순간의 행복을 누리는 것이 더 현명하다고 생각한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 98,
          question:
            "나는 미리 계획을 짜두는 것보다, 그때그때 상황과 기분에 따라 즉흥적으로 행동하는 것이 더 편하다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 99,
          question:
            "나는 ‘지금 중요한 일’보다 ‘앞으로 도움이 될 일’을 우선순위에 두는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 100,
          question:
            "나는 오늘 내가 하는 일들이 5년 뒤, 10년 뒤의 내 모습에 어떤 영향을 줄지 자주 떠올린다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 논리·객관 ↔ 감정·인간
        {
          id: 101,
          question: "나는 상황을 판단할 때 감정보다 구조와 원리를 먼저 본다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "논리·객관 ↔ 감정·인간",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 102,
          question:
            "나는 다른 사람의 감정보다 사실관계를 우선으로 이해하려 한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "논리·객관 ↔ 감정·인간",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 103,
          question:
            "문제를 해결할 때, 논리적인 정답보다 사람의 마음을 다치지 않게 하는 것이 더 중요하다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "논리·객관 ↔ 감정·인간",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 104,
          question:
            "나는 일이 아무리 잘 되어도, 그 과정에서 사람들과 사이가 나빠진다면 실패한 것이라고 본다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "논리·객관 ↔ 감정·인간",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 반응적 ↔ 조절적
        {
          id: 105,
          question:
            "나는 이것저것 복잡하게 따지기보다, 딱 들 때의 느낌과 직감을 믿고 행동하는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 106,
          question:
            "나는 감정이 생기면 한동안 그 감정이 머릿속에서 쉽게 사라지지 않는다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 107,
          question:
            "나는 화가 나거나 급한 일이 생겨도, 바로 움직이지 않고 잠시 멈춰 생각한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 108,
          question:
            "나는 스트레스가 생겨도 감정보다 상황 해결에 먼저 집중하려 한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 안정지향 ↔ 도전지향
        {
          id: 109,
          question: "나는 변화가 생기면 흥미롭기보다 불편함을 먼저 느낀다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 110,
          question:
            "나는 큰 성과를 위해 위험을 감수하기보다, 적더라도 확실한 결과를 얻는 쪽을 택하겠다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 111,
          question:
            "불확실한 일이라도 흥미가 생기면 도전해보고 싶다는 생각이 든다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 112,
          question: "새로운 환경에 적응하는 과정을 즐기는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 외적동기 ↔ 내적동기
        {
          id: 113,
          question:
            "나는 일의 의미보다, 결과로 주어지는 현실적인 보상(돈, 스펙)이 더 중요하다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 114,
          question:
            "나는 혼자 만족하는 것보다, 남들이 인정해주는 결과가 진짜 가치 있다고 본다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 115,
          question:
            "일을 할 때 외부 평가보다 내가 스스로 세운 목표 달성을 더 중요하게 본다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 116,
          question: "결과보다 내가 의미 있다고 느끼는 과정을 더 중시한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 자율성 (낮음 ↔ 높음)
        {
          id: 117,
          question:
            "나는 '알아서 해'라는 막연한 자유보다, '무엇을 해야 할지' 명확히 정해주는 상황이 더 편하다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "자율성 (낮음 ↔ 높음)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 118,
          question:
            "나는 혼자 판단해서 끝내기보다, 중간중간 확인을 받고 피드백을 듣는 것을 선호한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "자율성 (낮음 ↔ 높음)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 119,
          question: "누가 시켜서가 아니라 스스로 필요하다고 느껴야 움직인다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "자율성 (낮음 ↔ 높음)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 120,
          question: "계획을 세울 때 주변의 의견보다 내 판단을 우선한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "자율성 (낮음 ↔ 높음)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 내향 ↔ 외향
        {
          id: 121,
          question:
            "아무리 친하고 좋아하는 사람들과 놀더라도, 일정 시간이 지나면 집에 가서 쉬고 싶다는 생각이 강하게 든다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "내향 ↔ 외향",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 122,
          question:
            "나에게 진정한 휴식이란, 사람들을 만나러 나가는 게 아니라 집에서 온전히 혼자만의 시간을 보내는 것이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "내향 ↔ 외향",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 123,
          question: "주말에는 혼자 있기보다 사람을 만나며 시간을 보내고 싶다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "내향 ↔ 외향",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 124,
          question:
            "사람들과의 만남은 나에게 피로감을 주기보다 오히려 삶의 활력을 불어넣어 준다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "내향 ↔ 외향",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 유연 ↔ 계획
        {
          id: 125,
          question:
            "미리 결정을 해버리면, 나중에 더 좋은 선택지가 생겼을 때 바꾸기 힘들까 봐 망설여진다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "유연 ↔ 계획",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 126,
          question:
            "나는 미리 정한 일정보다 그날의 흐름에 따라 움직이는 걸 더 편하게 느낀다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "유연 ↔ 계획",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 127,
          question:
            "나는 선택을 미룰 수 있는 상황에서도 미리 결정을 내려두는 걸 좋아하는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "유연 ↔ 계획",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 128,
          question:
            "나는 하루를 시작할 때, 대략적으로라도 오늘 무엇을 할지 머릿속에 정리가 되어 있어야 마음이 편하다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "유연 ↔ 계획",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 자기표현 ↔ 적응배려
        {
          id: 129,
          question: "감정이 생기면 그때그때 솔직하게 드러내는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "자기표현 ↔ 적응배려",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 130,
          question:
            "나는 남에게 맞추느라 에너지를 쓰기보다, 내 감정과 생각에 더 집중하는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "자기표현 ↔ 적응배려",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 131,
          question: "불편한 일이 있어도 분위기를 깨지 않으려 참는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "자기표현 ↔ 적응배려",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 132,
          question:
            "갈등을 만들기보다는 상황에 맞춰 원만하게 넘어가는 것을 택한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "자기표현 ↔ 적응배려",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 정서 안정성 (침체적 ↔ 안정적)
        {
          id: 133,
          question: "감정이 가라앉는 날이 종종 있고, 그럴 때는 집중이 어렵다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 134,
          question:
            "나는 기분 나쁜 일이 생기면, 그 감정에 깊게 빠져서 헤어나오기 힘들 때가 많다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 135,
          question:
            "하루 동안의 기분 변화가 크지 않고, 전반적으로 차분한 마음 상태를 유지한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 136,
          question:
            "나는 기분 나쁜 일이 생겨도, 마음에 오래 담아두지 않고 금방 털어내는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 신뢰 경향 (경계적 ↔ 수용적)
        {
          id: 137,
          question: "사람을 처음 만날 때 쉽게 믿기보다는 시간을 두고 본다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 138,
          question:
            "나는 아무리 가까운 사이라도, 내 모든 것을 다 보여주지는 않는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 139,
          question:
            "나는 다른 사람의 말을 들을 때, 거짓인지 의심하기보다 일단 사실이라고 믿는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 140,
          question:
            "나는 기본적으로 대부분의 사람이 선한 의도를 가졌다고 믿는다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 불안·완벽주의 (불안·통제형 ↔ 여유·수용형)
        {
          id: 141,
          question:
            "나는 내 실수 자체보다, 그 실수로 인해 남들이 나를 '부족한 사람'으로 볼까 봐 더 두렵다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 142,
          question:
            "나는 무언가를 시작할 때, '반드시 완벽하게 해내야 한다'는 압박감 때문에 숨이 막힐 때가 있다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 143,
          question:
            "나는 디테일에 집착해서 시간을 끄는 것보다, 부족하더라도 일단 매듭을 짓고 끝내는 것을 선호한다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 144,
          question:
            "계획대로 되지 않더라도 '그럴 수 있지' 하고 대수롭지 않게 넘기는 편이다.",
          category: "User B: 본인에 대한 인식 (Self)",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
      ],
    },
    {
      partNumber: 4,
      title: "PART 4. User B: 파트너(A) 관찰",
      description: "파트너(A)에 대해 내가 관찰한 모습 48개 문항입니다.",
      totalQuestions: 48,
      totalPages: 8,
      questions: [
        // 현재중심 ↔ 미래지향 (View)
        {
          id: 145,
          question:
            "파트너가 보기에 나는 불확실한 미래를 위해 현재를 희생하기보다, 지금 이 순간의 행복을 누리는 것이 더 현명하다고 생각한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "현재중심 ↔ 미래지향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 146,
          question:
            "파트너가 보기에 나는 미리 계획을 짜두는 것보다, 그때그때 상황과 기분에 따라 즉흥적으로 행동하는 것이 더 편하다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "현재중심 ↔ 미래지향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 147,
          question:
            "파트너가 보기에 나는 ‘지금 중요한 일’보다 ‘앞으로 도움이 될 일’을 우선순위에 두는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "현재중심 ↔ 미래지향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 148,
          question:
            "파트너가 보기에 나는 오늘 내가 하는 일들이 5년 뒤, 10년 뒤의 내 모습에 어떤 영향을 줄지 자주 떠올린다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "현재중심 ↔ 미래지향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 논리·객관 ↔ 감정·인간 (View)
        {
          id: 149,
          question:
            "파트너가 보기에 나는 상황을 판단할 때 감정보다 구조와 원리를 먼저 본다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "논리·객관 ↔ 감정·인간 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 150,
          question:
            "파트너가 보기에 나는 다른 사람의 감정보다 사실관계를 우선으로 이해하려 한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "논리·객관 ↔ 감정·인간 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 151,
          question:
            "파트너가 보기에 나는 문제를 해결할 때, 논리적인 정답보다 사람의 마음을 다치지 않게 하는 것이 더 중요하다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "논리·객관 ↔ 감정·인간 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 152,
          question:
            "파트너가 보기에 나는 일이 아무리 잘 되어도, 그 과정에서 사람들과 사이가 나빠진다면 실패한 것이라고 본다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "논리·객관 ↔ 감정·인간 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 반응적 ↔ 조절적 (View)
        {
          id: 153,
          question:
            "파트너가 보기에 나는 이것저것 복잡하게 따지기보다, 딱 들 때의 느낌과 직감을 믿고 행동하는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "반응적 ↔ 조절적 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 154,
          question:
            "파트너가 보기에 나는 감정이 생기면 한동안 그 감정이 머릿속에서 쉽게 사라지지 않는다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "반응적 ↔ 조절적 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 155,
          question:
            "파트너가 보기에 나는 화가 나거나 급한 일이 생겨도, 바로 움직이지 않고 잠시 멈춰 생각한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "반응적 ↔ 조절적 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 156,
          question:
            "파트너가 보기에 나는 스트레스가 생겨도 감정보다 상황 해결에 먼저 집중하려 한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "반응적 ↔ 조절적 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 안정지향 ↔ 도전지향 (View)
        {
          id: 157,
          question:
            "파트너가 보기에 나는 변화가 생기면 흥미롭기보다 불편함을 먼저 느낀다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "안정지향 ↔ 도전지향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 158,
          question:
            "파트너가 보기에 나는 큰 성과를 위해 위험을 감수하기보다, 적더라도 확실한 결과를 얻는 쪽을 택하겠다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "안정지향 ↔ 도전지향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 159,
          question:
            "파트너가 보기에 불확실한 일이라도 흥미가 생기면 도전해보고 싶다는 생각이 든다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "안정지향 ↔ 도전지향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 160,
          question:
            "파트너가 보기에 새로운 환경에 적응하는 과정을 즐기는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "안정지향 ↔ 도전지향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 외적동기 ↔ 내적동기 (View)
        {
          id: 161,
          question:
            "파트너가 보기에 나는 일의 의미보다, 결과로 주어지는 현실적인 보상이 더 중요하다",
          category: "User B: 파트너(A) 관찰",
          subCategory: "외적동기 ↔ 내적동기 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 162,
          question:
            "파트너가 보기에 나는 혼자 만족하는 것보다, 남들이 인정해주는 결과가 진짜 가치 있다고 본다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "외적동기 ↔ 내적동기 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 163,
          question:
            "파트너가 보기에 일을 할 때 외부 평가보다 내가 스스로 세운 목표 달성을 더 중요하게 본다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "외적동기 ↔ 내적동기 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 164,
          question:
            "파트너가 보기에 결과보다 내가 의미 있다고 느끼는 과정을 더 중시한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "외적동기 ↔ 내적동기 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 자율성 (낮음 ↔ 높음) (View)
        {
          id: 165,
          question:
            "파트너가 보기에 나는 '알아서 해'라는 막연한 자유보다, '무엇을 해야 할지' 명확히 정해주는 상황이 더 편하다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "자율성 (낮음 ↔ 높음) (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 166,
          question:
            "파트너가 보기에 나는 혼자 판단해서 끝내기보다, 중간중간 확인을 받고 피드백을 듣는 것을 선호한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "자율성 (낮음 ↔ 높음) (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 167,
          question:
            "파트너가 보기에 누가 시켜서가 아니라 스스로 필요하다고 느껴야 움직인다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "자율성 (낮음 ↔ 높음) (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 168,
          question:
            "파트너가 보기에 계획을 세울 때 주변의 의견보다 내 판단을 우선한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "자율성 (낮음 ↔ 높음) (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 내향 ↔ 외향 (View)
        {
          id: 169,
          question:
            "파트너가 보기에 아무리 친하고 좋아하는 사람들과 놀더라도, 일정 시간이 지나면 집에 가서 쉬고 싶다는 생각이 강하게 든다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "내향 ↔ 외향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 170,
          question:
            "파트너가 보기에 나에게 진정한 휴식이란, 사람들을 만나러 나가는 게 아니라 집에서 온전히 혼자만의 시간을 보내는 것이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "내향 ↔ 외향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 171,
          question:
            "파트너가 보기에 주말에는 혼자 있기보다 사람을 만나며 시간을 보내고 싶다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "내향 ↔ 외향 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 172,
          question:
            "파트너가 보기에 사람들과의 만남은 나에게 피로감을 주기보다 오히려 삶의 활력을 불어넣어 준다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "내향 ↔ 외향 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 유연 ↔ 계획 (View)
        {
          id: 173,
          question:
            "파트너가 보기에 미리 결정을 해버리면, 나중에 더 좋은 선택지가 생겼을 때 바꾸기 힘들까 봐 망설여진다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "유연 ↔ 계획 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 174,
          question:
            "파트너가 보기에 나는 미리 정한 일정보다 그날의 흐름에 따라 움직이는 걸 더 편하게 느낀다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "유연 ↔ 계획 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 175,
          question:
            "파트너가 보기에 나는 선택을 미룰 수 있는 상황에서도 미리 결정을 내려두는 걸 좋아하는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "유연 ↔ 계획 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 176,
          question:
            "파트너가 보기에 나는 하루를 시작할 때, 대략적으로라도 오늘 무엇을 할지 머릿속에 정리가 되어 있어야 마음이 편하다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "유연 ↔ 계획 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 자기표현 ↔ 적응배려 (View)
        {
          id: 177,
          question:
            "파트너가 보기에 감정이 생기면 그때그때 솔직하게 드러내는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "자기표현 ↔ 적응배려 (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 178,
          question:
            "파트너가 보기에 나는 남에게 맞추느라 에너지를 쓰기보다, 내 감정과 생각에 더 집중하는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "자기표현 ↔ 적응배려 (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 179,
          question:
            "파트너가 보기에 불편한 일이 있어도 분위기를 깨지 않으려 참는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "자기표현 ↔ 적응배려 (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 180,
          question:
            "파트너가 보기에 갈등을 만들기보다는 상황에 맞춰 원만하게 넘어가는 것을 택한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "자기표현 ↔ 적응배려 (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 정서 안정성 (침체적 ↔ 안정적) (View)
        {
          id: 181,
          question:
            "파트너가 보기에 감정이 가라앉는 날이 종종 있고, 그럴 때는 집중이 어렵다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "정서 안정성 (침체적 ↔ 안정적) (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 182,
          question:
            "파트너가 보기에 나는 나는 기분 나쁜 일이 생겨면, 그 감정에 깊게 빠져서 헤어나오기 힘들때가 많다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "정서 안정성 (침체적 ↔ 안정적) (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 183,
          question:
            "파트너가 보기에 하루 동안의 기분 변화가 크지 않고, 전반적으로 차분한 마음 상태를 유지한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "정서 안정성 (침체적 ↔ 안정적) (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        {
          id: 184,
          question:
            "파트너가 보기에 나는 기분 나쁜 일이 생겨도, 마음에 오래 담아두지 않고 금방 털어내는 편이다",
          category: "User B: 파트너(A) 관찰",
          subCategory: "정서 안정성 (침체적 ↔ 안정적) (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        // 신뢰 경향 (경계적 ↔ 수용적) (View)
        {
          id: 185,
          question:
            "파트너가 보기에 사람을 처음 만날 때 쉽게 믿기보다는 시간을 두고 본다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적) (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 186,
          question:
            "파트너가 보기에 나는 아무리 가까운 사이라도, 자신의 모든 것을 다 보여주지는 않는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적) (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 187,
          question:
            "파트너가 보기에 나는 다른 사람의 말을 들을 때, 거짓인지 의심하기보다 일단 사실이라고 믿어주는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적) (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 188,
          question:
            "파트너가 보기에 나는 기본적으로 대부분의 사람이 선한 의도를 가졌다고 믿는다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적) (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
        // 불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)
        {
          id: 189,
          question:
            "파트너가 보기에 나는 내 실수 자체보다, 그 실수로 인해 남들이 자신을 '부족한 사람'으로 볼까 봐 더 두려워한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)",
          type: "rating",
          weight: 1.2,
          direction: "reverse",
        },
        {
          id: 190,
          question:
            "파트너가 보기에 나는 무언가를 시작할 때, '반드시 완벽하게 해내야 한다'는 압박감을 크게 느끼는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)",
          type: "rating",
          weight: 1.0,
          direction: "reverse",
        },
        {
          id: 191,
          question:
            "파트너가 보기에 나는 디테일에 집착해서 시간을 끄는 것보다, 부족하더라도 일단 매듭을 짓고 끝내는 것을 선호한다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)",
          type: "rating",
          weight: 1.0,
          direction: "forward",
        },
        {
          id: 192,
          question:
            "파트너가 보기에 나는 계획대로 되지 않더라도 '그럴 수 있지' 하고 대수롭지 않게 넘기는 편이다.",
          category: "User B: 파트너(A) 관찰",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형) (View)",
          type: "rating",
          weight: 1.2,
          direction: "forward",
        },
      ],
    },
  ],
  totalQuestions: 192,
};

export default detailedSurveyData;
