import { ReportData } from "@/types/api";

export const mockReportData: ReportData = {
  success: true,
  message: "종합 분석이 완료되었습니다",
  personal_analyses: {
    male: {
      profile: {
        name: "곤뇽독",
        sections: [
          {
            section_name: "동기 구조 및 자기조절",
            dimensions: {
              자율성: {
                raw_scores: [3, 4, 3, 3],
                total_score: 13,
                label: "중립/균형",
                description:
                  "상황에 따라 타인 의견과 자기 판단을 적절히 활용. 유연한 의사결정.",
              },
              외적동기_내적동기: {
                raw_scores: [3, 4, 3, 2],
                total_score: 12,
                label: "중립/균형",
                description:
                  "상황에 따라 외적 인정과 내적 의미 모두 고려. 균형잡힌 동기 체계.",
              },
              안정지향_도전지향: {
                raw_scores: [2, 3, 2, 2],
                total_score: 9,
                label: "약한 안정지향",
                description:
                  "안정을 선호하지만 기회가 있으면 시도. 리스크를 신중하게 검토한 후 도전.",
              },
            },
          },
          {
            section_name: "MMPI 기반 보조지표",
            dimensions: {
              불안완벽주의: {
                raw_scores: [2, 4, 3],
                total_score: 11,
                label: "여유 있는 형",
                description:
                  "실수를 수용하고 마음의 여유 유지. 예상 밖 상황에 호기심.",
              },
              정서안정성: {
                raw_scores: [3, 4, 3],
                total_score: 10,
                label: "양호한 안정성",
                description:
                  "감정 회복이 빠른 편. 자주 만족감과 성취감을 느낌.",
              },
              신뢰경향: {
                raw_scores: [4, 4, 4],
                total_score: 8,
                label: "신중형",
                description:
                  "타인을 신뢰하되 경계심도 유지. 상황에 따라 적절히 판단.",
              },
            },
          },
          {
            section_name: "사회적 관계 및 의사소통",
            dimensions: {
              외향성_내향성: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "상황에 따라 외향적, 내향적 특성을 모두 활용. 유연한 사회적 적응.",
              },
              감정표현_논리적사고: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "감정과 논리를 균형있게 활용. 상황에 맞는 적절한 의사소통.",
              },
              협력_경쟁: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "협력과 경쟁을 상황에 맞게 선택. 유연한 관계 형성.",
              },
            },
          },
          {
            section_name: "가치관 및 라이프스타일",
            dimensions: {
              전통적_현대적: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "전통과 현대를 균형있게 수용. 상황에 맞는 가치관 적용.",
              },
              개인주의_집단주의: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "개인과 집단의 이익을 균형있게 고려. 유연한 가치관.",
              },
              안정지향_변화지향: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description: "안정과 변화를 상황에 맞게 선택. 유연한 적응력.",
              },
            },
          },
        ],
      },
      score_analysis: {
        자율성: {
          raw_scores: [3, 4, 3, 3],
          total_score: 13,
          avg_score: 3.25,
          scaled_score: 65,
          scale_type: "5점 척도",
          scale_range: "1-5",
          label: "중립/균형",
          interpretation_level: "보통",
          interpretation_description:
            "상황에 따라 타인 의견과 자기 판단을 적절히 활용. 유연한 의사결정.",
          dimension_name: "자율성",
          positive_label: "자율적",
          negative_label: "의존적",
        },
        외적동기_내적동기: {
          raw_scores: [3, 4, 3, 2],
          total_score: 12,
          avg_score: 3.0,
          scaled_score: 60,
          scale_type: "5점 척도",
          scale_range: "1-5",
          label: "중립/균형",
          interpretation_level: "보통",
          interpretation_description:
            "상황에 따라 외적 인정과 내적 의미 모두 고려. 균형잡힌 동기 체계.",
          dimension_name: "외적동기_내적동기",
          positive_label: "내적동기",
          negative_label: "외적동기",
        },
        안정지향_도전지향: {
          raw_scores: [2, 3, 2, 2],
          total_score: 9,
          avg_score: 2.25,
          scaled_score: 45,
          scale_type: "5점 척도",
          scale_range: "1-5",
          label: "약한 안정지향",
          interpretation_level: "낮음",
          interpretation_description:
            "안정을 선호하지만 기회가 있으면 시도. 리스크를 신중하게 검토한 후 도전.",
          dimension_name: "안정지향_도전지향",
          positive_label: "도전지향",
          negative_label: "안정지향",
        },
      },
      detailed_analysis: {
        자율성: {
          characteristicDefinition:
            "자율성은 개인이 자신의 행동과 결정을 스스로 통제하고 관리하는 능력을 의미합니다.",
          informationPerceptionMethod:
            "상황에 따라 타인 의견과 자기 판단을 적절히 활용",
          informationPerceptionMethodReason:
            "유연한 의사결정을 통해 다양한 관점을 고려할 수 있습니다.",
          characteristicSummary:
            "중립/균형된 자율성을 보이며, 상황에 맞는 적절한 판단을 내립니다.",
          partnerPerception:
            "파트너는 균형잡힌 의사결정 능력을 인정하고 신뢰할 것입니다.",
        },
        외적동기_내적동기: {
          characteristicDefinition:
            "외적동기와 내적동기는 개인이 행동을 일으키는 동기의 원천을 나타냅니다.",
          informationPerceptionMethod:
            "상황에 따라 외적 인정과 내적 의미 모두 고려",
          informationPerceptionMethodReason:
            "균형잡힌 동기 체계를 통해 다양한 자극에 반응할 수 있습니다.",
          characteristicSummary:
            "중립/균형된 동기 체계를 가지고 있으며, 상황에 맞는 적절한 동기를 활용합니다.",
          partnerPerception:
            "파트너는 균형잡힌 동기 체계를 인정하고 함께 성장할 수 있을 것입니다.",
        },
        안정지향_도전지향: {
          characteristicDefinition:
            "안정지향과 도전지향은 개인이 변화와 새로운 경험에 대한 태도를 나타냅니다.",
          informationPerceptionMethod: "안정을 선호하지만 기회가 있으면 시도",
          informationPerceptionMethodReason:
            "리스크를 신중하게 검토한 후 도전할 수 있습니다.",
          characteristicSummary:
            "약한 안정지향을 보이며, 신중한 판단 후 도전하는 경향이 있습니다.",
          partnerPerception:
            "파트너는 신중한 도전 정신을 인정하고 함께 안정적으로 성장할 수 있을 것입니다.",
        },
      },
    },
    female: {
      profile: {
        name: "곤뇽독",
        sections: [
          {
            section_name: "동기 구조 및 자기조절",
            dimensions: {
              자율성: {
                raw_scores: [3, 4, 3, 3],
                total_score: 13,
                label: "중립/균형",
                description:
                  "상황에 따라 타인 의견과 자기 판단을 적절히 활용. 유연한 의사결정.",
              },
              외적동기_내적동기: {
                raw_scores: [3, 4, 3, 2],
                total_score: 12,
                label: "중립/균형",
                description:
                  "상황에 따라 외적 인정과 내적 의미 모두 고려. 균형잡힌 동기 체계.",
              },
              안정지향_도전지향: {
                raw_scores: [2, 3, 2, 2],
                total_score: 9,
                label: "약한 안정지향",
                description:
                  "안정을 선호하지만 기회가 있으면 시도. 리스크를 신중하게 검토한 후 도전.",
              },
            },
          },
          {
            section_name: "MMPI 기반 보조지표",
            dimensions: {
              불안완벽주의: {
                raw_scores: [2, 4, 3],
                total_score: 11,
                label: "여유 있는 형",
                description:
                  "실수를 수용하고 마음의 여유 유지. 예상 밖 상황에 호기심.",
              },
              정서안정성: {
                raw_scores: [3, 4, 3],
                total_score: 10,
                label: "양호한 안정성",
                description:
                  "감정 회복이 빠른 편. 자주 만족감과 성취감을 느낌.",
              },
              신뢰경향: {
                raw_scores: [4, 4, 4],
                total_score: 8,
                label: "신중형",
                description:
                  "타인을 신뢰하되 경계심도 유지. 상황에 따라 적절히 판단.",
              },
            },
          },
          {
            section_name: "사회적 관계 및 의사소통",
            dimensions: {
              외향성_내향성: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "상황에 따라 외향적, 내향적 특성을 모두 활용. 유연한 사회적 적응.",
              },
              감정표현_논리적사고: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "감정과 논리를 균형있게 활용. 상황에 맞는 적절한 의사소통.",
              },
              협력_경쟁: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "협력과 경쟁을 상황에 맞게 선택. 유연한 관계 형성.",
              },
            },
          },
          {
            section_name: "가치관 및 라이프스타일",
            dimensions: {
              전통적_현대적: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "전통과 현대를 균형있게 수용. 상황에 맞는 가치관 적용.",
              },
              개인주의_집단주의: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description:
                  "개인과 집단의 이익을 균형있게 고려. 유연한 가치관.",
              },
              안정지향_변화지향: {
                raw_scores: [3, 3, 3, 3],
                total_score: 12,
                label: "중립/균형",
                description: "안정과 변화를 상황에 맞게 선택. 유연한 적응력.",
              },
            },
          },
        ],
      },
      score_analysis: {
        자율성: {
          raw_scores: [3, 4, 3, 3],
          total_score: 13,
          avg_score: 3.25,
          scaled_score: 65,
          scale_type: "5점 척도",
          scale_range: "1-5",
          label: "중립/균형",
          interpretation_level: "보통",
          interpretation_description:
            "상황에 따라 타인 의견과 자기 판단을 적절히 활용. 유연한 의사결정.",
          dimension_name: "자율성",
          positive_label: "자율적",
          negative_label: "의존적",
        },
        외적동기_내적동기: {
          raw_scores: [3, 4, 3, 2],
          total_score: 12,
          avg_score: 3.0,
          scaled_score: 60,
          scale_type: "5점 척도",
          scale_range: "1-5",
          label: "중립/균형",
          interpretation_level: "보통",
          interpretation_description:
            "상황에 따라 외적 인정과 내적 의미 모두 고려. 균형잡힌 동기 체계.",
          dimension_name: "외적동기_내적동기",
          positive_label: "내적동기",
          negative_label: "외적동기",
        },
        안정지향_도전지향: {
          raw_scores: [2, 3, 2, 2],
          total_score: 9,
          avg_score: 2.25,
          scaled_score: 45,
          scale_type: "5점 척도",
          scale_range: "1-5",
          label: "약한 안정지향",
          interpretation_level: "낮음",
          interpretation_description:
            "안정을 선호하지만 기회가 있으면 시도. 리스크를 신중하게 검토한 후 도전.",
          dimension_name: "안정지향_도전지향",
          positive_label: "도전지향",
          negative_label: "안정지향",
        },
      },
      detailed_analysis: {
        자율성: {
          characteristicDefinition:
            "자율성은 개인이 자신의 행동과 결정을 스스로 통제하고 관리하는 능력을 의미합니다.",
          informationPerceptionMethod:
            "상황에 따라 타인 의견과 자기 판단을 적절히 활용",
          informationPerceptionMethodReason:
            "유연한 의사결정을 통해 다양한 관점을 고려할 수 있습니다.",
          characteristicSummary:
            "중립/균형된 자율성을 보이며, 상황에 맞는 적절한 판단을 내립니다.",
          partnerPerception:
            "파트너는 균형잡힌 의사결정 능력을 인정하고 신뢰할 것입니다.",
        },
        외적동기_내적동기: {
          characteristicDefinition:
            "외적동기와 내적동기는 개인이 행동을 일으키는 동기의 원천을 나타냅니다.",
          informationPerceptionMethod:
            "상황에 따라 외적 인정과 내적 의미 모두 고려",
          informationPerceptionMethodReason:
            "균형잡힌 동기 체계를 통해 다양한 자극에 반응할 수 있습니다.",
          characteristicSummary:
            "중립/균형된 동기 체계를 가지고 있으며, 상황에 맞는 적절한 동기를 활용합니다.",
          partnerPerception:
            "파트너는 균형잡힌 동기 체계를 인정하고 함께 성장할 수 있을 것입니다.",
        },
        안정지향_도전지향: {
          characteristicDefinition:
            "안정지향과 도전지향은 개인이 변화와 새로운 경험에 대한 태도를 나타냅니다.",
          informationPerceptionMethod: "안정을 선호하지만 기회가 있으면 시도",
          informationPerceptionMethodReason:
            "리스크를 신중하게 검토한 후 도전할 수 있습니다.",
          characteristicSummary:
            "약한 안정지향을 보이며, 신중한 판단 후 도전하는 경향이 있습니다.",
          partnerPerception:
            "파트너는 신중한 도전 정신을 인정하고 함께 안정적으로 성장할 수 있을 것입니다.",
        },
      },
    },
  },
  interaction_zones: [
    {
      zoneType: "협력형",
      description: "두 사람이 서로를 보완하며 함께 성장하는 관계",
      characteristics: [
        "상호 존중과 이해",
        "공동 목표 추구",
        "갈등 해결 능력",
        "지속적인 소통",
      ],
      timeline_impact: {
        dating_early: "서로를 이해하고 적응하는 시기",
        marriage_early: "가족으로서의 역할 분담과 협력",
        marriage_mid_late: "장기적인 관계 유지와 성장",
      },
    },
  ],
  scenario_flow: {
    stages: [
      {
        stage_number: 1,
        period: "1-3개월",
        event_emoji: "💕",
        outcome: "긍정적",
        selected_topic: "첫 만남과 호감 형성",
        title: "첫 만남의 설렘",
        introduction: "두 사람이 처음 만나 서로에게 호감을 느끼는 시기입니다.",
        dialogue: "안녕하세요! 처음 뵙네요. 정말 반가워요.",
        analysis: "서로에 대한 첫인상이 좋고, 자연스러운 대화가 이어집니다.",
        reason: "두 사람 모두 상대방을 긍정적으로 인식하고 있습니다.",
        available_topics: ["첫 만남", "호감 형성", "대화"],
        decision_dimensions: ["외향성_내향성", "감정표현_논리적사고"],
      },
      {
        stage_number: 2,
        period: "4-6개월",
        event_emoji: "🌹",
        outcome: "긍정적",
        selected_topic: "관계 발전과 깊어지는 감정",
        title: "관계의 발전",
        introduction: "서로에 대한 감정이 깊어지고 관계가 발전하는 시기입니다.",
        dialogue: "당신과 함께 있으면 시간이 정말 빨리 지나가네요.",
        analysis: "두 사람 모두 관계의 발전에 만족하고 있습니다.",
        reason: "서로에 대한 이해가 깊어지고 있습니다.",
        available_topics: ["관계 발전", "감정 표현", "미래 계획"],
        decision_dimensions: ["감정표현_논리적사고", "협력_경쟁"],
      },
    ],
    summary: {
      total_stages: 2,
      conflict_count: 0,
      excitement_count: 2,
      conflict_rate: 0.0,
      male_name: "곤뇽독",
      female_name: "곤뇽독",
    },
  },
  yearly_indicators: [
    {
      year: 1,
      indicator_type: "관계 만족도",
      indicator_name: "전반적 만족도",
      quarterly_scores: [
        { quarter: "Q1", score: 85 },
        { quarter: "Q2", score: 88 },
        { quarter: "Q3", score: 90 },
        { quarter: "Q4", score: 92 },
      ],
      graph_interpretation: "지속적으로 상승하는 만족도",
      title: "1년차 관계 만족도",
      description: "첫 해 동안 관계 만족도가 지속적으로 향상되었습니다.",
      questions: [
        "서로에 대한 만족도는?",
        "관계의 질은?",
        "미래에 대한 기대는?",
      ],
    },
  ],
  relationship_prediction: {
    relationship_direction: "긍정적 발전",
    indicator_predictions: [
      {
        indicator: "관계 만족도",
        level: "높음",
        description: "지속적으로 높은 만족도를 유지할 것으로 예상됩니다.",
      },
    ],
    personal_changes: [
      {
        name: "곤뇽독",
        title: "성장하는 파트너",
        description: "관계를 통해 지속적으로 성장하고 발전할 것입니다.",
      },
    ],
    flower_path_points: [
      {
        point: "상호 존중",
        description: "서로를 존중하고 이해하는 관계를 유지하세요.",
      },
    ],
    comprehensive_conclusion: {
      summary: "두 사람은 서로를 보완하며 함께 성장할 수 있는 관계입니다.",
      walked_path: "협력과 이해를 바탕으로 한 관계",
      continuous_practice: "지속적인 소통과 상호 존중",
      recommended_guide:
        "서로의 차이를 인정하고 함께 성장하는 방향으로 나아가세요.",
    },
  },
  metadata: {
    male_name: "곤뇽독",
    female_name: "곤뇽독",
    male_phone: "010-1234-5678",
    female_phone: "010-8765-4321",
    total_dimensions_analyzed: 12,
    total_stages: 2,
    total_yearly_indicators: 1,
    generated_at: "2024-01-15T10:30:00Z",
    analysis_types: ["개인 성향 분석", "관계 시뮬레이션", "미래 예측"],
  },
};
