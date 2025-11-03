export interface MonthlySimulationData {
  month: string;
  title: string;
  situation: string;
  conversation: string;
  analysis: string;
}

export interface YearlyIntroData {
  year: number;
  description: string;
  subheading?: string;
  points?: string[];
  analysis: string[];
}

export interface YearlySummaryData {
  year: number;
  chartTitle: string;
  barColor: string;
  quarterlyScores?: { quarter: string; score: number }[];
  chartInterpretation?: string; // 그래프 상단 회색 텍스트
  chartAnalysis: string[];
  summaryTitle: string;
  summaryContent: string[];
  questions: string[];
}

export interface TransitionData {
  title: string;
  subtitle?: string;
}

export interface InitialIntroData {
  title: string;
  paragraphs: string[];
  listItems: string[];
}

export type SimulationStep =
  | { type: "initial-intro"; data: InitialIntroData }
  | { type: "intro"; data: YearlyIntroData }
  | { type: "monthly"; data: MonthlySimulationData }
  | { type: "summary"; data: YearlySummaryData }
  | { type: "transition"; data: TransitionData };
