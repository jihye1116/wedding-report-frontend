import { SurveyData } from "../types/survey";

export const detailedSurveyData: SurveyData = {
  parts: [
    {
      partNumber: 1,
      title: "Part 1: 기본 성격 특성",
      description:
        "정보처리 및 의사결정, 동기 구조 및 자기조절, 외현적 행동 및 생활 방식, MMPI 기반 보조 지표",
      totalQuestions: 45,
      totalPages: 10,
      questions: [
        // 정보처리 및 의사결정 (1-12번)
        {
          id: 1,
          question:
            "나는 문제를 볼 때 당장의 결과보다 앞으로 어떤 변화가 생길지를 더 생각한다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          image: {
            male: "/images/man/M1_1.png",
            female: "/images/woman/W1_1.png",
          },
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
          image: {
            male: "/images/man/M1_6.png",
            female: "/images/woman/W1_6.png",
          },
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
          image: {
            male: "/images/man/M1_11.png",
            female: "/images/woman/W1_11.png",
          },
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
          image: {
            male: "/images/man/M2_4.png",
            female: "/images/woman/W2_4.png",
          },
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
          image: {
            male: "/images/man/M2_9.png",
            female: "/images/woman/W2_9.png",
          },
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
          image: {
            male: "/images/man/M3_2.png",
            female: "/images/woman/W3_2.png",
          },
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
          question:
            "나는 일정이 틀어지거나 예상대로 되지 않아도 여유롭게 받아들이는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 30,
          question:
            "나는 갑작스러운 변화가 생겨도 오히려 재미있다고 느낄 때가 있다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 31,
          question:
            "나는 미리 정한 일정보다 그날의 흐름에 따라 움직이는 걸 더 편하게 느낀다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
          image: {
            male: "/images/man/M3_7.png",
            female: "/images/woman/W3_7.png",
          },
        },
        {
          id: 32,
          question:
            "나는 선택을 미룰 수 있는 상황에서도 미리 결정을 내려두는 걸 좋아하는 편이다.",
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
          image: {
            male: "/images/man/M3_12.png",
            female: "/images/woman/W3_12.png",
          },
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
          image: {
            male: "/images/man/M6_5.png",
            female: "/images/woman/W6_5.png",
          },
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
          question:
            "나는 실수 자체보다, 그걸 다른 사람이 어떻게 볼지 더 신경 쓰는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
        {
          id: 44,
          question:
            "나는 무언가를 시작할 때, '제대로 해내야 한다'는 압박감을 자주 느낀다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
        {
          id: 45,
          question:
            "나는 한 가지에 집중하면 피곤해도 쉬는 걸 자주 뒤로 미루는 편이다.",
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
      totalPages: 10,
      questions: [
        // 정보처리 및 의사결정 (46-57번) - 심화
        {
          id: 46,
          question:
            "내 파트너는 문제를 볼 때 당장의 결과보다 앞으로 어떤 변화가 생길지를 더 생각한다.",
          category: "정보처리 및 의사결정",
          subCategory: "현재중심 ↔ 미래지향",
          type: "rating",
          image: {
            male: "/images/woman/W1_1.png",
            female: "/images/man/M1_1.png",
          },
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
          image: {
            male: "/images/woman/W1_6.png",
            female: "/images/man/M1_6.png",
          },
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
            "내 파트너는 감정이 생기면 한동안 그 기분이 머릿속에서 오래 남아 있는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },
        {
          id: 55,
          question:
            "내 파트너는 기분이 흔들릴 때도 겉으로는 최대한 평소처럼 행동하려는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },
        {
          id: 56,
          question:
            "내 파트너는 스트레스가 생겨도 일단 상황을 정리하거나 해결하는 데 먼저 집중하는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
          image: {
            male: "/images/woman/W1_11.png",
            female: "/images/man/M1_11.png",
          },
        },
        {
          id: 57,
          question:
            "내 파트너는 감정이 올라와도 바로 반응하기보다 한 템포 쉬고 정리하려는 편이다.",
          category: "정보처리 및 의사결정",
          subCategory: "반응적 ↔ 조절적",
          type: "rating",
        },

        // 동기 구조 및 자기조절 (58-69번) - 심화
        {
          id: 58,
          question:
            "내 파트너는 확실하지 않은 일이어도 흥미가 생기면 한번 해보고 싶어하는 편이다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 59,
          question:
            "내 파트너는 새로운 변화가 오면 불편함보다는 재미를 느끼는 쪽이다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 60,
          question:
            "내 파트너는 낯선 환경에 적응해 가는 그 과정을 꽤 잘 즐기는 편이다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
        },
        {
          id: 61,
          question:
            "내 파트너는 처음 해보는 일도 배우면서 시도해보는 걸 좋아한다.",
          category: "동기 구조 및 자기조절",
          subCategory: "안정지향 ↔ 도전지향",
          type: "rating",
          image: {
            male: "/images/woman/W2_4.png",
            female: "/images/man/M2_4.png",
          },
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
          image: {
            male: "/images/woman/W2_9.png",
            female: "/images/man/M2_9.png",
          },
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
          image: {
            male: "/images/woman/W3_2.png",
            female: "/images/man/M3_2.png",
          },
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
          question:
            "내 파트너는 일정이 틀어지거나 예상대로 되지 않아도 여유롭게 받아들이는 편이다.",
          category: "외현적 행동 및 생활 방식",
          subCategory: "유연 ↔ 계획",
          type: "rating",
        },
        {
          id: 75,
          question:
            "내 파트너는 갑작스러운 변화가 생겨도 오히려 재미있다고 느낄 때가 있다.",
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
          image: {
            male: "/images/woman/W3_7.png",
            female: "/images/man/M3_7.png",
          },
        },
        {
          id: 77,
          question:
            "내 파트너는 선택을 미룰 수 있는 상황에서도 미리 결정을 내려두는 걸 좋아한다.",
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
          image: {
            male: "/images/woman/W3_12.png",
            female: "/images/man/M3_12.png",
          },
        },

        // MMPI 기반 보조 지표 (82-90번) - 심화
        {
          id: 82,
          question:
            "내 파트너는 기분이 가라앉는 날에는 다른 일에 집중하기 어려워하는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
        },
        {
          id: 83,
          question:
            "내 파트너는 기분이 잠시 가라앉아도 금방 다시 회복하는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
        },
        {
          id: 84,
          question:
            "내 파트너는 스스로 한 일에 만족하거나 성취감을 느끼는 일이 자주 있다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "정서 안정성 (침체적 ↔ 안정적)",
          type: "rating",
        },
        {
          id: 85,
          question:
            "내 파트너는 새로운 사람을 만났을 때 쉽게 믿기보다 시간을 두고 천천히 알아가는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
        },
        {
          id: 86,
          question:
            "내 파트너는 가까운 사이여도 속마음을 다 드러내는 건 조심스러워하는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
          image: {
            male: "/images/woman/W6_5.png",
            female: "/images/man/M6_5.png",
          },
        },
        {
          id: 87,
          question:
            "내 파트너는 다른 사람을 의심하기보다 일단 믿고 보는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "신뢰 경향 (경계적 ↔ 수용적)",
          type: "rating",
        },
        {
          id: 88,
          question:
            "내 파트너는 실수했을 때보다, 그걸 남이 어떻게 볼까 걱정하는 쪽에 더 마음을 쓴다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
        {
          id: 89,
          question:
            "내 파트너는 무언가를 시작할 때 '잘 해내야 한다'는 부담을 스스로에게 많이 주는 편이다.",
          category: "MMPI 기반 보조 지표",
          subCategory: "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)",
          type: "rating",
        },
        {
          id: 90,
          question:
            "내 파트너는 한가지에 집중하면, 피곤해도 쉬는 걸 뒤로 미루는 편이다.",
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
      totalPages: 5,
      questions: [
        // 연애 생활의 영역 (91-99번)
        {
          id: 91,
          question:
            "파트너와 자주 대화하는 것보다, 필요할 때 깊이 있게 대화하는 편이 더 중요하다고 생각한다.",
          category: "연애 생활의 영역",
          subCategory: "생활 리듬 / 시간 조율",
          type: "rating",
          image: {
            male: "/images/man/M5_1.png",
            female: "/images/woman/W5_1.png",
          },
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
          question:
            "한 사람이 피곤하거나 바쁠 땐, 다른 사람이 가사 일을 더 부담하는 게 맞다고 생각한다.",
          category: "연애 생활의 영역",
          subCategory: "생활 리듬 / 시간 조율",
          type: "rating",
        },
        {
          id: 94,
          question:
            "연애 기간이 길어질수록, 함께 있어도 각자 휴대폰만 보게 될까 봐 걱정이 된다.",
          category: "연애 생활의 영역",
          subCategory: "재정·소비 태도",
          type: "rating",
        },
        {
          id: 95,
          question:
            "나는 파트너에게 말하지 않는 내 생각이나 감정을 종종 마음속에만 담아두는 편이다.",
          category: "연애 생활의 영역",
          subCategory: "재정·소비 태도",
          type: "rating",
        },
        {
          id: 96,
          question:
            "여유 자금이 생기면 저축보다는 투자처를 먼저 고민할 것이다.",
          category: "연애 생활의 영역",
          subCategory: "재정·소비 태도",
          type: "rating",
          image: {
            male: "/images/man/M5_6.png",
            female: "/images/woman/W5_6.png",
          },
        },
        {
          id: 97,
          question: "충동적으로 사고 싶을 때, 스스로 잘 제어하는 편이다.",
          category: "연애 생활의 영역",
          subCategory: "재정·소비 태도",
          type: "rating",
        },
        {
          id: 98,
          question:
            "양가 부모님을 대할 때 '예의'보다 '편안한 관계'가 더 중요하다고 느낀다.",
          category: "연애 생활의 영역",
          subCategory: "가족 인식 / 거리감",
          type: "rating",
        },
        {
          id: 99,
          question:
            "나는 부모님이 사소한 생활 방식까지 간섭한다면, 단호하게 선을 그을 수 있다.",
          category: "연애 생활의 영역",
          subCategory: "가족 인식 / 거리감",
          type: "rating",
        },

        // 결혼 생활의 영역 (100-108번)
        {
          id: 100,
          question:
            "나는 아침에 알람이 울려도 한 번에 일어나기보다는 몇 번이고 미루는 편이다.",
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
          image: {
            male: "/images/man/M4_2.png",
            female: "/images/woman/W4_2.png",
          },
        },
        {
          id: 102,
          question:
            "함께 있는 시간도 중요하지만, 각자 시간을 보내는 것도 중요하다.",
          category: "결혼 생활의 영역",
          subCategory: "가사·생활 분담",
          type: "rating",
        },
        {
          id: 103,
          question:
            "나는 자는 동안에도 주변 소리(시계 소리, 문 여닫는 소리 등)에 쉽게 깨는 편이다.",
          category: "결혼 생활의 영역",
          subCategory: "재정·경제 태도",
          type: "rating",
        },
        {
          id: 104,
          question: "예상치 못한 지출이 생기면 스트레스를 크게 받는 편이다.",
          category: "결혼 생활의 영역",
          subCategory: "재정·경제 태도",
          type: "rating",
        },
        {
          id: 105,
          question:
            "함께 살 사람이 반려동물을 좋아한다면, 나도 키우는 걸 긍정적으로 생각할 수 있다.",
          category: "결혼 생활의 영역",
          subCategory: "재정·경제 태도",
          type: "rating",
        },
        {
          id: 106,
          question:
            "나는 양가 부모님 생신이나 명절이라도 상황에 따라 꼭 직접 찾아뵙지 않아도 괜찮다고 생각한다.",
          category: "결혼 생활의 영역",
          subCategory: "양가 관계·경계",
          type: "rating",
          image: {
            male: "/images/man/M4_7.png",
            female: "/images/woman/W4_7.png",
          },
        },
        {
          id: 107,
          question:
            "삶은 즐겁고 편안해야 하며, 무리해서 목표를 쫓는 것은 피하고 싶다.",
          category: "결혼 생활의 영역",
          subCategory: "양가 관계·경계",
          type: "rating",
        },
        {
          id: 108,
          question:
            "사회적 인정(성공, 평판, 타인의 평가 등)은 나에게 꽤 중요한 기준이다.",
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
      totalPages: 4,
      questions: [
        {
          id: 109,
          question:
            '세탁기 안에서 빨래를 꺼내 널어야 하는데, 일을 맡은 상대가 "나중에 할게"라며 일을 미루는 스타일이라면, 당신은 어떤 반응을 보일 것 같나요?',
          category: "주관식",
          subCategory: "가사·생활 분담",
          type: "text",
          image: {
            male: "/images/man/M7_1.png",
            female: "/images/woman/W7_1.png",
          },
        },
        {
          id: 110,
          question:
            "당신이 돈을 아끼지 않고 쓰고 싶은 분야가 있다면 무엇인가요? 그리고 그 분야에 그렇게 쓰는 이유는 무엇인가요?",
          category: "주관식",
          subCategory: "양가 관계·경계",
          type: "text",
        },
        {
          id: 111,
          question:
            "통장 잔고가 바닥을 보인다면, 당신이 가장 먼저 줄이게 될 지출 품목은 무엇인가요?",
          category: "주관식",
          subCategory: "재정·경제 태도",
          type: "text",
        },
        {
          id: 112,
          question:
            '"요즘 이게 있어서 하루하루 살아갈 힘이 난다"라고 느끼는 건 무엇인가요? (사람, 일, 취미, 목표 등 무엇이든)',
          category: "주관식",
          subCategory: "인생 우선순위",
          type: "text",
        },
        {
          id: 113,
          question:
            "파트너가 당신에게 가장 크게 소홀해졌다고 느끼는 순간은 언제인가요?",
          category: "주관식",
          subCategory: "인생 우선순위",
          type: "text",
          image: {
            male: "/images/man/M7_5.png",
            female: "/images/woman/W7_5.png",
          },
        },
        {
          id: 114,
          question:
            '파트너가 "이건 그냥 대충 써도 돼"라며 고장 난 것을 잘 안 고치려는 스타일이라면, 그럴 때 당신은 어떻게 반응할 것 같나요?',
          category: "주관식",
          subCategory: "행복·정서 인식",
          type: "text",
        },
        {
          id: 115,
          question:
            "'이런 건 기대도 안 했는데!' 파트너에게 가장 심쿵했던, 의외의 '사랑 표현' 순간은 언제인가요?",
          category: "주관식",
          subCategory: "자기인식·정서조절",
          type: "text",
        },
        {
          id: 116,
          question:
            "당신이 집이라는 공간에서 가장 중요하게 여기는 요소는 무엇인가요?",
          category: "주관식",
          subCategory: "회복력·성장 태도",
          type: "text",
        },
        {
          id: 117,
          question:
            "'결혼'이 게임이라면, 당신이 파트너와 함께 클리어하고 싶은 가장 어려운 최종 보스는 무엇일까요?",
          category: "주관식",
          subCategory: "결혼의 의미·비전",
          type: "text",
          image: {
            male: "/images/man/M7_9.png",
            female: "/images/woman/W7_9.png",
          },
        },
        {
          id: 118,
          question:
            "커플 사이에 지출이 생길 때, 보통 어떤 방식으로 나누는 게 가장 편하다고 느끼나요? (예: 정확히 반반, 상황 따라 유동적, 한 사람이 통합 관리 등)",
          category: "주관식",
          subCategory: "결혼의 의미·비전",
          type: "text",
        },
        {
          id: 119,
          question: "꼭 한번 배우거나 해보고 싶은 취미가 있다면 무엇인가요?",
          category: "주관식",
          subCategory: "종합 인식",
          type: "text",
        },
        {
          id: 120,
          question:
            "매달 고정 지출(월세, 대출, 보험, 통신비 등)을 제외하고 남은 돈이 있을 때, 당신이 가장 먼저 투자하거나 쓰고 싶은 곳은 어디인가요?",
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
