import { SurveyData } from "../types/survey";

export const surveyData: SurveyData = {
  parts: [
    {
      partNumber: 1,
      title: "Part 1: 기본 성격 특성 (1-45번)",
      description:
        "정보처리 및 의사결정, 동기 구조 및 자기조절, 외현적 행동 및 생활 방식, MMPI 기반 보조 지표",
      totalQuestions: 45,
      questions: [
        // 정보처리 및 의사결정 (1-12번)
        ...Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          question: `정보처리 및 의사결정 관련 질문 ${i + 1}`,
          category: "정보처리 및 의사결정",
          subCategory: "기본 성격 특성",
        })),

        // 동기 구조 및 자기조절 (13-24번)
        ...Array.from({ length: 12 }, (_, i) => ({
          id: i + 13,
          question: `동기 구조 및 자기조절 관련 질문 ${i + 1}`,
          category: "동기 구조 및 자기조절",
          subCategory: "기본 성격 특성",
        })),

        // 외현적 행동 및 생활 방식 (25-36번)
        ...Array.from({ length: 12 }, (_, i) => ({
          id: i + 25,
          question: `외현적 행동 및 생활 방식 관련 질문 ${i + 1}`,
          category: "외현적 행동 및 생활 방식",
          subCategory: "기본 성격 특성",
        })),

        // MMPI 기반 보조 지표 (37-45번)
        ...Array.from({ length: 9 }, (_, i) => ({
          id: i + 37,
          question: `MMPI 기반 보조 지표 관련 질문 ${i + 1}`,
          category: "MMPI 기반 보조 지표",
          subCategory: "기본 성격 특성",
        })),
      ],
    },
    {
      partNumber: 2,
      title: "Part 2: 심화 성격 특성 (46-90번)",
      description:
        "정보처리 및 의사결정, 동기 구조 및 자기조절, 외현적 행동 및 생활 방식, MMPI 기반 보조 지표 (심화)",
      totalQuestions: 45,
      questions: [
        // 정보처리 및 의사결정 (46-57번)
        ...Array.from({ length: 12 }, (_, i) => ({
          id: i + 46,
          question: `정보처리 및 의사결정 관련 질문 ${i + 1} (심화)`,
          category: "정보처리 및 의사결정",
          subCategory: "심화 성격 특성",
        })),

        // 동기 구조 및 자기조절 (58-69번)
        ...Array.from({ length: 12 }, (_, i) => ({
          id: i + 58,
          question: `동기 구조 및 자기조절 관련 질문 ${i + 1} (심화)`,
          category: "동기 구조 및 자기조절",
          subCategory: "심화 성격 특성",
        })),

        // 외현적 행동 및 생활 방식 (70-81번)
        ...Array.from({ length: 12 }, (_, i) => ({
          id: i + 70,
          question: `외현적 행동 및 생활 방식 관련 질문 ${i + 1} (심화)`,
          category: "외현적 행동 및 생활 방식",
          subCategory: "심화 성격 특성",
        })),

        // MMPI 기반 보조 지표 (82-90번)
        ...Array.from({ length: 9 }, (_, i) => ({
          id: i + 82,
          question: `MMPI 기반 보조 지표 관련 질문 ${i + 1} (심화)`,
          category: "MMPI 기반 보조 지표",
          subCategory: "심화 성격 특성",
        })),
      ],
    },
    {
      partNumber: 3,
      title: "Part 3: 관계 및 생활 영역 (91-108번)",
      description: "연애 생활의 영역, 결혼 생활의 영역",
      totalQuestions: 18,
      questions: [
        // 연애 생활의 영역 (91-99번)
        ...Array.from({ length: 9 }, (_, i) => ({
          id: i + 91,
          question: `연애 생활의 영역 관련 질문 ${i + 1}`,
          category: "연애 생활의 영역",
          subCategory: "관계 및 생활 영역",
        })),

        // 결혼 생활의 영역 (100-108번)
        ...Array.from({ length: 9 }, (_, i) => ({
          id: i + 100,
          question: `결혼 생활의 영역 관련 질문 ${i + 1}`,
          category: "결혼 생활의 영역",
          subCategory: "관계 및 생활 영역",
        })),
      ],
    },
    {
      partNumber: 4,
      title: "Part 4: 주관식 질문",
      description: "자유롭게 답변할 수 있는 주관식 질문들",
      totalQuestions: 12,
      questions: [
        ...Array.from({ length: 12 }, (_, i) => ({
          id: i + 109,
          question: `주관식 질문 ${i + 1}`,
          category: "주관식",
          subCategory: "자유 답변",
        })),
      ],
    },
  ],
  totalQuestions: 120,
};

export default surveyData;
