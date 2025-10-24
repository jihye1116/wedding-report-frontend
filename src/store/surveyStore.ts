import { atom } from "jotai";

import { SurveyAnswer } from "@/types/survey";

// 답변 상태를 전역으로 관리
export const answersAtom = atom<SurveyAnswer[]>([]);

// 현재 파트와 페이지 정보를 전역으로 관리
export const currentPartAtom = atom<number>(1);
export const currentPageAtom = atom<number>(0);

// IntroductionPage 상태 전역 관리
export const introStepAtom = atom<number>(0);
export const introDataAtom = atom({
  agreeAll: false,
  agreePrivacy: false,
  event_promotion_agree: false,
  name: "",
  partnerName: "",
  phoneNumber: "",
  partnerPhoneNumber: "",
  relationshipDuration: 0,
  gender: "",
});
