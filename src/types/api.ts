// API 관련 타입 정의

export interface ApiAnswer {
  question_id: string;
  question_text: string;
  answer: string | number;
  section: string;
  dimension: string;
  part: string;
  weight: number;
  direction: "reverse" | "forward";
}

export interface SubmitSurveyRequest {
  my_name: string;
  my_phone: string;
  my_gender: string;
  partner_name: string;
  partner_phone: string;
  my_answers: ApiAnswer[];
}

export interface SubmitSurveyResponse {
  success: boolean;
  survey_id: string;
  is_complete: boolean;
  message: string;
  waiting_for?: "male" | "female";
  analysis?: Record<string, unknown>; // 분석 결과 (is_complete가 true일 때)
}

export interface ApiErrorResponse {
  detail:
    | string
    | Array<{
        loc: string[];
        msg: string;
        type: string;
      }>;
}

// 리포트 데이터 타입 정의
export interface Dimension {
  raw_scores: number[];
  total_score: number;
  label: string;
  description: string;
}

export interface Section {
  section_name: string;
  dimensions: Record<string, Dimension>;
}

export interface Profile {
  name: string;
  sections: Section[];
}

export interface ScoreAnalysis {
  raw_scores: number[];
  total_score: number;
  avg_score: number;
  scaled_score: number;
  scale_type: string;
  scale_range: string;
  label: string;
  interpretation_level: string;
  interpretation_description: string;
  dimension_name: string;
  positive_label: string;
  negative_label: string;
}

export interface DetailedAnalysis {
  characteristicDefinition: string;
  informationPerceptionMethod: string;
  informationPerceptionMethodReason: string;
  characteristicSummary: string;
  partnerPerception: string;
}

export interface PersonalAnalysis {
  profile: Profile;
  score_analysis: Record<string, ScoreAnalysis>;
  detailed_analysis: Record<string, DetailedAnalysis>;
  // Optional high-level summaries (per API)
  thinking_judgment_summary?: string;
  motivation_energy_summary?: string;
  behavior_expression_summary?: string;
}

export interface InteractionZone {
  zoneType: string;
  description: string;
  characteristics: string[];
  timeline_impact: {
    dating_early: string;
    marriage_early: string;
    marriage_mid_late: string;
  };
}

export interface QuarterlyScore {
  quarter: string;
  score: number;
}

export interface YearlyIndicator {
  year: number;
  indicator_type: string;
  indicator_name: string;
  quarterly_scores: QuarterlyScore[];
  graph_interpretation: string;
  graph_interpretation2?: string;
  title: string;
  description: string;
  questions: string[];
}

export interface ScenarioStage {
  stage_number: number;
  period: string;
  event_emoji: string;
  outcome: string;
  selected_topic: string;
  title: string;
  introduction: string;
  dialogue: string;
  analysis: string;
  reason: string;
  available_topics: string[];
  decision_dimensions: string[];
}

export interface ScenarioFlow {
  stages: ScenarioStage[];
  summary: {
    total_stages: number;
    conflict_count: number;
    excitement_count: number;
    conflict_rate: number;
    male_name: string;
    female_name: string;
  };
}

export interface IndicatorPrediction {
  indicator: string;
  level: string;
  description: string;
}

export interface PersonalChange {
  name: string;
  title: string;
  description: string;
}

export interface FlowerPathPoint {
  point: string;
  description: string;
}

export interface ComprehensiveConclusion {
  summary: string;
  walked_path: string;
  continuous_practice: string;
  recommended_guide: string;
}

export interface RelationshipPrediction {
  relationship_direction: string;
  indicator_predictions: IndicatorPrediction[];
  personal_changes: PersonalChange[];
  flower_path_points: FlowerPathPoint[];
  comprehensive_conclusion: ComprehensiveConclusion;
}

export interface ReportMetadata {
  male_name: string;
  female_name: string;
  male_phone: string;
  female_phone: string;
  total_dimensions_analyzed: number;
  total_stages: number;
  total_yearly_indicators: number;
  generated_at: string;
  analysis_types: string[];
}

export interface ReportData {
  success: boolean;
  message: string;
  personal_analyses: {
    male: PersonalAnalysis;
    female: PersonalAnalysis;
  };
  interaction_zones: InteractionZone[];
  scenario_flow: ScenarioFlow;
  yearly_indicators: YearlyIndicator[];
  relationship_prediction: RelationshipPrediction;
  metadata: ReportMetadata;
}
