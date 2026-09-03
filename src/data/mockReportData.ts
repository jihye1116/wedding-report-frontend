import { ReportData } from "@/types/api";

export const mockReportData: ReportData = {
  success: true,
  message: "Mock data loaded",
  personal_analyses: {
    male: {
      profile: {
        name: "김민수",
        sections: [
          {
            section_name: "사고와 판단",
            dimensions: {
              "EI": { raw_scores: [4, 5], total_score: 9, label: "외향", description: "설명" }
            }
          }
        ]
      },
      score_analysis: {
        "EI": {
          raw_scores: [4,5], total_score: 9, avg_score: 4.5, scaled_score: 80,
          scale_type: "100점", scale_range: "0-100", label: "외향",
          interpretation_level: "높음", interpretation_description: "해석",
          dimension_name: "EI", positive_label: "외향", negative_label: "내향"
        },
        "SN": {
          raw_scores: [4,5], total_score: 9, avg_score: 4.5, scaled_score: 80,
          scale_type: "100점", scale_range: "0-100", label: "직관",
          interpretation_level: "높음", interpretation_description: "해석",
          dimension_name: "SN", positive_label: "직관", negative_label: "감각"
        },
        "TF": {
          raw_scores: [4,5], total_score: 9, avg_score: 4.5, scaled_score: 80,
          scale_type: "100점", scale_range: "0-100", label: "사고",
          interpretation_level: "높음", interpretation_description: "해석",
          dimension_name: "TF", positive_label: "사고", negative_label: "감정"
        },
        "JP": {
          raw_scores: [4,5], total_score: 9, avg_score: 4.5, scaled_score: 80,
          scale_type: "100점", scale_range: "0-100", label: "판단",
          interpretation_level: "높음", interpretation_description: "해석",
          dimension_name: "JP", positive_label: "판단", negative_label: "인식"
        }
      },
      detailed_analysis: {
        "EI": {
          characteristicDefinition: "외향성 정의",
          informationPerceptionMethod: "정보 지각 방식",
          informationPerceptionMethodReason: "이유",
          characteristicSummary: "요약",
          partnerPerception: "파트너 인식"
        }
      },
      thinking_judgment_summary: "사고와 판단 요약",
      motivation_energy_summary: "동기와 에너지 요약",
      behavior_expression_summary: "행동과 표현 요약"
    },
    female: {
      profile: {
        name: "이수진",
        sections: [
          {
            section_name: "사고와 판단",
            dimensions: {
              "EI": { raw_scores: [4, 5], total_score: 9, label: "내향", description: "설명" }
            }
          }
        ]
      },
      score_analysis: {
        "EI": {
          raw_scores: [4,5], total_score: 9, avg_score: 4.5, scaled_score: 20,
          scale_type: "100점", scale_range: "0-100", label: "내향",
          interpretation_level: "낮음", interpretation_description: "해석",
          dimension_name: "EI", positive_label: "외향", negative_label: "내향"
        },
        "SN": {
          raw_scores: [4,5], total_score: 9, avg_score: 4.5, scaled_score: 20,
          scale_type: "100점", scale_range: "0-100", label: "감각",
          interpretation_level: "낮음", interpretation_description: "해석",
          dimension_name: "SN", positive_label: "직관", negative_label: "감각"
        },
        "TF": {
          raw_scores: [4,5], total_score: 9, avg_score: 4.5, scaled_score: 20,
          scale_type: "100점", scale_range: "0-100", label: "감정",
          interpretation_level: "낮음", interpretation_description: "해석",
          dimension_name: "TF", positive_label: "사고", negative_label: "감정"
        },
        "JP": {
          raw_scores: [4,5], total_score: 9, avg_score: 4.5, scaled_score: 20,
          scale_type: "100점", scale_range: "0-100", label: "인식",
          interpretation_level: "낮음", interpretation_description: "해석",
          dimension_name: "JP", positive_label: "판단", negative_label: "인식"
        }
      },
      detailed_analysis: {
        "EI": {
          characteristicDefinition: "내향성 정의",
          informationPerceptionMethod: "정보 지각 방식",
          informationPerceptionMethodReason: "이유",
          characteristicSummary: "요약",
          partnerPerception: "파트너 인식"
        }
      },
      thinking_judgment_summary: "사고와 판단 요약",
      motivation_energy_summary: "동기와 에너지 요약",
      behavior_expression_summary: "행동과 표현 요약"
    }
  },
  interaction_zones: [
    {
      zoneType: "안정 영역",
      description: "서로 잘 맞습니다.",
      characteristics: ["이해심", "공감"],
      timeline_impact: {
        dating_early: "초기 설명",
        marriage_early: "중기 설명",
        marriage_mid_late: "후기 설명"
      }
    }
  ],
  scenario_flow: {
    stages: [
      {
        stage_number: 1,
        period: '1~3M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 2,
        period: '4~6M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 3,
        period: '7~9M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 4,
        period: '10~12M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 5,
        period: '13~15M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 6,
        period: '16~18M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 7,
        period: '19~21M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 8,
        period: '22~24M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 9,
        period: '25~27M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 10,
        period: '28~30M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 11,
        period: '31~33M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      },
      {
        stage_number: 12,
        period: '34~36M',
        event_emoji: '💕',
        outcome: '성공',
        selected_topic: '주제',
        title: '시나리오 제목',
        introduction: '도입',
        dialogue: `>도현: 이거 어때? 벽돌 무늬로 바꾸면 좀 세련될 것 같은데요.
>현서: 그건 좀 차가워 보여요. 지금처럼 따뜻한 게 좋아요.
>도현: 그냥 이걸로 가죠.
>현서: 그럼 다음 주에 다시 봐요.`,
        analysis: '분석',
        reason: '이유',
        available_topics: ['주제1'],
        decision_dimensions: ['EI']
      }
    ],
    summary: {
      total_stages: 1,
      conflict_count: 0,
      excitement_count: 1,
      conflict_rate: 0,
      male_name: "김민수",
      female_name: "이수진"
    }
  },
  yearly_indicators: [
    {
      year: 1,
      indicator_type: "감정",
      indicator_name: "행복도",
      quarterly_scores: [
        { quarter: "1분기", score: 80 },
        { quarter: "2분기", score: 85 },
        { quarter: "3분기", score: 90 },
        { quarter: "4분기", score: 95 }
      ],
      graph_interpretation: "우상향 중입니다.",
      graph_interpretation2: "좋은 징조입니다.",
      title: "1년차 지표",
      description: "설명",
      questions: ["질문1?"]
    }
  ],
  relationship_prediction: {
    relationship_direction: "긍정적",
    indicator_predictions: [
      { indicator: "신뢰", level: "높음", description: "설명" }
    ],
    personal_changes: [
      { name: "변화", title: "제목", description: "설명" }
    ],
    flower_path_points: [
      { point: "소통", description: "대화하세요" }
    ],
    comprehensive_conclusion: {
      summary: "종합 요약",
      walked_path: "걸어온 길",
      continuous_practice: "계속할 것",
      recommended_guide: "가이드"
    }
  },
  metadata: {
    male_name: "김민수",
    female_name: "이수진",
    male_phone: "010-1234-5678",
    female_phone: "010-9876-5432",
    total_dimensions_analyzed: 1,
    total_stages: 1,
    total_yearly_indicators: 1,
    generated_at: "2026-08-25T15:00:00Z",
    analysis_types: ["기본"]
  }
};
