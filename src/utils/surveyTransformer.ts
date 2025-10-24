import { SurveyAnswer } from "@/types/survey";
import { ApiAnswer } from "@/types/api";
import { detailedSurveyData } from "@/data/detailedSurveyData";

/**
 * 카테고리와 서브카테고리를 기반으로 section과 dimension을 생성합니다.
 */
function generateSectionAndDimension(
  category: string,
  subCategory?: string,
): { section: string; dimension: string } {
  // category를 section으로 변환
  const categoryMap: Record<string, string> = {
    "정보처리 및 의사결정": "정보처리_의사결정",
    "동기 구조 및 자기조절": "동기구조_자기조절",
    "외현적 행동 및 생활 방식": "외현적행동_생활방식",
    "MMPI 기반 보조 지표": "MMPI_보조지표",
    "연애 생활의 영역": "연애생활_현실영역",
    "결혼 생활의 영역": "결혼생활_현실영역",
    주관식: "주관식",
  };

  const section = categoryMap[category] || category;

  // subCategory를 간결한 dimension으로 변환
  const dimensionMap: Record<string, string> = {
    "현재중심 ↔ 미래지향": "현재지향_미래지향",
    "논리·객관중심 ↔ 감정·인간중심": "논리중심_감정중심",
    "반응적 ↔ 조절적": "반응적_조절적",
    "안정지향 ↔ 도전지향": "안정지향_도전지향",
    "외적동기 ↔ 내적동기": "외적동기_내적동기",
    "목표실행 자율성 낮음 ↔ 높음": "자율성",
    "내향 ↔ 외향": "내향_외향",
    "유연 ↔ 계획": "유연_계획",
    "자기표현 ↔ 적응배려형": "자기표현_적응배려",
    "정서 안정성 (침체적 ↔ 안정적)": "정서안정성",
    "신뢰 경향 (경계적 ↔ 수용적)": "신뢰경향",
    "불안·완벽주의 (불안·통제형 ↔ 여유·수용형)": "불안완벽주의",
    "생활 리듬 / 시간 조율": "생활리듬_연애",
    "재정·소비 태도": "재정소비태도_연애",
    "재정·경제 태도": "재정경제태도_결혼",
    "가족 인식 / 거리감": "가족인식_연애",
    "가사·생활 분담": "가사생활분담",
    "양가 관계·경계": "양가관계경계_결혼",
    "인생 우선순위": "인생 우선순위",
    "행복·정서 인식": "행복·정서 인식",
    "자기인식·정서조절": "자기인식·정서조절",
    "회복력·성장 태도": "회복력·성장 태도",
    "결혼의 의미·비전": "결혼의 의미·비전",
    "종합 인식": "종합 인식",
  };

  const dimension = subCategory ? dimensionMap[subCategory] || "기타" : "기타";

  return { section, dimension };
}

/**
 * section의 축약형을 반환합니다.
 */
function getSectionShortForm(section: string): string {
  const sectionShortMap: Record<string, string> = {
    정보처리_의사결정: "정보처리",
    동기구조_자기조절: "동기구조",
    외현적행동_생활방식: "외현적행동",
    MMPI_보조지표: "MMPI",
    연애생활_현실영역: "연애생활",
    결혼생활_현실영역: "결혼생활",
    주관식: "주관식",
  };
  return sectionShortMap[section] || section;
}

/**
 * dimension의 축약형을 반환합니다.
 */
function getDimensionShortForm(dimension: string): string {
  const dimensionShortMap: Record<string, string> = {
    현재지향_미래지향: "현재미래",
    논리중심_감정중심: "논리감정",
    반응적_조절적: "반응조절",
    안정지향_도전지향: "안정도전",
    외적동기_내적동기: "외적내적",
    자율성: "자율성",
    내향_외향: "내향외향",
    유연_계획: "유연계획",
    자기표현_적응배려: "표현배려",
    정서안정성: "정서안정",
    신뢰경향: "신뢰경향",
    불안완벽주의: "불안완벽",
    생활리듬_연애: "생활리듬",
    재정소비태도_연애: "재정태도",
    재정경제태도_결혼: "재정태도",
    가족인식_연애: "가족인식",
    가사생활분담: "가사분담",
    양가관계경계_결혼: "양가관계",
    "가사·생활 분담": "가사분담",
    "양가 관계·경계": "양가관계",
    "재정·경제 태도": "재정태도",
    "인생 우선순위": "인생우선순위",
    "행복·정서 인식": "행복정서",
    "자기인식·정서조절": "자기인식",
    "회복력·성장 태도": "회복력",
    "결혼의 의미·비전": "결혼의미",
    "종합 인식": "종합인식",
  };
  return dimensionShortMap[dimension] || dimension;
}

/**
 * 동일한 section-dimension 조합에서의 순번을 계산합니다.
 */
const questionCounters: Record<string, number> = {};

function getQuestionCounter(section: string, dimension: string): number {
  const key = `${section}_${dimension}`;
  if (!questionCounters[key]) {
    questionCounters[key] = 0;
  }
  questionCounters[key]++;
  return questionCounters[key];
}

/**
 * 질문 ID를 기반으로 question_id 문자열을 생성합니다.
 */
function generateQuestionId(
  section: string,
  dimension: string,
  counter: number,
): string {
  const sectionShort = getSectionShortForm(section);
  const dimensionShort = getDimensionShortForm(dimension);

  // 주관식은 카운터가 1이면 숫자 생략
  if (section === "주관식") {
    return counter === 1
      ? `주관식_${dimensionShort}`
      : `주관식_${dimensionShort}_${counter}`;
  }

  return `${sectionShort}_${dimensionShort}_${counter}`;
}

/**
 * part number를 기반으로 part 문자열을 생성합니다.
 * Part 1: self (본인에 대한 질문)
 * Part 2: partner (파트너에 대한 질문)
 * Part 3, 4: relationship (관계 및 주관식)
 */
function getPartType(partNumber: number): string {
  if (partNumber === 1) return "self";
  if (partNumber === 2) return "partner";
  return "relationship";
}

/**
 * 프론트엔드의 SurveyAnswer를 백엔드 API 형식의 ApiAnswer로 변환합니다.
 */
export function transformSurveyAnswersToApi(
  answers: SurveyAnswer[],
): ApiAnswer[] {
  // 카운터 초기화
  Object.keys(questionCounters).forEach((key) => delete questionCounters[key]);

  return answers.map((answer) => {
    // 질문 정보 찾기
    let questionData = null;
    let partNumber = 1;

    for (const part of detailedSurveyData.parts) {
      const question = part.questions.find((q) => q.id === answer.questionId);
      if (question) {
        questionData = question;
        partNumber = part.partNumber;
        break;
      }
    }

    if (!questionData) {
      throw new Error(`Question with id ${answer.questionId} not found`);
    }

    const { section, dimension } = generateSectionAndDimension(
      questionData.category,
      questionData.subCategory,
    );

    const counter = getQuestionCounter(section, dimension);

    return {
      question_id: generateQuestionId(section, dimension, counter),
      section,
      dimension,
      question_text: questionData.question,
      part: getPartType(partNumber),
      answer: answer.answer,
    };
  });
}
