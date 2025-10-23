import { SurveyData } from "../types/survey";

export const detailedSurveyData: SurveyData = {
  parts: [
    {
      partNumber: 1,
      title: "Part 1: 기본 성격 특성",
      description:
        "정보처리 및 의사결정, 동기 구조 및 자기조절, 외현적 행동 및 생활 방식, MMPI 기반 보조 지표",
      totalQuestions: 45,
      questions: [
        // 정보처리 및 의사결정 (1-12번)
        {
          id: 1,
          question:
            "나는 문제를 볼 때 당장의 결과보다 앞으로 어떤 변화가 생길지를 더 생각한다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
        },
        {
          id: 2,
          question:
            "나는 계획을 세울 때 구체적인 내일보다 장기적인 그림을 먼저 그리는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
        },
        {
          id: 3,
          question:
            "나는 '지금 중요한 일'보다 '앞으로 도움이 될 일'을 우선순위에 두는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
        },
        {
          id: 4,
          question: "나는 변화 가능성을 상상하며 계획을 수정하는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
        },
        {
          id: 5,
          question: "나는 상황을 판단할 때 감정보다 구조와 원리를 먼저 본다.",
          category: "정보처리 및 의사결정",
          subCategory: "논리·객관중심 ↔ 감정·인간중심",
          type: "rating",
        },
        {
          id: 6,
          question:
            "나는 다른 사람의 감정보다 사실관계를 우선으로 이해하려 한다.",
          category: "정보처리 및 의사결정",
          subCategory: "논리·객관중심 ↔ 감정·인간중심",
          type: "rating",
        },
        {
          id: 7,
          question:
            "나는 논리적으로 맞지 않으면 감정이 이해돼도 쉽게 수용하지 않는다.",
          category: "정보처리 및 의사결정",
          subCategory: "논리·객관중심 ↔ 감정·인간중심",
          type: "rating",
        },
        {
          id: 8,
          question:
            "나는 문제를 해결할 때 사람의 기분보다 해결 과정의 효율성을 중시한다.",
          category: "정보처리 및 의사결정",
          subCategory: "논리·객관중심 ↔ 감정·인간중심",
          type: "rating",
        },
        {
          id: 9,
          question:
            "나는 감정이 생기면 한동안 그 감정이 머릿속에서 쉽게 사라지지 않는다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },
        {
          id: 10,
          question: "나는 기분이 흔들릴 때도 겉으로는 차분하게 행동하려 한다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },
        {
          id: 11,
          question:
            "나는 스트레스가 생겨도 감정보다 상황 해결에 먼저 집중하려 한다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },
        {
          id: 12,
          question:
            "나는 감정이 올라와도 한 박자 쉬고 정리한 뒤에 반응하려 한다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },

        // 동기 구조 및 자기조절 (13-24번)
        {
          id: 13,
          question:
            "불확실한 일이라도 흥미가 생기면 도전해보고 싶다는 생각이 든다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 14,
          question: "변화가 생기면 불편하기보다 흥미를 느끼는 편이다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 15,
          question: "새로운 환경에 적응하는 과정을 즐기는 편이다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 16,
          question: "모르는 일이라도 배우면서 해보는 게 좋다고 생각한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 17,
          question: "누군가의 칭찬이나 인정보다 스스로 만족할 때 더 뿌듯하다.",
          category: "동기 구조 및 자기조절",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
        },
        {
          id: 18,
          question: "결과보다 내가 의미 있다고 느끼는 과정을 더 중시한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
        },
        {
          id: 19,
          question:
            "일을 할 때 외부 평가보다 내가 스스로 세운 목표 달성을 더 중요하게 본다.",
          category: "동기 구조 및 자기조절",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
        },
        {
          id: 20,
          question: "내가 하는 일에 의미가 있어야 열정이 생긴다.",
          category: "동기 구조 및 자기조절",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
        },
        {
          id: 21,
          question: "계획을 세울 때 주변의 의견보다 내 판단을 우선한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "목표실행 자율성 낮음 ↔ 높음",
          type: "rating",
        },
        {
          id: 22,
          question: "누가 시켜서가 아니라 스스로 필요하다고 느껴야 움직인다.",
          category: "동기 구조 및 자기조절",
          subCategory: "목표실행 자율성 낮음 ↔ 높음",
          type: "rating",
        },
        {
          id: 23,
          question: "결정을 내릴 때 내 의지와 판단이 중심이 된다.",
          category: "동기 구조 및 자기조절",
          subCategory: "목표실행 자율성 낮음 ↔ 높음",
          type: "rating",
        },
        {
          id: 24,
          question: "스스로 세운 목표라면 어려워도 끝까지 해보려 한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "목표실행 자율성 낮음 ↔ 높음",
          type: "rating",
        },

        // 외현적 행동 및 생활 방식 (25-36번)
        {
          id: 25,
          question:
            "새로운 사람들과의 만남에서 대화가 자연스럽게 이어지는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "내향 ↔ 외향",
          type: "rating",
        },
        {
          id: 26,
          question:
            "내가 말하는 내용을 다른 사람들이 잘 이해할 수 있도록 명확하게 표현한다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "내향 ↔ 외향",
          type: "rating",
        },
        {
          id: 27,
          question:
            "나는 사람들과의 대화를 통해 서로 다른 의견을 조율하는 데 능숙하다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "내향 ↔ 외향",
          type: "rating",
        },
        {
          id: 28,
          question: "주말에는 혼자 있기보다 사람을 만나며 시간을 보내고 싶다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "내향 ↔ 외향",
          type: "rating",
        },
        {
          id: 29,
          question: "상황이 바뀌면 계획을 바꾸는 게 어렵지 않다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 30,
          question: "갑작스러운 일정이 생겨도 크게 스트레스를 받지 않는다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 31,
          question: "미리 정한 일정보다 그날의 흐름에 따라 움직이는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 32,
          question: "계획을 세워두면 마음이 더 안정된다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 33,
          question: "불편한 일이 있어도 분위기를 깨지 않으려 참는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "자기표현 ↔ 적응배려형",
          type: "rating",
        },
        {
          id: 34,
          question: "상대가 기분 나빠할까 봐 말을 돌려서 표현하는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "자기표현 ↔ 적응배려형",
          type: "rating",
        },
        {
          id: 35,
          question: "감정이 생기면 그때그때 솔직하게 드러내는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "자기표현 ↔ 적응배려형",
          type: "rating",
        },
        {
          id: 36,
          question: "사람들과 이야기할 때 내 의견보다는 분위기를 먼저 살핀다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "자기표현 ↔ 적응배려형",
          type: "rating",
        },

        // MMPI 기반 보조 지표 (37-45번)
        {
          id: 37,
          question: "감정이 가라앉는 날이 종종 있고, 그럴 때는 집중이 어렵다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
        },
        {
          id: 38,
          question: "기분이 한 번 내려가도 비교적 금방 회복되는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
        },
        {
          id: 39,
          question: "스스로에게 만족감이나 성취감을 느끼는 순간이 자주 있다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
        },
        {
          id: 40,
          question: "사람을 처음 만날 때 쉽게 믿기보다는 시간을 두고 본다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
        },
        {
          id: 41,
          question: "가까운 사람이라도 마음을 완전히 여는 건 쉽지 않다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
        },
        {
          id: 42,
          question: "다른 사람의 말을 의심하기보다 일단 믿고 보는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
        },
        {
          id: 43,
          question: "작은 실수나 불완전한 상태가 오래 마음에 남는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
        {
          id: 44,
          question: "해야 할 일이 많아도 마음의 여유를 유지하려 노력한다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
        {
          id: 45,
          question: "예상치 못한 상황이 생기면 긴장보다 호기심이 먼저 든다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
      ],
    },
    {
      partNumber: 2,
      title: "Part 2: 심화 성격 특성",
      description:
        "정보처리 및 의사결정, 동기 구조 및 자기조절, 외현적 행동 및 생활 방식, MMPI 기반 보조 지표 (심화)",
      totalQuestions: 45,
      questions: [
        // 정보처리 및 의사결정 (46-57번) - 심화
        {
          id: 46,
          question:
            "내 파트너는 문제를 볼 때 당장의 결과보다 앞으로 어떤 변화가 생길지를 더 생각한다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
        },
        {
          id: 47,
          question:
            "내 파트너는 계획을 세울 때 구체적인 내일보다 장기적인 그림을 먼저 그리는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
        },
        {
          id: 48,
          question:
            "내 파트너는 '지금 중요한 일'보다 '앞으로 도움이 될 일'을 우선순위에 두는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
        },
        {
          id: 49,
          question:
            "내 파트너는 변화 가능성을 상상하며 계획을 수정하는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
        },
        {
          id: 50,
          question:
            "내 파트너는 상황을 판단할 때 감정보다 구조와 원리를 먼저 본다.",
          category: "정보처리 및 의사결정",
          subCategory: "논리·객관중심 ↔ 감정·인간중심",
          type: "rating",
        },
        {
          id: 51,
          question:
            "내 파트너는 다른 사람의 감정보다 사실관계를 우선으로 이해하려 한다.",
          category: "정보처리 및 의사결정",
          subCategory: "논리·객관중심 ↔ 감정·인간중심",
          type: "rating",
        },
        {
          id: 52,
          question:
            "내 파트너는 논리적으로 맞지 않으면 감정이 이해돼도 쉽게 수용하지 않는다.",
          category: "정보처리 및 의사결정",
          subCategory: "논리·객관중심 ↔ 감정·인간중심",
          type: "rating",
        },
        {
          id: 53,
          question:
            "내 파트너는 문제를 해결할 때 사람의 기분보다 해결 과정의 효율성을 중시한다.",
          category: "정보처리 및 의사결정",
          subCategory: "논리·객관중심 ↔ 감정·인간중심",
          type: "rating",
        },
        {
          id: 54,
          question:
            "내 파트너는 감정이 생기면 한동안 그 감정이 머릿속에서 쉽게 사라지지 않는다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },
        {
          id: 55,
          question:
            "내 파트너는 기분이 흔들릴 때도 겉으로는 차분하게 행동하려 한다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },
        {
          id: 56,
          question:
            "내 파트너는 스트레스가 생겨도 감정보다 상황 해결에 먼저 집중하려 한다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },
        {
          id: 57,
          question:
            "내 파트너는 감정이 올라와도 한 박자 쉬고 정리한 뒤에 반응하려 한다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },

        // 동기 구조 및 자기조절 (58-69번) - 심화
        {
          id: 58,
          question:
            "내 파트너는 불확실한 일이라도 흥미가 생기면 도전해보고 싶다는 생각이 든다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 59,
          question:
            "내 파트너는 변화가 생기면 불편하기보다 흥미를 느끼는 편이다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 60,
          question: "내 파트너는 새로운 환경에 적응하는 과정을 즐기는 편이다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 61,
          question:
            "내 파트너는 모르는 일이라도 배우면서 해보는 게 좋다고 생각한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 62,
          question:
            "내 파트너는 누군가의 칭찬이나 인정보다 스스로 만족할 때 더 뿌듯해한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
        },
        {
          id: 63,
          question:
            "내 파트너는 결과보다 자신이 의미 있다고 느끼는 과정을 더 중시한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
        },
        {
          id: 64,
          question:
            "내 파트너는 일을 할 때 외부 평가보다 스스로 세운 목표 달성을 더 중요하게 본다.",
          category: "동기 구조 및 자기조절",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
        },
        {
          id: 65,
          question: "내 파트너는 자신이 하는 일에 의미가 있어야 열정이 생긴다.",
          category: "동기 구조 및 자기조절",
          subCategory: "외적동기 ↔ 내적동기",
          type: "rating",
        },
        {
          id: 66,
          question:
            "내 파트너는 계획을 세울 때 주변의 의견보다 자신의 판단을 우선한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "목표실행 자율성 낮음 ↔ 높음",
          type: "rating",
        },
        {
          id: 67,
          question:
            "내 파트너는 누가 시켜서가 아니라 스스로 필요하다고 느껴야 움직인다.",
          category: "동기 구조 및 자기조절",
          subCategory: "목표실행 자율성 낮음 ↔ 높음",
          type: "rating",
        },
        {
          id: 68,
          question:
            "내 파트너는 결정을 내릴 때 자신의 의지와 판단을 중심에 둔다.",
          category: "동기 구조 및 자기조절",
          subCategory: "목표실행 자율성 낮음 ↔ 높음",
          type: "rating",
        },
        {
          id: 69,
          question:
            "내 파트너는 스스로 세운 목표라면 어려워도 끝까지 해보려 한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "목표실행 자율성 낮음 ↔ 높음",
          type: "rating",
        },

        // 외현적 행동 및 생활 방식 (70-81번) - 심화
        {
          id: 70,
          question:
            "내 파트너는 새로운 사람들과의 만남에서 대화가 자연스럽게 이어지는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "내향 ↔ 외향",
          type: "rating",
        },
        {
          id: 71,
          question:
            "내 파트너는 말하는 내용을 다른 사람들이 잘 이해할 수 있도록 명확하게 표현한다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "내향 ↔ 외향",
          type: "rating",
        },
        {
          id: 72,
          question:
            "내 파트너는 사람들과의 대화를 통해 서로 다른 의견을 조율하는 데 능숙하다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "내향 ↔ 외향",
          type: "rating",
        },
        {
          id: 73,
          question:
            "내 파트너는 주말에는 혼자 있기보다 사람을 만나며 시간을 보내고 싶어 한다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "내향 ↔ 외향",
          type: "rating",
        },
        {
          id: 74,
          question: "내 파트너는 상황이 바뀌면 계획을 바꾸는 게 어렵지 않다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 75,
          question:
            "내 파트너는 갑작스러운 일정이 생겨도 크게 스트레스를 받지 않는다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 76,
          question:
            "내 파트너는 미리 정한 일정보다 그날의 흐름에 따라 움직이는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 77,
          question: "내 파트너는 계획을 세워두면 마음이 더 안정된다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 78,
          question:
            "내 파트너는 불편한 일이 있어도 분위기를 깨지 않으려 참는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "자기표현 ↔ 적응배려형",
          type: "rating",
        },
        {
          id: 79,
          question:
            "내 파트너는 상대가 기분 나빠할까 봐 말을 돌려서 표현하는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "자기표현 ↔ 적응배려형",
          type: "rating",
        },
        {
          id: 80,
          question:
            "내 파트너는 감정이 생기면 그때그때 솔직하게 드러내는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "자기표현 ↔ 적응배려형",
          type: "rating",
        },
        {
          id: 81,
          question:
            "내 파트너는 사람들과 이야기할 때 자신의 의견보다는 분위기를 먼저 살핀다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "자기표현 ↔ 적응배려형",
          type: "rating",
        },

        // MMPI 기반 보조 지표 (82-90번) - 심화
        {
          id: 82,
          question:
            "내 파트너는 감정이 가라앉는 날이 종종 있고, 그럴 때는 집중이 어렵다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
        },
        {
          id: 83,
          question:
            "내 파트너는 기분이 한 번 내려가도 비교적 금방 회복되는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
        },
        {
          id: 84,
          question:
            "내 파트너는 스스로에게 만족감이나 성취감을 느끼는 순간이 자주 있다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
        },
        {
          id: 85,
          question:
            "내 파트너는 사람을 처음 만날 때 쉽게 믿기보다는 시간을 두고 본다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
        },
        {
          id: 86,
          question:
            "내 파트너는 가까운 사람이라도 마음을 완전히 여는 건 쉽지 않다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
        },
        {
          id: 87,
          question:
            "내 파트너는 다른 사람의 말을 의심하기보다 일단 믿고 보는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
        },
        {
          id: 88,
          question:
            "내 파트너는 작은 실수나 불완전한 상태가 오래 마음에 남는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
        {
          id: 89,
          question:
            "내 파트너는 해야 할 일이 많아도 마음의 여유를 유지하려 노력한다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
        {
          id: 90,
          question:
            "내 파트너는 예상치 못한 상황이 생기면 긴장보다 호기심이 먼저 든다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
      ],
    },
    {
      partNumber: 3,
      title: "Part 3: 관계 및 생활 영역",
      description: "연애 생활의 영역, 결혼 생활의 영역",
      totalQuestions: 18,
      questions: [
        // 연애 생활의 영역 (91-99번)
        {
          id: 91,
          question:
            "서로의 생활 패턴이 달라도, 만남의 시간이나 방식에서 큰 불편함을 느끼지 않는다.",
          category: "연애 생활의 영역",
          subCategory: "생활 리듬 / 시간 조율",
          type: "rating",
        },
        {
          id: 92,
          question:
            "상대가 약속 시간을 자주 바꾼다면, 나는 금세 불편해질 것 같다.",
          category: "연애 생활의 영역",
          subCategory: "생활 리듬 / 시간 조율",
          type: "rating",
        },
        {
          id: 93,
          question: "함께 있을 때보다, 각자 시간을 보낼 때도 안정감을 느낀다.",
          category: "연애 생활의 영역",
          subCategory: "생활 리듬 / 시간 조율",
          type: "rating",
        },
        {
          id: 94,
          question:
            "데이트 비용이나 지출을 정할 때, 누가 얼마를 내는지가 크게 신경 쓰이지 않는다.",
          category: "연애 생활의 영역",
          subCategory: "재정·소비 태도",
          type: "rating",
        },
        {
          id: 95,
          question: "돈 이야기가 나올 때, 분위기가 조금 어색해지는 편이다.",
          category: "연애 생활의 영역",
          subCategory: "재정·소비 태도",
          type: "rating",
        },
        {
          id: 96,
          question:
            "상대의 소비 습관을 보며, 가치관이 다르다고 느낀 적이 있다.",
          category: "연애 생활의 영역",
          subCategory: "재정·소비 태도",
          type: "rating",
        },
        {
          id: 97,
          question:
            "연애 중이라도 서로의 가족 이야기를 자연스럽게 나누는 편이다.",
          category: "연애 생활의 영역",
          subCategory: "가족 인식 / 거리감",
          type: "rating",
        },
        {
          id: 98,
          question:
            "상대가 가족의 의견을 자주 언급하면, 그게 나와의 관계에 영향을 준다고 느낀다.",
          category: "연애 생활의 영역",
          subCategory: "가족 인식 / 거리감",
          type: "rating",
        },
        {
          id: 99,
          question:
            "나는 아직 서로의 가족과 깊게 얽히는 것은 부담스럽다고 느낀다.",
          category: "연애 생활의 영역",
          subCategory: "가족 인식 / 거리감",
          type: "rating",
        },

        // 결혼 생활의 영역 (100-108번)
        {
          id: 100,
          question:
            "방 청소나 빨래처럼 생활 정리 일을 스스로 자주 하는 편이다.",
          category: "결혼 생활의 영역",
          subCategory: "가사·생활 분담",
          type: "rating",
        },
        {
          id: 101,
          question: "식사 후에는 그때그때 바로 정리해야 마음이 편하다.",
          category: "결혼 생활의 영역",
          subCategory: "가사·생활 분담",
          type: "rating",
        },
        {
          id: 102,
          question: "주말에는 집에서 쉬기보다는 밖에 나가 활동하는 편이다.",
          category: "결혼 생활의 영역",
          subCategory: "가사·생활 분담",
          type: "rating",
        },
        {
          id: 103,
          question: "돈을 쓸 때는 기분보다 필요와 계획을 먼저 생각한다.",
          category: "결혼 생활의 영역",
          subCategory: "재정·경제 태도",
          type: "rating",
        },
        {
          id: 104,
          question:
            "친구나 연인과의 지출을 나눌 때, 공평함보다 상황에 맞춰 융통성 있게 생각한다.",
          category: "결혼 생활의 영역",
          subCategory: "재정·경제 태도",
          type: "rating",
        },
        {
          id: 105,
          question: "돈 이야기가 나오면 조금 불편하거나 조심스러워진다.",
          category: "결혼 생활의 영역",
          subCategory: "재정·경제 태도",
          type: "rating",
        },
        {
          id: 106,
          question:
            "나는 양가 부모님 생신이나 명절 같은 날에는 꼭 직접 찾아뵈어야 한다고 생각한다.",
          category: "결혼 생활의 영역",
          subCategory: "양가 관계·경계",
          type: "rating",
        },
        {
          id: 107,
          question:
            "결혼 후 배우자의 가족 행사에 참여하는 것이 스트레스일 것 같다.",
          category: "결혼 생활의 영역",
          subCategory: "양가 관계·경계",
          type: "rating",
        },
        {
          id: 108,
          question:
            "부모님이 결혼생활에 조언을 자주 하신다면, 고맙지만 한편으로는 부담스러울 것 같다.",
          category: "결혼 생활의 영역",
          subCategory: "양가 관계·경계",
          type: "rating",
        },
      ],
    },
    {
      partNumber: 4,
      title: "Part 4: 주관식 질문",
      description: "자유롭게 답변할 수 있는 주관식 질문들",
      totalQuestions: 12,
      questions: [
        {
          id: 109,
          question:
            '세탁기 안에서 빨래를 꺼내 널어야 하는데, 일을 맡은 상대가 "나중에 할게"라며 일을 미루는 스타일이라면, 당신은 어떤 반응을 보일 것 같나요?',
          category: "주관식",
          subCategory: "가사·생활 분담",
          type: "text",
        },
        {
          id: 110,
          question:
            "결혼 후 양가 가족과의 관계에서 지켜야 한다고 생각하는 거리나 원칙이 있다면 무엇인가요?",
          category: "주관식",
          subCategory: "양가 관계·경계",
          type: "text",
        },
        {
          id: 111,
          question:
            "'돈 이야기를 피하려는 사람'이 있다고 하면, 그 사람 마음속에는 어떤 감정이나 두려움이 있을까요?",
          category: "주관식",
          subCategory: "재정·경제 태도",
          type: "text",
        },
        {
          id: 112,
          question:
            "만약 사랑하는 사람과의 시간과 중요한 일(학업·일) 중 하나를 선택해야 한다면, 당신은 어떤 기준으로 결정할 것 같나요?",
          category: "주관식",
          subCategory: "인생 우선순위",
          type: "text",
        },
        {
          id: 113,
          question:
            "주변에서 '자기 일에 너무 몰두해서 연인을 챙기지 못하는 사람'을 보면, 당신은 어떤 생각이 드나요?",
          category: "주관식",
          subCategory: "인생 우선순위",
          type: "text",
        },
        {
          id: 114,
          question:
            "일상 속에서 가장 행복을 느끼는 순간과, 그 이유는 무엇인가요?",
          category: "주관식",
          subCategory: "행복·정서 인식",
          type: "text",
        },
        {
          id: 115,
          question:
            "자신에 대해 비판적인(부정적인) 생각이 들 때, 이를 어떻게 대처하나요?",
          category: "주관식",
          subCategory: "자기인식·정서조절",
          type: "text",
        },
        {
          id: 116,
          question:
            "실수를 하거나 개선할 지점에 대해 피드백을 받았을 때, 나의 행동은 어떠한가요?",
          category: "주관식",
          subCategory: "회복력·성장 태도",
          type: "text",
        },
        {
          id: 117,
          question:
            "'결혼은 서로의 거울'이라는 말이 있습니다. 이 말이 당신에게는 어떤 의미로 들리나요?",
          category: "주관식",
          subCategory: "결혼의 의미·비전",
          type: "text",
        },
        {
          id: 118,
          question:
            "앞으로의 관계를 상상했을 때, '함께 성장한다'는 말은 당신에게 어떤 모습일까요?",
          category: "주관식",
          subCategory: "결혼의 의미·비전",
          type: "text",
        },
        {
          id: 119,
          question: "함께 살아간다면, 나와 상대의 가장 큰 차이점은 무엇일까요?",
          category: "주관식",
          subCategory: "종합 인식",
          type: "text",
        },
        {
          id: 120,
          question:
            "이상적인 결혼을 떠올릴 때, 그 안의 두 사람은 어떤 표정으로 하루를 보내고 있을까요?",
          category: "주관식",
          subCategory: "종합 인식",
          type: "text",
        },
      ],
    },
  ],
  totalQuestions: 120,
};

export default detailedSurveyData;
