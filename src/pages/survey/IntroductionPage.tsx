"use client";

import Image from "next/image";
import { Fragment, useRef } from "react";
import toast from "react-hot-toast";

import Logo from "@/assets/icons/logo.svg";
import { AnswerButton } from "@/components/AnswerButton";
import { InputField } from "@/components/InputField";
import { Navigator } from "@/components/Navigator";
import { SelectionCircle } from "@/components/SelectionCircle";
import { StartButton } from "@/components/StartButton";
import { useIntroduction } from "@/hooks/useIntroduction";

interface IntroductionPageProps {
  onNext: () => void;
}

const IntroductionPage = ({ onNext }: IntroductionPageProps) => {
  const { step, setStep, introData, setIntroData } = useIntroduction();

  const {
    agreeAll,
    agreePrivacy,
    event_promotion_agree,
    name,
    partnerName,
    phoneNumber,
    partnerPhoneNumber,
    relationshipDuration,
    gender,
  } = introData;

  // 전화번호 입력 핸들러 (숫자만 허용)
  const handlePhoneNumberChange = (fieldName: string, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    setIntroData({ ...introData, phoneNumber: numericValue });
  };

  const handlePartnerPhoneNumberChange = (fieldName: string, value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    setIntroData({ ...introData, partnerPhoneNumber: numericValue });
  };

  // 전화번호 유효성 검사 (11자리 숫자)
  const isValidPhoneNumber = (phone: string) => {
    return phone && phone.length === 11 && /^[0-9]{11}$/.test(phone);
  };

  // 각 step별 완료 여부
  const isStep1Complete = !!(
    name &&
    partnerName &&
    isValidPhoneNumber(phoneNumber) &&
    isValidPhoneNumber(partnerPhoneNumber)
  );
  const isStep2Complete = !!agreePrivacy;
  const isStep3Complete = !!(relationshipDuration && gender);

  // input refs
  const nameRef = useRef<HTMLInputElement>(null);
  const partnerNameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const partnerPhoneNumberRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleNextFromStep1 = () => {
    if (!name) {
      nameRef.current?.focus();
      toast.error("이름을 입력해주세요.");
      return;
    }
    if (!partnerName) {
      partnerNameRef.current?.focus();
      toast.error("파트너 이름을 입력해주세요.");
      return;
    }
    if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
      phoneNumberRef.current?.focus();
      if (!phoneNumber) {
        toast.error("전화번호를 입력해주세요.");
      } else {
        toast.error("전화번호를 11자리 숫자로 정확히 입력해주세요.");
      }
      return;
    }
    if (!partnerPhoneNumber || !isValidPhoneNumber(partnerPhoneNumber)) {
      partnerPhoneNumberRef.current?.focus();
      if (!partnerPhoneNumber) {
        toast.error("파트너 전화번호를 입력해주세요.");
      } else {
        toast.error("파트너 전화번호를 11자리 숫자로 정확히 입력해주세요.");
      }
      return;
    }
    handleNext();
  };

  const handleNextFromStep2 = () => {
    if (!agreePrivacy) {
      toast.error("개인정보 처리방침 동의를 해주세요.");
      return;
    }
    handleNext();
  };

  const handleNextFromStep3 = () => {
    if (!relationshipDuration) {
      toast.error("연애 기간을 선택해주세요.");
      return;
    }
    if (!gender) {
      toast.error("성별을 선택해주세요.");
      return;
    }
    onNext();
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleAgreeAll = () => {
    const newValue = !agreeAll;
    setIntroData({
      ...introData,
      agreeAll: newValue,
      agreePrivacy: newValue,
      event_promotion_agree: newValue,
    });
  };

  const handleAgreePrivacy = () => {
    const newValue = !agreePrivacy;
    const newAgreeAll = newValue && event_promotion_agree;
    setIntroData({
      ...introData,
      agreePrivacy: newValue,
      agreeAll: newAgreeAll,
    });
  };

  const handleAgreeEventPromotion = () => {
    const newValue = !event_promotion_agree;
    const newAgreeAll = newValue && agreePrivacy;
    setIntroData({
      ...introData,
      event_promotion_agree: newValue,
      agreeAll: newAgreeAll,
    });
  };

  return (
    <div className="flex h-dvh flex-col">
      <Image
        className="mx-auto pt-8 pb-5 xl:mt-20"
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
      />
      {step === 0 && (
        <Fragment>
          <main className="wrapper flex flex-col gap-10 py-5">
            <h1 className="text-center text-3xl font-medium text-[#111111] xl:my-10">
              꽃길 리포트 설문
            </h1>
            <article className="flex flex-col gap-4 leading-snug whitespace-pre-wrap text-[#111111]">
              <p>안녕하세요! 😊</p>
              <p>
                [신혼생활 시뮬레이션 스토리북] 서비스에 참여해 주셔서
                감사합니다.
              </p>
              <p>
                이 설문은 총 120문항으로, 두 분의 성향을 분석하기 위한 기초
                자료로 활용됩니다. 이 설문을 바탕으로 상호작용 형태와 결혼
                생활을 예측해 리포트로 제공합니다. 설문은 본인과 파트너, 두
                사람이 각각 참여하는 형태입니다.
                <span className="font-medium">
                  (각각 참여하기 위해, 이 링크를 파트너에게도 전달해 주시면
                  됩니다!)
                </span>
              </p>
              <p>설문은 크게 두 가지로 이루어져 있습니다.</p>
              <p>✔️ 나에 대한 질문 {"\n"}✔️ 파트너에 대한 질문</p>
              <p>
                각 문항마다 나 혹은 파트너의 성향을 가장 잘 나타내는 선택지를
                골라주세요. 가볍게 마음이 가는대로 선택해 주시면 됩니다.
              </p>
              <p>
                설문을 모두 완료하시면, 결과 리포트는 적어주신 전화번호로 URL
                형태로 발송됩니다. (평일 기준 약 48시간 소요)
              </p>
              <p>그럼, 시작해 볼까요?</p>
            </article>
          </main>
          <div className="wrapper flex h-full flex-col justify-end py-10">
            <div className="flex justify-end">
              <StartButton onClick={handleNext} />
            </div>
          </div>
        </Fragment>
      )}
      {step === 1 && (
        <div className="flex flex-1 flex-col">
          <main className="wrapper flex flex-col gap-6 py-5 text-[#111111]">
            <section className="flex flex-col gap-4">
              <label className="leading-snug font-medium">
                이름을 적어주세요<span className="text-[#FF6666]">*</span>
              </label>
              <InputField
                ref={nameRef}
                name="name"
                value={name}
                onChange={(fieldName, value) =>
                  setIntroData({ ...introData, name: value })
                }
                placeholder="본인의 이름(별칭) 입력"
              />
            </section>
            <section className="flex flex-col gap-4">
              <label className="leading-snug font-medium">
                내 파트너의 이름을 적어주세요
                <span className="text-[#FF6666]">*</span>
              </label>
              <InputField
                ref={partnerNameRef}
                name="partnerName"
                value={partnerName}
                onChange={(fieldName, value) =>
                  setIntroData({ ...introData, partnerName: value })
                }
                placeholder="내 파트너의 이름(별칭) 입력"
              />
            </section>
            <section className="flex flex-col gap-4">
              <label className="leading-snug font-medium">
                내 휴대전화 번호를 적어주세요
                <span className="text-[#FF6666]">*</span>
              </label>
              <InputField
                ref={phoneNumberRef}
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="내 휴대전화 번호 11자리 입력(숫자만)"
                type="tel"
              />
            </section>
            <section className="flex flex-col gap-4">
              <label className="leading-snug font-medium">
                내 파트너의 휴대전화 번호를 적어주세요
                <span className="text-[#FF6666]">*</span>
              </label>
              <InputField
                ref={partnerPhoneNumberRef}
                name="partnerPhoneNumber"
                value={partnerPhoneNumber}
                onChange={handlePartnerPhoneNumberChange}
                placeholder="파트너의 휴대전화 번호 11자리 입력(숫자만)"
                type="tel"
              />
            </section>
            <p className="pt-1 text-sm leading-snug">
              ※이름과 휴대전화 번호를 정확히 입력하셔야 데이터 매칭이
              가능합니다.
            </p>
          </main>
          <div className="flex-1" />
          <Navigator
            onNext={handleNextFromStep1}
            onBack={handleBack}
            canProceed={isStep1Complete}
          />
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-1 flex-col">
          <main className="wrapper flex flex-col gap-5 py-5 leading-snug text-[#111111]">
            <h2 className="font-medium">
              개인정보 처리방침 동의<span className="text-[#FF6666]">*</span>
            </h2>
            <p className="text-sm">
              본 설문은 응답자의 성향 분석을 통해 요청하신 보고서를 작성하기
              위한 목적으로 진행됩니다. 설문 참여 과정에서 수집된 개인정보는
              보고서 작성 완료 후 즉시 익명 처리되며, 익명화된 데이터는 향후
              연구 및 AI 학습 목적으로 활용될 수 있습니다.
            </p>
            <section className="flex items-center gap-2.5 border-b border-[#DCDCDC] pb-3">
              <SelectionCircle
                size="sm"
                selected={agreeAll}
                onClick={handleAgreeAll}
              />
              <p className="text-sm font-bold">전체동의(선택사항 포함)</p>
            </section>
            <section className="flex flex-col gap-4.5">
              <div className="flex items-center gap-2.5">
                <SelectionCircle
                  size="sm"
                  selected={agreePrivacy}
                  onClick={handleAgreePrivacy}
                />
                <p className="text-sm">(필수) 개인정보 처리방침 동의</p>
              </div>
              <div className="flex flex-col gap-3 text-sm whitespace-pre-wrap">
                <p>(주)후아는 다음과 같이 개인정보를 수집·이용합니다.</p>
                <div>
                  <p>1. 수집하는 개인정보 항목</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5">
                    <li>이름, 성별, 전화번호</li>
                    <li>
                      설문 응답자가 자발적으로 제공하는 추가 정보 (예: A, B 등
                      응답 항목 내 자율 기재 내용)
                    </li>
                  </ul>
                </div>
                <div>
                  <p>2. 개인정보 수집 및 이용 목적</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5">
                    <li>
                      결혼 시뮬레이션 리포트 작성 및 개인 맞춤형 리포트 제공
                    </li>
                    <li>
                      설문 응답 결과 분석 및 서비스 품질 개선을 위한 연구 활용
                    </li>
                    <li>AI 모델 학습을 위한 비식별화된 데이터 분석</li>
                  </ul>
                </div>
                <div>
                  <p>3. 개인정보 보유 및 이용 기간</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5">
                    <li>
                      개인정보는 수집일로부터 최대 1년간 보관 후, 즉시
                      파기합니다.
                    </li>
                    <li>
                      단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안
                      안전하게 보관합니다.
                    </li>
                  </ul>
                </div>
                <div>
                  <p>4. 동의를 거부할 권리</p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5">
                    <li>
                      귀하는 개인정보 제공에 동의하지 않을 권리가 있습니다.
                    </li>
                    <li>
                      다만, 필수 항목에 동의하지 않을 경우 서비스 제공(결혼
                      시뮬레이션 리포트 작성)이 제한될 수 있습니다.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-4.5">
              <div className="flex items-center gap-2.5">
                <SelectionCircle
                  size="sm"
                  selected={event_promotion_agree}
                  onClick={handleAgreeEventPromotion}
                />
                <p className="text-sm">(선택) 마케팅 정보 수신 동의</p>
              </div>
              <p className="text-sm">
                (주)후아의 서비스, 이벤트, 프로모션 등 마케팅 정보 발송
              </p>
            </section>
          </main>
          <div className="flex-1" />
          <Navigator
            onNext={handleNextFromStep2}
            onBack={handleBack}
            canProceed={isStep2Complete}
          />
        </div>
      )}
      {step === 3 && (
        <div className="flex flex-1 flex-col">
          <main className="wrapper flex flex-col gap-10 py-5 leading-snug text-[#111111]">
            <section className="flex flex-col gap-5">
              <h2 className="font-medium">
                몇 년째 연애중 인가요?<span className="text-[#FF6666]">*</span>
              </h2>
              <div className="flex w-fit flex-col gap-4">
                {[
                  { label: "A", text: "1년 미만", value: 1 },
                  { label: "B", text: "1~2년", value: 2 },
                  { label: "C", text: "3~4년", value: 3 },
                  { label: "D", text: "5~9년", value: 4 },
                  { label: "E", text: "10년 이상", value: 5 },
                ].map((option) => (
                  <AnswerButton
                    key={option.value}
                    label={option.label}
                    text={option.text}
                    color="blue"
                    selected={relationshipDuration === option.value}
                    onClick={() =>
                      setIntroData({
                        ...introData,
                        relationshipDuration: option.value,
                      })
                    }
                  />
                ))}
              </div>
            </section>
            <section className="flex flex-col gap-5">
              <h2 className="font-medium">
                성별을 선택해주세요<span className="text-[#FF6666]">*</span>
              </h2>
              <div className="flex w-fit flex-col gap-4">
                {[
                  {
                    label: "A",
                    text: "여성",
                    value: "female",
                    color: "blue" as const,
                  },
                  {
                    label: "B",
                    text: "남성",
                    value: "male",
                    color: "green" as const,
                  },
                ].map((option) => (
                  <AnswerButton
                    key={option.value}
                    label={option.label}
                    text={option.text}
                    color={option.color}
                    selected={gender === option.value}
                    onClick={() =>
                      setIntroData({ ...introData, gender: option.value })
                    }
                  />
                ))}
              </div>
            </section>
          </main>
          <div className="flex-1" />
          <Navigator
            onNext={handleNextFromStep3}
            onBack={handleBack}
            canProceed={isStep3Complete}
          />
        </div>
      )}
    </div>
  );
};

export default IntroductionPage;
